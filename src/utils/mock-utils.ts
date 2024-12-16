export const delayFakeData = <T>(fakeData: T, delay?: number): Promise<T> => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(fakeData);
    }, delay || 0);
  });
};
