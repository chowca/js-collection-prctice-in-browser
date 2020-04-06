function createUpdatedCollection(collectionA, objectB) {
  var temp = objectB.value;
  for (var i = 0;i<collectionA.length;i++){
	  for (var j = 0; j<temp.length;j++){
		  if (collectionA[i].key===temp[j])
			  collectionA[i].count = (parseInt(collectionA[i].count))-Math.floor(collectionA[i].count/3);
	    }
    }
  return collectionA;
}
