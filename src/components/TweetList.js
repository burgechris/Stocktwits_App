import React, { useEffect } from 'react';
import List from "@material-ui/core/List";
import TweetItem from './TweetItem';

export default function TweetList(props) {
  const { tweets } = props;

  return (
    <div>
      {tweets ? 
          tweets.map((tweet, index) =>
        <List>
          <TweetItem 
            key={index}
            avatar={tweet.user.avatar_url}
            name={tweet.user.username}
            timestamp={tweet.created_at}
            tweet={tweet.body}
          />
        </List>
      ) : 
        <p>No tweets found!</p>
      }
    </div>
  );
}