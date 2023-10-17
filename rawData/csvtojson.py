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

# First update the data from the CSV export from Google Docs
print(f"Data has been converted from {input_filename} to {output_filename}")

# Now, update all of the json files for each graph set
import bike_shop
print ("When did you last get a new bike?", bike_shop.new_bike());
print("How much do you spend in an average year on bike maintenance?", bike_shop.spend_maintenance());
print ("When did you last make a purchase at a local bike shop?", bike_shop.last_purchase());
print ("When did you last have your bike serviced at a shop?", bike_shop.last_service());

import data_management
print("What type(s) of bike do you currently ride?", data_management.bikes())
print("where do you ride:", data_management.where_do_you_ride())
print("Have you ever volunteered on a trail work day?", data_management.is_trail_volunteer())
print("Where do you volunteer", data_management.where_do_you_volunteer())
print("How Often do you ride: ", data_management.how_often_do_you_ride())
print("combined trail data", data_management.combine_trail_data())
print("What is your favorite MORC trail?", data_management.favorite_trail())

import miles_and_winter
print("How often do you ride outside of the Twin Cities Region?", miles_and_winter.riding_miles());
print("Do you ride in the winter/snow?", miles_and_winter.winter_percentage());
print("Do you ride in the winter/snow?", miles_and_winter.winter_yes_no());

import riding_behavior
print("How long have you been riding off-road trails?", riding_behavior.how_long_off_road())
print("How often do you ride?", riding_behavior.how_often_do_you_ride())




import spending_behavior
print("How many bikes do you own?", spending_behavior.number_of_bikes_owned())
print("How much did you spend on the bike you ride most often?", spending_behavior.spend_on_bikes_owned())

import survey_demographics
print("How long have you been riding bikes?", survey_demographics.how_long_have_you_been_a_biker())
