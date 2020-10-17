import { Observable, from, timer } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { v4 as uuidv4 } from 'uuid';

export interface Tweet {
  id: string;
  text: string;
  videoPath?: string;
}

export const getTweets = (): Observable<Tweet[]> => {
  return timer(0, 15000).pipe(
    mergeMap(() =>
      from(fetch('https://r-t-generator.herokuapp.com/').then((response) => response.json() as Promise<Tweet[]>)),
    ),
    filter((tweets) => !!tweets.length),
    map((tweets: Tweet[]): Tweet[] => tweets.map((tweet) => ({ ...tweet, id: uuidv4() }))),
  );
};
