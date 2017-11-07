
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
//*****************************************************************END of Optimization******************************************************

        </script>
    </body>
</html>