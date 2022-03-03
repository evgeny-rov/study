// hash table implementation
// collisions resolved by coalesced hashing

const hash = (keyMaterial) => {
  const key = keyMaterial.toString();
  let hash = 0;

  for (let i = 0; i < key.length; i++) {
    hash = (hash << 5) - hash + key.charCodeAt(i);
  }

  return Math.abs(hash);
};

const createHashTable = () => {
  const MAX_LOAD_FACTOR = 0.68;
  let source = Array(313);
  let size = 0;

  const getHash = (key, modFactor = source.length) => {
    return hash(key) % modFactor;
  };

  const getLoadFactor = () => size / source.length;

  const getLastEmptyAddress = (table) => {
    for (let i = table.length - 1; i > 0; i--) {
      if (table[i] === undefined) return i;
    }

    return null;
  };

  const getFreeNextPointerNode = (table, idx) => {
    if (table[idx].next === null) {
      return idx;
    } else {
      return getFreeNextPointerNode(table, table[idx].next);
    }
  };

  const findNodeInChain = (hashKey, key, prev = null) => {
    if (hashKey === null) {
      return null;
    } else if (source[hashKey].key === key) {
      return { idx: hashKey, prev, next: source[hashKey].next };
    } else {
      return findNodeInChain(source[hashKey].next, key, hashKey);
    }
  };

  const insert = (table, key, value) => {
    const hashedKey = getHash(key, table.length);
    const isColliding = table[hashedKey];
    const isRewrite = isColliding && table[hashedKey].key === key;

    if (isRewrite) {
      table[hashedKey].value = value;
      return 0;
    } else if (!isColliding) {
      table[hashedKey] = { key, value, next: null };
    } else {
      const newIdx = getLastEmptyAddress(table);
      table[newIdx] = { key, value, next: null };
      table[getFreeNextPointerNode(table, hashedKey)].next = newIdx;
    }

    return 1;
  };

  const resizeTable = () => {
    const newTable = Array(source.length * 2);
    source.forEach((item) => item && insert(newTable, item.key, item.value));
    source = newTable;
  };

  const get = (key) => {
    if (!key) return;

    const lookupHash = getHash(key);

    if (!source[lookupHash]) return;
    const node = findNodeInChain(lookupHash, key);

    if (node !== null) return source[node.idx].value;
    return;
  };

  const has = (key) => {
    if (!key) return false;

    return Boolean(get(key));
  };

  const set = (key, value) => {
    if (!key || !value) return false;

    const numOfInsertedNodes = insert(source, key, value);
    size += numOfInsertedNodes;

    getLoadFactor() > MAX_LOAD_FACTOR && resizeTable();
    return true;
  };

  const remove = (key) => {
    if (!key || size === 0) return false;

    const hashedKey = getHash(key);
    const hashRef = source[hashedKey];
    if (!hashRef) return false;

    const node = findNodeInChain(hashedKey, key);

    if (node === null) return false;
    const { idx, prev, next } = node;

    const isHead = prev === null && next !== null;
    const isMiddle = prev !== null && next !== null;
    const isTail = prev !== null && next === null;

    if (isHead) {
      source[idx] = source[next];
      source[next] = undefined;
    } else if (isMiddle) {
      source[idx] = undefined;
      source[prev].next = next;
    } else if (isTail) {
      source[idx] = undefined;
      source[prev].next = null;
    } else {
      source[idx] = undefined;
    }

    size--;
    return true;
  };

  return {
    get size() {
      return size;
    },
    set,
    get,
    has,
    delete: remove
  };
};

export { hash, createHashTable };
