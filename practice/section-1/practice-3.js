'use strict';

function collectSameElements(collectionA, objectB) {
  let {temp} = objectB;
  return collectionA.filter(sameElement => temp.includes(sameElement));
}
