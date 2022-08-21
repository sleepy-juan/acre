import eel, os

eel.init("web")

def getErrorOrNot(log):
    if log.count("<J>") < 2:
        return ""
    b = log.find("<J>")
    e = log.find("<J>", b+1)
    return log[b+3:e]

@eel.expose
def createContract(addr, p1, p2, p3, owner):
    cmd = 'cd ~/Desktop/Projects/acre; echo y | ~/go/bin/acred tx acre create-contract "%s" %s %s %s --from %s' % (addr, p1, p2, p3, owner)
    print(cmd)

    log = os.popen(cmd).read()
    return getErrorOrNot(log)

@eel.expose
def initContract(addr, buyer):
    log = os.popen('cd ~/Desktop/Projects/acre; echo y | ~/go/bin/acred tx acre init-contract "%s" --from %s' % (addr, buyer)).read()
    return getErrorOrNot(log)

@eel.expose
def proceedContract(addr, buyer):
    log = os.popen('cd ~/Desktop/Projects/acre; echo y | ~/go/bin/acred tx acre proceed-contract "%s" --from %s' % (addr, buyer)).read()
    return getErrorOrNot(log)

@eel.expose
def closeContract(addr, buyer):
    log = os.popen('cd ~/Desktop/Projects/acre; echo y | ~/go/bin/acred tx acre close-contract "%s" --from %s' % (addr, buyer)).read()
    return getErrorOrNot(log)

@eel.expose
def cancelContract(addr, user):
    log = os.popen('cd ~/Desktop/Projects/acre; echo y | ~/go/bin/acred tx acre cancel-contract "%s" --from %s' % (addr, user)).read()
    return getErrorOrNot(log)

@eel.expose
def getBalance(user):
    log = os.popen('cd ~/Desktop/Projects/acre; ~/go/bin/acred q bank balances $(~/go/bin/acred keys show %s -a)' % user).read()
    found = log.find("amount", log.find("amount")+1)
    end = log.find('"', found+9)
    return int(log[found+9:end])

@eel.expose
def nameToAddress(username):
    log = os.popen('cd ~/Desktop/Projects/acre; ~/go/bin/acred keys show %s -a' % username).read()
    return log

eel.start("index.html")
