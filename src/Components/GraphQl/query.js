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
  query {
    comments {
      name
      text
      id
      avatar {
        url
      }
    }
  }
`;
const GET_POSTS = gql`
  query {
    posts {
      id
      title
      slug
      coverphoto {
        url
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
export { GET_COVERPHOTO, GET_POSTSCARDSHOME, GET_COMMENTSHOME, GET_POSTS };
