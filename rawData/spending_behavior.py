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

    print("Data written to outstate riding data.json!")
    return number_of_bikes_data

print("How often do you ride outside of the Twin Cities Region?", number_of_bikes_owned());
