"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomePage;
const jsx_runtime_1 = require("react/jsx-runtime");
const client_1 = require("@apollo/client");
const GET_POSTS = (0, client_1.gql) `
  query GetPosts {
    getPosts {
      id
      title
    }
  }
`;
function HomePage() {
    const { loading, error, data } = (0, client_1.useQuery)(GET_POSTS);
    if (loading)
        return (0, jsx_runtime_1.jsx)("p", { children: "Loading..." });
    if (error)
        return (0, jsx_runtime_1.jsxs)("p", { children: ["Error: ", error.message] });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { children: "Posts" }), data.getPosts.map((post) => ((0, jsx_runtime_1.jsx)("div", { children: post.title }, post.id)))] }));
}
