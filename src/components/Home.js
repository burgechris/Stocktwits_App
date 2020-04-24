import React, { useState } from 'react';
import { getTweets } from '../../API';
import TweetCard from './TweetCard';

export default function Home() {
  // const [tweets, setTweets] = useState([]);

  return (
    <div>
      <TweetCard />
    </div>
  )
}