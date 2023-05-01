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

const GET_CATEGORY = gql`
  query {
    posts {
      category
    }
  }
`;

export { GET_COVERPHOTO, GET_CATEGORY };
