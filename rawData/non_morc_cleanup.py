import json
from difflib import SequenceMatcher
from collections import Counter
from thefuzz import fuzz

def clean_up_non_morc():
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)

        
        question = "What is your favorite non-MORC trail?"
        answers = ""
        for entry in data:
            for key, value in entry.items():
                if key == question:
                    answers += value + " "        
        answers = answers.strip().lower()
        answers = answers.replace("?", "")
        answers = answers.replace(".", "")
        answers = answers.replace(",", "")
        answers = answers.replace("!", "")
        answers = answers.replace(":", "")
        answers = answers.replace(";", "")
        answers = answers.replace("(", "")
        answers = answers.replace(")", "")

        

        word_list = answers.split()
        print(word_list)

        parks = {'pincushion', 'tioga', 'cuyuna', 'camba', 'redhead', 'spirit', 'whitetail', 'willow', 'north shore', 'lutsen', 'monarch', 'bentonville', 'arkansas', 'hawks', 'jackpot', 'duluth', 'crosby', 'rock', 'loppet', 'kinnick', 'wool', 'piedmont', 'hidden', 'mankato', 'mammoth'}
        final_parks = {}
        for word in word_list:
            for park in parks:
                if fuzz.ratio(word, park) > 55:
                   
                    final_parks[park] = final_parks.get(park, 0) + 1
                    
        # initializing a dictionary
        d = {};

        # counting number of times each word comes up in list of words
        for key in word_list: 
            d[key] = d.get(key, 0) + 1

        sorted(d.items(), key = lambda x: x[1], reverse = False)
        print(final_parks)

    #create the json file
    question_data = []
    fileName = "non_morc_data_filtered.json"
    for q in final_parks:
        temp_data = {"answer": q, "value": final_parks[q]}
        question_data.append(temp_data)

        filePath = "../src/components/data/" + fileName 
        with open(filePath, "w") as outfile:
            json.dump(question_data, outfile, indent=4)
        

clean_up_non_morc()