// 1631. Path With Minimum Effort: Medium

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function(heights) {
  let rows = heights.length - 1;
  let cols = heights[0].length - 1;
  let validPaths = [];
  let minDistance = 0;
  let visited = [];
  let currPath = [];

  const traverse = ( r, c, currPath, visited, distance) => {      
    let serializedLoc = r + "," + c;  

    if (visited.indexOf(serializedLoc) !== -1) return;

    if(r === rows && c === cols) {
        currPath.push(serializedLoc);
        validPaths.push(currPath);
        if (distance < minDistance) minDistance = distance;
        console.log(currPath);
        currPath.pop();              
        return;
    } 

    currPath.push(serializedLoc);
    visited.push(serializedLoc);
    distance += heights[r][c];

    let parent = heights[r][c];
    if(r + 1 <= rows) {
     traverse(r + 1, c, [...currPath], [...visited], distance);       
    }
    if(c + 1 <= cols) {
     traverse(r, c + 1, [...currPath], [...visited], distance);          
    }
    if(r - 1 >= 0) {
     traverse(r - 1, c, [...currPath], [...visited], distance);       
    }
    if(c - 1 >= 0) {
      traverse(r, c - 1, [...currPath], [...visited], distance);
    }
    return;  
  }    

  traverse(0, 0, currPath, visited, 0);    
  return minDistance;    
};


/* 
for a 3 x 3 matrix , all paths
[ '0,0', '1,0', '2,0', '2,1', '2,2' ]
[ '0,0', '1,0', '2,0', '2,1', '1,1', '1,2', '2,2']
[ '0,0', '1,0', '2,0', '2,1', '1,1', '0,1', '0,2', '1,2', '2,2']
[ '0,0', '1,0', '1,1', '2,1', '2,2' ]
[ '0,0', '1,0', '1,1', '1,2', '2,2' ]
[ '0,0', '1,0', '1,1', '0,1', '0,2', '1,2', '2,2']
[ '0,0', '0,1', '1,1', '2,1', '2,2' ]
[ '0,0', '0,1', '1,1', '1,2', '2,2' ]
[ '0,0', '0,1', '1,1', '1,0', '2,0', '2,1', '2,2']
[ '0,0', '0,1', '0,2', '1,2', '2,2' ]
[ '0,0', '0,1', '0,2', '1,2', '1,1', '2,1', '2,2']
[ '0,0', '0,1', '0,2', '1,2', '1,1', '1,0', '2,0', '2,1', '2,2']
*/