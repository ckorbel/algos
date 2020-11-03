//not a very elegant solution as it manipulates the tree
// but hey guess it works
 
 
 function rangeSumBST(root, L, R) {
    let sum = 0;
     if(!root) {
       return sum; 
     }
     
     function traverse(node) {
       if(node.val >= L && node.val <= R) {
         sum += node.val; 
       }
 
       if(node.val < L) {
         node.left = null; 
       }
 
       if(node.val > R) {
         node.right = null;
       }
 
       if(node.left) {
         traverse(node.left); 
       }
 
       if(node.right) {
         traverse(node.right); 
       }
     }
 
     traverse(root);
     return sum; 
     
 };