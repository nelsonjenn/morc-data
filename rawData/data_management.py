import json


trails = {
    "Battle Creek",
    "Bertram",
    "Carver Lake",
    "Cottage Grove Bike Park",
    "Elm Creek",
    "Hillside",
    "Lake Rebecca",
    "Lebanon Hills",
    "Lone Lake Park",
    "MN River Bottoms",
    "Monarch",
    "Murphy Hanrehan",
    "Rice Creek",
    "Salem Hills",
    "Sunfish Lake Park",
    "Terrace Oaks",
    "Theodore Wirth Park",
}


def bikes():
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)
        # What type(s) of bike do you currently ride?
        # sum the types and number of bikes listed in the data

        bikes = {
            "Hard Tail Mountain": 0,
            "Full Suspension Mountain": 0,
            "Fat Bike": 0,
            "Gravel": 0,
            "Hybrid": 0,
            "BMX": 0,
            "Other": 0,
            "E-bike": 0,
            "Cyclocross": 0,
            "Road": 0,
        }
        for entry in data:
            for key, value in entry.items():
                if key == "What type(s) of bike do you currently ride?":
                    for bike in bikes:
                        if bike in value:
                            bikes[bike] += 1

    what_bikes_data = []
    for bike in bikes:
        bike_data = {"bike": bike, "value": bikes[bike]}
        what_bikes_data.append(bike_data)

    return what_bikes_data


# print("What type(s) of bike do you currently ride?", bikes())


def where_do_you_ride():
    # Which MORC trails have you ridden?

    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        park_list = {
            "Battle Creek": 0,
            "Bertram": 0,
            "Carver Lake": 0,
            "Cottage Grove Bike Park": 0,
            "Elm Creek": 0,
            "Hillside": 0,
            "Lake Rebecca": 0,
            "Lebanon Hills": 0,
            "Lone Lake Park": 0,
            "MN River Bottoms": 0,
            "Monarch": 0,
            "Murphy Hanrehan": 0,
            "Rice Creek": 0,
            "Salem Hills": 0,
            "Sunfish Lake Park": 0,
            "Terrace Oaks": 0,
            "Theodore Wirth Park": 0,
        }

        for entry in data:
            for key, value in entry.items():
                if key == "Which MORC trails have you ridden?":
                    for park in park_list:
                        if park in value:
                            park_list[park] += 1

        favorite_park_data = []
        for park in park_list:
            park_data = {"park": park, "value": park_list[park]}
            favorite_park_data.append(park_data)

    return favorite_park_data


# print("where do you ride:", where_do_you_ride())


def is_trail_volunteer():
    # Have you ever volunteered on a trail work day?
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        volunteer = {
            "Yes": 0,
            "No": 0,
        }

        for entry in data:
            for key, value in entry.items():
                if key == "Have you ever volunteered at a MORC trail work session?":
                    for v in volunteer:
                        if v in value:
                            volunteer[v] += 1

    return volunteer


# print("Have you ever volunteered on a trail work day?", is_trail_volunteer())


def where_do_you_volunteer():
    # If yes, which trail(s) have you volunteered at?
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        where_do_you_volunteer = {
            "Battle Creek": 0,
            "Bertram": 0,
            "Carver Lake": 0,
            "Cottage Grove Bike Park": 0,
            "Elm Creek": 0,
            "Hillside": 0,
            "Lake Rebecca": 0,
            "Lebanon Hills": 0,
            "Lone Lake Park": 0,
            "MN River Bottoms": 0,
            "Monarch": 0,
            "Murphy Hanrehan": 0,
            "Rice Creek": 0,
            "Salem Hills": 0,
            "Sunfish Lake Park": 0,
            "Terrace Oaks": 0,
            "Theodore Wirth Park": 0,
        }

        for entry in data:
            for key, value in entry.items():
                if key == "If yes, which trail(s) have you volunteered at?":
                    for v in where_do_you_volunteer:
                        if v in value:
                            where_do_you_volunteer[v] += 1
        
        where_do_you_volunteer_data = []
        for park in where_do_you_volunteer:
            park_data = {"park": park, "value": where_do_you_volunteer[park]}
            where_do_you_volunteer_data.append(park_data)

    return where_do_you_volunteer_data


# print("Where do you volunteer", where_do_you_volunteer())


def how_often_do_you_ride():
    # How often do you ride MORC Trails?
    with open("./morc_data.json", "r") as json_file:
        data = json.load(json_file)

        how_often_do_you_ride = {
            "Once a month": 0,
            "A few times a month": 0,
            "About once a week": 0,
            "More than three times per week": 0,
            "Never": 0,
        }

        for entry in data:
            for key, value in entry.items():
                if key == "How often do you ride MORC Trails?":
                    for v in how_often_do_you_ride:
                        if v in value:
                            how_often_do_you_ride[v] += 1

        how_often_do_you_ride_data = []
        for ride in how_often_do_you_ride:
            temp_data = {"answer": ride, "value": how_often_do_you_ride[ride]}
            how_often_do_you_ride_data.append(temp_data)

    with open("../src/components/data/howOftenDoYouRide.json", "w") as outfile:
        json.dump(how_often_do_you_ride_data, outfile, indent=4)

    print(
        "Data written to How Often Do You Ride!"
    )
    return how_often_do_you_ride_data

print("How Often do you ride: ", how_often_do_you_ride())

def favorite_trail():
    # What is your favorite MORC trail?
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        favorite_trail = {
            "Battle Creek": 0,
            "Bertram": 0,
            "Carver Lake": 0,
            "Cottage Grove Bike Park": 0,
            "Elm Creek": 0,
            "Hillside": 0,
            "Lake Rebecca": 0,
            "Lebanon Hills": 0,
            "Lone Lake Park": 0,
            "MN River Bottoms": 0,
            "Monarch": 50,
            "Murphy Hanrehan": 0,
            "Rice Creek": 0,
            "Salem Hills": 0,
            "Sunfish Lake Park": 0,
            "Terrace Oaks": 0,
            "Theodore Wirth Park": 0,
        }

        for entry in data:
            for key, value in entry.items():
                if key == "What is your favorite MORC trail?":
                    for v in favorite_trail:
                        if v in value:
                            favorite_trail[v] += 1

        favorite_trail_data = []
        for park in favorite_trail:
            park_data = {"park": park, "value": favorite_trail[park]}
            favorite_trail_data.append(park_data)

        with open("../src/components/data/favorite_data.json", "w") as outfile:
            json.dump(favorite_trail_data, outfile, indent=4)

    return favorite_trail_data

print("What is your favorite MORC trail?", favorite_trail())

def combine_trail_data():
    favorite_trail_data = favorite_trail()
    print(
        "\n\n\nfavorite_trail_data:", favorite_trail_data, "\n\n\n"
    )  # Check the type and content of the returned data

    where_do_you_volunteer_data = where_do_you_volunteer()
    print(
        "where_do_you_volunteer_data:", where_do_you_volunteer_data, "\n\n\n"
    )  # Similar check here

    where_do_you_ride_data = where_do_you_ride()
    print("where_do_you_ride_data:", where_do_you_ride_data, "\n\n\n\n\n")  # And here

    combined_data = []
    # combined_data = { "park": "Battle Creek", "favorite_trail": 0, "where_do_you_volunteer": 0, "where_do_you_ride": 0"}

    for park in trails:
        park_name = next(
            item["park"] for item in favorite_trail_data if item["park"] == park
        )
        volunteer_value = next(
            (
                item["value"]
                for item in where_do_you_volunteer_data
                if item["park"] == park_name
            ),
            None,
        )
        where_do_you_ride_value = next(
            (
                item["value"]
                for item in where_do_you_ride_data
                if item["park"] == park_name
            ),
            None,
        )
        favorite_trail_value = next(
            (
                item["value"]
                for item in favorite_trail_data
                if item["park"] == park_name
            ),
            None,
        )

        park_data = {
            "park": park_name,
            "favorite": favorite_trail_value,
            "volunteer": volunteer_value,
            "ride": where_do_you_ride_value,
        }
        combined_data.append(park_data)
    # Write to a JSON file

    with open("../src/components/data/trail_data.json", "w") as outfile:
        json.dump(combined_data, outfile, indent=4)

    print(
        "Data written to trail_data.json!"
    )  

    return combined_data

print("combined trail data", combine_trail_data())
