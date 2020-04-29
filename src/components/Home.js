import React, { useEffect, useState } from "react";
import Search from './Search';

export default function Home() {
  const [tweets, setTweets] = useState([]);

  const populateMessages = results => {
    setTweets(results);
  };

  return (
    <div>
      <div>
        <Search populateMessages={populateMessages}/>
      </div>
      <div>
        {tweets ?
          tweets.map((message, index) =>
            <p key={index}>{message.body}</p>
          ) : null}
      </div>
    </div>
  )
}