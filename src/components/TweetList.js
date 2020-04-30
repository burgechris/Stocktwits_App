import React, { useEffect } from 'react';
import List from "@material-ui/core/List";
import TweetItem from './TweetItem';

export default function TweetList(props) {
  const { tweets } = props;

  useEffect(() => {
    TweetMap(tweets);
    return () => {}
  })

  const TweetMap = () => {
    if (tweets && tweets.length > 0) {
      return tweets.map((message, index) => {
        let { body, created_at, symbol } = message;
        let { avatar_url, username  } = message.user;

        return (
          <TweetItem 
            key={index}
            name={username}
            timestamp={created_at}
            avatar={avatar_url}
            tweet={body}
            symbol={symbol}
          />
        );
      });
    } else 
      return (
        <p>Search for the latest stock tweets!!</p>
      );
  };

  console.log(TweetMap(tweets))
  console.log(<TweetItem/>)

  return (
    <div>
      {tweets ? (
        <List>
          <TweetItem />
        </List>
      ) : (
        <p>No tweets found!</p>
      )}
    </div>
  );
}