'use strict';

function collectSameElements(collectionA, collectionB) {
  return collectionA.filter(sameElement => collectionB.includes(sameElement));
}
