import React, { useState } from "react";
import Search from './components/Search';
import TweetList from './components/TweetList';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);

  const populateMessages = results => {
    setTweets(results);
  };

  return (
    <div>
      <Search populateMessages={populateMessages} />
      {<TweetList tweets={tweets} />}
    </div>
  );
}

export default App;
