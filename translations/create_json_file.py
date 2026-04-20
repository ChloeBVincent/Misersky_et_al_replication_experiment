import json
import csv

english_dict = dict()
french_dict = dict()
dutch_dict = dict()

with open('translations_strings.csv', newline='', encoding='utf-8') as csvfile:
    reader = csv.DictReader(csvfile, dialect='excel', delimiter=';')
    for row in reader:
        english_dict.update({row["variable"]: row["English"]})
        french_dict.update({row["variable"]: row["French"]})
        dutch_dict.update({row["variable"]: row["Dutch"]})
 

new_dict = dict(English = english_dict, 
                Dutch = dutch_dict, 
                French = french_dict)

with open('json_translations.txt', 'w') as json_file:
    json.dump(new_dict, json_file, indent=4, ensure_ascii=False)
    
print(json.dumps(new_dict, indent=4, ensure_ascii=False)) # Pretty print JSON


