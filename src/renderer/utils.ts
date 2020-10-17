import uLS from 'react-use/lib/useLocalStorage';

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noOp = (): void => {};
export type Consumer<T> = (arg: T) => void;
export const useLocalStorage = <T>(name: string, initialValue: T): [T, Consumer<T>] => {
  // eslint-disable-next-line prefer-const
  let [value, setValue] = uLS(name, initialValue);
  if (!value) {
    value = initialValue;
  }
  return [value, setValue];
};
