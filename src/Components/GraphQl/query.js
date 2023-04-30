import { gql } from "@apollo/client";

const GET_COVERPHOTO = gql`
  query MyQuery {
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
