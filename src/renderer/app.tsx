import log from 'electron-log';
import React, { FC, Fragment, useEffect } from 'react';

import { Theme, ThemeContext } from './theme-context';
import { ThemeSelector } from './theme-selector';
import { TweetContainer } from './tweet-container';
import { Tweet, getTweets } from './tweet-subject';
import { useLocalStorage } from './utils';

const App: FC = () => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');
  const [tweets, setTweets] = useLocalStorage<Tweet[]>('tweets', []);

  useEffect(() => {
    const subscription = getTweets().subscribe((newTweets) => {
      log.debug(newTweets);
      setTweets([...newTweets, ...tweets]);
    }, log.error);
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <ThemeSelector theme={theme} onThemeChange={setTheme}></ThemeSelector>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <TweetContainer tweets={tweets}></TweetContainer>
      </ThemeContext.Provider>
    </Fragment>
  );
};

export default App;
