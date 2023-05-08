import Post from '../models/Post.js';

const createPost = (req, res) => {
  const post = new Post({
    title: req.title,
    content: req.content,
    author: req.author,
    category: req.category,
  });

  post
    .save()
    .then(() => res.status(201).json({ message: 'post created successfully!' }))
    .catch((error) => res.status(400).json({ error }));
};

const getAllPost = (req, res) => {
  Post.find()
    .then((posts) => res.status(200).json({ posts }))
    .catch((error) => res.status(400).json({ error }));
};

const getOnePost = (req, res) => {
  Post.findOne({ _id: req.id })
    .then((post) => res.status(200).json({ post }))
    .catch((error) => res.status(400).json({ error }));
};

const updatePost = (req, res) => {
  const post = new Post({
    _id: req.id,
    title: req.title,
    content: req.content,
    author: req.author,
    category: req.category,
  });

  Post.updateOne({ _id: req.id }, post)
    .then(() => res.status(201).json({ message: 'post updated successfully!' }))
    .catch((error) => res.status(400).json({ error }));
};

const deletePost = (req, res) => {
  Post.deleteOne({ _id: req.id })
    .then(() => res.status(200).json({ message: 'post deleted successfully!' }))
    .catch((error) => res.status(400).json({ error }));
};

const postCtrl = {
  createPost,
  getAllPost,
  getOnePost,
  updatePost,
  deletePost,
};

export default postCtrl;
