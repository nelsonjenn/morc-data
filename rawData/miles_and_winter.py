#  "How many off-road miles do you cycle each year?": "201-500 miles",
#         "How many total miles do you cycle each year?": "500+ miles",
#         "Do you ride in the winter/snow?": "No",
#         "What percentage of your cycling is winter/snow riding?": "0%",

import json

def riding_miles():

    #How often do you ride outside of the Twin Cities Region?
    with open("./morc_data.json", "r") as json_file:
        data = json.load(json_file)

        dirt_riding_miles = {
            "Less than 50 miles": 0,
            "51-100 miles": 0,
            "101-200 miles": 0,
            "201-500 miles": 0,
            "500+ miles": 0,
        }

        total_riding_miles = {
            "Less than 50 miles": 0,
            "51-100 miles": 0,
            "101-200 miles": 0,
            "201-500 miles": 0,
            "500+ miles": 0,
        }
        for entry in data:
            for key, value in entry.items():
                if key == "How many off-road miles do you cycle each year?":
                    for v in dirt_riding_miles:
                        if v in value:
                            dirt_riding_miles[v] += 1
                if key == "How many total miles do you cycle each year?":
                    for v in total_riding_miles:
                        if v in value:
                            total_riding_miles[v] += 1

        riding_miles_data = []
        for ride in dirt_riding_miles:
            ride_data = {"answer": ride, "dirt": dirt_riding_miles[ride], "total": total_riding_miles[ride]}
            riding_miles_data.append(ride_data)

    with open("../src/components/data/ridingMiles.json", "w") as outfile:
        json.dump(riding_miles_data, outfile, indent=4)

    print("Data written to riding mile data.json!")
    return riding_miles_data

print("How often do you ride outside of the Twin Cities Region?", riding_miles());

def winter_percentage():
     with open("./morc_data.json", "r") as json_file:
        data = json.load(json_file)

        winter_percentage = {
            "0%": 0,
            "10% or less": 0,
            "11-25%": 0,
            "26-50%": 0,
            "51-75%": 0,
            "76-99%": 0,
            "100%": 0,
            
        }
        for entry in data:
            for key, value in entry.items():
                if key == "What percentage of your cycling is winter/snow riding?":
                    for v in winter_percentage:
                        if v in value:
                            winter_percentage[v] += 1

        winter_data = []
        for ride in winter_percentage:
            temp_data = {"answer": ride, "count": winter_percentage[ride]}
            winter_data.append(temp_data)

        with open("../src/components/data/winterPercentage.json", "w") as outfile:
            json.dump(winter_data, outfile, indent=4)

        print("Data written to winterPercentage data.json!")
        return winter_data

print("Do you ride in the winter/snow?", winter_percentage());

def winter_yes_no():
     with open("./morc_data.json", "r") as json_file:
        data = json.load(json_file)

        winter_yes_no = {
            "Yes": 0,
            "No": 0,
        }
        for entry in data:
            for key, value in entry.items():
                if key == "Do you ride in the winter/snow?":
                    for v in winter_yes_no:
                        if v in value:
                            winter_yes_no[v] += 1

        winter_data = []
        for ride in winter_yes_no:
            temp_data = {"answer": ride, "count": winter_yes_no[ride]}
            winter_data.append(temp_data)

        with open("../src/components/data/winterYesNo.json", "w") as outfile:
            json.dump(winter_data, outfile, indent=4)

        print("Data written to winterYesNo data.json!")
        return winter_data

print("Do you ride in the winter/snow?", winter_yes_no());


