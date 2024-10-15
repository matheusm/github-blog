import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../lib/axios";
import Markdown from "react-markdown";
import { IPost } from "../Blog";
import { PostContent } from "./styled";
import remarkGfm from "remark-gfm";

export function Post() {
  const [post, setPost] = useState(null as IPost | null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      try {
        setLoading(true);
        const response = await api.get(
          `/repos/rocketseat-education/reactjs-github-blog-challenge/issues/${id}`
        );
        setPost(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);


  if(loading) {
    return <p>Carregando...</p>
  }
  
  return (
    <div>
      <h1>Post</h1>

      <PostContent>
        <Markdown
          remarkPlugins={[remarkGfm]}
          children={post?.body ?? ""}
        />
      </PostContent>
    </div>
  );
}