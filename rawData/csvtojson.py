import csv
import json


# Input and output file names
input_filename = "data.csv"
output_filename = "morc_data.json"

# Read the CSV file and convert it to a list of dictionaries
with open(input_filename, "r") as csv_file:
    reader = csv.DictReader(csv_file)
    entries = [row for row in reader]

    # Handle 'null' strings
    for entry in entries:
        for key, value in entry.items():
            if value == "null":
                entry[key] = None

# Write the list of dictionaries to a JSON file
with open(output_filename, "w") as json_file:
    json.dump(entries, json_file, indent=4)

print(f"Data has been converted from {input_filename} to {output_filename}")
