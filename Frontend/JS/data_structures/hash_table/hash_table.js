// hash table implementation
// collisions resolved by quadratic probing

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

  const getLoadFactor = () => size / source.length;

  const getHash = (key, modFactor = source.length) => {
    return hash(key) % modFactor;
  };

  const resizeTable = () => {
    const newTable = Array(source.length * 2);

    source.forEach((item) => {
      if (item !== undefined) {
        const [key] = item;
        const newHash = getHash(key, newTable.length);

        for (let i = 0; i < newTable.length; i++) {
          const idx = (newHash + i ** 2) % newTable.length;

          if (newTable[idx] === undefined) {
            newTable[idx] = item;
            break;
          }
        }
      }
    });

    source = newTable;
  };

  const get = (key) => {
    if (!key) return;

    const lookupHash = getHash(key);
    for (let i = 0; i < source.length; i++) {
      const idx = (lookupHash + i ** 2) % source.length;
      if (source[idx] === undefined) {
        return { idx: null, result: undefined };
      } else if (source[idx][0] === key) {
        return { idx, result: source[idx][1] };
      }
    }

    return { idx: null, result: undefined };
  };

  const has = (key) => {
    if (!key) return false;

    return Boolean(get(key).result);
  };

  const set = (key, value) => {
    if (!key || !value) return false;
    const newHash = getHash(key);

    for (let i = 0; i < source.length; i++) {
      const idx = (newHash + i ** 2) % source.length;
      if (source[idx] && source[idx][0] === key) {
        source[idx][1] = value;
        break;
      } else if (source[idx] === undefined) {
        source[idx] = [key, value];
        size++;
        break;
      }
    }

    getLoadFactor() > MAX_LOAD_FACTOR && resizeTable();
    return true;
  };

  const remove = (key) => {
    if (!key || size === 0) return false;

    const { idx, result } = get(key);

    if (result === undefined) return false;

    source[idx] = undefined;
    size--;

    return true;
  };

  return {
    get size() {
      return size;
    },
    set,
    get: (key) => get(key).result,
    has,
    delete: remove
  };
};

export { hash, createHashTable };
