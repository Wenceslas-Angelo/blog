import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, reset } from './PostSlice';
import SinglePost from '../../components/SinglePost';
import Spinner from '../../components/Spinner';

function Posts() {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
    return () => {
      dispatch(reset());
    };
  }, [dispatch]);

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="p-2 m-auto max-w-5xl grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <SinglePost key={post.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Posts;
