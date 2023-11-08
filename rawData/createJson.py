import json
def makeJson(answers, question, fileName):
     
    with open("morc_data.json", "r") as json_file:
        data = json.load(json_file)
        for entry in data:
            for key, value in entry.items():
                if key == question:
                    for v in answers:
                        if v in value:
                            answers[v] += 1
        print(answers)
        question_data = []
        for q in answers:
            temp_data = {"answer": q, "value": answers[q]}
            question_data.append(temp_data)

        filePath = "../src/components/data/" + fileName 
        with open(filePath, "w") as outfile:
            json.dump(question_data, outfile, indent=4)

    return question_data