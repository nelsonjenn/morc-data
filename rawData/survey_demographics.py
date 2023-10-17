import json


def how_long_have_you_been_a_biker():
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        biker = [
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
            if key == "How long have you been riding bikes?":
                for v in biker:
                    if v["text"] == value:
                        v["answers"] += 1
                        v[entry["To which gender do you most identify?"]]+=1
         

   
    biker_data = []

    for answer in biker:
        answer_data = {"answer": answer}
        biker_data.append(answer_data)

    # Write to a JSON file

    with open("../src/components/data/howLongBiker.json", "w") as outfile:
        json.dump(biker, outfile, indent=4)

    print("Data written to howLongBiker.json!")

    return biker_data

#print("How long have you been riding bikes?", how_long_have_you_been_a_biker())

def gender():

    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        gender = {
            "Female": 0,
            "Male": 0,
            "Nonbinary": 0,
            "Other": 0,
            "Prefer not to say": 0,
        }  

        for entry in data:
            for key, value in entry.items():
                if key == "To which gender do you most identify?":
                    for v in gender:
                        if v in value:
                            gender[v] += 1

        gender_data = []
        for g in gender:
            temp_data = {"answer": g, "value": gender[g]}
            gender_data.append(temp_data)

        with open("../src/components/data/gender_data.json", "w") as outfile:
            json.dump(gender_data, outfile, indent=4)

    return gender_data

print("gender run", gender());

def race():

    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        race = {
            "White": 0,
            "Black or African American": 0,
            "American Indian, Alaska Native or First Nations": 0,
            "Asian": 0,
            "Other": 0,
        }  

        for entry in data:
            for key, value in entry.items():
                if key == "To which race do you most identify?":
                    for v in race:
                        if v in value:
                            race[v] += 1

        race_data = []
        for g in race:
            temp_data = {"answer": g, "value": race[g]}
            race_data.append(temp_data)

        with open("../src/components/data/race_data.json", "w") as outfile:
            json.dump(race_data, outfile, indent=4)

    return race_data

print("race run", race());