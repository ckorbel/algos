def is_palindrome(x):
    to_string = str(x)
    first = 0
    last = len(to_string) - 1
    while first <= last:
        if to_string[first] is to_string[last]:
            first += 1
            last -= 1
        else:
            return False
    return True


print(is_palindrome(1011))
