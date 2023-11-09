import json
from difflib import SequenceMatcher
def clean_up_non_morc():
    with open("non_morc_trails.json", "r") as json_file:
        data = json.load(json_file)

        answers = [
            {
            "text": "tioga",
            "value": 0
            },
            {
            "text": "cuyuna",
            "value": 0
            },
            {
            "text": "camba",
            "value": 0
            },
            {
            "text": "redhead",
            "value": 0
            },
            {
            "text": "spirit",
            "value": 0
            },
            {
            "text": "whitetail",
            "value": 0
            },
            {
            "text": "willow",
            "value": 0
            },
            {
            "text": "north shore",
            "value": 0
            },
        ]

        # go over data, and if text entries are similar combine those entries, adding values and deleting
        for entry in data:
                for answer in answers:
                    if SequenceMatcher(entry["text"], answer["text"]).ratio() > 0.5:
                        print("Found similar entries: " + entry["text"] + " and " + answer["text"])
                        answer["value"] += entry["value"]

        print(answers)

clean_up_non_morc()