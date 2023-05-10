import React, { useState } from 'react';
import { FaArrowAltCircleLeft, FaPlusCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createPost } from '../features/post/PostSlice';

import Button from '../components/Button';
import Spinner from '../components/Spinner';
import addImg from '../assets/addAvatar.png';

function AddPost() {
  const [imageFile, setImageFile] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.post);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postData = {
      image: imageFile || imageUrl,
      title,
      category,
      content,
      author: 'Wenceslas Angelo',
    };
    dispatch(createPost(postData));
  };

  return (
    <div className="max-w-xl mx-auto mt-2 p-2">
      <form className="flex flex-col" onSubmit={(e) => handleSubmit(e)}>
        <label
          htmlFor="file"
          className="cursor-pointer flex text-xl items-center"
        >
          <span>Add image from file</span>
          <img src={addImg} alt="add_image_post" className="w-15" />
        </label>
        <input
          className="hidden"
          type="file"
          name="file"
          id="file"
          value={imageFile}
          onChange={(e) => setImageFile(e.target.value)}
        />
        <input
          type="text"
          placeholder="add image from URL..."
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border border-[#181818] my-2 text-xl p-2 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border border-[#181818] my-2 text-xl p-2 rounded-md outline-none"
        />
        <input
          type="text"
          placeholder="Category..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          className="border border-[#181818] my-2 text-xl p-2 rounded-md outline-none"
        />
        <textarea
          placeholder="Content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="border border-[#181818] my-2 text-xl p-2 rounded-md outline-none h-32 "
        >
          error
        </textarea>
        <div className="flex justify-between items-center w-">
          <div>
            {isLoading ? (
              <Spinner size={20} />
            ) : (
              <Button icon={<FaPlusCircle />} text="Add post" isSubmit />
            )}
          </div>
          <Link to="/">
            <Button icon={<FaArrowAltCircleLeft />} text="Home" />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default AddPost;
