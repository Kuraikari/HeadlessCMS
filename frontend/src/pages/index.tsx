import { gql, useQuery, ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const GET_POSTS = gql`
  query GetPosts {
    getPosts {
      id
      title
    }
  }
`;

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>
      {data.getPosts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
