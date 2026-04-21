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