import random, datetime, slugify
def currentTime():
    return str(datetime.datetime.now().strftime("%d %B, %Y - %H:%M:%S"))

def key(length):
    chars = "ABCDEFGJIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
    temp = random.choice(chars[:51])
    for x in range(length):
        temp += random.choice(chars)
    return str(temp)

def createSlug(query):
    if(query==""):
        query = key(10)
    return str(slugify.slugify(query))
