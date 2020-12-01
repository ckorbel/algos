class Node:
    def __init__(self, key, val):
        self.val = val
        self.key = key
        self.next = None
        self.prev = None


# tail and head are dummy nodes used as pointers
# head and tail pointers always stay connected in a loop
class LRUCache:
    def __init__(self, capacity):
        self.capacity = capacity
        self.head = Node(0, 0)
        self.tail = Node(0, 0)
        self.cache = {}
        self.head.next = self.tail
        self.tail.prev = self.head

    # getting a value count a frequently used
  # and so we need remove and re-add back of que and
    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        else:
            return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self._remove(self.cache[key])
        new_node = Node(key, value)
        self._add(new_node)
        self.cache[key] = new_node
        if len(self.cache) > self.capacity:
            old_head = self.head.next
            self._remove(old_head)
            del self.cache[old_head.key]

    # add to end que as end is most recent and head is less recent

    def _add(self, node):
        prev = self.tail.prev
        print(prev)
        prev.next = node
        node.prev = prev
        node.next = self.tail
        self.tail.prev = node

      # removes node from List in order
  # 0(1) random access possible due to hashmap

    def _remove(self, node):
        prev = node.prev
        next = node.next
        prev.next = next
        next.prev = prev
