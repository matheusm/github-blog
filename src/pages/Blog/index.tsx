import { useEffect, useState } from "react";
import { ProfileInfo } from "./components/ProfileInfo";
import { SearchForm } from "./components/SearchForm";
import { ArticleCard, ArticlesContainer } from "./styled";
import { api } from "../../lib/axios";

export interface IPost {
  title: string;
  body: string;
  created_at: string;
  number: string;
}

export function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [posts, setPosts] = useState<IPost[]>([] as IPost[]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const response = await api.get(
          `search/issues?q=${searchQuery}+repo:rocketseat-education/reactjs-github-blog-challenge`
        );
        setPosts(response.data.items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, [searchQuery]);

  if(loading) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <ProfileInfo />

      <SearchForm setSearchQuery={setSearchQuery} />

      <ArticlesContainer>
        {posts.map(post => (
          <ArticleCard href={`/${post.number}`}>
            <h3>{post.title}</h3>

            <p>{post.body}</p>
          </ArticleCard>
        ))}
      </ArticlesContainer>
    </>
  );
}