import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendcomment(
    $name: String!
    $email: String!
    $text: String!
    $date: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        date: $date
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export { SEND_COMMENT };
