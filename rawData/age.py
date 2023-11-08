import createJson
#  Under 18 years old
# 19-24 years old
# 25-30 years old
# 31-35 years old
# 36-40 years old
# 41-45 years old
# 46-50 years old
# 51-60 years old
# 61-70 years old
# 71-80 years old
# 80+ years old

def age():
    ageQuestion = "What age are you?"
    ageAnswers = {
        "Under 18 years old": 0,
        "19-24 years old": 0,
        "25-30 years old": 0,
        "31-35 years old": 0,
        "36-40 years old": 0,
        "41-45 years old": 0,
        "46-50 years old": 0,
        "51-60 years old": 0,
        "61-70 years old": 0,
        "71-80 years old": 0,
        "80+ years old": 0
    }
    ageFile = "age.json"
    createJson.makeJson(ageAnswers, ageQuestion, ageFile)

age()

# To give back to my community
# Help pay for the trails I ride
# Hopefully add more trails to the area
# Make trails available to everyone
# It's the "right thing" to do
# To get the member bike strip & stickers
# Because I can

def why():
    whyQuestion = "Why do you choose to support MORC?"
    whyAnswers = {
        "To give back to my community": 0,
        "Help pay for the trails I ride": 0,
        "Hopefully add more trails to the area": 0,
        "Make trails available to everyone": 0,
        "It's the \"right thing\" to do": 0,
        "To get the member bike strip & stickers": 0,
        "Because I can": 0
    }
    whyFile = "why.json"
    createJson.makeJson(whyAnswers, whyQuestion, whyFile)

why()

def size_riding_group():
    sizeQuestion = "When you ride, how many people do you usually ride with?"
    sizeAnswers = {
        "Solo rider": 0,
        "1-4 people": 0,
        "5-10 people": 0,
        "10+ people": 0,
    
    }
    sizeFile = "size_riding_group.json"
    createJson.makeJson(sizeAnswers, sizeQuestion, sizeFile)

size_riding_group()

def how_far_drive():
    driveQuestion = "How long are you willing to drive to get to a trail?"
    driveAnswers = {
        "Less than 30 minutes": 0,
        "Up to 1 hour": 0,
        "Up to 90 minutes": 0,
        "I'll travel any length for a good ride!": 0
    }
    driveFile = "how_far_drive.json"
    createJson.makeJson(driveAnswers, driveQuestion, driveFile)

how_far_drive()