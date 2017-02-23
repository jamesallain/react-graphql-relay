export function constructURL(location, currentPath, pattern, params) {
  let newCPath = '';
  let newFPath = '';
  const fullPath = location.pathname;

  newCPath = pattern;
  Object.keys(params).map((k) => {
    newCPath = newCPath.replace(`:${k}`, params[k]);
  });

  newFPath = fullPath.replace(currentPath, newCPath);

  return newFPath;
}
