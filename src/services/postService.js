import { postDao } from '../models';

const readPost = async () => {
  const post = await postDao.readPost();
  return post;
};

const createPost = async (postBody) => {
  const post = await postDao.createPost(postBody);
  return post;
};

// const createHashtag = async (postBody) => {
//   const post = await postDao.createHashtag(postBody);
//   return post;
// };

const updatePost = async (postBody) => {
  const post = await postDao.updatePost(postBody);
  return post;
};

const deletePost = async (postBody) => {
  const post = await postDao.deletePost(postBody);
  return post;
};

export default {
  readPost,
  createPost,
  updatePost,
  deletePost,
  // createHashtag,
};