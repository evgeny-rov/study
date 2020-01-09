/*
export const touch = (filepath) => {
    return fs.readFile(filepath, 'utf-8')
    .then((data) => {
      fs.writeFile(filepath, data)
    })
    .catch((e) => console.log(e))
    .then(() => {
      fs.writeFile(filepath, '')
    })
  };
  
  export const touch = (filepath) => {
    return fs.access(filepath)
    .catch(() => {
      fs.writeFile(filepath, '')
    })
  };
  */

  export const getTypes = (array) => {
    let result = [];
    const promise = array.reduce((acc, path) => acc.then(() => fs.stat(path)
      .then((stat) => {
        return stat.isDirectory() ? result = [...result, 'directory'] : result = [...result, 'file']})
      .catch(() => {
        return result = [...result, null];
      })
    ), Promise.resolve());
    return promise;
  };
  
  
  ///// teacher's solution
  const getTypeName = (stat) => (stat.isDirectory() ? 'directory' : 'file');
  
  export const getTypes = (filesPath) => {
    const result = [];
  
    const processPath = (filepath) => fs.stat(filepath)
      .then((data) => result.push(getTypeName(data)))
      .catch(() => result.push(null));
  
    const resultPromise = filesPath.reduce(
      (promise, filepath) => promise.then(() => processPath(filepath)),
      Promise.resolve(),
    );
    return resultPromise.then(() => result);
  };