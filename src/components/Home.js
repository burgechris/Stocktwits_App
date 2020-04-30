import React, { useState } from "react";
import Search from './Search';
import TweetList from './TweetList';

export default function Home() {
  const [tweets, setTweets] = useState([]);

  const populateMessages = results => {
    setTweets(results);
  };

  return (
    <div>
        <Search populateMessages={populateMessages}/>
       {<TweetList tweets={tweets} />}
    </div>
  )
}

{/* <div>
  {tweets ?
    tweets.map((message, index) =>
      <p key={index}>{message.body}</p>
    ) : null}
</div> */}