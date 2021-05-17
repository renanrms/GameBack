export const serverUrl = 'http://localhost:3001'

export const makeUrl = (...fragments) => {
  const args = Array.prototype.slice.call(fragments, 0);
  return args.reduce((url, part) => (url.concat(part)));
};
