/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0; //return 0 if tree is empty

    let total = 0;

    let stack = [this.root];

    while (stack.length) {
      let current = stack.pop();

      total += current.val;

      for (let child of current.children) {
        stack.push(child);
      }
    }

    return total;

  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0; //return 0 if tree is empty

    let count = 0;

    let stack = [this.root];

    while (stack.length) {
      let current = stack.pop();

      if (current.val % 2 === 0) {
        count++;
      }

      for (let child of current.children) {
        stack.push(child);
      }
    }

    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0; //return 0 if tree is empty

    let count = 0;

    let stack = [this.root];

    while (stack.length) {
      let current = stack.pop();

      if (current.val > lowerBound) {
        count++;
      }

      for (let child of current.children) {
        stack.push(child);
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
