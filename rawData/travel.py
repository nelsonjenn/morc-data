        # "How often do you travel with an overnight stay for the purpose of cycling?": "1-3 times a year",
        # "How many nights is your average bike-centric trip?": "3-5 nights",
        # "What is your preferred mode of travel with bike(s)?": "Drive",
        # "How long are you willing to drive to get to a trail?": "I'll travel any length for a good ride!",
        # "What is your preferred accommodations on a bike trip? ": "Camping",
        # "What is your preferred maximum nightly cost for accommodations while on a bike trip? ": "$40 per night",

travel = {
    "1-3 times a year": 0,
    "4-8 times a year": 0,
    "9-15 times a year": 0,
    "16-30 times a year": 0,
    "30+ times a year": 0,
}
travelQuestion = "How often do you travel with an overnight stay for the purpose of cycling?"
travelFileName = "howOftenDoYouTravel.json"

nights = {
    "1-2 nights": 0,
    "3-5 nights": 0,
    "6-10 nights": 0,
    "10-14 nights": 0,
    "14+ nights": 0,
}

nightsQuestion = "How many nights is your average bike-centric trip?"
nightsFileName = "howManyNights.json"

mode = {
    "Backpacking": 0,
    "Drive": 0,
    "Fly": 0,
    "Train/Rail": 0,
}

modeQuestion = "What is your preferred mode of travel with bike(s)?"
modeFileName = "preferredModeOfTravel.json"

drive = {
    "Less than 30 minutes": 0,
    "Up to 1 hour": 0,
    "Up to 90 minutes": 0,
    "I'll travel any length for a good ride!": 0,
    "Other": 0,
}
driveQuestion = "How long are you willing to drive to get to a trail?"
driveFileName = "howLongAreYouWillingToDrive.json"

accommodations = {
    "Camping": 0,
    "Hotel": 0,
    "AirBnB/VRBO": 0,
    "Other": 0,
}
accommodationsQuestion = "What is your preferred accommodations on a bike trip? "
accommodationsFileName = "preferredAccommodations.json"

cost = {
    "$40 per night": 0,
    "$75 per night": 0,
    "$150 per night": 0,
    "No preference": 0,
}
costQuestion = "What is your preferred maximum nightly cost for accommodations while on a bike trip? "
costFileName = "preferredMaximumNightlyCost.json"

import json
def makeJson(answers, question, fileName):
     # What is your favorite MORC trail?
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)
        for entry in data:
            for key, value in entry.items():
                if key == question:
                    for v in answers:
                        if v in value:
                            answers[v] += 1
        print(answers)
        question_data = []
        for q in answers:
            temp_data = {"answer": q, "value": answers[q]}
            question_data.append(temp_data)

        filePath = "../src/components/data/" + fileName 
        with open(filePath, "w") as outfile:
            json.dump(question_data, outfile, indent=4)

    return question_data

print("Travel Question: ", makeJson(travel, travelQuestion, travelFileName))
print("Nights Question: ", makeJson(nights, nightsQuestion, nightsFileName))
print("Mode Question: ", makeJson(mode, modeQuestion, modeFileName))
print("Drive Question: ", makeJson(drive, driveQuestion, driveFileName))
print("Accommodations Question: ", makeJson(accommodations, accommodationsQuestion, accommodationsFileName))
print("Cost Question: ", makeJson(cost, costQuestion, costFileName))
