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

print("How long have you been riding bikes?", how_long_have_you_been_a_biker())