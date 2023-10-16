import json

# this is a hot mess, and it doesn't work for crap.
def how_long_off_road():
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        how_long_off_road = [
           {
                "text": "Less than 5 years", 
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "text": "6-10 years", 
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                "text": "11-15 years",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                
                "text": "16-25 years",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
            {
                
                "text": "25+ years",
                "answers": 0,
                "Female": 0,
                "Male": 0,
                "Nonbinary": 0,
                "Other": 0,
                "Prefer not to say": 0,
            },
        ]

    for entry in data:
        for key, value in entry.items():
            if key == "How long have you been riding off-road trails?":
                for v in how_long_off_road:
                    if v["text"] == value:
                        v["answers"] += 1
                        v[entry["To which gender do you most identify?"]]+=1
         

   
    how_long_off_road_data = []

    for answer in how_long_off_road:
        answer_data = {"answer": answer}
        how_long_off_road_data.append(answer_data)

    # Write to a JSON file

    with open("../src/components/data/howLongOffRoad.json", "w") as outfile:
        json.dump(how_long_off_road, outfile, indent=4)

    print("Data written to howLongOffRoad.json!")

    return how_long_off_road_data

print("How long have you been riding off-road trails?", how_long_off_road())

# This works..... but it's not the best way to do it.
def outstate_riding():

    #How often do you ride outside of the Twin Cities Region?
    with open("./morc_data.json", "r") as json_file:
        data = json.load(json_file)

        outstate_riding = {
            "Less than once a month": 0,
            "Once a month": 0,
            "A few times a month": 0,
            "Once a week": 0,
            "A few times a week": 0,
            "Every day": 0,
        }

        for entry in data:
            for key, value in entry.items():
                if key == "How often do you ride outside of the Twin Cities Region?":
                    for v in outstate_riding:
                        if v in value:
                            outstate_riding[v] += 1

        outstate_riding_data = []
        for ride in outstate_riding:
            ride_data = {"answer": ride, "value": outstate_riding[ride]}
            outstate_riding_data.append(ride_data)

    with open("../src/components/data/outstateRiding.json", "w") as outfile:
        json.dump(outstate_riding_data, outfile, indent=4)

    print("Data written to outstate riding data.json!")
    return outstate_riding_data

#print("How often do you ride outside of the Twin Cities Region?", outstate_riding());


