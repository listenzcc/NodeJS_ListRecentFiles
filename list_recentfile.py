import os
import time
import sys

recent_path = 'C:\\Users\\zcc\\AppData\\Roaming\\Microsoft\\Windows\\Recent'

if __name__ == "__main__":
    for j, p in enumerate(os.listdir(recent_path)):
        print('<p>%03d: %s' % (j, p))
