import json
import csv

######################
# EXPERIMENT STRINGS #
######################
english_dict = dict()
french_dict = dict()
dutch_dict = dict()

with open('translations_strings.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile, dialect='excel', delimiter=';')
    for row in reader:
        english_dict.update({row["variable"]: row["English"]})
        french_dict.update({row["variable"]: row["French"]})
        dutch_dict.update({row["variable"]: row["Dutch"]})
 

strings_dict = dict(English = english_dict,
                    Dutch = dutch_dict,
                    French = french_dict)

with open('json_translations.txt', 'w') as json_file:
    json.dump(strings_dict, json_file, indent=4, ensure_ascii=False)
    
print(json.dumps(strings_dict, indent=4, ensure_ascii=False)) # Pretty print JSON

##############
# HTML PAGES #
##############

from os import listdir
from os.path import isfile, join

path = "html_files/"
onlyfiles = [f for f in listdir(path) if isfile(join(path, f))]
html_content = dict()
for filename in onlyfiles:
    with open(path+filename, 'r') as file:
        html_content.update({filename: file.read()})

with open('json_html_content.txt', 'w') as json_file:
    json.dump(html_content, json_file, indent=4, ensure_ascii=False)


###############
# OCCUPATIONS #
###############
occupations_english_dict = list()
occupations_french_dict = list()
occupations_dutch_dict = list()

with open('translations_occupations.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile, dialect='excel', delimiter=';')
    for row in reader:
        #print(row)
        occupations_english_dict.append({"noun": row["occupation"],
                                          "occupation_M": row["English_M"],
                                          "occupation_F":row["English_F"]})
        occupations_french_dict.append({"noun": row["occupation"],
                                          "occupation_M": row["French_M"],
                                          "occupation_F":row["French_F"]})
        occupations_dutch_dict.append({"noun": row["occupation"],
                                          "occupation_M": row["Dutch_M"],
                                          "occupation_F":row["Dutch_F"]})


occupation_dict = dict(English = occupations_english_dict,
                       Dutch = occupations_dutch_dict,
                       French = occupations_french_dict)

with open('json_occupations.txt', 'w') as json_file:
    json.dump(occupation_dict, json_file, indent=4, ensure_ascii=False)

print(json.dumps(occupation_dict, indent=4, ensure_ascii=False)) # Pretty print JSON
