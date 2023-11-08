import json

def where_do_you_ride():
    # Which MORC trails have you ridden? By Gender

    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        park_data = [
            {
                "park": "Battle Creek",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Bertram",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Carver Lake",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Cottage Grove Bike Park",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Elm Creek",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Hillside",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,

            },
            {
                "park": "Lake Rebecca",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Lebanon Hills",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Lone Lake Park",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "MN River Bottoms",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Monarch",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Murphy Hanrehan",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Rice Creek",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Salem Hills",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Sunfish Lake Park",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Terrace Oaks",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Theodore Wirth Park",
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
                if key == "Which MORC trails have you ridden?":
                    for v in park_data:
                        if v["park"] in value:
                            v["answers"] += 1
                            v[entry["To which gender do you most identify?"]] += 1
                       


        # Write to a JSON file

    with open("../src/components/data/whereDoYouRideByGender.json", "w") as outfile:
        json.dump(park_data, outfile, indent=4)

    print("Data written to whereDoYouRideByGender.json")

    return park_data

where_do_you_ride()

import json

def favorite_ride():
    # Which favorite MORC trail? By Gender

    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        park_data = [
            {
                "park": "Battle Creek",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Bertram",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Carver Lake",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Cottage Grove Bike Park",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Elm Creek",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Hillside",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,

            },
            {
                "park": "Lake Rebecca",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Lebanon Hills",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Lone Lake Park",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "MN River Bottoms",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Monarch",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Murphy Hanrehan",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Rice Creek",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Salem Hills",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Sunfish Lake Park",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Terrace Oaks",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "park": "Theodore Wirth Park",
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
                if key == "What is your favorite MORC trail?":
                    for v in park_data:
                        if v["park"] in value:
                            v["answers"] += 1
                            v[entry["To which gender do you most identify?"]] += 1
                       


        # Write to a JSON file

    with open("../src/components/data/favoriteMORCtrailByGender.json", "w") as outfile:
        json.dump(park_data, outfile, indent=4)

    print("Data written to favoriteMORCtrailByGender.json")

    return park_data

favorite_ride()