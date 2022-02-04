import { createLinkedList } from './linked_list';

const createStack = () => {
  const source = [];

  return {
    push: (val) => source.push(val),
    pop: () => source.pop(),
    peek: () => source[source.length - 1],
    is_empty: () => source.length === 0
  };
};

const createLinkedListBasedStack = () => {
  const source = createLinkedList();

  return {
    push: (val) => source.prepend(createNode(val)),
    pop: () => {
      const popValue = source.head.value;
      source.removeAt(0);
      return popValue;
    },
    peek: () => source.head?.value || null,
    is_empty: () => source.size === 0
  };
};
