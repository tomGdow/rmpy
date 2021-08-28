""" Demonstrating rasing exceptions """
import errno
import os

def check_file(filepath):
    if not os.path.isfile(filepath):
        raise FileNotFoundError

try:
    check_file('invalid_path')
except FileNotFoundError as exception:
    print('#1 Handled FileNotFoundError:', exception)

def check_file_message(filepath):
    if not os.path.isfile(filepath):
        raise FileNotFoundError('"%s" not found' % filepath)

try:
    check_file_message('invalid.path')
except FileNotFoundError as exception:
    print('#2 Handled FileNotFoundError:', exception)


