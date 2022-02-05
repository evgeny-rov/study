import { createBST } from "./binary_search_tree";

it("BST - should be instantiated with root node", () => {
  const expected = 5;
  const BST = createBST(expected);

  expect(BST.root.value).toEqual(expected);
});

it("Should search for existing node", () => {
  const BST = createBST(5);
  BST.insert(6);
  BST.insert(4);
  BST.insert(3);

  expect(BST.search(3)).not.toBeNull();
  expect(BST.search(6)).not.toBeNull();
  expect(BST.search(10)).toBeNull();
});

it("New nodes should be correctly inserted", () => {
  const BST = createBST(5);
  BST.insert(3);
  BST.insert(2);
  BST.insert(4);

  expect(BST.root.left.value).toEqual(3);
  expect(BST.root.left.left.value).toEqual(2);
  expect(BST.root.left.right.value).toEqual(4);

  BST.insert(7);
  BST.insert(6);
  BST.insert(8);

  expect(BST.root.right.value).toEqual(7);
  expect(BST.root.right.left.value).toEqual(6);
  expect(BST.root.right.right.value).toEqual(8);
});

it("New nodes should be inserted with correct values", () => {
  const BST = createBST(5);
  const leftValue = 4;
  const rightValue = 6;
  BST.insert(leftValue);
  BST.insert(rightValue);

  expect(BST.root.left.value).toEqual(leftValue);
  expect(BST.root.right.value).toEqual(rightValue);
});

it("Should remove root node", () => {
  const BST = createBST(5);
  BST.remove(5);

  expect(BST.root).toBeNull();
});

it("Should remove leaf node", () => {
  const BST = createBST(5);
  BST.insert(3);
  BST.remove(3);

  expect(BST.root.left).toBe(null);
});

it("Should replace node with child node", () => {
  const BST = createBST(5);
  BST.insert(7);
  BST.insert(10);
  BST.remove(7);

  expect(BST.root.right.value).toEqual(10);
  expect(BST.root.right.right).toBe(null);
});

it("Should replace node with inorder successor node", () => {
  const BST = createBST(41);
  BST.insert(20);
  BST.insert(11);
  BST.insert(13);
  BST.insert(29);
  BST.insert(32);
  BST.insert(27);
  BST.insert(24);
  BST.insert(25);

  BST.remove(20);

  expect(BST.root.left.value).toEqual(24);

  BST.remove(11);
  BST.remove(29);

  expect(BST.root.left.left.value).toEqual(13);

  expect(BST.root.left.right.value).toEqual(32);
  expect(BST.root.left.right.left.value).toEqual(27);
});

it("Should correcly remove nodes", () => {
  const BST = createBST(41);
  BST.insert(20);
  BST.insert(11);
  BST.insert(13);
  BST.insert(29);
  BST.insert(32);
  BST.insert(27);
  BST.insert(24);
  BST.insert(25);

  BST.remove(20);
  BST.remove(11);
  BST.remove(29);
  BST.remove(32);
  BST.remove(27);

  const expectedBST = createBST(41);
  expectedBST.insert(24);
  expectedBST.insert(25);
  expectedBST.insert(13);

  expect(BST.root).toEqual(expectedBST.root);
});

it("should not remove from empty BST", () => {
  const BST = createBST();
  const result = BST.remove(5);

  expect(BST.root).toBeNull();
  expect(result).toBeFalsy();
});
