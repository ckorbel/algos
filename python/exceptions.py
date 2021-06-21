# errors and exceptions
# a = 5 + "10" type error
# import somemodethatdoesntexist fr

x = -5
# if x < 0:
#     raise Exception('x should be positive')
# assert (x >= 0), 'x is not positive'  # throw assetion error
# catch exceptions with try catch block
try:
    a = 5 / 0  # division by 0 is not allowed typically program wont stop
except:
    print('an error happened in try block')

# custom exception error


class ValueTooHighError(Exception):
    pass


class ValueTooSmallError(Exception):
    def __init__(self, message, value):
        self.message = message
        self.value = value


def test_value(x):
    if x > 100:
        # evoke custom Exception error
        raise ValueTooHighError('value is too high')
    if x < 5:
        raise ValueTooSmallError('value is too small', x)


try:
    a = 5 / 0  # division by 0 is not allowed typically program wont stop
    b = a + '10'
except ZeroDivisionError as err:  # can sepcify the type of type exception
    print(err)
except TypeError as e:
    print(e)
else:
    print('everything is fine no errors')
finally:
    print('this always runs regardles and is used to clean up operations')

try:
    test_value(1)  # throw custome exception error
except ValueTooHighError as e:
    print(e)
except ValueTooSmallError as e:
    print(e)
