// we have two identicle trees A and B
// given un element in tree A and the root of the tree B
//  look for that element in tree B

class treeElement {
  parent: treeElement;
  children: treeElement[];
}

function reversePath(elementOfA: treeElement, rootOfB: treeElement) {
  const path: number[] = [];
  let current = elementOfA;

  while (current.parent) {
    let index = current.parent.children.indexOf(elementOfA);
    path.push(index);
    current = current.parent;
  }

  current = rootOfB;

  while (path.length) {
    current = current.children[path.pop()!];
  }
  return current;
}
