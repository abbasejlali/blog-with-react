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
      like
      coverphoto {
        url
      }
      comments {
        id
        name
        avatar {
          url
        }
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
    }
  }
`;

const GET_POSTTOBLOG = gql`
  query postblog($slug: String!) {
    post(where: { slug: $slug }) {
      title
      category
      date
      coverphoto {
        url
      }
      author {
        name
        slug
        image {
          url
        }
        field
        describtion
      }
      content {
        html
      }
      comments {
        id
        name
        date
        avatar {
          url
        }
        text
      }
    }
  }
`;

const GET_USERS = gql`
  query {
    persons {
      id
      userName
      email
      password
    }
  }
`;

const GET_USER = gql`
  query getuser($email: String!) {
    person(where: { email: $email }) {
      id
      userName
      email
      password
      slugPersone
    }
  }
`;

const GET_USER_DASHBOARD = gql`
  query get_user_dashboard($email: String!) {
    person(where: { email: $email }) {
      email
      userName
      saveposts {
        slugPostSaved
      }
      followAuthors {
        slugAuthor
      }
    }
  }
`;

const GET_LIKES_for_user = gql`
  query getsavelikes($emailPersonLike_Betting: String!) {
    saveLikes(where: { emailPersonLike: $emailPersonLike_Betting }) {
      slugPostLiked
    }
  }
`;

const GET_POST_TO_LIKE = gql`
  query get_post_to_like($slug_post_to_like: String!) {
    post(where: { slug: $slug_post_to_like }) {
      like
    }
  }
`;

const GET_POSTS_FOR_USER = gql`
  query getsavelikes($emailPersonPost_Betting: String!) {
    saveposts(where: { emailPersonPost: $emailPersonPost_Betting }) {
      slugPostSaved
    }
  }
`;

export {
  GET_COVERPHOTO,
  GET_POSTSCARDSHOME,
  GET_COMMENTSHOME,
  GET_POSTS,
  GET_POSTTOBLOG,
  GET_USERS,
  GET_USER,
  GET_USER_DASHBOARD,
  GET_LIKES_for_user,
  GET_POST_TO_LIKE,
  GET_POSTS_FOR_USER,
};
