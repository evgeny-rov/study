const createNode = (value) => ({ value, left: null, right: null });

const createBST = (initialRootValue) => {
  let root = initialRootValue ? createNode(initialRootValue) : null;

  const _findInorderSuccessor = (node) => {
    const iter = (currentNode, history) => {
      if (currentNode.left === null) {
        return { successor: currentNode, history };
      } else {
        return iter(currentNode.left, {
          fromNode: currentNode,
          toPath: "left"
        });
      }
    };

    return iter(node.right, { fromNode: node, toPath: "right" });
  };

  const search = (value, currentNode, history) => {
    if (currentNode === null) {
      return { result: null, history };
    } else if (currentNode.value === value) {
      return { result: currentNode, history };
    } else if (value > currentNode.value) {
      return search(value, currentNode.right, {
        fromNode: currentNode,
        toPath: "right"
      });
    } else if (value < currentNode.value) {
      return search(value, currentNode.left, {
        fromNode: currentNode,
        toPath: "left"
      });
    }
  };

  const insert = (value) => {
    const newNode = createNode(value);

    if (!root) {
      root = newNode;
    }

    const { result, history } = search(value, root);

    if (result !== null) {
      return false;
    } else {
      const { fromNode, toPath } = history;
      fromNode[toPath] = newNode;
      return true;
    }
  };

  const remove = (value) => {
    if (root === null) return false;
    if (value === root.value) return (root = null);

    const { result: removingNode, history: removingNodeHistory } = search(
      value,
      root
    );

    if (removingNode === null) return false;

    const { fromNode, toPath } = removingNodeHistory;
    const hasLeftChild = removingNode.left !== null;
    const hasRightChild = removingNode.right !== null;

    if (!hasLeftChild && !hasRightChild) {
      fromNode[toPath] = null;
    } else if (
      (hasLeftChild && !hasRightChild) ||
      (hasRightChild && !hasLeftChild)
    ) {
      fromNode[toPath] = hasLeftChild ? removingNode.left : removingNode.right;
    } else {
      const { successor, history } = _findInorderSuccessor(removingNode);
      removingNode.value = successor.value;
      history.fromNode[history.toPath] = successor.right;
    }

    return true;
  };

  return {
    get root() {
      return root;
    },
    insert,
    search: (value) => search(value, root).result,
    remove
  };
};

export { createBST };
