import { gql } from "@apollo/client";

const GET_COVERPHOTO = gql`
  query {
    posts {
      title
      id
      slug
      coverphoto {
        url
      }
    }
  }
`;
const GET_POSTSCARDSHOME = gql`
  query Postscard($category: String!) {
    posts(where: { category: $category }) {
      id
      title
      date
      slug
      category
      coverphoto {
        url
      }
      comments {
        id
        name
      }
      author {
        name
        image {
          url
        }
      }
    }
  }
`;
export { GET_COVERPHOTO, GET_POSTSCARDSHOME };
