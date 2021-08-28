export default function debounce(callback, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer, delay);
    timer = setTimeout(() => {
      callback(...args);
      timer = null;
    }, delay);
  };
}
