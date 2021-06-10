me = {"name": "Chris", "age": 27, "city": "San Jose"}
# print(me)
del me["city"]
# me.popitem() removes random item
# print(me)

# if "name" in me:
# print(me["name"])

# or

try:
    print(me["doesntexist"])
except:
    print("key not in dict")

# loop through dict
for key in me:
    print(key)

for key in me.keys():  # or me.values() as well
    print(key)


for key, value in me.items():
    print(key, value)

copy_dict = dict(me)  # create new dict
copy_dict["new"] = "This is new"
# print(copy_dict, me)

dict_one = {"name": "Chris", "age": 27, "email": "email@email.com"}
dict_two = dict(name="Steve", age=55, city="Boston")
# merge kinda like spread or object assign
# duplicate keys will be overwritten
dict_one.update(dict_two)
print(dict_one)

my_dict = {3: 9, 6: 36, 9: 81}
print(my_dict)
acces_value = my_dict[3]
print(acces_value)
mytuple = (8, 7)
mydict = {mytuple: 15}
print(mydict)  # {(8, 7): 15}
