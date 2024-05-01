
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function mypost(){
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {posts.map((post) => (
                  <div key={post._id} className='flex flex-wrap gap-3 sm:w-full'>
                    <PostCard post={post} />
                  </div>
                ))}
              </div>
};