import json


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


def how_often_do_you_ride():
    # How often do you ride MORC Trails?
    with open("./morc_data.json", "r") as json_file:
        data = json.load(json_file)

        how_often_do_you_ride = {
            "Less than once a month": 0,
            "Once a month": 0,
            "A few times a month": 0,
            "About once a week": 0,
            "More than three times per week": 0,
            "Never": 0,
        }
        outstate_riding = {
            "Less than once a month": 0,
            "Once a month": 0,
            "A few times a month": 0,
            "Once a week": 0,
            "A few times a week": 0,
            "Every day": 0,
            "Never": 0,
        }

        for entry in data:
            for key, value in entry.items():
                if key == "How often do you ride MORC Trails?":
                    for v in how_often_do_you_ride:
                        if v in value:
                            how_often_do_you_ride[v] += 1
                if key == "How often do you ride outside of the Twin Cities Region?":
                    for v in outstate_riding:
                        if v in value:
                            outstate_riding[v] += 1

        how_often_do_you_ride_data = []
        outstate_ride = ""
        for ride in how_often_do_you_ride:
            if ride == "Less than once a month":
                outstate_ride = "Less than once a month"
            elif ride == "Once a month":
                outstate_ride = "Once a month"
            elif ride == "A few times a month":
                outstate_ride = "A few times a month"
            elif ride == "About once a week":
                outstate_ride = "Once a week"
            elif ride == "More than three times per week":
                outstate_ride = "A few times a week"
            elif ride == "Never":
                outstate_ride = "Never"
            temp_data = {"answer": ride, "MetroRides": how_often_do_you_ride[ride], "OutstateRides": outstate_riding[outstate_ride]}            
            how_often_do_you_ride_data.append(temp_data)

    with open("../src/components/data/howOftenDoYouRide.json", "w") as outfile:
        json.dump(how_often_do_you_ride_data, outfile, indent=4)
    
    with open("../src/components/data/outstateRiding.json", "w") as outfile:
        json.dump(outstate_riding, outfile, indent=4)

    print(
        "Data written to How Often Do You Ride!"
    )
    return how_often_do_you_ride_data

print("How Often do you ride: ", how_often_do_you_ride())

