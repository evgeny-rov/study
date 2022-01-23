// stack implementation
const createStack = () => {
  const source = [];

  return {
    push: (val) => source.push(val),
    pop: () => void source.pop(),
    peek: () => source[source.length - 1],
    is_empty: () => source.length === 0,
  };
}


const createLinkedList = () => {
  const createNode = (value) => ({next: null, value});

  let size = 0;
  let head = null;

  return {
    prepend: (value) => {
      const newNode = createNode(value);
      newNode.next = head;
      head = newNode;
      size++;
    },
    getList: () => head,
  };
}

