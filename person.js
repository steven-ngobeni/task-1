function ArrayChallenge(arr) {
    const index = arr.indexOf(1);
    if (index === -1) return 0;
  
    const left = arr.slice(0, index).reverse();
    const right = arr.slice(index + 1);
  
    const nearestTwoLeft = left.indexOf(2);
    const nearestTwoRight = right.indexOf(2);
  
    if (nearestTwoLeft === -1 && nearestTwoRight === -1) return 0;
    if (nearestTwoLeft === -1) return nearestTwoRight + 1;
    if (nearestTwoRight === -1) return nearestTwoLeft + 1;
  
    return Math.min(nearestTwoLeft, nearestTwoRight) + 1;
  }
  
  // Test the function
  console.log(ArrayChallenge([0, 0, 1, 0, 0, 2, 0, 2])); // This will print 3
  
  
  
 
  
  
  
  

