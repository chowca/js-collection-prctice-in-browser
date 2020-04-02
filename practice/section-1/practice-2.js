'use strict';

function collectSameElements(collectionA, collectionB) {
  let temp = collectionB.flat();
  return collectionA.filter(sameElement => temp.includes(sameElement));
}
