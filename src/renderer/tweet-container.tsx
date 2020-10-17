import React, { FC } from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';

import { TweetBox } from './tweet-box';
import { Tweet } from './tweet-subject';

interface TweetContainerProps {
  tweets: Tweet[];
}

export const TweetContainer: FC<TweetContainerProps> = ({ tweets }) => {
  if (!tweets.length) {
    return <span>Waiting for new tweets...</span>;
  }

  return (
    <Accordion className="tweet-container">
      {tweets.map((tweet) => (
        <TweetBox tweet={tweet} key={tweet.id}></TweetBox>
      ))}
    </Accordion>
  );
};
