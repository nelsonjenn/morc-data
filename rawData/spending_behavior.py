import json

def number_of_bikes_owned():

    #How many bikes do you own?
    with open("./morc_data.json", "r") as json_file:
        data = json.load(json_file)

        number_of_bikes = {
            "1": 0,
            "2": 0,
            "3": 0,
            "4": 0,
            "5": 0,
            "6-10": 0,
            "10+": 0,

        }

        for entry in data:
            for key, value in entry.items():
                if key == "How many bikes do you own?":
                    for v in number_of_bikes:
                        if v in value:
                            number_of_bikes[v] += 1

        number_of_bikes_data = []
        for ride in number_of_bikes:
            ride_data = {"answer": ride, "value": number_of_bikes[ride]}
            number_of_bikes_data.append(ride_data)

    with open("../src/components/data/numberOfBikes.json", "w") as outfile:
        json.dump(number_of_bikes_data, outfile, indent=4)

    print("Data written number of bikes data.json!")
    return number_of_bikes_data

print("How often do you ride outside of the Twin Cities Region?", number_of_bikes_owned());

def spend_on_bikes_owned():

    #How much did you spend on the bike you ride most often?
    with open("./morc_data.json", "r") as json_file:
        data = json.load(json_file)

        spend_on_bikes = {
            "Gift/Hand me down": 0,
            "Less than $1000": 0,
            "$1001-$1999": 0,
            "$2000-$2999": 0,
            "$3000-$3999": 0,
            "$4000-$4999": 0,
            "$5000+": 0,

        }

        for entry in data:
            for key, value in entry.items():
                if key == "How much did you spend on the bike you ride most often?":
                    for v in spend_on_bikes:
                        if v in value:
                            spend_on_bikes[v] += 1

        spend_on_bikes_data = []
        for ride in spend_on_bikes:
            ride_data = {"answer": ride, "value": spend_on_bikes[ride]}
            spend_on_bikes_data.append(ride_data)

    with open("../src/components/data/spendOnBikes.json", "w") as outfile:
        json.dump(spend_on_bikes_data, outfile, indent=4)

    print("Data written to spend on bikes.json!")
    return spend_on_bikes_data

print("How much did you spend on the bike you ride most often?", spend_on_bikes_owned());