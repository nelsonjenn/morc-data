#  "When did you last get a new bike?": new_bike()
#         "How much do you spend in an average year on bike maintenance?": spend_maintenance(),
#         "How often do you perform you own bike maintenance?": 
#         "When did you last have your bike serviced at a shop?": last_service()
#         "When did you last make a purchase at a local bike shop?": last_purchase(),
#         "How often do you visit a local bike shop?": 
#         "How much do you spend in an average trip to your local bike shop?": 
#         "What is your favorite local bike shop?": 

import json


def new_bike():

     with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        last_new_bike = {
            "Within the last year": 0,
            "1-3 years ago": 0,
            "3-5 years ago": 0,
            "6-10 years ago": 0,
            "10+ years ago": 0,
        }


        for entry in data:
            for key, value in entry.items():
                if key == "When did you last get a new bike?":
                    for v in last_new_bike:
                        if v == value:
                            last_new_bike[v] += 1
        
        last_new_bike_data = []

        for value in last_new_bike:
            temp = {
                "answer": value,
                "value": last_new_bike[value],
            }
            last_new_bike_data.append(temp)

            with open("../src/components/data/newBike.json", "w") as outfile:
                json.dump(last_new_bike_data, outfile, indent=4)

        print ("Data written to newBike.json!")
        return last_new_bike_data

print ("When did you last get a new bike?", new_bike());

def spend_maintenance():
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        spend_maintenance = {
            "less than $100": 0,
            "$100-$300": 0,
            "$300-$500": 0,
            "$500-$1000": 0,
            "$1000+": 0,
        }
        for entry in data:
            for key, value in entry.items():
                if key == "How much do you spend in an average year on bike maintenance?":
                    for v in spend_maintenance:
                        if v == value:
                            spend_maintenance[v] += 1
        
        spend_maintenance_data = []

        for value in spend_maintenance:
            temp = {
                "answer": value,
                "value": spend_maintenance[value],
            }
            spend_maintenance_data.append(temp)

            with open("../src/components/data/spendMaintenance.json", "w") as outfile:
                json.dump(spend_maintenance_data, outfile, indent=4)

        print ("Data written to spendMaintenance.json!")
        return spend_maintenance_data

print("How much do you spend in an average year on bike maintenance?", spend_maintenance());

def last_purchase():

     with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        last_new_bike = {
            "Within the last year": 0,
            "1-3 years ago": 0,
            "3-5 years ago": 0,
            "6-10 years ago": 0,
            "10+ years ago": 0,
        }


        for entry in data:
            for key, value in entry.items():
                if key == "When did you last make a purchase at a local bike shop?":
                    for v in last_new_bike:
                        if v == value:
                            last_new_bike[v] += 1
        
        last_new_bike_data = []

        for value in last_new_bike:
            temp = {
                "answer": value,
                "value": last_new_bike[value],
            }
            last_new_bike_data.append(temp)

            with open("../src/components/data/lastPurchase.json", "w") as outfile:
                json.dump(last_new_bike_data, outfile, indent=4)

        print ("Data written to lastPurchase.json!")
        return last_new_bike_data

print ("When did you last make a purchase at a local bike shop?", last_purchase());

def last_service():

     with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        last_new_bike = {
            "Within the last year": 0,
            "1-3 years ago": 0,
            "3-5 years ago": 0,
            "6-10 years ago": 0,
            "10+ years ago": 0,
        }


        for entry in data:
            for key, value in entry.items():
                if key == "When did you last have your bike serviced at a shop?":
                    for v in last_new_bike:
                        if v == value:
                            last_new_bike[v] += 1
        
        last_new_bike_data = []

        for value in last_new_bike:
            temp = {
                "answer": value,
                "value": last_new_bike[value],
            }
            last_new_bike_data.append(temp)

            with open("../src/components/data/lastService.json", "w") as outfile:
                json.dump(last_new_bike_data, outfile, indent=4)

        print ("Data written to lastService.json!")
        return last_new_bike_data

print ("When did you last have your bike serviced at a shop?", last_service());


