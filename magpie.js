var child = function(bird1, bird2) {
    let diffCount = 0;
    for (let i = 0; i < bird1.length; i++) {
      if (bird1[i] !== bird2[i]) { diffCount++ };
    }
    return diffCount <= 2 && diffCount > 0;
  }

  var grandchild = function(bird1, bird2) {
    if (bird1.length === 1 && bird1 !== bird2) {
      return false;
     }
    let diffCount = 0;
    for (let i = 0; i < bird1.length; i++) {
      if (bird1[i] !== bird2[i]) { diffCount++ };
    }
    return diffCount <= 4;
  }

  console.log(grandchild('B', 'B'));
