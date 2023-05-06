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

const GET_COMMENTSHOME = gql`
  query MyQuery {
    posts {
      id
      title
      slug
      comments {
        name
        text
      }
    }
  }
`;
export { GET_COVERPHOTO, GET_POSTSCARDSHOME, GET_COMMENTSHOME };
