import axios from 'axios';
import { POST_URL } from '../../utils/Config';

/**
 *
 * @param {Object} postData
 * @returns Object
 */
const createPost = async (postData) => {
  const response = await axios.post(POST_URL, postData);
  return response.data;
};

const getPosts = async () => {
  const response = await axios.get(POST_URL);
  return response.data;
};

/**
 *
 * @param {String} id
 * @returns Object
 */
const getPost = async (id) => {
  const response = await axios.get(`${POST_URL}/${id}`);
  return response.data;
};

/**
 *
 * @param {String} id
 * @returns Object
 */
const updatePost = async (id) => {
  const response = await axios.put(`${POST_URL}/${id}`);
  return response.data;
};

/**
 *
 * @param {String} id
 * @returns Object
 */
const deletePost = async (id) => {
  const response = await axios.delete(`${POST_URL}/${id}`);
  return response.data;
};

const PostAPI = { createPost, getPosts, getPost, updatePost, deletePost };

export default PostAPI;
