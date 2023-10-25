import json

def favorite_non_morc_trail():
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        non_morc_trail = {}

        for entry in data:
            for key, value in entry.items():
                value = value.strip().lower()
                if key == "What is your favorite non-MORC trail?":
                    if value in non_morc_trail:
                        non_morc_trail[value] += 1
                    else:
                        non_morc_trail[value] = 1
    
        output_json = []
     
        for key, value in non_morc_trail.items():
            temp = {"text": key, "value": value*10}
            output_json.append(temp)

    # Write to a JSON file

        with open("../src/components/data/non_morc_trails.json", "w") as outfile:
            json.dump(output_json, outfile, indent=4)

        print("Data written to non_morc_trail.json!")

        return output_json

print("What is your favorite non-MORC trail?", favorite_non_morc_trail())