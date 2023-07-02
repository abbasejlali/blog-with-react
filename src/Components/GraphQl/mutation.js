import { gql } from "@apollo/client";

const SEND_COMMENT = gql`
  mutation sendcomment(
    $name: String!
    $email: String!
    $text: String!
    $slug: String!
    $date: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        post: { connect: { slug: $slug } }
        date: $date
      }
    ) {
      id
    }
  }
`;

const SAVE_LIKE = gql`
  mutation savelike($slugPostLiked: String!, $emailPersonLike: String!) {
    createSaveLike(
      data: { slugPostLiked: $slugPostLiked, emailPersonLike: $emailPersonLike }
    ) {
      id
    }
  }
`;

export { SEND_COMMENT, SAVE_LIKE };
