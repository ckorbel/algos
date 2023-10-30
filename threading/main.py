import threading
import time


class myThread(threading.Thread):
    def __init__(self, threadId, name, count): 
        threading.Thread.__init__(self)
        self.threadId = threadId
        self.name = name
        self.count = count
    
    def run(self): 
        print("Starting " + self.name + "\n")
        threadLock.acquire()
        print_time(self.name, self.count, 5)
        threadLock.release()
        print("Exiting " + self.name + "\n")

class myThread2(threading.Thread):
    def __init__(self, threadId, name, count): 
        threading.Thread.__init__(self)
        self.threadId = threadId
        self.name = name
        self.count = count
    
    def run(self): 
        print("Starting " + self.name + "\n")
        threadLock.acquire()
        threadLock.release()
        print_time(self.name, self.count, 5)
        print("Exiting " + self.name + "\n")
    
def print_time(threadName, delay, counter):
    while counter:
        time.sleep(delay)
        print("%s: %s" % (threadName, time.ctime(time.time())))
        counter -= 1

threadLock = threading.Lock()

thread1 = myThread(1, "Payment", 5)
thread2 = myThread2(2, "Sending Email", 10)
thread3 = myThread2(3, "Loading page", 3)

thread1.start()
thread2.start()
thread3.start()
thread1.join()
thread2.join()
thread3.join()
print("Done main thread")

