import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

function SinglePost({ image, title, category, author }) {
  return (
    <div>
      <div className="relative">
        <img src={image} alt="defaultImage" className="w-full" />

        <div className="absolute bottom-0 left-0 w-full bg-transparent/10 backdrop-blur text-white flex justify-between p-2">
          <div>
            <h2 className="text-xl font-semibold">{author}</h2>
            <p className="text-lg">20 Jan 2023</p>
          </div>
          <p className="text-xl">{category}</p>
        </div>
      </div>

      <div className="p-2">
        <h2 className="text-2xl font-bold underline">{title}</h2>
        <p className="py-2 text-gray-500 text-lg">
          Overview : Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Esse, qui quidem. Magni, aut? Cum maiores voluptatum sapiente
          inventore explicabo ullam?
        </p>
        <Link to="/" className="flex items-center gap-2 text-xl">
          Read post
          <FaExternalLinkAlt fontSize={20} />
        </Link>
      </div>
    </div>
  );
}

SinglePost.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default SinglePost;
