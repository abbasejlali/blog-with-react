import { gql } from "@apollo/client";

const GET_AUTHOR = gql`
  query {
    authors {
      id
      name
    }
  }
`;

export { GET_AUTHOR };
