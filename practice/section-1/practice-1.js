'use strict';

function collectSameElements(collectionA, collectionB) {
  collectionA.filter(sameElement => collectionB.includes(sameElement));
}
