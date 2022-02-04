const createNode = (value) => ({value, left: null, right: null});

const createBST = (rootValue) => {
  let root = createNode(rootValue);

  const insert = (value) => {
    const newNode = createNode(value);

    root.right = newNode;
  };

  return {
    get root() {
      return root;
    },
    insert,
  }
};
