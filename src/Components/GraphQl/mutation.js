import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendcomment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
    $date: String!
    $fileName: String!
    $handel: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        post: { connect: { slug: $slug } }
        date: $date
        avatar: { create: { handle: $handel, fileName: $fileName } }
      }
    ) {
      id
    }
  }
`;

export { SEND_COMMENT };
