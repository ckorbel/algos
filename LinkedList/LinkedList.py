class Node:
    def __init__(self, val, next=None):
        self.val = val
        self.next = next


class LL:
    def __init__(self, head=None, tail=None, length=0):
        self.head = head
        self.tail = tail
        self.length = length

    def print_head(self):
        print("Hello my head is " + str(self.head.val) +
              " tail: " + str(self.tail.val))
        print("length is " + str(self.length))

    # insert at back of list
    def push(self, val):
        new_node = Node(val)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
        self.length += 1

    # remove from back 0(n) for singly linked list
    def pop(self):
        if self.head is None:
            return None
        current = self.head
        while current != None:
            prev = current
            current = current.next
            if current is self.tail:
                prev.next = None
                self.tail = prev

        self.length -= 1
        return current

    # remove from front 0(1)
    def shift(self):
        if self.head is None:
            return None
        new_head = self.head.next
        self.head.next = None
        self.head = new_head
        self.length -= 1

    # add to front
    def unshift(self, val):
        new_node = Node(val)
        if self.head is None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head = new_node
        self.length += 1

    def print_all(self):
        if self.head is None:
            return []
        arr = []
        current = self.head
        while current != None:
            arr.append(current.val)
            current = current.next
        return arr

    def reverse(self):
        # swap head and tail
        if self.head is None:
            return None

        current = self.head
        self.head = self.tail
        self.tail = current
        prev = None
        next = None
        while current is not None:
            next = current.next
            current.next = prev
            prev = current
            current = next
        return self


ll = LL()
ll.push(1)
ll.push(2)
ll.push(3)
# print(ll.head)
ll.print_head()
# ll.shift()
# ll.pop()
ll.unshift(100)
ll.print_head()
print(ll.print_all())
ll.reverse()
print(ll.print_all())
