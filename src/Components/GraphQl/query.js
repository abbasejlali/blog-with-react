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

export { GET_COVERPHOTO };
