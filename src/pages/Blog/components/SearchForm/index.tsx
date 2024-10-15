import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchformInputs = z.infer<typeof searchFormSchema>

export function SearchForm({ setSearchQuery }: { setSearchQuery: (query: string) => void }) {

  const {
    register,
    handleSubmit,
    formState: {
      isSubmitting
    }
  } = useForm<SearchformInputs>({
    resolver: zodResolver(searchFormSchema)
  })

  function handleSearchTransaction(data: SearchformInputs) {
    setSearchQuery(data.query)
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransaction)}>
      <input
        type="text"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}