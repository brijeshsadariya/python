import os

dir_name = input('Enter the directory address:')

for root, dir, files, in os.walk(dir_name):
    for file in files:
        if file.endswith('.txt'):
            print(file)
