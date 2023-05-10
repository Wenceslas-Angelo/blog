import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

import Button from '../components/Button';
import Posts from '../features/post/Posts';

function Home() {
  return (
    <div>
      <Posts />
      <Button icon={<FaArrowDown />} text="Load more" />
    </div>
  );
}

export default Home;
