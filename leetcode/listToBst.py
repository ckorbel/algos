# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def convert_to_arr(self, head):
        if head == None:
            return
        current = head
        result = []
        while current != None:
            result.append(current.val)
            current = current.next
        return result

    def sortedArrayToBST(self, nums) -> TreeNode:
        if len(nums) < 1:
            return None
        mid_point = len(nums) // 2  # python 3 needs // to not be a float 3.5
        root = TreeNode(nums[mid_point])
        root.left = self.sortedArrayToBST(nums[:mid_point])
        root.right = self.sortedArrayToBST(nums[mid_point + 1:])
        return root

    def sortedListToBST(self, head: ListNode) -> TreeNode:
        if head == None:
            return
        sorted_arr = self.convert_to_arr(head)
        return self.sortedArrayToBST(sorted_arr)
