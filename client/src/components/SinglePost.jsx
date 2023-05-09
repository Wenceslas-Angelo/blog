import React from 'react';
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';
import defaultImage from '../assets/Untitled.jpg';

function SinglePost() {
  return (
    <div>
      <div className="relative">
        <img src={defaultImage} alt="defaultImage" className="w-full" />

        <div className="absolute bottom-0 left-0 w-full bg-transparent/10 backdrop-blur text-white flex justify-between p-2">
          <div>
            <h2 className="text-xl font-semibold">Wenceslas Angelo</h2>
            <p className="text-lg">20 Jan 2023</p>
          </div>
          <p className="text-xl">Category</p>
        </div>
      </div>

      <div className="p-2">
        <h2 className="text-2xl font-bold underline">
          Lorem ipsum dolor sit amet.
        </h2>
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

export default SinglePost;
