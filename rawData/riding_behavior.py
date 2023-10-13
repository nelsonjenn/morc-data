import json


def how_long_off_road():
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        how_long_off_road = {
           {
                "text": "less than 5 years",  # is this better?
                "answers": 60,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "text": "6-10 years": 
                "answers": 59,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "text": "11-15 years",
                "answers": 32,
                
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                
                "text": "16-25 years",
                "answers": 27,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                
                "text": "25+ years": 
                "answers": 42,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
        }

    for entry in data:
        for key, value in entry.items():
            if key == "How long have you been riding off-road trails?":
                for v in how_long_off_road:
                    if v in value:
                        how_long_off_road[0][v] += 1
            if key == "To which gender do you most identify?":
                for v in how_long_off_road:
                    if v in value:
                        how_long_off_road[1][v] += 1

    print(how_long_off_road)
    how_long_off_road_data = []

    for answer in how_long_off_road:
        answer_data = {"answer": answer, "value": how_long_off_road[answer]}
        how_long_off_road_data.append(answer_data)

    # Write to a JSON file

    with open("howLongOffRoad.json", "w") as outfile:
        json.dump(how_long_off_road_data, outfile, indent=4)

    print("Data written to howLongOffRoad.json!")

    return how_long_off_road_data


print("How long have you been riding off-road trails?", how_long_off_road())
