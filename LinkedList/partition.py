# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def partition(self, head: ListNode, x: int) -> ListNode:
        left_head = ListNode(None)
        right_head = ListNode(None) # saves head node
        left = left_head # these function as the tail node
        right = right_head #tail node
        
        while head: 
            if head.val < x: 
                left.next = head
                left = left.next
            else: 
                right.next = head
                right = right.next
            head = head.next
        
        right.next = None # set tail of right to None
        left.next = right_head.next # attach left list to start of right list
        return left_head.next