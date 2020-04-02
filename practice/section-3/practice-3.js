'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = [];
  var exist = false;
  for (var i = 0; i < collectionA.length; i++) {
    for (var j = 0; j < collectionC.length; j++) {
      if(collectionA[i] == collectionC[j].key){
        collectionC[j].count += 1;
        exist = true;
      }
      else{
        exist = false;
      }
    }
    if(!exist){
      collectionC.push({key:collectionA[i], count:1});
    }
  }
  for(var k = 0; k < collectionC.length; k++){
    for(var l = 0; l < objectB.value.length; l++){
      if(collectionC[k].key == objectB.value[l]){
        collectionC[k].count = collectionC[k].count - Math.floor(collectionC[k].count/3);
      }
    }
  }
  return collectionC;
}
