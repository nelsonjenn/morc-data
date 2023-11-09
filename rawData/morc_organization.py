import json

def morc_does_well():

    question = "What do you think MORC does well?"
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

    answers = {}

    for entry in data:
        for key, value in entry.items():
            value = value.strip().lower()
            if key == question:
                if value in answers:
                    answers[value] += 1
                else:
                    answers[value] = 1

    output_json = []

    for key, value in answers.items():
        temp = {"text": key, "value": value}
        output_json.append(temp)

    # Write to a JSON file
    with open("../src/components/data/morcDoesWell.json", "w") as outfile:
        json.dump(output_json, outfile, indent=4)

    print("Data written to morcDoesWell.json!")

    return output_json
    
morc_does_well()

def morc_improve():

    question = "What do you think MORC needs to improve?"
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

    answers = {}

    for entry in data:
        for key, value in entry.items():
            value = value.strip().lower()
            if key == question:
                if value in answers:
                    answers[value] += 1
                else:
                    answers[value] = 1

    output_json = []

    for key, value in answers.items():
        temp = {"text": key, "value": value}
        output_json.append(temp)

    # Write to a JSON file
    with open("../src/components/data/morcImprove.json", "w") as outfile:
        json.dump(output_json, outfile, indent=4)

    print("Data written to morcImprove.json!")

    return output_json
    
morc_improve()

import createJson
def morc_satisfaction():
    question = "Rate your overall satisfaction with the services MORC provides"
    answers = {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6": 0,
        "7": 0,
        "8": 0,
        "9": 0,
        "10": 0
    }
    filename = "morcSatisfaction.json"
    createJson.makeJson(answers, question, filename)

morc_satisfaction()


def events():
    question = "How many of the following events did you participate in last year?"
    answers = {
        "MTB Race": 0,
        "Road/Crit Race": 0,
        "Cyclocross Race": 0,
        "Gravel Race": 0,
        "Track Race": 0,
        "Endurance Bike Race": 0,
        "Organized Social Ride": 0,
        "Charity Ride": 0,
        "None": 0
    }
    filename = "events.json"
    createJson.makeJson(answers, question, filename)

events()

def rate_ability():
     with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        ability = [
                {
                    "ability": "1",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,
                },
                {
                    "ability": "2",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,
                },
                {
                    "ability": "3",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,
                },
                {
                    "ability": "4",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,
                },
                {
                    "ability": "5",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,
                },
                {
                    "ability": "6",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,

                },
                {
                    "ability": "7",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,
                },
                {
                    "ability": "8",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,
                },
                {
                    "ability": "9",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,
                },
                {
                    "ability": "10",
                    "answers": 0,
                    "Female": 0,
                    "Male": 0,
                    "Nonbinary": 0,
                    "Other": 0,
                    "Prefer not to say": 0,
                }
            ]
      

        for entry in data:
            for key, value in entry.items():
                if key == "On a scale of 1-10, how would you rate your riding level?":
                    for v in ability:
                        if v["ability"] in value:
                            v["answers"] += 1
                            v[entry["To which gender do you most identify?"]] += 1
                    


        # Write to a JSON file

        with open("../src/components/data/ability.json", "w") as outfile:
            json.dump(ability, outfile, indent=4)

        print("Data written to ability.json")

        return ability

rate_ability()

def conditions():
    question = "What's your preferred way to check trail conditions/openings?"
    answers = {
        "MORC Website Trail Conditions Page": 0,
        "Trail Facebook Page": 0,
        "Trailbot": 0,
    }
    filename = "conditions.json"
    createJson.makeJson(answers, question, filename)

conditions()

def visit_web_page():
    question = "How often do you visit the MORC webpage?"
    answers = {
        "Never": 0,
        "Monthly": 0,
        "Weekly": 0,
        "Few times a week": 0,
        "Daily": 0,
    }
    filename = "visitWebpage.json"
    createJson.makeJson(answers, question, filename)

visit_web_page()

def perform_own_maintenance():
    question = "How often do you perform you own bike maintenance?"
    answers = {
        "Always": 0,
        "Sometimes": 0,
        "Never": 0,
    }
    filename = "performOwnMaintenance.json"
    createJson.makeJson(answers, question, filename)

perform_own_maintenance()

def visit_bike_shop():
    question = "How often do you visit a local bike shop?"
    answers = {
        "Less than once a year": 0,
        "Once or twice a year": 0,
        "A few times a year": 0,
        "Monthly": 0,
        "Weekly": 0,
        "Multiple times per week": 0
    }
    filename = "visitBikeShop.json"
    createJson.makeJson(answers, question, filename)

visit_bike_shop()

def bike_shop_spending():
    question = "How much do you spend in an average trip to your local bike shop?"
    answers  = {
        "Less than $50": 0,
        "$50-$100": 0,
        "$100-$250": 0,
        "$250-$500": 0,
        "$500": 0
    }
    filename = "bikeShopSpending.json"
    createJson.makeJson(answers, question, filename)

bike_shop_spending()

def gas_station():
    question = "How often do you visit a local gas station when you travel to a MORC trail? "
    answers = {
        "Once in a while": 0,
        "About half the time": 0,
        "More than half the time": 0,
        "Always": 0
    }
    filename = "gasStation.json"
    createJson.makeJson(answers, question, filename)

gas_station()

def local_bar():
    question = "How often do you visit a local bar/restaurant when you travel to a MORC trail? "
    answers = {
        "Once in a while": 0,
        "About half the time": 0,
        "More than half the time": 0,
        "Always": 0
    }
    filename = "localBar.json"
    createJson.makeJson(answers, question, filename)

local_bar()

def travel_trail():
    question = "How far do you travel to get to your most frequently visited trail?"
    answers = {
        "Less than 1 mile": 0,
        "2-5 miles": 0,
        "6-15 miles": 0,
        "16-30 miles": 0,
        "30+ miles": 0
    }
    filename = "travelTrail.json"
    createJson.makeJson(answers, question, filename)

travel_trail()