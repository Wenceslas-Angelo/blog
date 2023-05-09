/* eslint-disable no-promise-executor-return */
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve({ data: amount }), 500);
    return timer;
  });
}
