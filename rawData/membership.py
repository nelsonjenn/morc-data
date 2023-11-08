# Have you ever been a MORC member before?
# Yes
# No
# Are you currently a MORC member
# Yes
# No
# If yes, how long have you continuously been MORC member?
# N/A
# 1 year
# 2-3 years
# 4-5 years
# 6-10 years
# 11-15 years
# 16-20
# 20+ years

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

membershipAnswers = {
    "Yes": 0,
    "No": 0,
}
membershipQuestion =  "Have you ever been a MORC member?"
membershipFileName = "everBeenMORCMember.json"

print("Are You a member: ", makeJson(membershipAnswers, membershipQuestion, membershipFileName))

currentMemberAnswers = {
    "Yes": 0,
    "No": 0,
}
currentMemberQuestion =  "Are you currently a MORC member"
currentMemberFileName = "currentlyMORCMember.json"

print("Are You a current member: ", makeJson(currentMemberAnswers, currentMemberQuestion, currentMemberFileName))

lengthOfMembershipAnswers = {
    "N/A": 0,
    "1 year": 0,
    "2-3 years": 0,
    "4-5 years": 0,
    "6-10 years": 0,
    "11-15 years": 0,
    "16-20": 0,
    "20+ years": 0,
}
lengthOfMembershipQuestion =  "If yes, how long have you continuously been MORC member?"
lengthOfMembershipFileName = "lengthOfMembership.json"

print("Length of membership: ", makeJson(lengthOfMembershipAnswers, lengthOfMembershipQuestion, lengthOfMembershipFileName))

