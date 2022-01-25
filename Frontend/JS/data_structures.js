import "./styles.css";
console.clear();

// stack implementation
const createStack = () => {
  const source = [];

  return {
    push: (val) => source.push(val),
    pop: () => source.pop(),
    peek: () => source[source.length - 1],
    is_empty: () => source.length === 0
  };
};

// linked list implementation, zero indexed
const createNode = (value) => ({ next: null, value });

const createLinkedList = (node = null) => {
  let size = node !== null ? 1 : 0;
  let head = node;

  return {
    get head() {
      return head;
    },
    get size() {
      return size;
    },
    prepend: (newNode) => {
      newNode.next = head;
      head = newNode;
      size++;
    },
    append: (newNode) => {
      if (head === null) {
        head = newNode;
      } else {
        let currentNode = head;

        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }

        currentNode.next = newNode;
      }
      size++;
    },
    insertAt: (position, newNode) => {
      if (position < 0 || position > size) return;

      if (position === 0) {
        newNode.next = head;
        head = newNode;
      } else {
        let nodeBefore = head;

        for (let i = 0; i < position - 1; i++) {
          nodeBefore = nodeBefore.next;
        }

        const nodeAt = nodeBefore.next;
        newNode.next = nodeAt;
        nodeBefore.next = newNode;
      }
      size++;
    },
    removeAt: (position) => {
      if (size === 0 || position >= size) return;

      if (position === 0) {
        head = head.next;
      } else {
        let nodeBefore = head;

        for (let i = 0; i < position - 1; i++) {
          nodeBefore = nodeBefore.next;
        }

        const nodeAt = nodeBefore.next;
        nodeBefore.next = nodeAt.next;
      }
      size--;
    },
    getMiddle: () => {
      const roughPosition = Math.ceil(size / 2);
      const position = size % 2 === 0 ? roughPosition + 1 : roughPosition;
      let currentNode = head;

      for (let i = 0; i < position - 1; i++) {
        currentNode = currentNode.next;
      }

      return currentNode;
    },
    print: () => {
      let currentNode = head;
      while (currentNode !== null) {
        console.log(currentNode.value);
        currentNode = currentNode.next;
      }
    }
  };
};

// stack based on linked list
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
