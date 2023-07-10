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

const DEL_SAVE_LIKE = gql`
  mutation delete_like(
    $slugPostLiked_delete: String!
    $emailPersonLike_delete: String!
  ) {
    deleteManySaveLikesConnection(
      where: {
        slugPostLiked: $slugPostLiked_delete
        emailPersonLike: $emailPersonLike_delete
      }
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

const SAVELIKE_PUBLISHED = gql`
  mutation published_like($email_published: String!, $slug_published: String!) {
    publishManySaveLikesConnection(
      to: PUBLISHED
      where: {
        emailPersonLike: $email_published
        slugPostLiked: $slug_published
      }
    ) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

const UPDATEING_LIKE_POST = gql`
  mutation update_like($quantity_like: String!, $slug_post: String!) {
    updatePost(data: { like: $quantity_like }, where: { slug: $slug_post }) {
      id
    }
  }
`;

export {
  SEND_COMMENT,
  SAVE_LIKE,
  DEL_SAVE_LIKE,
  SAVELIKE_PUBLISHED,
  UPDATEING_LIKE_POST,
};
