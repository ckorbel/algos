
//Algorithims were written down after being written on whiteboard. Artifical constraints were often used (such not using built-in methods, etc.) in order to increase the complexity
//of the problem.

//***************Binary Search Trees and Recursive Functions************************************************* 
//recursive function on Fibonacci: 

            function fibonacci(num) {
                if (num <= 1) return 1; //this is the base case 
                return fibonacci(num - 1) + fibonacci(num - 2);
            }


//print values of Binary Search in Order of least to greatest using recursion..assuming tree is ordered.  
            function order(node) {
                if (node.left != null) { //base case is the leftmost leaf node 
                    order(node.left); //will continue left until it has arrived at the smallest leaf node
                }
                console.log(node.val); //logs value starting with base case and bubbling back up 
                if(node.right != null) {
                    order(node.right);
                }
            }
//gives you the size of the tree..i.e. the total number of nodes. Calculated using recursion
            function size(node) {
                if (node == null) return 0; //base case
                return size(node.left) + size(node.right) + 1; //increments count by +1 each time function is called  
            }

//checks whether or not the binary search tree is balanced
            function isBalanced(node) {  //will only return true or false. this function does not actually balance the tree
                var left = height(node.left); //calling a seperate helper function
                var right = height(node.right); 
                if (left - right > 1 || right - left > 1 ) return false; //unbalanced if one side more than +1
                if (left - right <= 1) return true; //must know height in order to know balance
                return isBalanced(node.left) && isBalanced(node.right); //recursive call with evaluate left side first, bubble back up n go right
            }

//height 
            function height(node) {
                if (node == null) { return 0 };
                let left = height(node.left);
                let right = height(node.right);
                if (left > right ) {
                    return left + 1;
                }
                else { 
                    return right + 1 
                }
            }
//checks if BST is full 

            function isFull(BST) {
                let height = height(BST.root) //helper function
                let size = size(BST.root); 
                if (Math.sqrt(size - 1) == height) {
                    return true;
                }
                else {
                    return false;
                }
            }
//isComplete

            function isComplete (node) {
                if (node == null) {
                    return true;
                } else if (node.right == null && node.left == null) {
                    return true;
                } else if (node.right != null && node.left) {
                    return false;
                } else if (node.left && node.right) {
                    return (this.isComplete(node.left && this.isComplete(node.right) && (this.height(node.left) >= (this.height(node.right)))));
                } else if (node.left && node.right != null) {
                    return (this.isComplete(node.left));
                }
            }

//looks for a value in BST, finds value and removes it from tree while re-balancing deleted node with the leftmost node of the right subtree 
            function deleteValue(val) {
                if (!root) return false; 
                if (contains(val) == false) return false; 
                var current = this.root; 
                while(current) {
                    if (val > current.val) {  //lines 41-50 are only searching for the value
                        var parent = current; //variable holds on to the parent node of current
                        current = current.right;
                    }
                    else if (val < current.val) {
                        var parent = current; //variable holds onto the parent node of current
                        current = current.left; 
                    }
                    else if (val == current.val) { //lines 50-60 reset the tree getting rid of node with value = to val
                        var success = current.right; //sucesor node will be the leftmost node of the right subtree
                        while (success) { //will set successor leftmost leaf node of the right subtree of current
                            if (success.left) { //continues until it reaches leaf node
                                success = success.left; 
                            }
                        success.left = current.left; //reassigns anything left of deleted node to now be left of successor
                        if (parent.val > current.val) { //evaluates position of deleted node and reassigns successor based on position
                            parent.left = success; //reassigns successor node to to place of deleted node.
                        }
                        else parent.right = success //reassigns successor node to to place of deleted node.
                        }
                    }
                }
            }


            function rValid(Min, Max, node) {
                if(!node) return true; 
                if (node > Max || node < min ) { //if you move left than min stays the same and max changes to previous node
                    return false; //if you move right than max stays the same and min changes to previous node
                }
                return rValid(Min, node.val, node.left) && rValid(node.val, Max, node.right);
            } //will return boolean
//*****************************END OF BST ********************************************************************************

//******************************************Sorting and Measuring Optimization*********************************************
        //sort an array using bubble Sort. Not a very effecient way to sort array
            function bubbleSort(arr) {
                for (var j = 0; j < arr.length - 1; j++) {
                    if (arr[j] > arr[j + 1]){
                        for(var i = j; i < arr.length - 1; i++ ) {
                            var temp = arr[i + 1];
                            arr[i + 1] = arr[i];
                            arr[i] = temp;
                            j = 0;
                        }
                    }
                }
                return arr;
            }

            function optimizedBubbleSort (arr) { //more effecient way to do a Bubble Sort 
                var i = 0; 
                var swapped = true; 
                while(swapped) {
                    swapped = false; 
                    for (var j = 0; j <arr.length - 1 - i; j++) {
                        if(arr[j] > arr[j + 1]) {
                            var temp = arr[i];
                            arr[i] = arr[i +1];
                            arr[i + 1] = temp;
                            swapped = true;
                        }
                    }
                    i++;
                }
                return arr; 
            }
//this function uses a helper function that merges two arrays and sorts them into a new Array
            function mergeSort(arr) {
                if (arr.length < 2 ) { //this is the base case 
                    return arr;
                }
                else {
                    var idx = Math.floor(arr.length / 2) - 1; //splits the array in half with a left and a right
                    var leftarr = []; //
                    for (var i = 0; i < idx; i++) { //pushes everything from the left side of the array
                        leftarr.push(arr[i]);
                    }
                    var rightarr = [];
                    for (var i = idx + 1; i < arr.length; i++) { //pushing everything from the right side of the array
                        rightarr.push(arr[i]);
                    }
                    return merge(mergeSort(leftarr), mergeSort(rightarr));//recursively calls this function on both sides of the array until the base case of
                    //of arr.length < 2 is meet. 
                }
            }

//Counting Sort..assume you are sorting an array of IQ values where the range is between 100-170, but the number of values in array is unknown
//cannot use built in function and you cannot use any nested for loops. You can only iterate over the array one time. 

            function countingSort(arr) {
                let nums = {}; //empty object to store key value pairs
                let newArray = []; 
                for (let i = 0; i < arr.length; i++) {
                    if (arr[i] in nums) { //if there is a repeat number in the array then increments the value in the dictionary by 1 to indicate the number of instances of that repeated value
                        nums [arr[i]]++;
                    }
                    else {
                        nums[arr[i]] = 1; //set intial value to 1
                    }
                }
                for (let i = 100; i <= 170; i++) {  //here we assume min of 100 n max of 170, in other instances min and max would need to be calculated
                    if(newArray[i] != undefined) { //we only want to push to newArray if that number is in the dictionary
                        for (let j = 1; j <= newArray[i]; i++) { //we need to push the number of instances this value appears in the orginal array, which is contained in the value of the key 
                            newArray.push(i); 
                        }
                    }
                }
                return newArray;
            }

// merge Sorted Arrays 
            function sortedArray(arr1, arr2) {
                let j = 0; let i = 0; let newArray = [];
                while(j != arr2.length || i != arr1.length) {
                    if (arr1[i] < arr2[j]) {
                        newArray.push(arr1[i]);
                        i++;
                    }
                    else if (arr2[j] < arr1[i]) {
                        newArray.push(arr2[j]);
                        j++;
                    }
                    else { //if the value is equal then you push both
                        if (arr1[i]) { newArray.push(arr1[i]); i++ }
                        if (arr2[j]) { newArray.push(arr2[j]); j++ }
                    }
                }
                return newArray;
            }

//int Sorted
            function intSorted(arr1, arr2) {
                let obj = {};
                for (var i = 0; i < arr2.length; i++) { //lines 177-185 create an object of key value pairs where the keys are the numbers from the arrays
                    if (obj[arr2[i]]) { //and the values are the number of instances that number appears 
                        obj[arr2[i]]++;
                    }
                    else { 
                        obj[arr2[i]] = 1;
                    }  //create key value pairs where the values are the number of instances
                }
                let newArray = [];
                for (var i = 0; i < arr1.length; i++) {
                    if (obj[arr1[i]]) {
                        newArray.push(arr1[i]);
                        obj[arr[i]]--;
                    }
                }
                return newArray;
            }
//Union Sort push the greater number of repeat values rather than smaller as in intSort
function unionSort (arr1, arr2) {
  let newArray = []; var i = 0; var j = 0; 
  while (i != arr1.length && j != arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArray.push(arr1[i]);
      i++;
    }
    else if (arr1[i] > arr2[j]) {
      newArray.push(arr2[j]);
      j++;
    }
    else if (arr1[i] == arr2[j]) {
      newArray.push(arr1[i]);
      i++;
      j++;
    }
  }
  if (i < arr1.length) {
    for (var x = i; x < arr1.length; i++) {
      newArray.push(arr1[x]);
    }
  }
  if (j < arr2.length) {
    for (var a = j; a < arr2.length; a++) {
      newArray.push(arr2[a]);
    }
  }
  return newArray;
}
unionSort([1,2,2,7],[2,2,6,6,7])

function intersectSort(arr1, arr2) {
    let obj = {};
    for (var i = 0; i < arr2.length; i++){
        if (obj [arr2[i]]) {
            continue;
        }
        else {
            obj[arr2[i]] = 1;
        }
    }
    let newArray = [];
    for (var i = 0; i < arr1.length; i++) {
        if (obj[arr1[i]]) {
            newArray.push(arr1[i]);
            obj[arr1[i]]--;
        }
    }
    return newAray;
}

//Intersection with duplicating values...cannot use new array must modify existing array

function intersectSortDuplicates (arr1, arr2) {
    let i = 0; 
    while (i != arr1.length) {
        let z = 0; 
        var cond = false; 
        while ( z != arr2.length) {
            if (arr1[i] == arr2[z]) {
                arr2.splice(z, 1);
                cond = true;
                break;
            }
            z++;
        }
        if (!cond) {
            arr1.splice(i, 1);
        }
        else {
            i++; 
        }
    }
    return arr1; 
}
// intersectSortDuplicates([1,2,2,7,1, 2, 11], [2,7,3,2,11]); expected output=> [2,2,7,11]


//Heaps --> Binary Tree Organized by having the lowest values at the top of the tree. Parent is not allowed to have a value less than the child node
//each new value must enter at the leftmost bottom => represented in an array that is the end of the array
//parent is always the index divided by 2 (index / 2). Left child is 2 * index, right child is (2 * index) + 1;
function Heap() {
    this.arr = [null]; //index 0 of array must be null
}

function add (val) {  
    arr.push(val); //leftmost bottom will always be at the very end of the array 
    var current = arr.length - 1; //index of added value
    var parent = Math.floor(current / 2); //index of parent of added value 
    while (arr[current] < arr[parent]) { //continual check 
      var temp = arr[current]; //lines 287-289 swap the values of parent and child in the scenario that the parent is lesser value
      arr[current] = arr[parent];
      arr[parent] = temp;
      current = parent; //resets the new index of added value 
      parent = Math.floor(current / 2); //resets index of the new parent 
    }
    return arr;
  }

  function HashMap (cap) {
      this.capacity = cap;
      this.table = [];
  }

  //inherits hashCode and mod methods which produce index value for array  
  hashMap.prototype.hashAdd = function (key, val) {
      var rand = key.hashCode();
      var idx = mode(rand, this.capacity);
      if (this.table[idx]){
          for (var i = 0; i < this.table[idx].length; i++) { //deal with scenario in order to avoid a hash collision 
              if (this.table[idx][i][0] == key) {
                  this.table[idx][i][1] = val;
                  return
              }
          }
        this.table[idx].push([key, val]);
      }
      else {
          this.table[idx] = [key, val];
      }
  }

  //print only the keys in the hashtable
hashMap.prototype.hashPrint = function () {
    for (var i = 0; i < this.table.length - 1; i++) {
        if (this.table[i].length > 2) { //if an index contains multiple arrays then we need another loop
            for (var x = 0; x < this.table[i].length - 1; x++) {
                console.log(this.table[i][x][0]);
            }
        }
        console.log(this.table[i][0])
    }
}
//grow capacity by 50% and re-hash the values 
hashMap.prototype.grow = function () {
    var half = Math.floor(this.capacity / 2); //need half of the length 
    this.capacity += half; //add the to original capacity so if it was 10 now its 15 if 20 now 30 
    for (let i = 0; i < this.table.length - 1; i++) {
        for (let x = 0; x < this.table.length[i] - 1; x++ ) {
            let temp = this.table[i][x]; //store array in temp in order to save it and re-hash
            temp.splice(x,1); //must splice array out in order to re-hash 
            this.hashAdd(temp[0], temp[1]); //calls previous hashAdd method which takes a key, value as its parameter 
        }
    }

}

//*****************************************************************END of Sorts******************************************************

//next largest number including all the same digits
//so 23 = 32; 293 = 329; 59884848459853 = 59884848483559;
//find the pivot digit swap the pivot with the smallest value to the right of the pivot that is still greater than the pivot itself

function nextLargest(num) {
    function nextBigger(num){
        var arr = num.toString().split(''); //data type conversion in order to loop through arr, JS will still evaluate "3" > "2"
        console.log(arr);
        
        // find the pivot, the point (from right so that we search for the smallest available pivot point)
        var pivot = -1;
        for (var i = arr.length-1; i > 0; i--) {
          if (+arr[i] > +arr[i-1]) {
            pivot = i-1;
            break;
          }
        }
        
        if (pivot == -1) return pivot; // if we are unable to find the pivot, skip
        
        var right = arr.splice(pivot); // splice the digits in the pivot
        var temp = right.splice(0, 1)[0]; // extract pivot
        
        // find the lowest number > pv
        var min = null, mmi = null;
        for (var i = 0; i < right.length; i++) {
          if (right[i] > temp) {
            if (min == null || right[i] < min) {
              min = right[i];
              mmi = i;
            }
          }
        }
      
        if (mmi == null) return -1;
        
        right.splice(mmi, 1);
        right.push(temp);
        right = right.sort(); //everything in right must be resorted going from lowest values in front to highest values in the back
        
        // concat the left + new pivot + right part
        var ret = +arr.concat([min]).concat(right).join('');
        if (ret == num) return -1; //if the number is already in its highest form and cannot be increaed (example 321); simply return -1.
        
        return ret;
    }
      nextBigger(59884848459853);


}

//reverse array

function reverse (arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp; 
    }
    return arr;
}

//get change 
function getChange (amount) {
    if (amount > 25) {
      var numQuarters = Math.floor(amount / 25);
      amount = amount - (numQuarters * 25);
    }
    if (amount > 10) {
      var numDimes = Math.floor(amount / 10);
      amount = amount - (numDimes * 10);
    }
      if (amount > 5) {
      var numNickels = Math.floor(amount / 5);
      amount = amount - (numNickels * 5);
    }
      if (amount > 1) {
      var numPennies = Math.floor(amount / 1);
      amount -= numPennies;
    }
    return (numQuarters, numDimes, numNickels, numPennies);
  } 


function getDuplicate (arr) {  //identify the first duplicate 
    var dict = {}; //create an empty hash table/dictionary add key-value pairs
    for (var i = 0; i < arr.length; i++) {
      if (dict[arr[i]] > 0) { //first key with value greater than 1 is a duplicate
        return arr[i];
      }
      else {
        dict[arr[i]] = 1; //intialize at value of 1 
      }
    }
    return "No duplicates"; //if the loops runs out and no duplicates are found
  }
  getDuplicate(["a","b","c","d","a"]);

  //Interview cake Find the area of overlapping rectangular see Interview Cake Alogrithims 

  function findRangeOverlap(point1, length1, point2, length2) {
    
        // find the highest start point and lowest end point.
        // the highest ("rightmost" or "upmost") start point is
        // the start point of the overlap.
        // the lowest end point is the end point of the overlap.
        var highestStartPoint = Math.max(point1, point2);
        var lowestEndPoint = Math.min(point1 + length1, point2 + length2);
    
        // return null overlap if there is no overlap
        if (highestStartPoint >= lowestEndPoint) {
            return {startPoint: null, overlapLength: null};
        }
    
        // compute the overlap length
        var overlapLength = lowestEndPoint - highestStartPoint;
    
        return {startPoint: highestStartPoint, overlapLength: overlapLength};
    }
    
    function findRectangularOverlap(rect1, rect2) {
    
        // get the x and y overlap points and lengths
        var xOverlap = findRangeOverlap(rect1.leftX, rect1.width, rect2.leftX, rect2.width);
        var yOverlap = findRangeOverlap(rect1.bottomY, rect1.height, rect2.bottomY, rect2.height);
    
        // return null rectangle if there is no overlap
        if (!xOverlap.overlapLength || !yOverlap.overlapLength) {
            return {
                leftX: null,
                bottomY: null,
                width: null,
                height: null,
            };
        }
    
        return {
            leftX: xOverlap.startPoint,
            bottomY: yOverlap.startPoint,
            width: xOverlap.overlapLength,
            height: yOverlap.overlapLength,
        };
    }