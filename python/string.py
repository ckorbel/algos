
# ordered, immutable, text representation
from timeit import default_timer as timer
my_string = "Hello World"
print(my_string)


string_one = """ Hello \
    again"""
print(string_one)
print(string_one[-1])  # last character
substring = string_one[1:5]  # starts at 1 goes to 4 index 5 is excluded
# every character [::2] every second charcterr
substring_step = string_one[::1]
reverse_string = string_one[::-1]
print(substring, reverse_string)

greeting = "Hello"
name = "Chris"

if 'el' in greeting:  # check existance of subtring
    print("yes")
else:
    print("no")

white_space = '    Hello world     '
no_white_space = white_space.strip()
print(len(white_space), len(no_white_space))
print(no_white_space.upper(), no_white_space.lower(),
      my_string.startswith('Hello'), no_white_space.endswith('stadf'))
new = "blah"
# return index of first time character return, return -1 if not
print(new.find("h"))
print(new.count("b"))  # return number of occurances
print(no_white_space.replace('world', "Universe"))
convert = "how's it going"
my_list = convert.split()  # no argument splits at space
print(my_list)

my_lisst = ['a'] * 100000

my_str = ''
# bad way to convert to string
start = timer()
for i in my_lisst:
    my_str += i
stop = timer()
print(stop - start)

# good way to convert to string
new_start = timer()
my_str = ''.join(my_lisst)
new_stop = timer()
print(new_stop - new_start)

name = "Chris"
age = 27.12234234
my_greeting = "my nam is %s" % name
stre = "name is {} age is {}".format(name, age)
# kinda the best way to do it cleanest at least
f_string = f"name is {name} age is {age * 10}"  # can be evaluated at runtime

print(my_greeting, stre, f_string)
