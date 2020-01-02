class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);
    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  hasChildren() {
    return this.children.size > 0 ? true : false;
  }

  hasChild(key) {
    return this.getChild(key) ? true : false;
  }

  getParent() {
    return this.parent;
  }

  getChildren() {
    return [...this.children.values()];
  }

  removeChild(key) {
    return this.children.delete(key)
  }

  getDeepChild(keys) {
    const [first, ...rest] = keys;

    if (keys.length < 2 || !this.children.has(first)) {
      return this.getChild(first)
    }
    return this.getChild(first).getDeepChild(rest)
  }
}