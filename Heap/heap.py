import math


class MaxBinaryHeap:
    def __init__(self):
        self.values = [41, 39, 33, 18, 27, 12]

    def bubble_up(self):
        index = (len(self.values)) - 1
        element = self.values[index]
        while index > 0:
            parent_index = math.floor((index - 1) / 2)
            parent = self.values[parent_index]
            if element <= parent:
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
                if left_child > element:
                    swap = left_child_index

            if right_child_index < length:
                right_child = self.values[left_child_index]
                if left_child > element:
                    if swap is None and right_child > element or swap != None and right_child > left_child:
                        swap = right_child_index

            if swap is None:
                return None
            self.values[index] = self.values[swap]
            self.values[swap] = element
            index = swap

    def insert(self, val):
        self.values.append(val)
        self.bubble_up()

    def extraxt_max(self):
        if len(self.values) < 1:
            return None
        max = self.values[0]
        end = self.values.pop()
        if len(self.values) > 0:
            self.values[0] = end
            self.bubble_down()
        return max


heap = MaxBinaryHeap()
heap.insert(55)
heap.insert(1)
heap.insert(44)
print(heap.values)
heap.extraxt_max()
print(heap.values)
