import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

import Posts from '../features/post/Posts';

function Home() {
  return (
    <div>
      <Posts />

      <button
        type="button"
        className="flex items-center py-2 px-4 bg-[#181818] text-white text-xl rounded-lg my-2 mx-auto font-semibold"
      >
        <FaArrowDown className="mr-2" />
        Load more
      </button>
    </div>
  );
}

export default Home;
