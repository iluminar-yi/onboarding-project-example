import React, { FC, useContext } from 'react';
import Accordion from 'react-bootstrap/esm/Accordion';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/esm/Card';

import { ThemeContext } from './theme-context';
import { Tweet } from './tweet-subject';

interface TweetBoxProps {
  tweet: Tweet;
}

export const TweetBox: FC<TweetBoxProps> = ({ tweet }) => {
  const { theme } = useContext(ThemeContext);
  const { id, text, videoPath } = tweet;
  const textParts = text.split(' ');

  return (
    <Card key={id}>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey={id}>
          {textParts.slice(0, 15).join(' ')}
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={id}>
        <Card.Body>
          <div className={`themed ${theme}`}>{textParts.slice(15).join(' ')}</div>
          {videoPath && <video src={`https://r-t-generator.herokuapp.com/${videoPath}`} controls></video>}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
