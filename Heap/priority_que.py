import math
from datetime import datetime


class Node:
    def __init__(self, val, priority):
        self.val = val
        self.priority = priority
        self.insert_time = datetime.now()


class PriorityQueue:
    def __init__(self):
        self.values = []

    def bubble_up(self):
        index = (len(self.values)) - 1
        element = self.values[index]
        while index > 0:
            parent_index = math.floor((index - 1) / 2)
            parent = self.values[parent_index]
            if element.priority <= parent.priority:
                break
            self.values[parent_index] = element
            self.values[index] = parent
            index = parent_index

    def bubble_down(self):
        index = 0
        length = len(self.values)
        element = self.values[0]
        while True:
            left_child_index = 2 * index + 1
            right_child_index = 2 * index + 2
            left_child = None
            right_child = None
            swap = None

            if left_child_index < length:
                left_child = self.values[left_child_index]
                if left_child.priority > element.priority:
                    swap = left_child_index

            if right_child_index < length:
                right_child = self.values[left_child_index]
                if left_child > element:
                    if swap is None and right_child.priority > element.priority or swap != None and right_child.priority > left_child.priority:
                        swap = right_child_index

            if swap is None:
                return None
            self.values[index] = self.values[swap]
            self.values[swap] = element
            index = swap

    def enqueue(self, val, priority):
        new_node = Node(val, priority)
        self.values.append(new_node)
        self.bubble_up()

    def dequeue(self):
        if len(self.values) < 1:
            return None
        max = self.values[0]
        end = self.values.pop()
        if len(self.values) > 0:
            self.values[0] = end
            self.bubble_down()
        return max

    def print_vals(self):
        arr = []
        for x in self.values:
            arr.append(x.val)
        print(arr)

    def print_nodes(self):
        arr = []
        for x in self.values:
            node_to_dict = {
                'priority': x.priority,
                'val': x.val
            }
            arr.append(node_to_dict)
        print(arr)

    def print_priorities(self):
        arr = []
        for x in self.values:
            arr.append(x.priority)
        print(arr)


ER = PriorityQueue()
ER.enqueue("common cold", 1)
ER.enqueue("gunshot wound", 5)
ER.enqueue("stomach ache", 2)
ER.enqueue("broken arm", 3)
ER.enqueue("something crazy bad", 7)
ER.print_vals()
# ER.print_nodes()

# log(N) for insertion and deletion or log(N) for dequeue and enqueue
# search 0(n) however priority que aren't good data structures for search probably not BST for search
# heaps rules make it so that they are always balanced so there's no worst case scenario where you have 0(n) w/ unbalanced trees
