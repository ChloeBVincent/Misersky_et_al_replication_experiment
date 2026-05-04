const language = "Dutch"; //TODO: change depending on language

const all_translations = {
    "English": {
        "option_yes": "Yes",
        "option_no": "No",
        "option_pnts": "Prefer not to say",
        "button_agree": "I agree",
        "message_end": "Thanks bye",
        "question_age": "How old are you?",
        "button_start": "Start",
        "button_next": "Next",
        "option_gender_male": "Man",
        "option_gender_female": "Woman",
        "option_gender_nb": "Nonbinary",
        "option_gender_other": "Other",
        "label_ratio_men": "men",
        "label_ratio_women": "women",
        "option_education_1": "No education",
        "option_education_2": "Middle school",
        "option_education_3": "Higher education",
        "option_education_4": "Other",
        "option_education_5": "",
        "option_education_6": "",
        "option_education_7": "",
        "option_education_8": "",
        "message_transition": "You have now completed the first part of the study. We will now ask you a few questions about yourself and your experiences. If you do not wish to answer a question, you can select ‘Prefer not to say’.",
        "option_language_1": "Only English",
        "option_language_2": "English and another language",
        "option_language_3": "Only another language than English",
        "option_language_4": "",
        "option_language_5": "",
        "option_region_1": "England",
        "option_region_2": "Wales",
        "option_region_3": "Scotland",
        "option_region_4": "Ireland",
        "option_region_5": "Somewhere else",
        "option_region_6": "",
        "option_region_7": "",
        "option_region_8": "",
        "option_region_9": "",
        "option_region_10": "",
        "option_region_11": "",
        "option_region_12": "",
        "option_region_13": "",
        "question_region": "Where do you live? ",
        "question_gender": "What is your gender? ",
        "question_education": "What is your highest degree?",
        "question_language": "What language(s) were spoken at home in your youth?",
        "question_proportion": "Give your estimate of the ratio ",
        "title_instructions": "Instructions",
        "FOR THE NEXT 3 TEXTS, xxxx and yyyy will be replaced by women or men (based on the variables label_ratio that was translated above) depending on the scale order. ": "",
        "message_instructions_1": "In this study, we are interested in what people think the gender ratios are within different groups. Are most jewellers in the Netherlands xxxx or yyyy, or is it a 50/50 split?",
        "message_instructions_2": "During this task, you will be shown 25 nouns that refer to specific groups (such as ‘jewellers’). For each noun, we ask you to use a scale to indicate what you think the ratio of xxxx to yyyy is in the Netherlands within this group. This is simply your estimate of the current situation in the Netherlands; you do not need to know for certain.",
        "message_instructions_3": "When you are ready to begin, please click ‘Start’.",
        "title_document": "Gender proportions"
    },
    "Dutch": {
        "option_yes": "Ja",
        "option_no": "Nee",
        "option_pnts": "Zeg ik liever niet",
        "button_agree": "Ik ga akkoord",
        "message_end": "Jouw gegevens zijn bewaard. Hartelijk bedankt voor je deelname.",
        "question_age": "Wat is jouw leeftijd?",
        "button_start": "Beginnen",
        "button_next": "Verder",
        "option_gender_male": "Man",
        "option_gender_female": "Vrouw",
        "option_gender_nb": "Non-binair",
        "option_gender_other": "Anders",
        "label_ratio_men": "mannen",
        "label_ratio_women": "vrouwen",
        "option_education_1": "Geen opleiding",
        "option_education_2": "Middelbare school (VMBO, HAVO, VWO, etc.)",
        "option_education_3": "Middelbaar beroepsonderwijs (MBO)",
        "option_education_4": "Hoger beroepsonderwijs (HBO)",
        "option_education_5": "Wetenschappelijk onderwijs (Universiteit)",
        "option_education_6": "",
        "option_education_7": "",
        "option_education_8": "",
        "message_transition": "Je bent nu klaar met het eerste deel van de studie. Nu stellen we je enkele vragen over jezelf en je ervaringen. Als je een vraag niet wilt beantwoorden, kun je ‘Zeg ik liever niet’ selecteren.",
        "option_language_1": "Alleen Nederlands",
        "option_language_2": "Nederlands en dialect",
        "option_language_3": "Alleen dialect",
        "option_language_4": "Nederlands en een andere taal dan het Nederlands",
        "option_language_5": "Alleen een andere taal dan het Nederlands",
        "option_region_1": "Groningen",
        "option_region_2": "Friesland",
        "option_region_3": "Drenthe",
        "option_region_4": "Overijssel",
        "option_region_5": "Flevoland",
        "option_region_6": "Gelderland",
        "option_region_7": "Utrecht",
        "option_region_8": "Noord-Holland",
        "option_region_9": "Zuid-Holland",
        "option_region_10": "Zeeland",
        "option_region_11": "Noord-Brabant",
        "option_region_12": "Limburg",
        "option_region_13": "Ergens anders",
        "question_region": "In welke provincie woon je?",
        "question_gender": "Wat is jouw genderidentiteit?",
        "question_education": "Wat is je hoogst genoten opleiding",
        "question_language": "Welke talen werden thuis gesproken tijdens je jeugd?",
        "question_proportion": "Geef jouw inschatting aan van de verhouding van  ",
        "title_instructions": "Instructies",
        "FOR THE NEXT 3 TEXTS, xxxx and yyyy will be replaced by women or men (based on the variables label_ratio that was translated above) depending on the scale order. ": "",
        "message_instructions_1": "In deze studie zijn we geïnteresseerd in wat mensen denken dat de genderverhoudingen zijn binnen verschillende groepen. Zijn de meeste juweliers in Nederland vrouwen of juist mannen, of is het een 50/50 split?",
        "message_instructions_2": "Tijdens deze taak krijg je 25 zelfstandige naamwoorden te zien die verwijzen naar bepaalde groepen (zoals ‘juweliers’). Bij elk zelfstandig naamwoord vragen we je om met behulp van een schaal aan te geven wat je denkt dat de verhouding is tussen mannen en vrouwen in Nederland binnen deze groep. Het gaat hier alleen om jouw inschatting van de huidige stand van zaken in Nederland; je hoeft het niet zeker te weten.",
        "message_instructions_3": "Als je klaar bent om te beginnen, klik dan op ‘Beginnen’.",
        "title_document": "Genderverhoudingen"
    },
    "French": {
        "option_yes": "Oui",
        "option_no": "Non",
        "option_pnts": "Ne se prononce pas",
        "button_agree": "Je suis d'accord",
        "message_end": "Merci pour les données",
        "question_age": "Quel âge avez-vous ?",
        "button_start": "Commencer",
        "button_next": "Suivant",
        "option_gender_male": "Homme",
        "option_gender_female": "Femme",
        "option_gender_nb": "Non-binaire",
        "option_gender_other": "Autre",
        "label_ratio_men": "hommes",
        "label_ratio_women": "femmes",
        "option_education_1": "École obligatoire",
        "option_education_2": "Certificat fédéral de capacité CFC",
        "option_education_3": "École supérieure ES",
        "option_education_4": "Gymnase / collège / lycée",
        "option_education_5": "Bachelor",
        "option_education_6": "Master",
        "option_education_7": "Doctorat",
        "option_education_8": "Autre",
        "message_transition": "Vous avez maintenant terminé la première partie de l'étude. Nous allons maintenant vous poser quelques questions sur vous et votre parcours. Si vous ne souhaitez pas répondre à une question, vous pouvez sélectionner « Ne se prononce pas ».",
        "option_language_1": "Français uniquement",
        "option_language_2": "Français et une autre langue",
        "option_language_3": "Uniquement une autre langue que le français",
        "option_language_4": "",
        "option_language_5": "",
        "option_region_1": "Fribourg",
        "option_region_2": "Genève",
        "option_region_3": "Jura",
        "option_region_4": "Neuchâtel",
        "option_region_5": "Valais",
        "option_region_6": "Vaud",
        "option_region_7": "Autre",
        "option_region_8": "",
        "option_region_9": "",
        "option_region_10": "",
        "option_region_11": "",
        "option_region_12": "",
        "option_region_13": "",
        "question_region": "Dans quel canton vivez-vous ?",
        "question_gender": "Quel est votre genre ?",
        "question_education": "Quel est votre plus haut diplôme ?",
        "question_language": "Quelle(s) langue(s) était parlée(s) à la maison dans votre jeunesse ? ",
        "question_proportion": "Donnez votre estimation de la proportion ",
        "title_instructions": "Instructions",
        "FOR THE NEXT 3 TEXTS, xxxx and yyyy will be replaced by women or men (based on the variables label_ratio that was translated above) depending on the scale order. ": "",
        "message_instructions_1": "lilalou ",
        "message_instructions_2": "blebllbe",
        "message_instructions_3": "adsf",
        "title_document": "Proportions genrées"
    }
};
const all_htmls = {
    "consent_Dutch.html": "<img src=\"rugr_logonlv_rood_rgb.png\" style=\"width: 150px;\" alt=\"Rijksuniversiteit Groningen\"> \n<p>Dit is een studie over de perceptie van de genderverhoudingen voor verschillende groepen binnen de Nederlandse maatschappij.  \nDeze studie wordt uitgevoerd door dr.Â Alexander Martin en dr.Â Hans Wilke van de Rijksuniversiteit Groningen en  \nis goedgekeurd door de Commissie voor Ethische Toetsing Onderzoek van de Faculteiten der Letteren, Wijsbegeerte, en  \nScience and Engineering (projectnummer 99743463).</p> \n<div style=\"margin: 4px, 4px; padding: 4px; width: 750px; height: 200px; overflow-x: hidden; overflow-y: auto; text-align: left;\"> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>Waarom dit onderzoek?</strong><br/>Dit onderzoek zal ons een idee geven van hoe Nederlanders de  \nhoeveelheid mannen en vrouwen binnen verschillende groepen inschatten.</p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>Wat vragen we van je tijdens het onderzoek?</strong><br/>Deze  \nstudie bestaat uit twee delen. Voor het eerste deel zie je verschillende groepsnamen op het scherm en moet je  \naangeven hoeveel mannen en hoeveel vrouwen je denkt dat er daadwerkelijk zijn binnen die groep in Nederland.  \nVoor het tweede deel stellen we je enkele vragen over jou, zoals je leeftijd en genderidentiteit.</p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>Hoe gaan we met je gegevens om?</strong><br/>De verwerking van je  \ngegevens helpt ons om analyses uit te voeren over patronen van inschattingen. Jouw gegevens zullen alleen voor  \nwetenschappelijke doeleinden worden verwerkt en zullen in geen enkel geval voor commerciÃ«le doeleinden worden  \ngebruikt. Alle gegevens worden direct opgeslagen op een beveiligde server van de Rijksuniversiteit Groningen en  \nworden compleet anoniem verwerkt. Onderzoeksgegevens die gepubliceerd of openbaar gemaakt worden zullen in geen  \nenkel geval persoonlijke informatie bevatten en kunnen niet worden gekoppeld aan jou. Wees je ervan bewust dat jouw anonieme  \nantwoorden kunnen worden gebruikt voor toekomstig onderzoek.</p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>Moet ik meedoen aan dit onderzoek?</strong><br/>Deelname aan dit onderzoek is vrijwillig. Als je besluit  \nom niet mee te doen, hoef je niet uit te leggen waarom, en zal dit geen negatieve gevolgen voor je hebben. Je gegevens  \nkunnen niet worden verwijderd na deelname, omdat alle data anoniem zijn.</p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>Wat moet je nog meer weten?</strong><br/>Laat het ons vooral weten als je nog vragen of opmerkingen hebt  \nover deze studie. Je kunt je vragen nu, tijdens, of na afloop van de studie stellen. Je kunt dit doen door een email  \nte sturen naar de voor deze studie verantwoordelijke onderzoeker: <span style=\"white-space: nowrap;\">alexander . martin [at] rug . nl.</span></p> \n<p style=\"font-size: 80%; line-height: 120%;\">Heb je vragen of zorgen over je rechten als deelnemer of over de  \nhandelswijze van het onderzoeksteam? Neem dan contact op met de Commissie voor Ethische Toetsing Onderzoek (CETO)  \nvan de Faculteiten der Letteren, Wijsbegeerte, en Science and Engineering van de Rijksuniversiteit Groningen:  \n<span style=\"white-space: nowrap;\">ceto [at] rug . nl</span>. </p> \n</div> \n<p>Bij deze verklaar ik, de deelnemer, dat:</p> \n<ul style=\"font-size: 80%; text-align: left; line-height: 120%;\">\n\t<li>Ik de informatie over het onderzoek heb gelezen en begrepen en ik vrijwillig instem met deelname. Ik weet bij wie ik terecht kan voor vragen en weet wat mijn rechten zijn.</li>\n\t<li>Ik ben me ervan bewust dat deelname aan deze studie geheel vrijwillig is. Ik kan mijn toestemming om deel te nemen aan dit onderzoek intrekken tot het einde van de vragenlijst.</li>\n\t<li>Ik begrijp dat ik voor deze studie mijn inschattingen van verhoudingen tussen mannen en vrouwen binnen bepaalde groepen moet aangeven.</li>\n</ul> \n<p>Daarnaast stem ik toe dat:</p> \n<ul style=\"font-size: 80%; text-align: left; line-height: 120%;\">\n\t<li>De anonieme data die ik verstrek openbaar zullen worden gepubliceerd op het Open Science Framework.</li>\n</ul>",
    "consent_English.html": "<img src=\"rugr_logonlv_rood_rgb.png\" style=\"width: 150px;\" alt=\"University of Groningen\"> \n<p>This is a study on the perception of gender relations among different groups within Dutch society.  \nThis study is being conducted by Dr Alexander Martin and Dr Hans Wilke of the University of Groningen and  \nhas been approved by the Research Ethics Review Committee of the Faculties of Arts, Philosophy, and  \nScience and Engineering (project number 99743463). </p> \n<div style=\"margin: 4px, 4px; padding: 4px; width: 750px; height: 200px; overflow-x: hidden; overflow-y: auto; text-align: left;\"> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>Why this study?</strong><br/>This study will give us an idea of how Dutch people estimate the  \nproportion of men and women within different groups.</p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>What will we ask of you during the study?</strong><br/>This  \nstudy consists of two parts. In the first part, you will see various group names on the screen and will be asked to  \nindicate how many men and how many women you think there actually are within that group in the Netherlands.  \nFor the second part, we will ask you a few questions about yourself, such as your age and gender identity.</p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>How do we handle your data?</strong><br/>Processing your  \ndata helps us to analyse patterns in estimates. Your data will only be processed for  \nscientific purposes and will under no circumstances be used for commercial purposes  \n. All data is stored directly on a secure server at the University of Groningen and  \nis processed completely anonymously. Research data that is published or made public will under no  \ncircumstances contain personal information and cannot be linked to you. Please be aware that your anonymous  \nresponses may be used for future research. </p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>Do I have to take part in this study?</strong><br/>Participation in this study is voluntary. If you decide  \nnot to take part, you do not need to explain why, and this will not have any negative consequences for you. Your details  \ncannot be deleted after participation, as all data is anonymous. </p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>What else do you need to know?</strong><br/>Please do let us know if you have any questions or comments  \nabout this study. You can ask your questions now, during, or after the study has finished. You can do this by sending an email  \nto the researcher responsible for this study: <span style=\"white-space: nowrap;\">alexander . martin [at] rug . nl.</span></p> \n<p style=\"font-size: 80%; line-height: 120%;\" >Do you have any questions or concerns about your rights as a participant or about the  \nconduct of the research team? Please contact the Research Ethics Review Committee (CETO)  \nof the Faculties of Arts, Philosophy, and Science and Engineering at the University of Groningen:  \n<span style=\"white-space: nowrap;\">ceto [at] rug . nl</span>. </p> \n</div> \n<p>I, the participant, hereby declare that:</p> \n<ul style=\"font-size: 80%; text-align: left; line-height: 120%;\">\n\t<li>I have read and understood the information about the study and I voluntarily agree to participate. I know who to contact if I have any questions and I am aware of my rights.</li>\n    <li>I am aware that participation in this study is entirely voluntary. I may withdraw my consent to participate in this study until the end of the questionnaire.</li>\n\t<li>I understand that for this study I must provide my estimates of the proportions of men and women within certain groups.</li>\n</ul>\n<p>I also agree that:</p> \n<ul style=\"font-size: 80%; text-align: left; line-height: 120%;\">\n    <li>The anonymous data I provide will be published on the Open Science Framework.</li>\n</ul>",
    "consent_French.html": "<img src=\"rugr_logonlv_rood_rgb.png\" style=\"width: 150px;\" alt=\"University of Groningen\"> \n<p>Baguette baguette honhonhon. </p> \n<div style=\"margin: 4px, 4px; padding: 4px; width: 750px; height: 200px; overflow-x: hidden; overflow-y: auto; text-align: left;\"> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>Why this study?</strong><br/>This study will give us an idea of how Dutch people estimate the  \nproportion of men and women within different groups.</p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>What will we ask of you during the study?</strong><br/>This  \nstudy consists of two parts. In the first part, you will see various group names on the screen and will be asked to  \nindicate how many men and how many women you think there actually are within that group in the Netherlands.  \nFor the second part, we will ask you a few questions about yourself, such as your age and gender identity.</p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>How do we handle your data?</strong><br/>Processing your  \ndata helps us to analyse patterns in estimates. Your data will only be processed for  \nscientific purposes and will under no circumstances be used for commercial purposes  \n. All data is stored directly on a secure server at the University of Groningen and  \nis processed completely anonymously. Research data that is published or made public will under no  \ncircumstances contain personal information and cannot be linked to you. Please be aware that your anonymous  \nresponses may be used for future research. </p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>Do I have to take part in this study?</strong><br/>Participation in this study is voluntary. If you decide  \nnot to take part, you do not need to explain why, and this will not have any negative consequences for you. Your details  \ncannot be deleted after participation, as all data is anonymous. </p> \n<p style=\"font-size: 80%; line-height: 120%;\"><strong>What else do you need to know?</strong><br/>Please do let us know if you have any questions or comments  \nabout this study. You can ask your questions now, during, or after the study has finished. You can do this by sending an email  \nto the researcher responsible for this study: <span style=\"white-space: nowrap;\">alexander . martin [at] rug . nl.</span></p> \n<p style=\"font-size: 80%; line-height: 120%;\" >Do you have any questions or concerns about your rights as a participant or about the  \nconduct of the research team? Please contact the Research Ethics Review Committee (CETO)  \nof the Faculties of Arts, Philosophy, and Science and Engineering at the University of Groningen:  \n<span style=\"white-space: nowrap;\">ceto [at] rug . nl</span>. </p> \n</div> \n<p>I, the participant, hereby declare that:</p> \n<ul style=\"font-size: 80%; text-align: left; line-height: 120%;\">\n\t<li>I have read and understood the information about the study and I voluntarily agree to participate. I know who to contact if I have any questions and I am aware of my rights.</li>\n    <li>I am aware that participation in this study is entirely voluntary. I may withdraw my consent to participate in this study until the end of the questionnaire.</li>\n\t<li>I understand that for this study I must provide my estimates of the proportions of men and women within certain groups.</li>\n</ul>\n<p>I also agree that:</p> \n<ul style=\"font-size: 80%; text-align: left; line-height: 120%;\">\n    <li>The anonymous data I provide will be published on the Open Science Framework.</li>\n</ul>"
};
const all_stimuli = {
    "English": [
        {
            "noun": "Academics",
            "occupation_M": "Academics",
            "occupation_F": "Academics"
        },
        {
            "noun": "Accountants   ",
            "occupation_M": "Accountants   ",
            "occupation_F": "Accountants   "
        },
        {
            "noun": "Acrobats   ",
            "occupation_M": "Acrobats   ",
            "occupation_F": "Acrobats   "
        },
        {
            "noun": "Actors",
            "occupation_M": "Actors",
            "occupation_F": "Actors"
        },
        {
            "noun": "Acupuncturists   ",
            "occupation_M": "Acupuncturists   ",
            "occupation_F": "Acupuncturists   "
        },
        {
            "noun": "Administrative workers   ",
            "occupation_M": "Administrative workers   ",
            "occupation_F": "Administrative workers   "
        },
        {
            "noun": "Admirals   ",
            "occupation_M": "Admirals   ",
            "occupation_F": "Admirals   "
        },
        {
            "noun": "Aerobics instructors   ",
            "occupation_M": "Aerobics instructors   ",
            "occupation_F": "Aerobics instructors   "
        },
        {
            "noun": "Air traffic controllers   ",
            "occupation_M": "Air traffic controllers   ",
            "occupation_F": "Air traffic controllers   "
        },
        {
            "noun": "Alcoholics   ",
            "occupation_M": "Alcoholics   ",
            "occupation_F": "Alcoholics   "
        },
        {
            "noun": "Animators",
            "occupation_M": "Animators",
            "occupation_F": "Animators"
        },
        {
            "noun": "Antique dealers   ",
            "occupation_M": "Antique dealers   ",
            "occupation_F": "Antique dealers   "
        },
        {
            "noun": "Apprentices   ",
            "occupation_M": "Apprentices   ",
            "occupation_F": "Apprentices   "
        },
        {
            "noun": "Architects   ",
            "occupation_M": "Architects   ",
            "occupation_F": "Architects   "
        },
        {
            "noun": "Archivists   ",
            "occupation_M": "Archivists   ",
            "occupation_F": "Archivists   "
        },
        {
            "noun": "Artists   ",
            "occupation_M": "Artists   ",
            "occupation_F": "Artists   "
        },
        {
            "noun": "Assistants   ",
            "occupation_M": "Assistants   ",
            "occupation_F": "Assistants   "
        },
        {
            "noun": "Astrologists   ",
            "occupation_M": "Astrologists   ",
            "occupation_F": "Astrologists   "
        },
        {
            "noun": "Astronauts   ",
            "occupation_M": "Astronauts   ",
            "occupation_F": "Astronauts   "
        },
        {
            "noun": "Astronomers   ",
            "occupation_M": "Astronomers   ",
            "occupation_F": "Astronomers   "
        },
        {
            "noun": "Athletes   ",
            "occupation_M": "Athletes   ",
            "occupation_F": "Athletes   "
        },
        {
            "noun": "Auctioneers   ",
            "occupation_M": "Auctioneers   ",
            "occupation_F": "Auctioneers   "
        },
        {
            "noun": "Authors   ",
            "occupation_M": "Authors   ",
            "occupation_F": "Authors   "
        },
        {
            "noun": "Babies      ",
            "occupation_M": "Babies      ",
            "occupation_F": "Babies      "
        },
        {
            "noun": "Babysitters   ",
            "occupation_M": "Babysitters   ",
            "occupation_F": "Babysitters   "
        },
        {
            "noun": "Bakers   ",
            "occupation_M": "Bakers   ",
            "occupation_F": "Bakers   "
        },
        {
            "noun": "Ballet dancers   ",
            "occupation_M": "Ballet dancers   ",
            "occupation_F": "Ballet dancers   "
        },
        {
            "noun": "Bank clerks   ",
            "occupation_M": "Bank clerks   ",
            "occupation_F": "Bank clerks   "
        },
        {
            "noun": "Bankers   ",
            "occupation_M": "Bankers   ",
            "occupation_F": "Bankers   "
        },
        {
            "noun": "Barbers   ",
            "occupation_M": "Barbers   ",
            "occupation_F": "Barbers   "
        },
        {
            "noun": "Baristas",
            "occupation_M": "Baristas",
            "occupation_F": "Baristas"
        },
        {
            "noun": "Bartenders   ",
            "occupation_M": "Bartenders   ",
            "occupation_F": "Bartenders   "
        },
        {
            "noun": "Basketball players   ",
            "occupation_M": "Basketball players   ",
            "occupation_F": "Basketball players   "
        },
        {
            "noun": "Bass players   ",
            "occupation_M": "Bass players   ",
            "occupation_F": "Bass players   "
        },
        {
            "noun": "Beauticians   ",
            "occupation_M": "Beauticians   ",
            "occupation_F": "Beauticians   "
        },
        {
            "noun": "Beekeepers",
            "occupation_M": "Beekeepers",
            "occupation_F": "Beekeepers"
        },
        {
            "noun": "Bikers   ",
            "occupation_M": "Bikers   ",
            "occupation_F": "Bikers   "
        },
        {
            "noun": "Biologists   ",
            "occupation_M": "Biologists   ",
            "occupation_F": "Biologists   "
        },
        {
            "noun": "Birth attendants   ",
            "occupation_M": "Birth attendants   ",
            "occupation_F": "Birth attendants   "
        },
        {
            "noun": "Blacksmiths   ",
            "occupation_M": "Blacksmiths   ",
            "occupation_F": "Blacksmiths   "
        },
        {
            "noun": "Blue-collar workers",
            "occupation_M": "Blue-collar workers",
            "occupation_F": "Blue-collar workers"
        },
        {
            "noun": "Board game players",
            "occupation_M": "Board game players",
            "occupation_F": "Board game players"
        },
        {
            "noun": "Bodyguards",
            "occupation_M": "Bodyguards",
            "occupation_F": "Bodyguards"
        },
        {
            "noun": "Bosses   ",
            "occupation_M": "Bosses   ",
            "occupation_F": "Bosses   "
        },
        {
            "noun": "Boutique owners   ",
            "occupation_M": "Boutique owners   ",
            "occupation_F": "Boutique owners   "
        },
        {
            "noun": "Boxers   ",
            "occupation_M": "Boxers   ",
            "occupation_F": "Boxers   "
        },
        {
            "noun": "Bricklayers   ",
            "occupation_M": "Bricklayers   ",
            "occupation_F": "Bricklayers   "
        },
        {
            "noun": "Building contractors   ",
            "occupation_M": "Building contractors   ",
            "occupation_F": "Building contractors   "
        },
        {
            "noun": "Bus drivers   ",
            "occupation_M": "Bus drivers   ",
            "occupation_F": "Bus drivers   "
        },
        {
            "noun": "Butchers   ",
            "occupation_M": "Butchers   ",
            "occupation_F": "Butchers   "
        },
        {
            "noun": "Cabinet ministers   ",
            "occupation_M": "Cabinet ministers   ",
            "occupation_F": "Cabinet ministers   "
        },
        {
            "noun": "Camera operators   ",
            "occupation_M": "Camera operators   ",
            "occupation_F": "Camera operators   "
        },
        {
            "noun": "Campers   ",
            "occupation_M": "Campers   ",
            "occupation_F": "Campers   "
        },
        {
            "noun": "Canteen assistants   ",
            "occupation_M": "Canteen assistants   ",
            "occupation_F": "Canteen assistants   "
        },
        {
            "noun": "Car mechanics   ",
            "occupation_M": "Car mechanics   ",
            "occupation_F": "Car mechanics   "
        },
        {
            "noun": "Card players   ",
            "occupation_M": "Card players   ",
            "occupation_F": "Card players   "
        },
        {
            "noun": "Care workers   ",
            "occupation_M": "Care workers   ",
            "occupation_F": "Care workers   "
        },
        {
            "noun": "Caregivers   ",
            "occupation_M": "Caregivers   ",
            "occupation_F": "Caregivers   "
        },
        {
            "noun": "Carpenters   ",
            "occupation_M": "Carpenters   ",
            "occupation_F": "Carpenters   "
        },
        {
            "noun": "Cartoonists   ",
            "occupation_M": "Cartoonists   ",
            "occupation_F": "Cartoonists   "
        },
        {
            "noun": "Cashiers   ",
            "occupation_M": "Cashiers   ",
            "occupation_F": "Cashiers   "
        },
        {
            "noun": "Cat owners   ",
            "occupation_M": "Cat owners   ",
            "occupation_F": "Cat owners   "
        },
        {
            "noun": "Caterers   ",
            "occupation_M": "Caterers   ",
            "occupation_F": "Caterers   "
        },
        {
            "noun": "Celebrities   ",
            "occupation_M": "Celebrities   ",
            "occupation_F": "Celebrities   "
        },
        {
            "noun": "Ceramists",
            "occupation_M": "Ceramists",
            "occupation_F": "Ceramists"
        },
        {
            "noun": "Chair persons   ",
            "occupation_M": "Chair persons   ",
            "occupation_F": "Chair persons   "
        },
        {
            "noun": "Chefs",
            "occupation_M": "Chefs",
            "occupation_F": "Chefs"
        },
        {
            "noun": "Chemists   ",
            "occupation_M": "Chemists   ",
            "occupation_F": "Chemists   "
        },
        {
            "noun": "Child educators   ",
            "occupation_M": "Child educators   ",
            "occupation_F": "Child educators   "
        },
        {
            "noun": "Children      ",
            "occupation_M": "Children      ",
            "occupation_F": "Children      "
        },
        {
            "noun": "Chiropractors   ",
            "occupation_M": "Chiropractors   ",
            "occupation_F": "Chiropractors   "
        },
        {
            "noun": "Chocolate lovers   ",
            "occupation_M": "Chocolate lovers   ",
            "occupation_F": "Chocolate lovers   "
        },
        {
            "noun": "Choreographers   ",
            "occupation_M": "Choreographers   ",
            "occupation_F": "Choreographers   "
        },
        {
            "noun": "Cinema goers   ",
            "occupation_M": "Cinema goers   ",
            "occupation_F": "Cinema goers   "
        },
        {
            "noun": "City planners",
            "occupation_M": "City planners",
            "occupation_F": "City planners"
        },
        {
            "noun": "Clairvoyants   ",
            "occupation_M": "Clairvoyants   ",
            "occupation_F": "Clairvoyants   "
        },
        {
            "noun": "Cleaners   ",
            "occupation_M": "Cleaners   ",
            "occupation_F": "Cleaners   "
        },
        {
            "noun": "Climbers   ",
            "occupation_M": "Climbers   ",
            "occupation_F": "Climbers   "
        },
        {
            "noun": "Clinical psychologists   ",
            "occupation_M": "Clinical psychologists   ",
            "occupation_F": "Clinical psychologists   "
        },
        {
            "noun": "Clowns   ",
            "occupation_M": "Clowns   ",
            "occupation_F": "Clowns   "
        },
        {
            "noun": "Colonels   ",
            "occupation_M": "Colonels   ",
            "occupation_F": "Colonels   "
        },
        {
            "noun": "Comedians   ",
            "occupation_M": "Comedians   ",
            "occupation_F": "Comedians   "
        },
        {
            "noun": "Company directors   ",
            "occupation_M": "Company directors   ",
            "occupation_F": "Company directors   "
        },
        {
            "noun": "Composers   ",
            "occupation_M": "Composers   ",
            "occupation_F": "Composers   "
        },
        {
            "noun": "Computer programmers   ",
            "occupation_M": "Computer programmers   ",
            "occupation_F": "Computer programmers   "
        },
        {
            "noun": "Computer specialists   ",
            "occupation_M": "Computer specialists   ",
            "occupation_F": "Computer specialists   "
        },
        {
            "noun": "Computer technicians   ",
            "occupation_M": "Computer technicians   ",
            "occupation_F": "Computer technicians   "
        },
        {
            "noun": "Construction workers   ",
            "occupation_M": "Construction workers   ",
            "occupation_F": "Construction workers   "
        },
        {
            "noun": "Content creators",
            "occupation_M": "Content creators",
            "occupation_F": "Content creators"
        },
        {
            "noun": "Cooks",
            "occupation_M": "Cooks",
            "occupation_F": "Cooks"
        },
        {
            "noun": "Coordinators",
            "occupation_M": "Coordinators",
            "occupation_F": "Coordinators"
        },
        {
            "noun": "Counseling psychologists   ",
            "occupation_M": "Counseling psychologists   ",
            "occupation_F": "Counseling psychologists   "
        },
        {
            "noun": "Couriers   ",
            "occupation_M": "Couriers   ",
            "occupation_F": "Couriers   "
        },
        {
            "noun": "Craft workers   ",
            "occupation_M": "Craft workers   ",
            "occupation_F": "Craft workers   "
        },
        {
            "noun": "Crane operators   ",
            "occupation_M": "Crane operators   ",
            "occupation_F": "Crane operators   "
        },
        {
            "noun": "Criminals   ",
            "occupation_M": "Criminals   ",
            "occupation_F": "Criminals   "
        },
        {
            "noun": "Cult members   ",
            "occupation_M": "Cult members   ",
            "occupation_F": "Cult members   "
        },
        {
            "noun": "Curators   ",
            "occupation_M": "Curators   ",
            "occupation_F": "Curators   "
        },
        {
            "noun": "Customers   ",
            "occupation_M": "Customers   ",
            "occupation_F": "Customers   "
        },
        {
            "noun": "Customs inspectors   ",
            "occupation_M": "Customs inspectors   ",
            "occupation_F": "Customs inspectors   "
        },
        {
            "noun": "Customs officers   ",
            "occupation_M": "Customs officers   ",
            "occupation_F": "Customs officers   "
        },
        {
            "noun": "Cyclists   ",
            "occupation_M": "Cyclists   ",
            "occupation_F": "Cyclists   "
        },
        {
            "noun": "Dance instructors   ",
            "occupation_M": "Dance instructors   ",
            "occupation_F": "Dance instructors   "
        },
        {
            "noun": "Dancers   ",
            "occupation_M": "Dancers   ",
            "occupation_F": "Dancers   "
        },
        {
            "noun": "Data analyst",
            "occupation_M": "Data analyst",
            "occupation_F": "Data analyst"
        },
        {
            "noun": "Deacons   ",
            "occupation_M": "Deacons   ",
            "occupation_F": "Deacons   "
        },
        {
            "noun": "Delivery drivers",
            "occupation_M": "Delivery drivers",
            "occupation_F": "Delivery drivers"
        },
        {
            "noun": "Dental hygienists   ",
            "occupation_M": "Dental hygienists   ",
            "occupation_F": "Dental hygienists   "
        },
        {
            "noun": "Dental technicians   ",
            "occupation_M": "Dental technicians   ",
            "occupation_F": "Dental technicians   "
        },
        {
            "noun": "Dentists   ",
            "occupation_M": "Dentists   ",
            "occupation_F": "Dentists   "
        },
        {
            "noun": "Designers   ",
            "occupation_M": "Designers   ",
            "occupation_F": "Designers   "
        },
        {
            "noun": "Detectives   ",
            "occupation_M": "Detectives   ",
            "occupation_F": "Detectives   "
        },
        {
            "noun": "Dieticians   ",
            "occupation_M": "Dieticians   ",
            "occupation_F": "Dieticians   "
        },
        {
            "noun": "Diplomats   ",
            "occupation_M": "Diplomats   ",
            "occupation_F": "Diplomats   "
        },
        {
            "noun": "Doctors of Philosophy   ",
            "occupation_M": "Doctors of Philosophy   ",
            "occupation_F": "Doctors of Philosophy   "
        },
        {
            "noun": "Dog owners   ",
            "occupation_M": "Dog owners   ",
            "occupation_F": "Dog owners   "
        },
        {
            "noun": "Door keepers   ",
            "occupation_M": "Door keepers   ",
            "occupation_F": "Door keepers   "
        },
        {
            "noun": "Dressmakers   ",
            "occupation_M": "Dressmakers   ",
            "occupation_F": "Dressmakers   "
        },
        {
            "noun": "Drivers   ",
            "occupation_M": "Drivers   ",
            "occupation_F": "Drivers   "
        },
        {
            "noun": "Driving instructors   ",
            "occupation_M": "Driving instructors   ",
            "occupation_F": "Driving instructors   "
        },
        {
            "noun": "Drug addicts   ",
            "occupation_M": "Drug addicts   ",
            "occupation_F": "Drug addicts   "
        },
        {
            "noun": "Drug dealers   ",
            "occupation_M": "Drug dealers   ",
            "occupation_F": "Drug dealers   "
        },
        {
            "noun": "Drummers   ",
            "occupation_M": "Drummers   ",
            "occupation_F": "Drummers   "
        },
        {
            "noun": "Economists   ",
            "occupation_M": "Economists   ",
            "occupation_F": "Economists   "
        },
        {
            "noun": "Editors   ",
            "occupation_M": "Editors   ",
            "occupation_F": "Editors   "
        },
        {
            "noun": "Educational psychologists   ",
            "occupation_M": "Educational psychologists   ",
            "occupation_F": "Educational psychologists   "
        },
        {
            "noun": "Electricians   ",
            "occupation_M": "Electricians   ",
            "occupation_F": "Electricians   "
        },
        {
            "noun": "Embezzlers   ",
            "occupation_M": "Embezzlers   ",
            "occupation_F": "Embezzlers   "
        },
        {
            "noun": "Engine-drivers   ",
            "occupation_M": "Engine-drivers   ",
            "occupation_F": "Engine-drivers   "
        },
        {
            "noun": "Engineers   ",
            "occupation_M": "Engineers   ",
            "occupation_F": "Engineers   "
        },
        {
            "noun": "Entrepreneurs",
            "occupation_M": "Entrepreneurs",
            "occupation_F": "Entrepreneurs"
        },
        {
            "noun": "Environmentalists   ",
            "occupation_M": "Environmentalists   ",
            "occupation_F": "Environmentalists   "
        },
        {
            "noun": "Escourts",
            "occupation_M": "Escourts",
            "occupation_F": "Escourts"
        },
        {
            "noun": "Estate agents   ",
            "occupation_M": "Estate agents   ",
            "occupation_F": "Estate agents   "
        },
        {
            "noun": "Executives   ",
            "occupation_M": "Executives   ",
            "occupation_F": "Executives   "
        },
        {
            "noun": "Exercise instructors   ",
            "occupation_M": "Exercise instructors   ",
            "occupation_F": "Exercise instructors   "
        },
        {
            "noun": "Explorers   ",
            "occupation_M": "Explorers   ",
            "occupation_F": "Explorers   "
        },
        {
            "noun": "Extremists",
            "occupation_M": "Extremists",
            "occupation_F": "Extremists"
        },
        {
            "noun": "Factory managers   ",
            "occupation_M": "Factory managers   ",
            "occupation_F": "Factory managers   "
        },
        {
            "noun": "Fans   ",
            "occupation_M": "Fans   ",
            "occupation_F": "Fans   "
        },
        {
            "noun": "Farmers   ",
            "occupation_M": "Farmers   ",
            "occupation_F": "Farmers   "
        },
        {
            "noun": "Fencers   ",
            "occupation_M": "Fencers   ",
            "occupation_F": "Fencers   "
        },
        {
            "noun": "Figure skaters   ",
            "occupation_M": "Figure skaters   ",
            "occupation_F": "Figure skaters   "
        },
        {
            "noun": "Film directors   ",
            "occupation_M": "Film directors   ",
            "occupation_F": "Film directors   "
        },
        {
            "noun": "Film stars   ",
            "occupation_M": "Film stars   ",
            "occupation_F": "Film stars   "
        },
        {
            "noun": "Financial advisers   ",
            "occupation_M": "Financial advisers   ",
            "occupation_F": "Financial advisers   "
        },
        {
            "noun": "Financial analysts   ",
            "occupation_M": "Financial analysts   ",
            "occupation_F": "Financial analysts   "
        },
        {
            "noun": "Firefighters   ",
            "occupation_M": "Firefighters   ",
            "occupation_F": "Firefighters   "
        },
        {
            "noun": "Flight attendants   ",
            "occupation_M": "Flight attendants   ",
            "occupation_F": "Flight attendants   "
        },
        {
            "noun": "Florists   ",
            "occupation_M": "Florists   ",
            "occupation_F": "Florists   "
        },
        {
            "noun": "Flute players   ",
            "occupation_M": "Flute players   ",
            "occupation_F": "Flute players   "
        },
        {
            "noun": "Football coaches   ",
            "occupation_M": "Football coaches   ",
            "occupation_F": "Football coaches   "
        },
        {
            "noun": "Football players   ",
            "occupation_M": "Football players   ",
            "occupation_F": "Football players   "
        },
        {
            "noun": "Forensic psychologists   ",
            "occupation_M": "Forensic psychologists   ",
            "occupation_F": "Forensic psychologists   "
        },
        {
            "noun": "Forest rangers   ",
            "occupation_M": "Forest rangers   ",
            "occupation_F": "Forest rangers   "
        },
        {
            "noun": "Fortune tellers   ",
            "occupation_M": "Fortune tellers   ",
            "occupation_F": "Fortune tellers   "
        },
        {
            "noun": "Funeral directors   ",
            "occupation_M": "Funeral directors   ",
            "occupation_F": "Funeral directors   "
        },
        {
            "noun": "Game designers",
            "occupation_M": "Game designers",
            "occupation_F": "Game designers"
        },
        {
            "noun": "Game wardens   ",
            "occupation_M": "Game wardens   ",
            "occupation_F": "Game wardens   "
        },
        {
            "noun": "Gang members",
            "occupation_M": "Gang members",
            "occupation_F": "Gang members"
        },
        {
            "noun": "Gardeners   ",
            "occupation_M": "Gardeners   ",
            "occupation_F": "Gardeners   "
        },
        {
            "noun": "General managers   ",
            "occupation_M": "General managers   ",
            "occupation_F": "General managers   "
        },
        {
            "noun": "Generals   ",
            "occupation_M": "Generals   ",
            "occupation_F": "Generals   "
        },
        {
            "noun": "Geologists   ",
            "occupation_M": "Geologists   ",
            "occupation_F": "Geologists   "
        },
        {
            "noun": "Goalkeepers   ",
            "occupation_M": "Goalkeepers   ",
            "occupation_F": "Goalkeepers   "
        },
        {
            "noun": "Goldsmiths   ",
            "occupation_M": "Goldsmiths   ",
            "occupation_F": "Goldsmiths   "
        },
        {
            "noun": "Golfers   ",
            "occupation_M": "Golfers   ",
            "occupation_F": "Golfers   "
        },
        {
            "noun": "Government officials   ",
            "occupation_M": "Government officials   ",
            "occupation_F": "Government officials   "
        },
        {
            "noun": "Governors   ",
            "occupation_M": "Governors   ",
            "occupation_F": "Governors   "
        },
        {
            "noun": "Graphic designers   ",
            "occupation_M": "Graphic designers   ",
            "occupation_F": "Graphic designers   "
        },
        {
            "noun": "Guards   ",
            "occupation_M": "Guards   ",
            "occupation_F": "Guards   "
        },
        {
            "noun": "Guitar players   ",
            "occupation_M": "Guitar players   ",
            "occupation_F": "Guitar players   "
        },
        {
            "noun": "Gymnasts   ",
            "occupation_M": "Gymnasts   ",
            "occupation_F": "Gymnasts   "
        },
        {
            "noun": "Gynaecologists   ",
            "occupation_M": "Gynaecologists   ",
            "occupation_F": "Gynaecologists   "
        },
        {
            "noun": "Hackers",
            "occupation_M": "Hackers",
            "occupation_F": "Hackers"
        },
        {
            "noun": "Hairdressers   ",
            "occupation_M": "Hairdressers   ",
            "occupation_F": "Hairdressers   "
        },
        {
            "noun": "Head nurses",
            "occupation_M": "Head nurses",
            "occupation_F": "Head nurses"
        },
        {
            "noun": "Head physicians",
            "occupation_M": "Head physicians",
            "occupation_F": "Head physicians"
        },
        {
            "noun": "Head teachers   ",
            "occupation_M": "Head teachers   ",
            "occupation_F": "Head teachers   "
        },
        {
            "noun": "Heads of department",
            "occupation_M": "Heads of department",
            "occupation_F": "Heads of department"
        },
        {
            "noun": "Heavy equipment operators   ",
            "occupation_M": "Heavy equipment operators   ",
            "occupation_F": "Heavy equipment operators   "
        },
        {
            "noun": "Historians   ",
            "occupation_M": "Historians   ",
            "occupation_F": "Historians   "
        },
        {
            "noun": "History professors   ",
            "occupation_M": "History professors   ",
            "occupation_F": "History professors   "
        },
        {
            "noun": "Hitchhikers   ",
            "occupation_M": "Hitchhikers   ",
            "occupation_F": "Hitchhikers   "
        },
        {
            "noun": "Homeless persons   ",
            "occupation_M": "Homeless persons   ",
            "occupation_F": "Homeless persons   "
        },
        {
            "noun": "Horse riders   ",
            "occupation_M": "Horse riders   ",
            "occupation_F": "Horse riders   "
        },
        {
            "noun": "Horse trainers   ",
            "occupation_M": "Horse trainers   ",
            "occupation_F": "Horse trainers   "
        },
        {
            "noun": "Hospital orderlies   ",
            "occupation_M": "Hospital orderlies   ",
            "occupation_F": "Hospital orderlies   "
        },
        {
            "noun": "Hotel guests   ",
            "occupation_M": "Hotel guests   ",
            "occupation_F": "Hotel guests   "
        },
        {
            "noun": "Hotel managers   ",
            "occupation_M": "Hotel managers   ",
            "occupation_F": "Hotel managers   "
        },
        {
            "noun": "Housekeepers   ",
            "occupation_M": "Housekeepers   ",
            "occupation_F": "Housekeepers   "
        },
        {
            "noun": "Human Resource Managers",
            "occupation_M": "Human Resource Managers",
            "occupation_F": "Human Resource Managers"
        },
        {
            "noun": "Humanitarians   ",
            "occupation_M": "Humanitarians   ",
            "occupation_F": "Humanitarians   "
        },
        {
            "noun": "Humanities professors   ",
            "occupation_M": "Humanities professors   ",
            "occupation_F": "Humanities professors   "
        },
        {
            "noun": "Hunters   ",
            "occupation_M": "Hunters   ",
            "occupation_F": "Hunters   "
        },
        {
            "noun": "Ice skaters   ",
            "occupation_M": "Ice skaters   ",
            "occupation_F": "Ice skaters   "
        },
        {
            "noun": "Infant teachers   ",
            "occupation_M": "Infant teachers   ",
            "occupation_F": "Infant teachers   "
        },
        {
            "noun": "Influencers",
            "occupation_M": "Influencers",
            "occupation_F": "Influencers"
        },
        {
            "noun": "Informal caregivers",
            "occupation_M": "Informal caregivers",
            "occupation_F": "Informal caregivers"
        },
        {
            "noun": "Informants   ",
            "occupation_M": "Informants   ",
            "occupation_F": "Informants   "
        },
        {
            "noun": "Inmates   ",
            "occupation_M": "Inmates   ",
            "occupation_F": "Inmates   "
        },
        {
            "noun": "Innkeepers   ",
            "occupation_M": "Innkeepers   ",
            "occupation_F": "Innkeepers   "
        },
        {
            "noun": "Instagrammers",
            "occupation_M": "Instagrammers",
            "occupation_F": "Instagrammers"
        },
        {
            "noun": "Interior decorators   ",
            "occupation_M": "Interior decorators   ",
            "occupation_F": "Interior decorators   "
        },
        {
            "noun": "Interpreters   ",
            "occupation_M": "Interpreters   ",
            "occupation_F": "Interpreters   "
        },
        {
            "noun": "Inventors   ",
            "occupation_M": "Inventors   ",
            "occupation_F": "Inventors   "
        },
        {
            "noun": "IT consultants   ",
            "occupation_M": "IT consultants   ",
            "occupation_F": "IT consultants   "
        },
        {
            "noun": "Janitors   ",
            "occupation_M": "Janitors   ",
            "occupation_F": "Janitors   "
        },
        {
            "noun": "Jewelers   ",
            "occupation_M": "Jewelers   ",
            "occupation_F": "Jewelers   "
        },
        {
            "noun": "Job seekers   ",
            "occupation_M": "Job seekers   ",
            "occupation_F": "Job seekers   "
        },
        {
            "noun": "Joggers   ",
            "occupation_M": "Joggers   ",
            "occupation_F": "Joggers   "
        },
        {
            "noun": "Journalists   ",
            "occupation_M": "Journalists   ",
            "occupation_F": "Journalists   "
        },
        {
            "noun": "Judges   ",
            "occupation_M": "Judges   ",
            "occupation_F": "Judges   "
        },
        {
            "noun": "Jugglers   ",
            "occupation_M": "Jugglers   ",
            "occupation_F": "Jugglers   "
        },
        {
            "noun": "Jurors   ",
            "occupation_M": "Jurors   ",
            "occupation_F": "Jurors   "
        },
        {
            "noun": "Killers   ",
            "occupation_M": "Killers   ",
            "occupation_F": "Killers   "
        },
        {
            "noun": "Kindergarten teachers   ",
            "occupation_M": "Kindergarten teachers   ",
            "occupation_F": "Kindergarten teachers   "
        },
        {
            "noun": "Lab technicians   ",
            "occupation_M": "Lab technicians   ",
            "occupation_F": "Lab technicians   "
        },
        {
            "noun": "Landscape gardeners   ",
            "occupation_M": "Landscape gardeners   ",
            "occupation_F": "Landscape gardeners   "
        },
        {
            "noun": "Law clerks   ",
            "occupation_M": "Law clerks   ",
            "occupation_F": "Law clerks   "
        },
        {
            "noun": "Law professors   ",
            "occupation_M": "Law professors   ",
            "occupation_F": "Law professors   "
        },
        {
            "noun": "Lawyers   ",
            "occupation_M": "Lawyers   ",
            "occupation_F": "Lawyers   "
        },
        {
            "noun": "Leaders   ",
            "occupation_M": "Leaders   ",
            "occupation_F": "Leaders   "
        },
        {
            "noun": "Librarians   ",
            "occupation_M": "Librarians   ",
            "occupation_F": "Librarians   "
        },
        {
            "noun": "Lieutenants   ",
            "occupation_M": "Lieutenants   ",
            "occupation_F": "Lieutenants   "
        },
        {
            "noun": "Life coaches",
            "occupation_M": "Life coaches",
            "occupation_F": "Life coaches"
        },
        {
            "noun": "Lifeguards   ",
            "occupation_M": "Lifeguards   ",
            "occupation_F": "Lifeguards   "
        },
        {
            "noun": "Lighthouse keepers   ",
            "occupation_M": "Lighthouse keepers   ",
            "occupation_F": "Lighthouse keepers   "
        },
        {
            "noun": "Lodgers   ",
            "occupation_M": "Lodgers   ",
            "occupation_F": "Lodgers   "
        },
        {
            "noun": "Lorry drivers   ",
            "occupation_M": "Lorry drivers   ",
            "occupation_F": "Lorry drivers   "
        },
        {
            "noun": "Magician’s assistants   ",
            "occupation_M": "Magician’s assistants   ",
            "occupation_F": "Magician’s assistants   "
        },
        {
            "noun": "Magicians   ",
            "occupation_M": "Magicians   ",
            "occupation_F": "Magicians   "
        },
        {
            "noun": "Make up artists   ",
            "occupation_M": "Make up artists   ",
            "occupation_F": "Make up artists   "
        },
        {
            "noun": "Managers   ",
            "occupation_M": "Managers   ",
            "occupation_F": "Managers   "
        },
        {
            "noun": "Manicurists   ",
            "occupation_M": "Manicurists   ",
            "occupation_F": "Manicurists   "
        },
        {
            "noun": "Market Researchers",
            "occupation_M": "Market Researchers",
            "occupation_F": "Market Researchers"
        },
        {
            "noun": "Mathematicians   ",
            "occupation_M": "Mathematicians   ",
            "occupation_F": "Mathematicians   "
        },
        {
            "noun": "Mayors   ",
            "occupation_M": "Mayors   ",
            "occupation_F": "Mayors   "
        },
        {
            "noun": "Mechanics   ",
            "occupation_M": "Mechanics   ",
            "occupation_F": "Mechanics   "
        },
        {
            "noun": "Medical doctors   ",
            "occupation_M": "Medical doctors   ",
            "occupation_F": "Medical doctors   "
        },
        {
            "noun": "Members of parliament   ",
            "occupation_M": "Members of parliament   ",
            "occupation_F": "Members of parliament   "
        },
        {
            "noun": "Members of the armed forces    ",
            "occupation_M": "Members of the armed forces    ",
            "occupation_F": "Members of the armed forces    "
        },
        {
            "noun": "Metallurgists   ",
            "occupation_M": "Metallurgists   ",
            "occupation_F": "Metallurgists   "
        },
        {
            "noun": "Meteorologists   ",
            "occupation_M": "Meteorologists   ",
            "occupation_F": "Meteorologists   "
        },
        {
            "noun": "Millionaires   ",
            "occupation_M": "Millionaires   ",
            "occupation_F": "Millionaires   "
        },
        {
            "noun": "Miners   ",
            "occupation_M": "Miners   ",
            "occupation_F": "Miners   "
        },
        {
            "noun": "Models   ",
            "occupation_M": "Models   ",
            "occupation_F": "Models   "
        },
        {
            "noun": "Mountain climbers   ",
            "occupation_M": "Mountain climbers   ",
            "occupation_F": "Mountain climbers   "
        },
        {
            "noun": "Murderers   ",
            "occupation_M": "Murderers   ",
            "occupation_F": "Murderers   "
        },
        {
            "noun": "Musicians   ",
            "occupation_M": "Musicians   ",
            "occupation_F": "Musicians   "
        },
        {
            "noun": "Nail technicians",
            "occupation_M": "Nail technicians",
            "occupation_F": "Nail technicians"
        },
        {
            "noun": "Nannies   ",
            "occupation_M": "Nannies   ",
            "occupation_F": "Nannies   "
        },
        {
            "noun": "Neighbours   ",
            "occupation_M": "Neighbours   ",
            "occupation_F": "Neighbours   "
        },
        {
            "noun": "Neurologists   ",
            "occupation_M": "Neurologists   ",
            "occupation_F": "Neurologists   "
        },
        {
            "noun": "Neurosurgeons   ",
            "occupation_M": "Neurosurgeons   ",
            "occupation_F": "Neurosurgeons   "
        },
        {
            "noun": "News readers   ",
            "occupation_M": "News readers   ",
            "occupation_F": "News readers   "
        },
        {
            "noun": "Novelists   ",
            "occupation_M": "Novelists   ",
            "occupation_F": "Novelists   "
        },
        {
            "noun": "Nurses   ",
            "occupation_M": "Nurses   ",
            "occupation_F": "Nurses   "
        },
        {
            "noun": "Nutritionists   ",
            "occupation_M": "Nutritionists   ",
            "occupation_F": "Nutritionists   "
        },
        {
            "noun": "Occupational therapists   ",
            "occupation_M": "Occupational therapists   ",
            "occupation_F": "Occupational therapists   "
        },
        {
            "noun": "Oceanographers   ",
            "occupation_M": "Oceanographers   ",
            "occupation_F": "Oceanographers   "
        },
        {
            "noun": "Office workers   ",
            "occupation_M": "Office workers   ",
            "occupation_F": "Office workers   "
        },
        {
            "noun": "Orchestra conductors   ",
            "occupation_M": "Orchestra conductors   ",
            "occupation_F": "Orchestra conductors   "
        },
        {
            "noun": "Orthodontists   ",
            "occupation_M": "Orthodontists   ",
            "occupation_F": "Orthodontists   "
        },
        {
            "noun": "Paid interns",
            "occupation_M": "Paid interns",
            "occupation_F": "Paid interns"
        },
        {
            "noun": "Parachutists   ",
            "occupation_M": "Parachutists   ",
            "occupation_F": "Parachutists   "
        },
        {
            "noun": "Parents   ",
            "occupation_M": "Parents   ",
            "occupation_F": "Parents   "
        },
        {
            "noun": "Pastry chefs   ",
            "occupation_M": "Pastry chefs   ",
            "occupation_F": "Pastry chefs   "
        },
        {
            "noun": "Patients   ",
            "occupation_M": "Patients   ",
            "occupation_F": "Patients   "
        },
        {
            "noun": "Pawnbrokers   ",
            "occupation_M": "Pawnbrokers   ",
            "occupation_F": "Pawnbrokers   "
        },
        {
            "noun": "Pedestrians   ",
            "occupation_M": "Pedestrians   ",
            "occupation_F": "Pedestrians   "
        },
        {
            "noun": "Pediatricians   ",
            "occupation_M": "Pediatricians   ",
            "occupation_F": "Pediatricians   "
        },
        {
            "noun": "Pensioners   ",
            "occupation_M": "Pensioners   ",
            "occupation_F": "Pensioners   "
        },
        {
            "noun": "Personal trainers   ",
            "occupation_M": "Personal trainers   ",
            "occupation_F": "Personal trainers   "
        },
        {
            "noun": "Persons   ",
            "occupation_M": "Persons   ",
            "occupation_F": "Persons   "
        },
        {
            "noun": "Pharmacists   ",
            "occupation_M": "Pharmacists   ",
            "occupation_F": "Pharmacists   "
        },
        {
            "noun": "Philanthropists   ",
            "occupation_M": "Philanthropists   ",
            "occupation_F": "Philanthropists   "
        },
        {
            "noun": "Photographers   ",
            "occupation_M": "Photographers   ",
            "occupation_F": "Photographers   "
        },
        {
            "noun": "Physicians   ",
            "occupation_M": "Physicians   ",
            "occupation_F": "Physicians   "
        },
        {
            "noun": "Physicists   ",
            "occupation_M": "Physicists   ",
            "occupation_F": "Physicists   "
        },
        {
            "noun": "Physics students   ",
            "occupation_M": "Physics students   ",
            "occupation_F": "Physics students   "
        },
        {
            "noun": "Physiotherapists   ",
            "occupation_M": "Physiotherapists   ",
            "occupation_F": "Physiotherapists   "
        },
        {
            "noun": "Piano players   ",
            "occupation_M": "Piano players   ",
            "occupation_F": "Piano players   "
        },
        {
            "noun": "Pilots   ",
            "occupation_M": "Pilots   ",
            "occupation_F": "Pilots   "
        },
        {
            "noun": "Playgroup leaders   ",
            "occupation_M": "Playgroup leaders   ",
            "occupation_F": "Playgroup leaders   "
        },
        {
            "noun": "Plumbers   ",
            "occupation_M": "Plumbers   ",
            "occupation_F": "Plumbers   "
        },
        {
            "noun": "Podcast hosts",
            "occupation_M": "Podcast hosts",
            "occupation_F": "Podcast hosts"
        },
        {
            "noun": "Poets   ",
            "occupation_M": "Poets   ",
            "occupation_F": "Poets   "
        },
        {
            "noun": "Police Inspectors   ",
            "occupation_M": "Police Inspectors   ",
            "occupation_F": "Police Inspectors   "
        },
        {
            "noun": "Police officers   ",
            "occupation_M": "Police officers   ",
            "occupation_F": "Police officers   "
        },
        {
            "noun": "Police sergeants   ",
            "occupation_M": "Police sergeants   ",
            "occupation_F": "Police sergeants   "
        },
        {
            "noun": "Political activists   ",
            "occupation_M": "Political activists   ",
            "occupation_F": "Political activists   "
        },
        {
            "noun": "Politicians   ",
            "occupation_M": "Politicians   ",
            "occupation_F": "Politicians   "
        },
        {
            "noun": "Postal workers   ",
            "occupation_M": "Postal workers   ",
            "occupation_F": "Postal workers   "
        },
        {
            "noun": "Presidents",
            "occupation_M": "Presidents",
            "occupation_F": "Presidents"
        },
        {
            "noun": "Priests   ",
            "occupation_M": "Priests   ",
            "occupation_F": "Priests   "
        },
        {
            "noun": "Primary school teachers   ",
            "occupation_M": "Primary school teachers   ",
            "occupation_F": "Primary school teachers   "
        },
        {
            "noun": "Prison guards   ",
            "occupation_M": "Prison guards   ",
            "occupation_F": "Prison guards   "
        },
        {
            "noun": "Private detectives   ",
            "occupation_M": "Private detectives   ",
            "occupation_F": "Private detectives   "
        },
        {
            "noun": "Probation officers   ",
            "occupation_M": "Probation officers   ",
            "occupation_F": "Probation officers   "
        },
        {
            "noun": "Professional athletes   ",
            "occupation_M": "Professional athletes   ",
            "occupation_F": "Professional athletes   "
        },
        {
            "noun": "Professors   ",
            "occupation_M": "Professors   ",
            "occupation_F": "Professors   "
        },
        {
            "noun": "Proofreaders   ",
            "occupation_M": "Proofreaders   ",
            "occupation_F": "Proofreaders   "
        },
        {
            "noun": "Prostitutes   ",
            "occupation_M": "Prostitutes   ",
            "occupation_F": "Prostitutes   "
        },
        {
            "noun": "Protestors   ",
            "occupation_M": "Protestors   ",
            "occupation_F": "Protestors   "
        },
        {
            "noun": "Psychiatrists   ",
            "occupation_M": "Psychiatrists   ",
            "occupation_F": "Psychiatrists   "
        },
        {
            "noun": "Psychology students   ",
            "occupation_M": "Psychology students   ",
            "occupation_F": "Psychology students   "
        },
        {
            "noun": "Public Relations Officers",
            "occupation_M": "Public Relations Officers",
            "occupation_F": "Public Relations Officers"
        },
        {
            "noun": "Publishers   ",
            "occupation_M": "Publishers   ",
            "occupation_F": "Publishers   "
        },
        {
            "noun": "Racing car drivers   ",
            "occupation_M": "Racing car drivers   ",
            "occupation_F": "Racing car drivers   "
        },
        {
            "noun": "Radio announcers   ",
            "occupation_M": "Radio announcers   ",
            "occupation_F": "Radio announcers   "
        },
        {
            "noun": "Radio technicians   ",
            "occupation_M": "Radio technicians   ",
            "occupation_F": "Radio technicians   "
        },
        {
            "noun": "Rape victims   ",
            "occupation_M": "Rape victims   ",
            "occupation_F": "Rape victims   "
        },
        {
            "noun": "Rapists   ",
            "occupation_M": "Rapists   ",
            "occupation_F": "Rapists   "
        },
        {
            "noun": "Receptionists   ",
            "occupation_M": "Receptionists   ",
            "occupation_F": "Receptionists   "
        },
        {
            "noun": "Relatives   ",
            "occupation_M": "Relatives   ",
            "occupation_F": "Relatives   "
        },
        {
            "noun": "Remote workers",
            "occupation_M": "Remote workers",
            "occupation_F": "Remote workers"
        },
        {
            "noun": "Reporters   ",
            "occupation_M": "Reporters   ",
            "occupation_F": "Reporters   "
        },
        {
            "noun": "Representatives",
            "occupation_M": "Representatives",
            "occupation_F": "Representatives"
        },
        {
            "noun": "Rescue workers   ",
            "occupation_M": "Rescue workers   ",
            "occupation_F": "Rescue workers   "
        },
        {
            "noun": "Research scientists   ",
            "occupation_M": "Research scientists   ",
            "occupation_F": "Research scientists   "
        },
        {
            "noun": "Riding instructors",
            "occupation_M": "Riding instructors",
            "occupation_F": "Riding instructors"
        },
        {
            "noun": "Road Crew",
            "occupation_M": "Road Crew",
            "occupation_F": "Road Crew"
        },
        {
            "noun": "Road workers   ",
            "occupation_M": "Road workers   ",
            "occupation_F": "Road workers   "
        },
        {
            "noun": "Role players",
            "occupation_M": "Role players",
            "occupation_F": "Role players"
        },
        {
            "noun": "Romantic novelists   ",
            "occupation_M": "Romantic novelists   ",
            "occupation_F": "Romantic novelists   "
        },
        {
            "noun": "Roofers   ",
            "occupation_M": "Roofers   ",
            "occupation_F": "Roofers   "
        },
        {
            "noun": "Rubbish collectors   ",
            "occupation_M": "Rubbish collectors   ",
            "occupation_F": "Rubbish collectors   "
        },
        {
            "noun": "Runners   ",
            "occupation_M": "Runners   ",
            "occupation_F": "Runners   "
        },
        {
            "noun": "Sailors   ",
            "occupation_M": "Sailors   ",
            "occupation_F": "Sailors   "
        },
        {
            "noun": "Sales assistants   ",
            "occupation_M": "Sales assistants   ",
            "occupation_F": "Sales assistants   "
        },
        {
            "noun": "Salespersons   ",
            "occupation_M": "Salespersons   ",
            "occupation_F": "Salespersons   "
        },
        {
            "noun": "Schoolchildren      ",
            "occupation_M": "Schoolchildren      ",
            "occupation_F": "Schoolchildren      "
        },
        {
            "noun": "Screenwriters   ",
            "occupation_M": "Screenwriters   ",
            "occupation_F": "Screenwriters   "
        },
        {
            "noun": "Scuba divers   ",
            "occupation_M": "Scuba divers   ",
            "occupation_F": "Scuba divers   "
        },
        {
            "noun": "Sculptors   ",
            "occupation_M": "Sculptors   ",
            "occupation_F": "Sculptors   "
        },
        {
            "noun": "Secretaries   ",
            "occupation_M": "Secretaries   ",
            "occupation_F": "Secretaries   "
        },
        {
            "noun": "Security guards",
            "occupation_M": "Security guards",
            "occupation_F": "Security guards"
        },
        {
            "noun": "Self employed",
            "occupation_M": "Self employed",
            "occupation_F": "Self employed"
        },
        {
            "noun": "Serial killers   ",
            "occupation_M": "Serial killers   ",
            "occupation_F": "Serial killers   "
        },
        {
            "noun": "Sex workers",
            "occupation_M": "Sex workers",
            "occupation_F": "Sex workers"
        },
        {
            "noun": "Sexual abusers",
            "occupation_M": "Sexual abusers",
            "occupation_F": "Sexual abusers"
        },
        {
            "noun": "Shoemakers   ",
            "occupation_M": "Shoemakers   ",
            "occupation_F": "Shoemakers   "
        },
        {
            "noun": "Shoplifters   ",
            "occupation_M": "Shoplifters   ",
            "occupation_F": "Shoplifters   "
        },
        {
            "noun": "Shoppers   ",
            "occupation_M": "Shoppers   ",
            "occupation_F": "Shoppers   "
        },
        {
            "noun": "Singers   ",
            "occupation_M": "Singers   ",
            "occupation_F": "Singers   "
        },
        {
            "noun": "Single parents   ",
            "occupation_M": "Single parents   ",
            "occupation_F": "Single parents   "
        },
        {
            "noun": "Skiers   ",
            "occupation_M": "Skiers   ",
            "occupation_F": "Skiers   "
        },
        {
            "noun": "Smugglers   ",
            "occupation_M": "Smugglers   ",
            "occupation_F": "Smugglers   "
        },
        {
            "noun": "Snooker players   ",
            "occupation_M": "Snooker players   ",
            "occupation_F": "Snooker players   "
        },
        {
            "noun": "Social workers   ",
            "occupation_M": "Social workers   ",
            "occupation_F": "Social workers   "
        },
        {
            "noun": "Socialites   ",
            "occupation_M": "Socialites   ",
            "occupation_F": "Socialites   "
        },
        {
            "noun": "Soldiers   ",
            "occupation_M": "Soldiers   ",
            "occupation_F": "Soldiers   "
        },
        {
            "noun": "Sommeliers",
            "occupation_M": "Sommeliers",
            "occupation_F": "Sommeliers"
        },
        {
            "noun": "Sound engineers   ",
            "occupation_M": "Sound engineers   ",
            "occupation_F": "Sound engineers   "
        },
        {
            "noun": "Sous Chef",
            "occupation_M": "Sous Chef",
            "occupation_F": "Sous Chef"
        },
        {
            "noun": "Spectators   ",
            "occupation_M": "Spectators   ",
            "occupation_F": "Spectators   "
        },
        {
            "noun": "Speech therapists   ",
            "occupation_M": "Speech therapists   ",
            "occupation_F": "Speech therapists   "
        },
        {
            "noun": "Spies   ",
            "occupation_M": "Spies   ",
            "occupation_F": "Spies   "
        },
        {
            "noun": "Sports coaches   ",
            "occupation_M": "Sports coaches   ",
            "occupation_F": "Sports coaches   "
        },
        {
            "noun": "Stalkers",
            "occupation_M": "Stalkers",
            "occupation_F": "Stalkers"
        },
        {
            "noun": "Statisticians   ",
            "occupation_M": "Statisticians   ",
            "occupation_F": "Statisticians   "
        },
        {
            "noun": "Stay at home parents",
            "occupation_M": "Stay at home parents",
            "occupation_F": "Stay at home parents"
        },
        {
            "noun": "Stenographers",
            "occupation_M": "Stenographers",
            "occupation_F": "Stenographers"
        },
        {
            "noun": "Stockbrokers   ",
            "occupation_M": "Stockbrokers   ",
            "occupation_F": "Stockbrokers   "
        },
        {
            "noun": "Strippers   ",
            "occupation_M": "Strippers   ",
            "occupation_F": "Strippers   "
        },
        {
            "noun": "Structural engineers   ",
            "occupation_M": "Structural engineers   ",
            "occupation_F": "Structural engineers   "
        },
        {
            "noun": "Students   ",
            "occupation_M": "Students   ",
            "occupation_F": "Students   "
        },
        {
            "noun": "Supervisors   ",
            "occupation_M": "Supervisors   ",
            "occupation_F": "Supervisors   "
        },
        {
            "noun": "Surfers   ",
            "occupation_M": "Surfers   ",
            "occupation_F": "Surfers   "
        },
        {
            "noun": "Surgeons   ",
            "occupation_M": "Surgeons   ",
            "occupation_F": "Surgeons   "
        },
        {
            "noun": "Suspects   ",
            "occupation_M": "Suspects   ",
            "occupation_F": "Suspects   "
        },
        {
            "noun": "Swimmers   ",
            "occupation_M": "Swimmers   ",
            "occupation_F": "Swimmers   "
        },
        {
            "noun": "Synchronized swimmers   ",
            "occupation_M": "Synchronized swimmers   ",
            "occupation_F": "Synchronized swimmers   "
        },
        {
            "noun": "Systems analysts   ",
            "occupation_M": "Systems analysts   ",
            "occupation_F": "Systems analysts   "
        },
        {
            "noun": "Tailors   ",
            "occupation_M": "Tailors   ",
            "occupation_F": "Tailors   "
        },
        {
            "noun": "Tattoo artists",
            "occupation_M": "Tattoo artists",
            "occupation_F": "Tattoo artists"
        },
        {
            "noun": "Tax advisors   ",
            "occupation_M": "Tax advisors   ",
            "occupation_F": "Tax advisors   "
        },
        {
            "noun": "Taxi drivers   ",
            "occupation_M": "Taxi drivers   ",
            "occupation_F": "Taxi drivers   "
        },
        {
            "noun": "Technicians   ",
            "occupation_M": "Technicians   ",
            "occupation_F": "Technicians   "
        },
        {
            "noun": "Teenagers      ",
            "occupation_M": "Teenagers      ",
            "occupation_F": "Teenagers      "
        },
        {
            "noun": "Temp workers",
            "occupation_M": "Temp workers",
            "occupation_F": "Temp workers"
        },
        {
            "noun": "Tennis players   ",
            "occupation_M": "Tennis players   ",
            "occupation_F": "Tennis players   "
        },
        {
            "noun": "Terrorists   ",
            "occupation_M": "Terrorists   ",
            "occupation_F": "Terrorists   "
        },
        {
            "noun": "Theatre directors   ",
            "occupation_M": "Theatre directors   ",
            "occupation_F": "Theatre directors   "
        },
        {
            "noun": "Therapists",
            "occupation_M": "Therapists",
            "occupation_F": "Therapists"
        },
        {
            "noun": "Thieves   ",
            "occupation_M": "Thieves   ",
            "occupation_F": "Thieves   "
        },
        {
            "noun": "Ticket inspectors   ",
            "occupation_M": "Ticket inspectors   ",
            "occupation_F": "Ticket inspectors   "
        },
        {
            "noun": "Tiktokers",
            "occupation_M": "Tiktokers",
            "occupation_F": "Tiktokers"
        },
        {
            "noun": "Toddlers      ",
            "occupation_M": "Toddlers      ",
            "occupation_F": "Toddlers      "
        },
        {
            "noun": "Tour guides   ",
            "occupation_M": "Tour guides   ",
            "occupation_F": "Tour guides   "
        },
        {
            "noun": "Trade unionists   ",
            "occupation_M": "Trade unionists   ",
            "occupation_F": "Trade unionists   "
        },
        {
            "noun": "Traffic engineers   ",
            "occupation_M": "Traffic engineers   ",
            "occupation_F": "Traffic engineers   "
        },
        {
            "noun": "Train conductors",
            "occupation_M": "Train conductors",
            "occupation_F": "Train conductors"
        },
        {
            "noun": "Translators   ",
            "occupation_M": "Translators   ",
            "occupation_F": "Translators   "
        },
        {
            "noun": "Travel agents   ",
            "occupation_M": "Travel agents   ",
            "occupation_F": "Travel agents   "
        },
        {
            "noun": "Trumpet players   ",
            "occupation_M": "Trumpet players   ",
            "occupation_F": "Trumpet players   "
        },
        {
            "noun": "Tuba players   ",
            "occupation_M": "Tuba players   ",
            "occupation_F": "Tuba players   "
        },
        {
            "noun": "TV show hosts",
            "occupation_M": "TV show hosts",
            "occupation_F": "TV show hosts"
        },
        {
            "noun": "Tyre fitters   ",
            "occupation_M": "Tyre fitters   ",
            "occupation_F": "Tyre fitters   "
        },
        {
            "noun": "Uber drivers",
            "occupation_M": "Uber drivers",
            "occupation_F": "Uber drivers"
        },
        {
            "noun": "Unemployed",
            "occupation_M": "Unemployed",
            "occupation_F": "Unemployed"
        },
        {
            "noun": "Unpaid interns",
            "occupation_M": "Unpaid interns",
            "occupation_F": "Unpaid interns"
        },
        {
            "noun": "Vets   ",
            "occupation_M": "Vets   ",
            "occupation_F": "Vets   "
        },
        {
            "noun": "Vice chancellors",
            "occupation_M": "Vice chancellors",
            "occupation_F": "Vice chancellors"
        },
        {
            "noun": "Victims   ",
            "occupation_M": "Victims   ",
            "occupation_F": "Victims   "
        },
        {
            "noun": "Violinists   ",
            "occupation_M": "Violinists   ",
            "occupation_F": "Violinists   "
        },
        {
            "noun": "Waiters   ",
            "occupation_M": "Waiters   ",
            "occupation_F": "Waiters   "
        },
        {
            "noun": "Wardens   ",
            "occupation_M": "Wardens   ",
            "occupation_F": "Wardens   "
        },
        {
            "noun": "Weavers   ",
            "occupation_M": "Weavers   ",
            "occupation_F": "Weavers   "
        },
        {
            "noun": "Web designers",
            "occupation_M": "Web designers",
            "occupation_F": "Web designers"
        },
        {
            "noun": "Wedding planners   ",
            "occupation_M": "Wedding planners   ",
            "occupation_F": "Wedding planners   "
        },
        {
            "noun": "Weight lifters   ",
            "occupation_M": "Weight lifters   ",
            "occupation_F": "Weight lifters   "
        },
        {
            "noun": "Welders   ",
            "occupation_M": "Welders   ",
            "occupation_F": "Welders   "
        },
        {
            "noun": "Whistleblowers",
            "occupation_M": "Whistleblowers",
            "occupation_F": "Whistleblowers"
        },
        {
            "noun": "Wine connoisseurs   ",
            "occupation_M": "Wine connoisseurs   ",
            "occupation_F": "Wine connoisseurs   "
        },
        {
            "noun": "Wood carvers   ",
            "occupation_M": "Wood carvers   ",
            "occupation_F": "Wood carvers   "
        },
        {
            "noun": "Wood workers   ",
            "occupation_M": "Wood workers   ",
            "occupation_F": "Wood workers   "
        },
        {
            "noun": "Workers   ",
            "occupation_M": "Workers   ",
            "occupation_F": "Workers   "
        },
        {
            "noun": "Wrestlers   ",
            "occupation_M": "Wrestlers   ",
            "occupation_F": "Wrestlers   "
        },
        {
            "noun": "Writers   ",
            "occupation_M": "Writers   ",
            "occupation_F": "Writers   "
        },
        {
            "noun": "X-ray technicians   ",
            "occupation_M": "X-ray technicians   ",
            "occupation_F": "X-ray technicians   "
        },
        {
            "noun": "Yoga instructors",
            "occupation_M": "Yoga instructors",
            "occupation_F": "Yoga instructors"
        },
        {
            "noun": "Youngsters      ",
            "occupation_M": "Youngsters      ",
            "occupation_F": "Youngsters      "
        },
        {
            "noun": "Youtubers",
            "occupation_M": "Youtubers",
            "occupation_F": "Youtubers"
        },
        {
            "noun": "Zoologists   ",
            "occupation_M": "Zoologists   ",
            "occupation_F": "Zoologists   "
        }
    ],
    "Dutch": [
        {
            "noun": "Academics",
            "occupation_M": "Academics_DutchM",
            "occupation_F": "universitaires_DutchF"
        },
        {
            "noun": "Accountants   ",
            "occupation_M": "Accountants   _DutchM",
            "occupation_F": "Comptables_DutchF"
        },
        {
            "noun": "Acrobats   ",
            "occupation_M": "Acrobats   _DutchM",
            "occupation_F": "acrobates_DutchF"
        },
        {
            "noun": "Actors",
            "occupation_M": "Actors_DutchM",
            "occupation_F": "acteurs_DutchF"
        },
        {
            "noun": "Acupuncturists   ",
            "occupation_M": "Acupuncturists   _DutchM",
            "occupation_F": "acupuncteurs_DutchF"
        },
        {
            "noun": "Administrative workers   ",
            "occupation_M": "Administrative workers   _DutchM",
            "occupation_F": "employés dans l'administration_DutchF"
        },
        {
            "noun": "Admirals   ",
            "occupation_M": "Admirals   _DutchM",
            "occupation_F": "amiraux_DutchF"
        },
        {
            "noun": "Aerobics instructors   ",
            "occupation_M": "Aerobics instructors   _DutchM",
            "occupation_F": "coachs d'aérobic_DutchF"
        },
        {
            "noun": "Air traffic controllers   ",
            "occupation_M": "Air traffic controllers   _DutchM",
            "occupation_F": "contrôleurs aériens_DutchF"
        },
        {
            "noun": "Alcoholics   ",
            "occupation_M": "Alcoholics   _DutchM",
            "occupation_F": "alcooliques_DutchF"
        },
        {
            "noun": "Animators",
            "occupation_M": "Animators_DutchM",
            "occupation_F": "animateurs de dessin animé_DutchF"
        },
        {
            "noun": "Antique dealers   ",
            "occupation_M": "Antique dealers   _DutchM",
            "occupation_F": "antiquaires_DutchF"
        },
        {
            "noun": "Apprentices   ",
            "occupation_M": "Apprentices   _DutchM",
            "occupation_F": "apprentis_DutchF"
        },
        {
            "noun": "Architects   ",
            "occupation_M": "Architects   _DutchM",
            "occupation_F": "architectes_DutchF"
        },
        {
            "noun": "Archivists   ",
            "occupation_M": "Archivists   _DutchM",
            "occupation_F": "archivistes_DutchF"
        },
        {
            "noun": "Artists   ",
            "occupation_M": "Artists   _DutchM",
            "occupation_F": "artistes_DutchF"
        },
        {
            "noun": "Assistants   ",
            "occupation_M": "Assistants   _DutchM",
            "occupation_F": "assistants_DutchF"
        },
        {
            "noun": "Astrologists   ",
            "occupation_M": "Astrologists   _DutchM",
            "occupation_F": "astrologues_DutchF"
        },
        {
            "noun": "Astronauts   ",
            "occupation_M": "Astronauts   _DutchM",
            "occupation_F": "astronautes_DutchF"
        },
        {
            "noun": "Astronomers   ",
            "occupation_M": "Astronomers   _DutchM",
            "occupation_F": "astronomes_DutchF"
        },
        {
            "noun": "Athletes   ",
            "occupation_M": "Athletes   _DutchM",
            "occupation_F": "athlètes_DutchF"
        },
        {
            "noun": "Auctioneers   ",
            "occupation_M": "Auctioneers   _DutchM",
            "occupation_F": "commissaires-priseurs_DutchF"
        },
        {
            "noun": "Authors   ",
            "occupation_M": "Authors   _DutchM",
            "occupation_F": "auteurs_DutchF"
        },
        {
            "noun": "Babies      ",
            "occupation_M": "Babies      _DutchM",
            "occupation_F": "bébés_DutchF"
        },
        {
            "noun": "Babysitters   ",
            "occupation_M": "Babysitters   _DutchM",
            "occupation_F": "baby-sitters_DutchF"
        },
        {
            "noun": "Bakers   ",
            "occupation_M": "Bakers   _DutchM",
            "occupation_F": "boulangers_DutchF"
        },
        {
            "noun": "Ballet dancers   ",
            "occupation_M": "Ballet dancers   _DutchM",
            "occupation_F": "danseurs de ballet_DutchF"
        },
        {
            "noun": "Bank clerks   ",
            "occupation_M": "Bank clerks   _DutchM",
            "occupation_F": "employés de banque_DutchF"
        },
        {
            "noun": "Bankers   ",
            "occupation_M": "Bankers   _DutchM",
            "occupation_F": "banquiers_DutchF"
        },
        {
            "noun": "Barbers   ",
            "occupation_M": "Barbers   _DutchM",
            "occupation_F": "barbiers_DutchF"
        },
        {
            "noun": "Baristas",
            "occupation_M": "Baristas_DutchM",
            "occupation_F": "baristas_DutchF"
        },
        {
            "noun": "Bartenders   ",
            "occupation_M": "Bartenders   _DutchM",
            "occupation_F": "barmans_DutchF"
        },
        {
            "noun": "Basketball players   ",
            "occupation_M": "Basketball players   _DutchM",
            "occupation_F": "basketteurs_DutchF"
        },
        {
            "noun": "Bass players   ",
            "occupation_M": "Bass players   _DutchM",
            "occupation_F": "bassistes_DutchF"
        },
        {
            "noun": "Beauticians   ",
            "occupation_M": "Beauticians   _DutchM",
            "occupation_F": "esthéticiens_DutchF"
        },
        {
            "noun": "Beekeepers",
            "occupation_M": "Beekeepers_DutchM",
            "occupation_F": "apiculteurs_DutchF"
        },
        {
            "noun": "Bikers   ",
            "occupation_M": "Bikers   _DutchM",
            "occupation_F": "motards_DutchF"
        },
        {
            "noun": "Biologists   ",
            "occupation_M": "Biologists   _DutchM",
            "occupation_F": "biologistes_DutchF"
        },
        {
            "noun": "Birth attendants   ",
            "occupation_M": "Birth attendants   _DutchM",
            "occupation_F": "sage-femmes_DutchF"
        },
        {
            "noun": "Blacksmiths   ",
            "occupation_M": "Blacksmiths   _DutchM",
            "occupation_F": "forgerons_DutchF"
        },
        {
            "noun": "Blue-collar workers",
            "occupation_M": "Blue-collar workers_DutchM",
            "occupation_F": "ouvriers_DutchF"
        },
        {
            "noun": "Board game players",
            "occupation_M": "Board game players_DutchM",
            "occupation_F": "joueurs de jeux de société_DutchF"
        },
        {
            "noun": "Bodyguards",
            "occupation_M": "Bodyguards_DutchM",
            "occupation_F": "gardes du corps_DutchF"
        },
        {
            "noun": "Bosses   ",
            "occupation_M": "Bosses   _DutchM",
            "occupation_F": "patrons_DutchF"
        },
        {
            "noun": "Boutique owners   ",
            "occupation_M": "Boutique owners   _DutchM",
            "occupation_F": "gérants de boutique_DutchF"
        },
        {
            "noun": "Boxers   ",
            "occupation_M": "Boxers   _DutchM",
            "occupation_F": "boxeurs_DutchF"
        },
        {
            "noun": "Bricklayers   ",
            "occupation_M": "Bricklayers   _DutchM",
            "occupation_F": "maçons_DutchF"
        },
        {
            "noun": "Building contractors   ",
            "occupation_M": "Building contractors   _DutchM",
            "occupation_F": "entrepreneurs en construction_DutchF"
        },
        {
            "noun": "Bus drivers   ",
            "occupation_M": "Bus drivers   _DutchM",
            "occupation_F": "conducteurs de bus_DutchF"
        },
        {
            "noun": "Butchers   ",
            "occupation_M": "Butchers   _DutchM",
            "occupation_F": "bouchers_DutchF"
        },
        {
            "noun": "Cabinet ministers   ",
            "occupation_M": "Cabinet ministers   _DutchM",
            "occupation_F": "ministres_DutchF"
        },
        {
            "noun": "Camera operators   ",
            "occupation_M": "Camera operators   _DutchM",
            "occupation_F": "cadreurs_DutchF"
        },
        {
            "noun": "Campers   ",
            "occupation_M": "Campers   _DutchM",
            "occupation_F": "campeurs_DutchF"
        },
        {
            "noun": "Canteen assistants   ",
            "occupation_M": "Canteen assistants   _DutchM",
            "occupation_F": "aides de cantine_DutchF"
        },
        {
            "noun": "Car mechanics   ",
            "occupation_M": "Car mechanics   _DutchM",
            "occupation_F": "mécaniciens automobiles_DutchF"
        },
        {
            "noun": "Card players   ",
            "occupation_M": "Card players   _DutchM",
            "occupation_F": "joueurs de cartes_DutchF"
        },
        {
            "noun": "Care workers   ",
            "occupation_M": "Care workers   _DutchM",
            "occupation_F": "travailleurs sociaux_DutchF"
        },
        {
            "noun": "Caregivers   ",
            "occupation_M": "Caregivers   _DutchM",
            "occupation_F": "aidants_DutchF"
        },
        {
            "noun": "Carpenters   ",
            "occupation_M": "Carpenters   _DutchM",
            "occupation_F": "charpentiers_DutchF"
        },
        {
            "noun": "Cartoonists   ",
            "occupation_M": "Cartoonists   _DutchM",
            "occupation_F": "dessinateurs de bandes dessinées_DutchF"
        },
        {
            "noun": "Cashiers   ",
            "occupation_M": "Cashiers   _DutchM",
            "occupation_F": "caissiers_DutchF"
        },
        {
            "noun": "Cat owners   ",
            "occupation_M": "Cat owners   _DutchM",
            "occupation_F": "propriétaires de chat_DutchF"
        },
        {
            "noun": "Caterers   ",
            "occupation_M": "Caterers   _DutchM",
            "occupation_F": "traiteurs_DutchF"
        },
        {
            "noun": "Celebrities   ",
            "occupation_M": "Celebrities   _DutchM",
            "occupation_F": "célébrités_DutchF"
        },
        {
            "noun": "Ceramists",
            "occupation_M": "Ceramists_DutchM",
            "occupation_F": "céramistes_DutchF"
        },
        {
            "noun": "Chair persons   ",
            "occupation_M": "Chair persons   _DutchM",
            "occupation_F": "président du comité_DutchF"
        },
        {
            "noun": "Chefs",
            "occupation_M": "Chefs_DutchM",
            "occupation_F": "chefs cuisiniers_DutchF"
        },
        {
            "noun": "Chemists   ",
            "occupation_M": "Chemists   _DutchM",
            "occupation_F": "chimistes_DutchF"
        },
        {
            "noun": "Child educators   ",
            "occupation_M": "Child educators   _DutchM",
            "occupation_F": "éducateurs de la petite enfance_DutchF"
        },
        {
            "noun": "Children      ",
            "occupation_M": "Children      _DutchM",
            "occupation_F": "enfants_DutchF"
        },
        {
            "noun": "Chiropractors   ",
            "occupation_M": "Chiropractors   _DutchM",
            "occupation_F": "chiropracteurs_DutchF"
        },
        {
            "noun": "Chocolate lovers   ",
            "occupation_M": "Chocolate lovers   _DutchM",
            "occupation_F": "amateurs de chocolat_DutchF"
        },
        {
            "noun": "Choreographers   ",
            "occupation_M": "Choreographers   _DutchM",
            "occupation_F": "chorégraphes_DutchF"
        },
        {
            "noun": "Cinema goers   ",
            "occupation_M": "Cinema goers   _DutchM",
            "occupation_F": "spectateurs de cinéma_DutchF"
        },
        {
            "noun": "City planners",
            "occupation_M": "City planners_DutchM",
            "occupation_F": "urbanistes_DutchF"
        },
        {
            "noun": "Clairvoyants   ",
            "occupation_M": "Clairvoyants   _DutchM",
            "occupation_F": "voyants_DutchF"
        },
        {
            "noun": "Cleaners   ",
            "occupation_M": "Cleaners   _DutchM",
            "occupation_F": "techniciens de surface_DutchF"
        },
        {
            "noun": "Climbers   ",
            "occupation_M": "Climbers   _DutchM",
            "occupation_F": "grimpeurs_DutchF"
        },
        {
            "noun": "Clinical psychologists   ",
            "occupation_M": "Clinical psychologists   _DutchM",
            "occupation_F": "psychologues cliniciens_DutchF"
        },
        {
            "noun": "Clowns   ",
            "occupation_M": "Clowns   _DutchM",
            "occupation_F": "clowns_DutchF"
        },
        {
            "noun": "Colonels   ",
            "occupation_M": "Colonels   _DutchM",
            "occupation_F": "colonels_DutchF"
        },
        {
            "noun": "Comedians   ",
            "occupation_M": "Comedians   _DutchM",
            "occupation_F": "humoristes_DutchF"
        },
        {
            "noun": "Company directors   ",
            "occupation_M": "Company directors   _DutchM",
            "occupation_F": "directeurs d'entreprise_DutchF"
        },
        {
            "noun": "Composers   ",
            "occupation_M": "Composers   _DutchM",
            "occupation_F": "compositeurs_DutchF"
        },
        {
            "noun": "Computer programmers   ",
            "occupation_M": "Computer programmers   _DutchM",
            "occupation_F": "programmeurs informatique_DutchF"
        },
        {
            "noun": "Computer specialists   ",
            "occupation_M": "Computer specialists   _DutchM",
            "occupation_F": "informaticiens_DutchF"
        },
        {
            "noun": "Computer technicians   ",
            "occupation_M": "Computer technicians   _DutchM",
            "occupation_F": "techniciens informatiques_DutchF"
        },
        {
            "noun": "Construction workers   ",
            "occupation_M": "Construction workers   _DutchM",
            "occupation_F": "ouvriers du bâtiment_DutchF"
        },
        {
            "noun": "Content creators",
            "occupation_M": "Content creators_DutchM",
            "occupation_F": "créateurs de contenu_DutchF"
        },
        {
            "noun": "Cooks",
            "occupation_M": "Cooks_DutchM",
            "occupation_F": "cuisiniers_DutchF"
        },
        {
            "noun": "Coordinators",
            "occupation_M": "Coordinators_DutchM",
            "occupation_F": "coordinateurs_DutchF"
        },
        {
            "noun": "Counseling psychologists   ",
            "occupation_M": "Counseling psychologists   _DutchM",
            "occupation_F": "psychothérapeutes_DutchF"
        },
        {
            "noun": "Couriers   ",
            "occupation_M": "Couriers   _DutchM",
            "occupation_F": "coursiers_DutchF"
        },
        {
            "noun": "Craft workers   ",
            "occupation_M": "Craft workers   _DutchM",
            "occupation_F": "artisans_DutchF"
        },
        {
            "noun": "Crane operators   ",
            "occupation_M": "Crane operators   _DutchM",
            "occupation_F": "grutiers_DutchF"
        },
        {
            "noun": "Criminals   ",
            "occupation_M": "Criminals   _DutchM",
            "occupation_F": "criminels_DutchF"
        },
        {
            "noun": "Cult members   ",
            "occupation_M": "Cult members   _DutchM",
            "occupation_F": "membres de secte_DutchF"
        },
        {
            "noun": "Curators   ",
            "occupation_M": "Curators   _DutchM",
            "occupation_F": "conservateurs de musée_DutchF"
        },
        {
            "noun": "Customers   ",
            "occupation_M": "Customers   _DutchM",
            "occupation_F": "clients_DutchF"
        },
        {
            "noun": "Customs inspectors   ",
            "occupation_M": "Customs inspectors   _DutchM",
            "occupation_F": "inspecteurs des douanes_DutchF"
        },
        {
            "noun": "Customs officers   ",
            "occupation_M": "Customs officers   _DutchM",
            "occupation_F": "douaniers_DutchF"
        },
        {
            "noun": "Cyclists   ",
            "occupation_M": "Cyclists   _DutchM",
            "occupation_F": "cyclistes_DutchF"
        },
        {
            "noun": "Dance instructors   ",
            "occupation_M": "Dance instructors   _DutchM",
            "occupation_F": "professeurs de danse_DutchF"
        },
        {
            "noun": "Dancers   ",
            "occupation_M": "Dancers   _DutchM",
            "occupation_F": "danseurs_DutchF"
        },
        {
            "noun": "Data analyst",
            "occupation_M": "Data analyst_DutchM",
            "occupation_F": "data analysts_DutchF"
        },
        {
            "noun": "Deacons   ",
            "occupation_M": "Deacons   _DutchM",
            "occupation_F": "diacres_DutchF"
        },
        {
            "noun": "Delivery drivers",
            "occupation_M": "Delivery drivers_DutchM",
            "occupation_F": "livreurs_DutchF"
        },
        {
            "noun": "Dental hygienists   ",
            "occupation_M": "Dental hygienists   _DutchM",
            "occupation_F": "hygiénistes dentaires_DutchF"
        },
        {
            "noun": "Dental technicians   ",
            "occupation_M": "Dental technicians   _DutchM",
            "occupation_F": "techniciens-dentistes_DutchF"
        },
        {
            "noun": "Dentists   ",
            "occupation_M": "Dentists   _DutchM",
            "occupation_F": "dentistes_DutchF"
        },
        {
            "noun": "Designers   ",
            "occupation_M": "Designers   _DutchM",
            "occupation_F": "designers_DutchF"
        },
        {
            "noun": "Detectives   ",
            "occupation_M": "Detectives   _DutchM",
            "occupation_F": "détectives_DutchF"
        },
        {
            "noun": "Dieticians   ",
            "occupation_M": "Dieticians   _DutchM",
            "occupation_F": "diététiciens_DutchF"
        },
        {
            "noun": "Diplomats   ",
            "occupation_M": "Diplomats   _DutchM",
            "occupation_F": "diplomates_DutchF"
        },
        {
            "noun": "Doctors of Philosophy   ",
            "occupation_M": "Doctors of Philosophy   _DutchM",
            "occupation_F": "docteurs (PhD)_DutchF"
        },
        {
            "noun": "Dog owners   ",
            "occupation_M": "Dog owners   _DutchM",
            "occupation_F": "propriétaires de chien_DutchF"
        },
        {
            "noun": "Door keepers   ",
            "occupation_M": "Door keepers   _DutchM",
            "occupation_F": "portiers_DutchF"
        },
        {
            "noun": "Dressmakers   ",
            "occupation_M": "Dressmakers   _DutchM",
            "occupation_F": "couturiers_DutchF"
        },
        {
            "noun": "Drivers   ",
            "occupation_M": "Drivers   _DutchM",
            "occupation_F": "conducteurs_DutchF"
        },
        {
            "noun": "Driving instructors   ",
            "occupation_M": "Driving instructors   _DutchM",
            "occupation_F": "moniteurs d'auto-école_DutchF"
        },
        {
            "noun": "Drug addicts   ",
            "occupation_M": "Drug addicts   _DutchM",
            "occupation_F": "toxicomanes_DutchF"
        },
        {
            "noun": "Drug dealers   ",
            "occupation_M": "Drug dealers   _DutchM",
            "occupation_F": "Dealers_DutchF"
        },
        {
            "noun": "Drummers   ",
            "occupation_M": "Drummers   _DutchM",
            "occupation_F": "batteurs_DutchF"
        },
        {
            "noun": "Economists   ",
            "occupation_M": "Economists   _DutchM",
            "occupation_F": "économistes_DutchF"
        },
        {
            "noun": "Editors   ",
            "occupation_M": "Editors   _DutchM",
            "occupation_F": "rédacteurs en chef_DutchF"
        },
        {
            "noun": "Educational psychologists   ",
            "occupation_M": "Educational psychologists   _DutchM",
            "occupation_F": "psychologues scolaires_DutchF"
        },
        {
            "noun": "Electricians   ",
            "occupation_M": "Electricians   _DutchM",
            "occupation_F": "électriciens_DutchF"
        },
        {
            "noun": "Embezzlers   ",
            "occupation_M": "Embezzlers   _DutchM",
            "occupation_F": "escrocs_DutchF"
        },
        {
            "noun": "Engine-drivers   ",
            "occupation_M": "Engine-drivers   _DutchM",
            "occupation_F": "pilotes de locomotives_DutchF"
        },
        {
            "noun": "Engineers   ",
            "occupation_M": "Engineers   _DutchM",
            "occupation_F": "ingénieurs_DutchF"
        },
        {
            "noun": "Entrepreneurs",
            "occupation_M": "Entrepreneurs_DutchM",
            "occupation_F": "entrepreneurs_DutchF"
        },
        {
            "noun": "Environmentalists   ",
            "occupation_M": "Environmentalists   _DutchM",
            "occupation_F": "écologistes_DutchF"
        },
        {
            "noun": "Escourts",
            "occupation_M": "Escourts_DutchM",
            "occupation_F": "escorts_DutchF"
        },
        {
            "noun": "Estate agents   ",
            "occupation_M": "Estate agents   _DutchM",
            "occupation_F": "agents immobiliers_DutchF"
        },
        {
            "noun": "Executives   ",
            "occupation_M": "Executives   _DutchM",
            "occupation_F": "cadres_DutchF"
        },
        {
            "noun": "Exercise instructors   ",
            "occupation_M": "Exercise instructors   _DutchM",
            "occupation_F": "coach sportif_DutchF"
        },
        {
            "noun": "Explorers   ",
            "occupation_M": "Explorers   _DutchM",
            "occupation_F": "explorateurs_DutchF"
        },
        {
            "noun": "Extremists",
            "occupation_M": "Extremists_DutchM",
            "occupation_F": "extrémistes_DutchF"
        },
        {
            "noun": "Factory managers   ",
            "occupation_M": "Factory managers   _DutchM",
            "occupation_F": "directeurs d'usine_DutchF"
        },
        {
            "noun": "Fans   ",
            "occupation_M": "Fans   _DutchM",
            "occupation_F": "fans_DutchF"
        },
        {
            "noun": "Farmers   ",
            "occupation_M": "Farmers   _DutchM",
            "occupation_F": "agriculteurs_DutchF"
        },
        {
            "noun": "Fencers   ",
            "occupation_M": "Fencers   _DutchM",
            "occupation_F": "escrimeurs_DutchF"
        },
        {
            "noun": "Figure skaters   ",
            "occupation_M": "Figure skaters   _DutchM",
            "occupation_F": "patineurs artistiques_DutchF"
        },
        {
            "noun": "Film directors   ",
            "occupation_M": "Film directors   _DutchM",
            "occupation_F": "réalisateurs_DutchF"
        },
        {
            "noun": "Film stars   ",
            "occupation_M": "Film stars   _DutchM",
            "occupation_F": "stars de cinéma_DutchF"
        },
        {
            "noun": "Financial advisers   ",
            "occupation_M": "Financial advisers   _DutchM",
            "occupation_F": "conseillers financiers_DutchF"
        },
        {
            "noun": "Financial analysts   ",
            "occupation_M": "Financial analysts   _DutchM",
            "occupation_F": "analystes financiers_DutchF"
        },
        {
            "noun": "Firefighters   ",
            "occupation_M": "Firefighters   _DutchM",
            "occupation_F": "pompiers_DutchF"
        },
        {
            "noun": "Flight attendants   ",
            "occupation_M": "Flight attendants   _DutchM",
            "occupation_F": "stewards_DutchF"
        },
        {
            "noun": "Florists   ",
            "occupation_M": "Florists   _DutchM",
            "occupation_F": "fleuristes_DutchF"
        },
        {
            "noun": "Flute players   ",
            "occupation_M": "Flute players   _DutchM",
            "occupation_F": "flûtistes_DutchF"
        },
        {
            "noun": "Football coaches   ",
            "occupation_M": "Football coaches   _DutchM",
            "occupation_F": "entraîneurs de foot_DutchF"
        },
        {
            "noun": "Football players   ",
            "occupation_M": "Football players   _DutchM",
            "occupation_F": "footballeurs_DutchF"
        },
        {
            "noun": "Forensic psychologists   ",
            "occupation_M": "Forensic psychologists   _DutchM",
            "occupation_F": "psychologues forensiques_DutchF"
        },
        {
            "noun": "Forest rangers   ",
            "occupation_M": "Forest rangers   _DutchM",
            "occupation_F": "gardes forestiers_DutchF"
        },
        {
            "noun": "Fortune tellers   ",
            "occupation_M": "Fortune tellers   _DutchM",
            "occupation_F": "diseurs de bonne aventure_DutchF"
        },
        {
            "noun": "Funeral directors   ",
            "occupation_M": "Funeral directors   _DutchM",
            "occupation_F": "directeurs des pompes funèbres_DutchF"
        },
        {
            "noun": "Game designers",
            "occupation_M": "Game designers_DutchM",
            "occupation_F": "concepteurs de jeux_DutchF"
        },
        {
            "noun": "Game wardens   ",
            "occupation_M": "Game wardens   _DutchM",
            "occupation_F": "gardes-chasses_DutchF"
        },
        {
            "noun": "Gang members",
            "occupation_M": "Gang members_DutchM",
            "occupation_F": "Membres de gang_DutchF"
        },
        {
            "noun": "Gardeners   ",
            "occupation_M": "Gardeners   _DutchM",
            "occupation_F": "jardiniers_DutchF"
        },
        {
            "noun": "General managers   ",
            "occupation_M": "General managers   _DutchM",
            "occupation_F": "directeurs généraux_DutchF"
        },
        {
            "noun": "Generals   ",
            "occupation_M": "Generals   _DutchM",
            "occupation_F": "généraux_DutchF"
        },
        {
            "noun": "Geologists   ",
            "occupation_M": "Geologists   _DutchM",
            "occupation_F": "géologues_DutchF"
        },
        {
            "noun": "Goalkeepers   ",
            "occupation_M": "Goalkeepers   _DutchM",
            "occupation_F": "gardiens de but_DutchF"
        },
        {
            "noun": "Goldsmiths   ",
            "occupation_M": "Goldsmiths   _DutchM",
            "occupation_F": "orfèvres_DutchF"
        },
        {
            "noun": "Golfers   ",
            "occupation_M": "Golfers   _DutchM",
            "occupation_F": "golfeurs_DutchF"
        },
        {
            "noun": "Government officials   ",
            "occupation_M": "Government officials   _DutchM",
            "occupation_F": "fonctionnaires_DutchF"
        },
        {
            "noun": "Governors   ",
            "occupation_M": "Governors   _DutchM",
            "occupation_F": "gouverneurs_DutchF"
        },
        {
            "noun": "Graphic designers   ",
            "occupation_M": "Graphic designers   _DutchM",
            "occupation_F": "graphistes_DutchF"
        },
        {
            "noun": "Guards   ",
            "occupation_M": "Guards   _DutchM",
            "occupation_F": "gardiens_DutchF"
        },
        {
            "noun": "Guitar players   ",
            "occupation_M": "Guitar players   _DutchM",
            "occupation_F": "guitaristes_DutchF"
        },
        {
            "noun": "Gymnasts   ",
            "occupation_M": "Gymnasts   _DutchM",
            "occupation_F": "gymnastes_DutchF"
        },
        {
            "noun": "Gynaecologists   ",
            "occupation_M": "Gynaecologists   _DutchM",
            "occupation_F": "gynécologues_DutchF"
        },
        {
            "noun": "Hackers",
            "occupation_M": "Hackers_DutchM",
            "occupation_F": "hackers_DutchF"
        },
        {
            "noun": "Hairdressers   ",
            "occupation_M": "Hairdressers   _DutchM",
            "occupation_F": "coiffeurs_DutchF"
        },
        {
            "noun": "Head nurses",
            "occupation_M": "Head nurses_DutchM",
            "occupation_F": "infirmiers chefs_DutchF"
        },
        {
            "noun": "Head physicians",
            "occupation_M": "Head physicians_DutchM",
            "occupation_F": "médecins chefs_DutchF"
        },
        {
            "noun": "Head teachers   ",
            "occupation_M": "Head teachers   _DutchM",
            "occupation_F": "directeurs d'école_DutchF"
        },
        {
            "noun": "Heads of department",
            "occupation_M": "Heads of department_DutchM",
            "occupation_F": "chefs de département_DutchF"
        },
        {
            "noun": "Heavy equipment operators   ",
            "occupation_M": "Heavy equipment operators   _DutchM",
            "occupation_F": "opérateurs d'équipement lourd_DutchF"
        },
        {
            "noun": "Historians   ",
            "occupation_M": "Historians   _DutchM",
            "occupation_F": "historiens_DutchF"
        },
        {
            "noun": "History professors   ",
            "occupation_M": "History professors   _DutchM",
            "occupation_F": "professeurs d'histoire_DutchF"
        },
        {
            "noun": "Hitchhikers   ",
            "occupation_M": "Hitchhikers   _DutchM",
            "occupation_F": "auto-stoppeurs_DutchF"
        },
        {
            "noun": "Homeless persons   ",
            "occupation_M": "Homeless persons   _DutchM",
            "occupation_F": "personnes sans-abris_DutchF"
        },
        {
            "noun": "Horse riders   ",
            "occupation_M": "Horse riders   _DutchM",
            "occupation_F": "cavaliers_DutchF"
        },
        {
            "noun": "Horse trainers   ",
            "occupation_M": "Horse trainers   _DutchM",
            "occupation_F": "dresseurs de chevaux_DutchF"
        },
        {
            "noun": "Hospital orderlies   ",
            "occupation_M": "Hospital orderlies   _DutchM",
            "occupation_F": "aides-soignants_DutchF"
        },
        {
            "noun": "Hotel guests   ",
            "occupation_M": "Hotel guests   _DutchM",
            "occupation_F": "clients d'hôtel_DutchF"
        },
        {
            "noun": "Hotel managers   ",
            "occupation_M": "Hotel managers   _DutchM",
            "occupation_F": "directeurs d'hôtel_DutchF"
        },
        {
            "noun": "Housekeepers   ",
            "occupation_M": "Housekeepers   _DutchM",
            "occupation_F": "gouvernants_DutchF"
        },
        {
            "noun": "Human Resource Managers",
            "occupation_M": "Human Resource Managers_DutchM",
            "occupation_F": "Responsables des Ressources Humaines_DutchF"
        },
        {
            "noun": "Humanitarians   ",
            "occupation_M": "Humanitarians   _DutchM",
            "occupation_F": "humanitaires_DutchF"
        },
        {
            "noun": "Humanities professors   ",
            "occupation_M": "Humanities professors   _DutchM",
            "occupation_F": "professeurs en sciences humaines_DutchF"
        },
        {
            "noun": "Hunters   ",
            "occupation_M": "Hunters   _DutchM",
            "occupation_F": "chasseurs_DutchF"
        },
        {
            "noun": "Ice skaters   ",
            "occupation_M": "Ice skaters   _DutchM",
            "occupation_F": "patineurs sur glace_DutchF"
        },
        {
            "noun": "Infant teachers   ",
            "occupation_M": "Infant teachers   _DutchM",
            "occupation_F": "éducateurs en crèche_DutchF"
        },
        {
            "noun": "Influencers",
            "occupation_M": "Influencers_DutchM",
            "occupation_F": "influenceurs_DutchF"
        },
        {
            "noun": "Informal caregivers",
            "occupation_M": "Informal caregivers_DutchM",
            "occupation_F": "proches aidants_DutchF"
        },
        {
            "noun": "Informants   ",
            "occupation_M": "Informants   _DutchM",
            "occupation_F": "informateurs_DutchF"
        },
        {
            "noun": "Inmates   ",
            "occupation_M": "Inmates   _DutchM",
            "occupation_F": "détenus_DutchF"
        },
        {
            "noun": "Innkeepers   ",
            "occupation_M": "Innkeepers   _DutchM",
            "occupation_F": "aubergistes_DutchF"
        },
        {
            "noun": "Instagrammers",
            "occupation_M": "Instagrammers_DutchM",
            "occupation_F": "instagrammeurs_DutchF"
        },
        {
            "noun": "Interior decorators   ",
            "occupation_M": "Interior decorators   _DutchM",
            "occupation_F": "décorateurs d'intérieur_DutchF"
        },
        {
            "noun": "Interpreters   ",
            "occupation_M": "Interpreters   _DutchM",
            "occupation_F": "interprètes_DutchF"
        },
        {
            "noun": "Inventors   ",
            "occupation_M": "Inventors   _DutchM",
            "occupation_F": "inventeurs_DutchF"
        },
        {
            "noun": "IT consultants   ",
            "occupation_M": "IT consultants   _DutchM",
            "occupation_F": "consultants informatiques_DutchF"
        },
        {
            "noun": "Janitors   ",
            "occupation_M": "Janitors   _DutchM",
            "occupation_F": "concierges_DutchF"
        },
        {
            "noun": "Jewelers   ",
            "occupation_M": "Jewelers   _DutchM",
            "occupation_F": "bijoutiers_DutchF"
        },
        {
            "noun": "Job seekers   ",
            "occupation_M": "Job seekers   _DutchM",
            "occupation_F": "chercheurs d'emploi_DutchF"
        },
        {
            "noun": "Joggers   ",
            "occupation_M": "Joggers   _DutchM",
            "occupation_F": "joggeurs_DutchF"
        },
        {
            "noun": "Journalists   ",
            "occupation_M": "Journalists   _DutchM",
            "occupation_F": "journalistes_DutchF"
        },
        {
            "noun": "Judges   ",
            "occupation_M": "Judges   _DutchM",
            "occupation_F": "juges_DutchF"
        },
        {
            "noun": "Jugglers   ",
            "occupation_M": "Jugglers   _DutchM",
            "occupation_F": "jongleurs_DutchF"
        },
        {
            "noun": "Jurors   ",
            "occupation_M": "Jurors   _DutchM",
            "occupation_F": "jurés_DutchF"
        },
        {
            "noun": "Killers   ",
            "occupation_M": "Killers   _DutchM",
            "occupation_F": "tueurs_DutchF"
        },
        {
            "noun": "Kindergarten teachers   ",
            "occupation_M": "Kindergarten teachers   _DutchM",
            "occupation_F": "enseignants à l'école enfantine_DutchF"
        },
        {
            "noun": "Lab technicians   ",
            "occupation_M": "Lab technicians   _DutchM",
            "occupation_F": "techniciens de laboratoire_DutchF"
        },
        {
            "noun": "Landscape gardeners   ",
            "occupation_M": "Landscape gardeners   _DutchM",
            "occupation_F": "paysagistes_DutchF"
        },
        {
            "noun": "Law clerks   ",
            "occupation_M": "Law clerks   _DutchM",
            "occupation_F": "greffiers_DutchF"
        },
        {
            "noun": "Law professors   ",
            "occupation_M": "Law professors   _DutchM",
            "occupation_F": "professeurs de droit_DutchF"
        },
        {
            "noun": "Lawyers   ",
            "occupation_M": "Lawyers   _DutchM",
            "occupation_F": "avocats_DutchF"
        },
        {
            "noun": "Leaders   ",
            "occupation_M": "Leaders   _DutchM",
            "occupation_F": "leaders_DutchF"
        },
        {
            "noun": "Librarians   ",
            "occupation_M": "Librarians   _DutchM",
            "occupation_F": "bibliothécaires_DutchF"
        },
        {
            "noun": "Lieutenants   ",
            "occupation_M": "Lieutenants   _DutchM",
            "occupation_F": "lieutenants_DutchF"
        },
        {
            "noun": "Life coaches",
            "occupation_M": "Life coaches_DutchM",
            "occupation_F": "coachs de vie_DutchF"
        },
        {
            "noun": "Lifeguards   ",
            "occupation_M": "Lifeguards   _DutchM",
            "occupation_F": "maîtres-nageurs_DutchF"
        },
        {
            "noun": "Lighthouse keepers   ",
            "occupation_M": "Lighthouse keepers   _DutchM",
            "occupation_F": "gardiens de phare_DutchF"
        },
        {
            "noun": "Lodgers   ",
            "occupation_M": "Lodgers   _DutchM",
            "occupation_F": "locataires_DutchF"
        },
        {
            "noun": "Lorry drivers   ",
            "occupation_M": "Lorry drivers   _DutchM",
            "occupation_F": "chauffeurs poids lourds_DutchF"
        },
        {
            "noun": "Magician’s assistants   ",
            "occupation_M": "Magician’s assistants   _DutchM",
            "occupation_F": "magiciens_DutchF"
        },
        {
            "noun": "Magicians   ",
            "occupation_M": "Magicians   _DutchM",
            "occupation_F": "assistants de magiciens_DutchF"
        },
        {
            "noun": "Make up artists   ",
            "occupation_M": "Make up artists   _DutchM",
            "occupation_F": "maquilleurs_DutchF"
        },
        {
            "noun": "Managers   ",
            "occupation_M": "Managers   _DutchM",
            "occupation_F": "managers_DutchF"
        },
        {
            "noun": "Manicurists   ",
            "occupation_M": "Manicurists   _DutchM",
            "occupation_F": "manucures_DutchF"
        },
        {
            "noun": "Market Researchers",
            "occupation_M": "Market Researchers_DutchM",
            "occupation_F": "spécialistes d'étude de marché_DutchF"
        },
        {
            "noun": "Mathematicians   ",
            "occupation_M": "Mathematicians   _DutchM",
            "occupation_F": "mathématiciens_DutchF"
        },
        {
            "noun": "Mayors   ",
            "occupation_M": "Mayors   _DutchM",
            "occupation_F": "maires_DutchF"
        },
        {
            "noun": "Mechanics   ",
            "occupation_M": "Mechanics   _DutchM",
            "occupation_F": "mécaniciens_DutchF"
        },
        {
            "noun": "Medical doctors   ",
            "occupation_M": "Medical doctors   _DutchM",
            "occupation_F": "docteurs_DutchF"
        },
        {
            "noun": "Members of parliament   ",
            "occupation_M": "Members of parliament   _DutchM",
            "occupation_F": "députés_DutchF"
        },
        {
            "noun": "Members of the armed forces    ",
            "occupation_M": "Members of the armed forces    _DutchM",
            "occupation_F": "militaires_DutchF"
        },
        {
            "noun": "Metallurgists   ",
            "occupation_M": "Metallurgists   _DutchM",
            "occupation_F": "métallurgistes_DutchF"
        },
        {
            "noun": "Meteorologists   ",
            "occupation_M": "Meteorologists   _DutchM",
            "occupation_F": "météorologues_DutchF"
        },
        {
            "noun": "Millionaires   ",
            "occupation_M": "Millionaires   _DutchM",
            "occupation_F": "millionnaires_DutchF"
        },
        {
            "noun": "Miners   ",
            "occupation_M": "Miners   _DutchM",
            "occupation_F": "mineurs de fond_DutchF"
        },
        {
            "noun": "Models   ",
            "occupation_M": "Models   _DutchM",
            "occupation_F": "modèles_DutchF"
        },
        {
            "noun": "Mountain climbers   ",
            "occupation_M": "Mountain climbers   _DutchM",
            "occupation_F": "alpinistes_DutchF"
        },
        {
            "noun": "Murderers   ",
            "occupation_M": "Murderers   _DutchM",
            "occupation_F": "meurtriers_DutchF"
        },
        {
            "noun": "Musicians   ",
            "occupation_M": "Musicians   _DutchM",
            "occupation_F": "musiciens_DutchF"
        },
        {
            "noun": "Nail technicians",
            "occupation_M": "Nail technicians_DutchM",
            "occupation_F": "prothésistes ongulaires_DutchF"
        },
        {
            "noun": "Nannies   ",
            "occupation_M": "Nannies   _DutchM",
            "occupation_F": "nounous_DutchF"
        },
        {
            "noun": "Neighbours   ",
            "occupation_M": "Neighbours   _DutchM",
            "occupation_F": "voisins_DutchF"
        },
        {
            "noun": "Neurologists   ",
            "occupation_M": "Neurologists   _DutchM",
            "occupation_F": "neurologues_DutchF"
        },
        {
            "noun": "Neurosurgeons   ",
            "occupation_M": "Neurosurgeons   _DutchM",
            "occupation_F": "neurochirurgiens_DutchF"
        },
        {
            "noun": "News readers   ",
            "occupation_M": "News readers   _DutchM",
            "occupation_F": "présentateurs du journal_DutchF"
        },
        {
            "noun": "Novelists   ",
            "occupation_M": "Novelists   _DutchM",
            "occupation_F": "romanciers_DutchF"
        },
        {
            "noun": "Nurses   ",
            "occupation_M": "Nurses   _DutchM",
            "occupation_F": "infirmiers_DutchF"
        },
        {
            "noun": "Nutritionists   ",
            "occupation_M": "Nutritionists   _DutchM",
            "occupation_F": "nutritionnistes_DutchF"
        },
        {
            "noun": "Occupational therapists   ",
            "occupation_M": "Occupational therapists   _DutchM",
            "occupation_F": "ergothérapeutes_DutchF"
        },
        {
            "noun": "Oceanographers   ",
            "occupation_M": "Oceanographers   _DutchM",
            "occupation_F": "océanographes_DutchF"
        },
        {
            "noun": "Office workers   ",
            "occupation_M": "Office workers   _DutchM",
            "occupation_F": "employés de bureau_DutchF"
        },
        {
            "noun": "Orchestra conductors   ",
            "occupation_M": "Orchestra conductors   _DutchM",
            "occupation_F": "chefs d'orchestre_DutchF"
        },
        {
            "noun": "Orthodontists   ",
            "occupation_M": "Orthodontists   _DutchM",
            "occupation_F": "orthodontistes_DutchF"
        },
        {
            "noun": "Paid interns",
            "occupation_M": "Paid interns_DutchM",
            "occupation_F": "stagiaires rémunérés_DutchF"
        },
        {
            "noun": "Parachutists   ",
            "occupation_M": "Parachutists   _DutchM",
            "occupation_F": "parachutistes_DutchF"
        },
        {
            "noun": "Parents   ",
            "occupation_M": "Parents   _DutchM",
            "occupation_F": "parents_DutchF"
        },
        {
            "noun": "Pastry chefs   ",
            "occupation_M": "Pastry chefs   _DutchM",
            "occupation_F": "pâtissiers_DutchF"
        },
        {
            "noun": "Patients   ",
            "occupation_M": "Patients   _DutchM",
            "occupation_F": "patients_DutchF"
        },
        {
            "noun": "Pawnbrokers   ",
            "occupation_M": "Pawnbrokers   _DutchM",
            "occupation_F": "prêteurs sur gage_DutchF"
        },
        {
            "noun": "Pedestrians   ",
            "occupation_M": "Pedestrians   _DutchM",
            "occupation_F": "piétons_DutchF"
        },
        {
            "noun": "Pediatricians   ",
            "occupation_M": "Pediatricians   _DutchM",
            "occupation_F": "pédiatres_DutchF"
        },
        {
            "noun": "Pensioners   ",
            "occupation_M": "Pensioners   _DutchM",
            "occupation_F": "retraités_DutchF"
        },
        {
            "noun": "Personal trainers   ",
            "occupation_M": "Personal trainers   _DutchM",
            "occupation_F": "coachs personnels_DutchF"
        },
        {
            "noun": "Persons   ",
            "occupation_M": "Persons   _DutchM",
            "occupation_F": "personnes_DutchF"
        },
        {
            "noun": "Pharmacists   ",
            "occupation_M": "Pharmacists   _DutchM",
            "occupation_F": "pharmaciens_DutchF"
        },
        {
            "noun": "Philanthropists   ",
            "occupation_M": "Philanthropists   _DutchM",
            "occupation_F": "philanthropes_DutchF"
        },
        {
            "noun": "Photographers   ",
            "occupation_M": "Photographers   _DutchM",
            "occupation_F": "photographes_DutchF"
        },
        {
            "noun": "Physicians   ",
            "occupation_M": "Physicians   _DutchM",
            "occupation_F": "médecins_DutchF"
        },
        {
            "noun": "Physicists   ",
            "occupation_M": "Physicists   _DutchM",
            "occupation_F": "physiciens_DutchF"
        },
        {
            "noun": "Physics students   ",
            "occupation_M": "Physics students   _DutchM",
            "occupation_F": "étudiants en physique_DutchF"
        },
        {
            "noun": "Physiotherapists   ",
            "occupation_M": "Physiotherapists   _DutchM",
            "occupation_F": "physiothérapeutes_DutchF"
        },
        {
            "noun": "Piano players   ",
            "occupation_M": "Piano players   _DutchM",
            "occupation_F": "pianistes_DutchF"
        },
        {
            "noun": "Pilots   ",
            "occupation_M": "Pilots   _DutchM",
            "occupation_F": "pilotes_DutchF"
        },
        {
            "noun": "Playgroup leaders   ",
            "occupation_M": "Playgroup leaders   _DutchM",
            "occupation_F": "responsables de garderie_DutchF"
        },
        {
            "noun": "Plumbers   ",
            "occupation_M": "Plumbers   _DutchM",
            "occupation_F": "plombiers_DutchF"
        },
        {
            "noun": "Podcast hosts",
            "occupation_M": "Podcast hosts_DutchM",
            "occupation_F": "animateurs de podcast_DutchF"
        },
        {
            "noun": "Poets   ",
            "occupation_M": "Poets   _DutchM",
            "occupation_F": "poètes_DutchF"
        },
        {
            "noun": "Police Inspectors   ",
            "occupation_M": "Police Inspectors   _DutchM",
            "occupation_F": "inspecteurs de police_DutchF"
        },
        {
            "noun": "Police officers   ",
            "occupation_M": "Police officers   _DutchM",
            "occupation_F": "policiers_DutchF"
        },
        {
            "noun": "Police sergeants   ",
            "occupation_M": "Police sergeants   _DutchM",
            "occupation_F": "sergents de police_DutchF"
        },
        {
            "noun": "Political activists   ",
            "occupation_M": "Political activists   _DutchM",
            "occupation_F": "militants politiques_DutchF"
        },
        {
            "noun": "Politicians   ",
            "occupation_M": "Politicians   _DutchM",
            "occupation_F": "politiciens_DutchF"
        },
        {
            "noun": "Postal workers   ",
            "occupation_M": "Postal workers   _DutchM",
            "occupation_F": "employés des postes_DutchF"
        },
        {
            "noun": "Presidents",
            "occupation_M": "Presidents_DutchM",
            "occupation_F": "présidents (pays)_DutchF"
        },
        {
            "noun": "Priests   ",
            "occupation_M": "Priests   _DutchM",
            "occupation_F": "prêtres_DutchF"
        },
        {
            "noun": "Primary school teachers   ",
            "occupation_M": "Primary school teachers   _DutchM",
            "occupation_F": "enseignants d'école primaire_DutchF"
        },
        {
            "noun": "Prison guards   ",
            "occupation_M": "Prison guards   _DutchM",
            "occupation_F": "gardiens de prison_DutchF"
        },
        {
            "noun": "Private detectives   ",
            "occupation_M": "Private detectives   _DutchM",
            "occupation_F": "détectives privés_DutchF"
        },
        {
            "noun": "Probation officers   ",
            "occupation_M": "Probation officers   _DutchM",
            "occupation_F": "agents de probation_DutchF"
        },
        {
            "noun": "Professional athletes   ",
            "occupation_M": "Professional athletes   _DutchM",
            "occupation_F": "athlètes professionnels_DutchF"
        },
        {
            "noun": "Professors   ",
            "occupation_M": "Professors   _DutchM",
            "occupation_F": "professeurs_DutchF"
        },
        {
            "noun": "Proofreaders   ",
            "occupation_M": "Proofreaders   _DutchM",
            "occupation_F": "relecteurs_DutchF"
        },
        {
            "noun": "Prostitutes   ",
            "occupation_M": "Prostitutes   _DutchM",
            "occupation_F": "prostitués_DutchF"
        },
        {
            "noun": "Protestors   ",
            "occupation_M": "Protestors   _DutchM",
            "occupation_F": "manifestants_DutchF"
        },
        {
            "noun": "Psychiatrists   ",
            "occupation_M": "Psychiatrists   _DutchM",
            "occupation_F": "psychiatres_DutchF"
        },
        {
            "noun": "Psychology students   ",
            "occupation_M": "Psychology students   _DutchM",
            "occupation_F": "étudiants en psychologie_DutchF"
        },
        {
            "noun": "Public Relations Officers",
            "occupation_M": "Public Relations Officers_DutchM",
            "occupation_F": "chargés de relations publiques_DutchF"
        },
        {
            "noun": "Publishers   ",
            "occupation_M": "Publishers   _DutchM",
            "occupation_F": "éditeurs_DutchF"
        },
        {
            "noun": "Racing car drivers   ",
            "occupation_M": "Racing car drivers   _DutchM",
            "occupation_F": "pilotes automobile_DutchF"
        },
        {
            "noun": "Radio announcers   ",
            "occupation_M": "Radio announcers   _DutchM",
            "occupation_F": "animateurs radio_DutchF"
        },
        {
            "noun": "Radio technicians   ",
            "occupation_M": "Radio technicians   _DutchM",
            "occupation_F": "techniciens radio_DutchF"
        },
        {
            "noun": "Rape victims   ",
            "occupation_M": "Rape victims   _DutchM",
            "occupation_F": "victimes de viol_DutchF"
        },
        {
            "noun": "Rapists   ",
            "occupation_M": "Rapists   _DutchM",
            "occupation_F": "violeurs_DutchF"
        },
        {
            "noun": "Receptionists   ",
            "occupation_M": "Receptionists   _DutchM",
            "occupation_F": "réceptionnistes_DutchF"
        },
        {
            "noun": "Relatives   ",
            "occupation_M": "Relatives   _DutchM",
            "occupation_F": "membres de la famille_DutchF"
        },
        {
            "noun": "Remote workers",
            "occupation_M": "Remote workers_DutchM",
            "occupation_F": "télétravailleurs_DutchF"
        },
        {
            "noun": "Reporters   ",
            "occupation_M": "Reporters   _DutchM",
            "occupation_F": "reporters_DutchF"
        },
        {
            "noun": "Representatives",
            "occupation_M": "Representatives_DutchM",
            "occupation_F": "représentants_DutchF"
        },
        {
            "noun": "Rescue workers   ",
            "occupation_M": "Rescue workers   _DutchM",
            "occupation_F": "secouristes_DutchF"
        },
        {
            "noun": "Research scientists   ",
            "occupation_M": "Research scientists   _DutchM",
            "occupation_F": "chercheurs scientifiques_DutchF"
        },
        {
            "noun": "Riding instructors",
            "occupation_M": "Riding instructors_DutchM",
            "occupation_F": "moniteurs d'équitation_DutchF"
        },
        {
            "noun": "Road Crew",
            "occupation_M": "Road Crew_DutchM",
            "occupation_F": "roadie_DutchF"
        },
        {
            "noun": "Road workers   ",
            "occupation_M": "Road workers   _DutchM",
            "occupation_F": "agent d'exploitation de la voirie_DutchF"
        },
        {
            "noun": "Role players",
            "occupation_M": "Role players_DutchM",
            "occupation_F": "joueurs de jeu de rôle_DutchF"
        },
        {
            "noun": "Romantic novelists   ",
            "occupation_M": "Romantic novelists   _DutchM",
            "occupation_F": "écrivains de romans romantiques_DutchF"
        },
        {
            "noun": "Roofers   ",
            "occupation_M": "Roofers   _DutchM",
            "occupation_F": "couvreurs_DutchF"
        },
        {
            "noun": "Rubbish collectors   ",
            "occupation_M": "Rubbish collectors   _DutchM",
            "occupation_F": "éboueurs_DutchF"
        },
        {
            "noun": "Runners   ",
            "occupation_M": "Runners   _DutchM",
            "occupation_F": "coureurs_DutchF"
        },
        {
            "noun": "Sailors   ",
            "occupation_M": "Sailors   _DutchM",
            "occupation_F": "marins_DutchF"
        },
        {
            "noun": "Sales assistants   ",
            "occupation_M": "Sales assistants   _DutchM",
            "occupation_F": "vendeurs_DutchF"
        },
        {
            "noun": "Salespersons   ",
            "occupation_M": "Salespersons   _DutchM",
            "occupation_F": "commerciaux_DutchF"
        },
        {
            "noun": "Schoolchildren      ",
            "occupation_M": "Schoolchildren      _DutchM",
            "occupation_F": "écoliers_DutchF"
        },
        {
            "noun": "Screenwriters   ",
            "occupation_M": "Screenwriters   _DutchM",
            "occupation_F": "scénaristes_DutchF"
        },
        {
            "noun": "Scuba divers   ",
            "occupation_M": "Scuba divers   _DutchM",
            "occupation_F": "plongeurs (sous-marin)_DutchF"
        },
        {
            "noun": "Sculptors   ",
            "occupation_M": "Sculptors   _DutchM",
            "occupation_F": "sculpteurs_DutchF"
        },
        {
            "noun": "Secretaries   ",
            "occupation_M": "Secretaries   _DutchM",
            "occupation_F": "secrétaires_DutchF"
        },
        {
            "noun": "Security guards",
            "occupation_M": "Security guards_DutchM",
            "occupation_F": "agents de sécurité_DutchF"
        },
        {
            "noun": "Self employed",
            "occupation_M": "Self employed_DutchM",
            "occupation_F": "travailleurs indépendants_DutchF"
        },
        {
            "noun": "Serial killers   ",
            "occupation_M": "Serial killers   _DutchM",
            "occupation_F": "tueurs en série_DutchF"
        },
        {
            "noun": "Sex workers",
            "occupation_M": "Sex workers_DutchM",
            "occupation_F": "travailleurs du sexe_DutchF"
        },
        {
            "noun": "Sexual abusers",
            "occupation_M": "Sexual abusers_DutchM",
            "occupation_F": "agresseurs sexuels_DutchF"
        },
        {
            "noun": "Shoemakers   ",
            "occupation_M": "Shoemakers   _DutchM",
            "occupation_F": "cordonniers_DutchF"
        },
        {
            "noun": "Shoplifters   ",
            "occupation_M": "Shoplifters   _DutchM",
            "occupation_F": "voleurs à l'étalage_DutchF"
        },
        {
            "noun": "Shoppers   ",
            "occupation_M": "Shoppers   _DutchM",
            "occupation_F": "personnes qui font du shopping_DutchF"
        },
        {
            "noun": "Singers   ",
            "occupation_M": "Singers   _DutchM",
            "occupation_F": "chanteurs_DutchF"
        },
        {
            "noun": "Single parents   ",
            "occupation_M": "Single parents   _DutchM",
            "occupation_F": "parents isolés_DutchF"
        },
        {
            "noun": "Skiers   ",
            "occupation_M": "Skiers   _DutchM",
            "occupation_F": "skieurs_DutchF"
        },
        {
            "noun": "Smugglers   ",
            "occupation_M": "Smugglers   _DutchM",
            "occupation_F": "contrebandiers_DutchF"
        },
        {
            "noun": "Snooker players   ",
            "occupation_M": "Snooker players   _DutchM",
            "occupation_F": "joueurs de billard_DutchF"
        },
        {
            "noun": "Social workers   ",
            "occupation_M": "Social workers   _DutchM",
            "occupation_F": "assistants sociaux_DutchF"
        },
        {
            "noun": "Socialites   ",
            "occupation_M": "Socialites   _DutchM",
            "occupation_F": "mondains_DutchF"
        },
        {
            "noun": "Soldiers   ",
            "occupation_M": "Soldiers   _DutchM",
            "occupation_F": "soldats_DutchF"
        },
        {
            "noun": "Sommeliers",
            "occupation_M": "Sommeliers_DutchM",
            "occupation_F": "sommeliers_DutchF"
        },
        {
            "noun": "Sound engineers   ",
            "occupation_M": "Sound engineers   _DutchM",
            "occupation_F": "ingénieurs du son_DutchF"
        },
        {
            "noun": "Sous Chef",
            "occupation_M": "Sous Chef_DutchM",
            "occupation_F": "sous-chefs_DutchF"
        },
        {
            "noun": "Spectators   ",
            "occupation_M": "Spectators   _DutchM",
            "occupation_F": "spectateurs_DutchF"
        },
        {
            "noun": "Speech therapists   ",
            "occupation_M": "Speech therapists   _DutchM",
            "occupation_F": "logopédistes_DutchF"
        },
        {
            "noun": "Spies   ",
            "occupation_M": "Spies   _DutchM",
            "occupation_F": "espions_DutchF"
        },
        {
            "noun": "Sports coaches   ",
            "occupation_M": "Sports coaches   _DutchM",
            "occupation_F": "coachs sportifs_DutchF"
        },
        {
            "noun": "Stalkers",
            "occupation_M": "Stalkers_DutchM",
            "occupation_F": "harceleurs_DutchF"
        },
        {
            "noun": "Statisticians   ",
            "occupation_M": "Statisticians   _DutchM",
            "occupation_F": "statisticiens_DutchF"
        },
        {
            "noun": "Stay at home parents",
            "occupation_M": "Stay at home parents_DutchM",
            "occupation_F": "Parents au foyer_DutchF"
        },
        {
            "noun": "Stenographers",
            "occupation_M": "Stenographers_DutchM",
            "occupation_F": "sténographes_DutchF"
        },
        {
            "noun": "Stockbrokers   ",
            "occupation_M": "Stockbrokers   _DutchM",
            "occupation_F": "agents de change_DutchF"
        },
        {
            "noun": "Strippers   ",
            "occupation_M": "Strippers   _DutchM",
            "occupation_F": "strip-teaseurs_DutchF"
        },
        {
            "noun": "Structural engineers   ",
            "occupation_M": "Structural engineers   _DutchM",
            "occupation_F": "ingénieurs structurels_DutchF"
        },
        {
            "noun": "Students   ",
            "occupation_M": "Students   _DutchM",
            "occupation_F": "étudiants_DutchF"
        },
        {
            "noun": "Supervisors   ",
            "occupation_M": "Supervisors   _DutchM",
            "occupation_F": "superviseurs_DutchF"
        },
        {
            "noun": "Surfers   ",
            "occupation_M": "Surfers   _DutchM",
            "occupation_F": "surfeurs_DutchF"
        },
        {
            "noun": "Surgeons   ",
            "occupation_M": "Surgeons   _DutchM",
            "occupation_F": "chirurgiens_DutchF"
        },
        {
            "noun": "Suspects   ",
            "occupation_M": "Suspects   _DutchM",
            "occupation_F": "suspects_DutchF"
        },
        {
            "noun": "Swimmers   ",
            "occupation_M": "Swimmers   _DutchM",
            "occupation_F": "nageurs_DutchF"
        },
        {
            "noun": "Synchronized swimmers   ",
            "occupation_M": "Synchronized swimmers   _DutchM",
            "occupation_F": "nageurs synchronisés_DutchF"
        },
        {
            "noun": "Systems analysts   ",
            "occupation_M": "Systems analysts   _DutchM",
            "occupation_F": "analystes de systèmes_DutchF"
        },
        {
            "noun": "Tailors   ",
            "occupation_M": "Tailors   _DutchM",
            "occupation_F": "tailleurs_DutchF"
        },
        {
            "noun": "Tattoo artists",
            "occupation_M": "Tattoo artists_DutchM",
            "occupation_F": "tatoueurs_DutchF"
        },
        {
            "noun": "Tax advisors   ",
            "occupation_M": "Tax advisors   _DutchM",
            "occupation_F": "conseillers fiscaux_DutchF"
        },
        {
            "noun": "Taxi drivers   ",
            "occupation_M": "Taxi drivers   _DutchM",
            "occupation_F": "chauffeurs de taxi_DutchF"
        },
        {
            "noun": "Technicians   ",
            "occupation_M": "Technicians   _DutchM",
            "occupation_F": "techniciens_DutchF"
        },
        {
            "noun": "Teenagers      ",
            "occupation_M": "Teenagers      _DutchM",
            "occupation_F": "adolescents_DutchF"
        },
        {
            "noun": "Temp workers",
            "occupation_M": "Temp workers_DutchM",
            "occupation_F": "travailleurs temporaires_DutchF"
        },
        {
            "noun": "Tennis players   ",
            "occupation_M": "Tennis players   _DutchM",
            "occupation_F": "joueurs de tennis_DutchF"
        },
        {
            "noun": "Terrorists   ",
            "occupation_M": "Terrorists   _DutchM",
            "occupation_F": "terroristes_DutchF"
        },
        {
            "noun": "Theatre directors   ",
            "occupation_M": "Theatre directors   _DutchM",
            "occupation_F": "metteurs en scène_DutchF"
        },
        {
            "noun": "Therapists",
            "occupation_M": "Therapists_DutchM",
            "occupation_F": "thérapeutes_DutchF"
        },
        {
            "noun": "Thieves   ",
            "occupation_M": "Thieves   _DutchM",
            "occupation_F": "voleurs_DutchF"
        },
        {
            "noun": "Ticket inspectors   ",
            "occupation_M": "Ticket inspectors   _DutchM",
            "occupation_F": "contrôleurs de billets_DutchF"
        },
        {
            "noun": "Tiktokers",
            "occupation_M": "Tiktokers_DutchM",
            "occupation_F": "tiktokeurs_DutchF"
        },
        {
            "noun": "Toddlers      ",
            "occupation_M": "Toddlers      _DutchM",
            "occupation_F": "enfants en bas âge_DutchF"
        },
        {
            "noun": "Tour guides   ",
            "occupation_M": "Tour guides   _DutchM",
            "occupation_F": "guides touristiques_DutchF"
        },
        {
            "noun": "Trade unionists   ",
            "occupation_M": "Trade unionists   _DutchM",
            "occupation_F": "syndicalistes_DutchF"
        },
        {
            "noun": "Traffic engineers   ",
            "occupation_M": "Traffic engineers   _DutchM",
            "occupation_F": "ingénieurs en trafic_DutchF"
        },
        {
            "noun": "Train conductors",
            "occupation_M": "Train conductors_DutchM",
            "occupation_F": "contrôleurs de train_DutchF"
        },
        {
            "noun": "Translators   ",
            "occupation_M": "Translators   _DutchM",
            "occupation_F": "traducteurs_DutchF"
        },
        {
            "noun": "Travel agents   ",
            "occupation_M": "Travel agents   _DutchM",
            "occupation_F": "agents de voyage_DutchF"
        },
        {
            "noun": "Trumpet players   ",
            "occupation_M": "Trumpet players   _DutchM",
            "occupation_F": "trompettistes_DutchF"
        },
        {
            "noun": "Tuba players   ",
            "occupation_M": "Tuba players   _DutchM",
            "occupation_F": "tubistes_DutchF"
        },
        {
            "noun": "TV show hosts",
            "occupation_M": "TV show hosts_DutchM",
            "occupation_F": "animateurs d'émission télévisées_DutchF"
        },
        {
            "noun": "Tyre fitters   ",
            "occupation_M": "Tyre fitters   _DutchM",
            "occupation_F": "monteurs de pneus_DutchF"
        },
        {
            "noun": "Uber drivers",
            "occupation_M": "Uber drivers_DutchM",
            "occupation_F": "chauffeurs uber_DutchF"
        },
        {
            "noun": "Unemployed",
            "occupation_M": "Unemployed_DutchM",
            "occupation_F": "chômeurs_DutchF"
        },
        {
            "noun": "Unpaid interns",
            "occupation_M": "Unpaid interns_DutchM",
            "occupation_F": "stagiaires non-rémunérés_DutchF"
        },
        {
            "noun": "Vets   ",
            "occupation_M": "Vets   _DutchM",
            "occupation_F": "vétérinaires_DutchF"
        },
        {
            "noun": "Vice chancellors",
            "occupation_M": "Vice chancellors_DutchM",
            "occupation_F": "vice-chanceliers_DutchF"
        },
        {
            "noun": "Victims   ",
            "occupation_M": "Victims   _DutchM",
            "occupation_F": "victimes_DutchF"
        },
        {
            "noun": "Violinists   ",
            "occupation_M": "Violinists   _DutchM",
            "occupation_F": "violonistes_DutchF"
        },
        {
            "noun": "Waiters   ",
            "occupation_M": "Waiters   _DutchM",
            "occupation_F": "serveurs_DutchF"
        },
        {
            "noun": "Wardens   ",
            "occupation_M": "Wardens   _DutchM",
            "occupation_F": "directeurs de prison_DutchF"
        },
        {
            "noun": "Weavers   ",
            "occupation_M": "Weavers   _DutchM",
            "occupation_F": "tisserands_DutchF"
        },
        {
            "noun": "Web designers",
            "occupation_M": "Web designers_DutchM",
            "occupation_F": "webdesigners_DutchF"
        },
        {
            "noun": "Wedding planners   ",
            "occupation_M": "Wedding planners   _DutchM",
            "occupation_F": "organisateurs de mariages_DutchF"
        },
        {
            "noun": "Weight lifters   ",
            "occupation_M": "Weight lifters   _DutchM",
            "occupation_F": "haltérophiles_DutchF"
        },
        {
            "noun": "Welders   ",
            "occupation_M": "Welders   _DutchM",
            "occupation_F": "soudeurs_DutchF"
        },
        {
            "noun": "Whistleblowers",
            "occupation_M": "Whistleblowers_DutchM",
            "occupation_F": "lanceurs d'alerte_DutchF"
        },
        {
            "noun": "Wine connoisseurs   ",
            "occupation_M": "Wine connoisseurs   _DutchM",
            "occupation_F": "amateurs de vin_DutchF"
        },
        {
            "noun": "Wood carvers   ",
            "occupation_M": "Wood carvers   _DutchM",
            "occupation_F": "sculpteurs sur bois_DutchF"
        },
        {
            "noun": "Wood workers   ",
            "occupation_M": "Wood workers   _DutchM",
            "occupation_F": "menuisiers_DutchF"
        },
        {
            "noun": "Workers   ",
            "occupation_M": "Workers   _DutchM",
            "occupation_F": "travailleurs_DutchF"
        },
        {
            "noun": "Wrestlers   ",
            "occupation_M": "Wrestlers   _DutchM",
            "occupation_F": "lutteurs_DutchF"
        },
        {
            "noun": "Writers   ",
            "occupation_M": "Writers   _DutchM",
            "occupation_F": "écrivains_DutchF"
        },
        {
            "noun": "X-ray technicians   ",
            "occupation_M": "X-ray technicians   _DutchM",
            "occupation_F": "techniciens radiologue_DutchF"
        },
        {
            "noun": "Yoga instructors",
            "occupation_M": "Yoga instructors_DutchM",
            "occupation_F": "professeurs de yoga_DutchF"
        },
        {
            "noun": "Youngsters      ",
            "occupation_M": "Youngsters      _DutchM",
            "occupation_F": "jeunes_DutchF"
        },
        {
            "noun": "Youtubers",
            "occupation_M": "Youtubers_DutchM",
            "occupation_F": "youtubeurs_DutchF"
        },
        {
            "noun": "Zoologists   ",
            "occupation_M": "Zoologists   _DutchM",
            "occupation_F": "zoologistes_DutchF"
        }
    ],
    "French": [
        {
            "noun": "Academics",
            "occupation_M": "universitaires",
            "occupation_F": "universitaires"
        },
        {
            "noun": "Accountants   ",
            "occupation_M": "Comptables",
            "occupation_F": "comptables"
        },
        {
            "noun": "Acrobats   ",
            "occupation_M": "acrobates",
            "occupation_F": "acrobates"
        },
        {
            "noun": "Actors",
            "occupation_M": "acteurs",
            "occupation_F": "actrices"
        },
        {
            "noun": "Acupuncturists   ",
            "occupation_M": "acupuncteurs",
            "occupation_F": "acupunctrices"
        },
        {
            "noun": "Administrative workers   ",
            "occupation_M": "employés dans l'administration",
            "occupation_F": "employées dans l'administration"
        },
        {
            "noun": "Admirals   ",
            "occupation_M": "amiraux",
            "occupation_F": "amiraulles / femmes amiraux"
        },
        {
            "noun": "Aerobics instructors   ",
            "occupation_M": "coachs d'aérobic",
            "occupation_F": "coachs d'aérobic"
        },
        {
            "noun": "Air traffic controllers   ",
            "occupation_M": "contrôleurs aériens",
            "occupation_F": "contrôleuses aériennes"
        },
        {
            "noun": "Alcoholics   ",
            "occupation_M": "alcooliques",
            "occupation_F": "alcooliques"
        },
        {
            "noun": "Animators",
            "occupation_M": "animateurs de dessin animé",
            "occupation_F": "animatrices de dessin animé"
        },
        {
            "noun": "Antique dealers   ",
            "occupation_M": "antiquaires",
            "occupation_F": "antiquaires"
        },
        {
            "noun": "Apprentices   ",
            "occupation_M": "apprentis",
            "occupation_F": "apprenties"
        },
        {
            "noun": "Architects   ",
            "occupation_M": "architectes",
            "occupation_F": "architectes"
        },
        {
            "noun": "Archivists   ",
            "occupation_M": "archivistes",
            "occupation_F": "archivistes"
        },
        {
            "noun": "Artists   ",
            "occupation_M": "artistes",
            "occupation_F": "artistes"
        },
        {
            "noun": "Assistants   ",
            "occupation_M": "assistants",
            "occupation_F": "assistantes"
        },
        {
            "noun": "Astrologists   ",
            "occupation_M": "astrologues",
            "occupation_F": "astrologues"
        },
        {
            "noun": "Astronauts   ",
            "occupation_M": "astronautes",
            "occupation_F": "astronautes"
        },
        {
            "noun": "Astronomers   ",
            "occupation_M": "astronomes",
            "occupation_F": "astronomes"
        },
        {
            "noun": "Athletes   ",
            "occupation_M": "athlètes",
            "occupation_F": "athlètes"
        },
        {
            "noun": "Auctioneers   ",
            "occupation_M": "commissaires-priseurs",
            "occupation_F": "commissaires-priseuses"
        },
        {
            "noun": "Authors   ",
            "occupation_M": "auteurs",
            "occupation_F": "auteures"
        },
        {
            "noun": "Babies      ",
            "occupation_M": "bébés",
            "occupation_F": "bébés"
        },
        {
            "noun": "Babysitters   ",
            "occupation_M": "baby-sitters",
            "occupation_F": "baby-sitters"
        },
        {
            "noun": "Bakers   ",
            "occupation_M": "boulangers",
            "occupation_F": "boulangères"
        },
        {
            "noun": "Ballet dancers   ",
            "occupation_M": "danseurs de ballet",
            "occupation_F": "danseuses de ballet"
        },
        {
            "noun": "Bank clerks   ",
            "occupation_M": "employés de banque",
            "occupation_F": "employées de banque"
        },
        {
            "noun": "Bankers   ",
            "occupation_M": "banquiers",
            "occupation_F": "banquières"
        },
        {
            "noun": "Barbers   ",
            "occupation_M": "barbiers",
            "occupation_F": "barbières"
        },
        {
            "noun": "Baristas",
            "occupation_M": "baristas",
            "occupation_F": "baristas"
        },
        {
            "noun": "Bartenders   ",
            "occupation_M": "barmans",
            "occupation_F": "barmans / barmaids"
        },
        {
            "noun": "Basketball players   ",
            "occupation_M": "basketteurs",
            "occupation_F": "basketteuses"
        },
        {
            "noun": "Bass players   ",
            "occupation_M": "bassistes",
            "occupation_F": "bassistes"
        },
        {
            "noun": "Beauticians   ",
            "occupation_M": "esthéticiens",
            "occupation_F": "esthéticiennes"
        },
        {
            "noun": "Beekeepers",
            "occupation_M": "apiculteurs",
            "occupation_F": "apicultrices"
        },
        {
            "noun": "Bikers   ",
            "occupation_M": "motards",
            "occupation_F": "motardes"
        },
        {
            "noun": "Biologists   ",
            "occupation_M": "biologistes",
            "occupation_F": "biologistes"
        },
        {
            "noun": "Birth attendants   ",
            "occupation_M": "sage-femmes",
            "occupation_F": "sage-femmes"
        },
        {
            "noun": "Blacksmiths   ",
            "occupation_M": "forgerons",
            "occupation_F": "forgeronnes"
        },
        {
            "noun": "Blue-collar workers",
            "occupation_M": "ouvriers",
            "occupation_F": "ouvrières"
        },
        {
            "noun": "Board game players",
            "occupation_M": "joueurs de jeux de société",
            "occupation_F": "joueuses de jeux de société"
        },
        {
            "noun": "Bodyguards",
            "occupation_M": "gardes du corps",
            "occupation_F": "gardes du corps"
        },
        {
            "noun": "Bosses   ",
            "occupation_M": "patrons",
            "occupation_F": "patronnes"
        },
        {
            "noun": "Boutique owners   ",
            "occupation_M": "gérants de boutique",
            "occupation_F": "gérantes de boutique"
        },
        {
            "noun": "Boxers   ",
            "occupation_M": "boxeurs",
            "occupation_F": "boxeuses"
        },
        {
            "noun": "Bricklayers   ",
            "occupation_M": "maçons",
            "occupation_F": "maçonnes"
        },
        {
            "noun": "Building contractors   ",
            "occupation_M": "entrepreneurs en construction",
            "occupation_F": "entrepreneuses en construction"
        },
        {
            "noun": "Bus drivers   ",
            "occupation_M": "conducteurs de bus",
            "occupation_F": "conductrices de bus"
        },
        {
            "noun": "Butchers   ",
            "occupation_M": "bouchers",
            "occupation_F": "bouchères"
        },
        {
            "noun": "Cabinet ministers   ",
            "occupation_M": "ministres",
            "occupation_F": "ministres"
        },
        {
            "noun": "Camera operators   ",
            "occupation_M": "cadreurs",
            "occupation_F": "cadreuses"
        },
        {
            "noun": "Campers   ",
            "occupation_M": "campeurs",
            "occupation_F": "campeuses"
        },
        {
            "noun": "Canteen assistants   ",
            "occupation_M": "aides de cantine",
            "occupation_F": "aides de cantine"
        },
        {
            "noun": "Car mechanics   ",
            "occupation_M": "mécaniciens automobiles",
            "occupation_F": "mécaniciennes automobiles"
        },
        {
            "noun": "Card players   ",
            "occupation_M": "joueurs de cartes",
            "occupation_F": "joueuses de cartes"
        },
        {
            "noun": "Care workers   ",
            "occupation_M": "travailleurs sociaux",
            "occupation_F": "travailleuses sociales"
        },
        {
            "noun": "Caregivers   ",
            "occupation_M": "aidants",
            "occupation_F": "aidantes"
        },
        {
            "noun": "Carpenters   ",
            "occupation_M": "charpentiers",
            "occupation_F": "charpentières"
        },
        {
            "noun": "Cartoonists   ",
            "occupation_M": "dessinateurs de bandes dessinées",
            "occupation_F": "dessinatrices de bandes dessinées"
        },
        {
            "noun": "Cashiers   ",
            "occupation_M": "caissiers",
            "occupation_F": "caissières"
        },
        {
            "noun": "Cat owners   ",
            "occupation_M": "propriétaires de chat",
            "occupation_F": "propriétaires de chat"
        },
        {
            "noun": "Caterers   ",
            "occupation_M": "traiteurs",
            "occupation_F": "traiteuses"
        },
        {
            "noun": "Celebrities   ",
            "occupation_M": "célébrités",
            "occupation_F": "célébrités"
        },
        {
            "noun": "Ceramists",
            "occupation_M": "céramistes",
            "occupation_F": "céramistes"
        },
        {
            "noun": "Chair persons   ",
            "occupation_M": "président du comité",
            "occupation_F": "présidente du comité"
        },
        {
            "noun": "Chefs",
            "occupation_M": "chefs cuisiniers",
            "occupation_F": "chefs cuisinières"
        },
        {
            "noun": "Chemists   ",
            "occupation_M": "chimistes",
            "occupation_F": "chimistes"
        },
        {
            "noun": "Child educators   ",
            "occupation_M": "éducateurs de la petite enfance",
            "occupation_F": "éducatrices de la petite enfance"
        },
        {
            "noun": "Children      ",
            "occupation_M": "enfants",
            "occupation_F": "enfants"
        },
        {
            "noun": "Chiropractors   ",
            "occupation_M": "chiropracteurs",
            "occupation_F": "chiropractrices"
        },
        {
            "noun": "Chocolate lovers   ",
            "occupation_M": "amateurs de chocolat",
            "occupation_F": "amatrices de chocolat"
        },
        {
            "noun": "Choreographers   ",
            "occupation_M": "chorégraphes",
            "occupation_F": "chorégraphes"
        },
        {
            "noun": "Cinema goers   ",
            "occupation_M": "spectateurs de cinéma",
            "occupation_F": "spectatrices de cinéma"
        },
        {
            "noun": "City planners",
            "occupation_M": "urbanistes",
            "occupation_F": "urbanistes"
        },
        {
            "noun": "Clairvoyants   ",
            "occupation_M": "voyants",
            "occupation_F": "voyantes"
        },
        {
            "noun": "Cleaners   ",
            "occupation_M": "techniciens de surface",
            "occupation_F": "techniciennes de surface"
        },
        {
            "noun": "Climbers   ",
            "occupation_M": "grimpeurs",
            "occupation_F": "grimpeuses"
        },
        {
            "noun": "Clinical psychologists   ",
            "occupation_M": "psychologues cliniciens",
            "occupation_F": "psychologues cliniciennes"
        },
        {
            "noun": "Clowns   ",
            "occupation_M": "clowns",
            "occupation_F": "clowns"
        },
        {
            "noun": "Colonels   ",
            "occupation_M": "colonels",
            "occupation_F": "colonelles"
        },
        {
            "noun": "Comedians   ",
            "occupation_M": "humoristes",
            "occupation_F": "humoristes"
        },
        {
            "noun": "Company directors   ",
            "occupation_M": "directeurs d'entreprise",
            "occupation_F": "directrices d'entreprise"
        },
        {
            "noun": "Composers   ",
            "occupation_M": "compositeurs",
            "occupation_F": "compositrices"
        },
        {
            "noun": "Computer programmers   ",
            "occupation_M": "programmeurs informatique",
            "occupation_F": "programmeuses informatique"
        },
        {
            "noun": "Computer specialists   ",
            "occupation_M": "informaticiens",
            "occupation_F": "informaticiennes"
        },
        {
            "noun": "Computer technicians   ",
            "occupation_M": "techniciens informatiques",
            "occupation_F": "techniciennes informatiques"
        },
        {
            "noun": "Construction workers   ",
            "occupation_M": "ouvriers du bâtiment",
            "occupation_F": "ouvrières du bâtiment"
        },
        {
            "noun": "Content creators",
            "occupation_M": "créateurs de contenu",
            "occupation_F": "créatrices de contenu"
        },
        {
            "noun": "Cooks",
            "occupation_M": "cuisiniers",
            "occupation_F": "cuisinières"
        },
        {
            "noun": "Coordinators",
            "occupation_M": "coordinateurs",
            "occupation_F": "coordinatrices"
        },
        {
            "noun": "Counseling psychologists   ",
            "occupation_M": "psychothérapeutes",
            "occupation_F": "psychothérapeutes"
        },
        {
            "noun": "Couriers   ",
            "occupation_M": "coursiers",
            "occupation_F": "coursières"
        },
        {
            "noun": "Craft workers   ",
            "occupation_M": "artisans",
            "occupation_F": "artisanes"
        },
        {
            "noun": "Crane operators   ",
            "occupation_M": "grutiers",
            "occupation_F": "grutières"
        },
        {
            "noun": "Criminals   ",
            "occupation_M": "criminels",
            "occupation_F": "criminelles"
        },
        {
            "noun": "Cult members   ",
            "occupation_M": "membres de secte",
            "occupation_F": "membres de secte"
        },
        {
            "noun": "Curators   ",
            "occupation_M": "conservateurs de musée",
            "occupation_F": "conservatrices de musée"
        },
        {
            "noun": "Customers   ",
            "occupation_M": "clients",
            "occupation_F": "clientes"
        },
        {
            "noun": "Customs inspectors   ",
            "occupation_M": "inspecteurs des douanes",
            "occupation_F": "inspectrices des douanes"
        },
        {
            "noun": "Customs officers   ",
            "occupation_M": "douaniers",
            "occupation_F": "douanières"
        },
        {
            "noun": "Cyclists   ",
            "occupation_M": "cyclistes",
            "occupation_F": "cyclistes"
        },
        {
            "noun": "Dance instructors   ",
            "occupation_M": "professeurs de danse",
            "occupation_F": "professeures de danse"
        },
        {
            "noun": "Dancers   ",
            "occupation_M": "danseurs",
            "occupation_F": "danseuses"
        },
        {
            "noun": "Data analyst",
            "occupation_M": "data analysts",
            "occupation_F": "data analysts"
        },
        {
            "noun": "Deacons   ",
            "occupation_M": "diacres",
            "occupation_F": "diaconesses"
        },
        {
            "noun": "Delivery drivers",
            "occupation_M": "livreurs",
            "occupation_F": "livreuses"
        },
        {
            "noun": "Dental hygienists   ",
            "occupation_M": "hygiénistes dentaires",
            "occupation_F": "hygiénistes dentaires"
        },
        {
            "noun": "Dental technicians   ",
            "occupation_M": "techniciens-dentistes",
            "occupation_F": "techniciennes-dentistes"
        },
        {
            "noun": "Dentists   ",
            "occupation_M": "dentistes",
            "occupation_F": "dentistes"
        },
        {
            "noun": "Designers   ",
            "occupation_M": "designers",
            "occupation_F": "designers"
        },
        {
            "noun": "Detectives   ",
            "occupation_M": "détectives",
            "occupation_F": "détectives"
        },
        {
            "noun": "Dieticians   ",
            "occupation_M": "diététiciens",
            "occupation_F": "diététiciennes"
        },
        {
            "noun": "Diplomats   ",
            "occupation_M": "diplomates",
            "occupation_F": "diplomates"
        },
        {
            "noun": "Doctors of Philosophy   ",
            "occupation_M": "docteurs (PhD)",
            "occupation_F": "docteures (PhD)"
        },
        {
            "noun": "Dog owners   ",
            "occupation_M": "propriétaires de chien",
            "occupation_F": "propriétaires de chien"
        },
        {
            "noun": "Door keepers   ",
            "occupation_M": "portiers",
            "occupation_F": "portières"
        },
        {
            "noun": "Dressmakers   ",
            "occupation_M": "couturiers",
            "occupation_F": "couturières"
        },
        {
            "noun": "Drivers   ",
            "occupation_M": "conducteurs",
            "occupation_F": "conductrices"
        },
        {
            "noun": "Driving instructors   ",
            "occupation_M": "moniteurs d'auto-école",
            "occupation_F": "monitrices d'auto-école"
        },
        {
            "noun": "Drug addicts   ",
            "occupation_M": "toxicomanes",
            "occupation_F": "toxicomanes"
        },
        {
            "noun": "Drug dealers   ",
            "occupation_M": "Dealers",
            "occupation_F": "dealers"
        },
        {
            "noun": "Drummers   ",
            "occupation_M": "batteurs",
            "occupation_F": "batteuses"
        },
        {
            "noun": "Economists   ",
            "occupation_M": "économistes",
            "occupation_F": "économistes"
        },
        {
            "noun": "Editors   ",
            "occupation_M": "rédacteurs en chef",
            "occupation_F": "rédactrices en chef"
        },
        {
            "noun": "Educational psychologists   ",
            "occupation_M": "psychologues scolaires",
            "occupation_F": "psychologues scolaires"
        },
        {
            "noun": "Electricians   ",
            "occupation_M": "électriciens",
            "occupation_F": "électriciennes"
        },
        {
            "noun": "Embezzlers   ",
            "occupation_M": "escrocs",
            "occupation_F": "escrocs"
        },
        {
            "noun": "Engine-drivers   ",
            "occupation_M": "pilotes de locomotives",
            "occupation_F": "pilotes de locomotives"
        },
        {
            "noun": "Engineers   ",
            "occupation_M": "ingénieurs",
            "occupation_F": "ingénieures"
        },
        {
            "noun": "Entrepreneurs",
            "occupation_M": "entrepreneurs",
            "occupation_F": "entrepreneuses"
        },
        {
            "noun": "Environmentalists   ",
            "occupation_M": "écologistes",
            "occupation_F": "écologistes"
        },
        {
            "noun": "Escourts",
            "occupation_M": "escorts",
            "occupation_F": "escorts"
        },
        {
            "noun": "Estate agents   ",
            "occupation_M": "agents immobiliers",
            "occupation_F": "agentes immobilières"
        },
        {
            "noun": "Executives   ",
            "occupation_M": "cadres",
            "occupation_F": "cadres"
        },
        {
            "noun": "Exercise instructors   ",
            "occupation_M": "coach sportif",
            "occupation_F": "coach sportive"
        },
        {
            "noun": "Explorers   ",
            "occupation_M": "explorateurs",
            "occupation_F": "exploratrices"
        },
        {
            "noun": "Extremists",
            "occupation_M": "extrémistes",
            "occupation_F": "extrémistes"
        },
        {
            "noun": "Factory managers   ",
            "occupation_M": "directeurs d'usine",
            "occupation_F": "directrices d'usine"
        },
        {
            "noun": "Fans   ",
            "occupation_M": "fans",
            "occupation_F": "fans"
        },
        {
            "noun": "Farmers   ",
            "occupation_M": "agriculteurs",
            "occupation_F": "agricultrices"
        },
        {
            "noun": "Fencers   ",
            "occupation_M": "escrimeurs",
            "occupation_F": "escrimeuses"
        },
        {
            "noun": "Figure skaters   ",
            "occupation_M": "patineurs artistiques",
            "occupation_F": "patineuses artistiques"
        },
        {
            "noun": "Film directors   ",
            "occupation_M": "réalisateurs",
            "occupation_F": "réalisatrices"
        },
        {
            "noun": "Film stars   ",
            "occupation_M": "stars de cinéma",
            "occupation_F": "stars de cinéma"
        },
        {
            "noun": "Financial advisers   ",
            "occupation_M": "conseillers financiers",
            "occupation_F": "conseillères financières"
        },
        {
            "noun": "Financial analysts   ",
            "occupation_M": "analystes financiers",
            "occupation_F": "analystes financières"
        },
        {
            "noun": "Firefighters   ",
            "occupation_M": "pompiers",
            "occupation_F": "pompières"
        },
        {
            "noun": "Flight attendants   ",
            "occupation_M": "stewards",
            "occupation_F": "hôtesses de l'air"
        },
        {
            "noun": "Florists   ",
            "occupation_M": "fleuristes",
            "occupation_F": "fleuristes"
        },
        {
            "noun": "Flute players   ",
            "occupation_M": "flûtistes",
            "occupation_F": "flûtistes"
        },
        {
            "noun": "Football coaches   ",
            "occupation_M": "entraîneurs de foot",
            "occupation_F": "entraîneuses de foot"
        },
        {
            "noun": "Football players   ",
            "occupation_M": "footballeurs",
            "occupation_F": "footballeuses"
        },
        {
            "noun": "Forensic psychologists   ",
            "occupation_M": "psychologues forensiques",
            "occupation_F": "psychologues forensiques"
        },
        {
            "noun": "Forest rangers   ",
            "occupation_M": "gardes forestiers",
            "occupation_F": "gardes forestières"
        },
        {
            "noun": "Fortune tellers   ",
            "occupation_M": "diseurs de bonne aventure",
            "occupation_F": "diseuses de bonne aventure"
        },
        {
            "noun": "Funeral directors   ",
            "occupation_M": "directeurs des pompes funèbres",
            "occupation_F": "directrices des pompes funèbres"
        },
        {
            "noun": "Game designers",
            "occupation_M": "concepteurs de jeux",
            "occupation_F": "conceptrices de jeux"
        },
        {
            "noun": "Game wardens   ",
            "occupation_M": "gardes-chasses",
            "occupation_F": "gardes-chasses"
        },
        {
            "noun": "Gang members",
            "occupation_M": "Membres de gang",
            "occupation_F": "membres de gang"
        },
        {
            "noun": "Gardeners   ",
            "occupation_M": "jardiniers",
            "occupation_F": "jardinières"
        },
        {
            "noun": "General managers   ",
            "occupation_M": "directeurs généraux",
            "occupation_F": "directrices générales"
        },
        {
            "noun": "Generals   ",
            "occupation_M": "généraux",
            "occupation_F": "générales"
        },
        {
            "noun": "Geologists   ",
            "occupation_M": "géologues",
            "occupation_F": "géologues"
        },
        {
            "noun": "Goalkeepers   ",
            "occupation_M": "gardiens de but",
            "occupation_F": "gardiennes de but"
        },
        {
            "noun": "Goldsmiths   ",
            "occupation_M": "orfèvres",
            "occupation_F": "orfèvres"
        },
        {
            "noun": "Golfers   ",
            "occupation_M": "golfeurs",
            "occupation_F": "golfeuses"
        },
        {
            "noun": "Government officials   ",
            "occupation_M": "fonctionnaires",
            "occupation_F": "fonctionnaires"
        },
        {
            "noun": "Governors   ",
            "occupation_M": "gouverneurs",
            "occupation_F": "gouverneuses"
        },
        {
            "noun": "Graphic designers   ",
            "occupation_M": "graphistes",
            "occupation_F": "graphistes"
        },
        {
            "noun": "Guards   ",
            "occupation_M": "gardiens",
            "occupation_F": "gardiennes"
        },
        {
            "noun": "Guitar players   ",
            "occupation_M": "guitaristes",
            "occupation_F": "guitaristes"
        },
        {
            "noun": "Gymnasts   ",
            "occupation_M": "gymnastes",
            "occupation_F": "gymnastes"
        },
        {
            "noun": "Gynaecologists   ",
            "occupation_M": "gynécologues",
            "occupation_F": "gynécologues"
        },
        {
            "noun": "Hackers",
            "occupation_M": "hackers",
            "occupation_F": "hackers"
        },
        {
            "noun": "Hairdressers   ",
            "occupation_M": "coiffeurs",
            "occupation_F": "coiffeuses"
        },
        {
            "noun": "Head nurses",
            "occupation_M": "infirmiers chefs",
            "occupation_F": "infirmières cheffes"
        },
        {
            "noun": "Head physicians",
            "occupation_M": "médecins chefs",
            "occupation_F": "médecins cheffes"
        },
        {
            "noun": "Head teachers   ",
            "occupation_M": "directeurs d'école",
            "occupation_F": "directrices d'école"
        },
        {
            "noun": "Heads of department",
            "occupation_M": "chefs de département",
            "occupation_F": "cheffes de département"
        },
        {
            "noun": "Heavy equipment operators   ",
            "occupation_M": "opérateurs d'équipement lourd",
            "occupation_F": "opératrices d'équipement lourd"
        },
        {
            "noun": "Historians   ",
            "occupation_M": "historiens",
            "occupation_F": "historiennes"
        },
        {
            "noun": "History professors   ",
            "occupation_M": "professeurs d'histoire",
            "occupation_F": "professeures d'histoire"
        },
        {
            "noun": "Hitchhikers   ",
            "occupation_M": "auto-stoppeurs",
            "occupation_F": "auto-stoppeuses"
        },
        {
            "noun": "Homeless persons   ",
            "occupation_M": "personnes sans-abris",
            "occupation_F": "personnes sans-abris"
        },
        {
            "noun": "Horse riders   ",
            "occupation_M": "cavaliers",
            "occupation_F": "cavalières"
        },
        {
            "noun": "Horse trainers   ",
            "occupation_M": "dresseurs de chevaux",
            "occupation_F": "dresseuses de chevaux"
        },
        {
            "noun": "Hospital orderlies   ",
            "occupation_M": "aides-soignants",
            "occupation_F": "aides-soignantes"
        },
        {
            "noun": "Hotel guests   ",
            "occupation_M": "clients d'hôtel",
            "occupation_F": "clientes d'hôtel"
        },
        {
            "noun": "Hotel managers   ",
            "occupation_M": "directeurs d'hôtel",
            "occupation_F": "directrices d'hôtel"
        },
        {
            "noun": "Housekeepers   ",
            "occupation_M": "gouvernants",
            "occupation_F": "gouvernantes"
        },
        {
            "noun": "Human Resource Managers",
            "occupation_M": "Responsables des Ressources Humaines",
            "occupation_F": "responsables des Ressources Humaines"
        },
        {
            "noun": "Humanitarians   ",
            "occupation_M": "humanitaires",
            "occupation_F": "humanitaires"
        },
        {
            "noun": "Humanities professors   ",
            "occupation_M": "professeurs en sciences humaines",
            "occupation_F": "professeures en sciences humaines"
        },
        {
            "noun": "Hunters   ",
            "occupation_M": "chasseurs",
            "occupation_F": "chasseuses"
        },
        {
            "noun": "Ice skaters   ",
            "occupation_M": "patineurs sur glace",
            "occupation_F": "patineuses sur glace"
        },
        {
            "noun": "Infant teachers   ",
            "occupation_M": "éducateurs en crèche",
            "occupation_F": "éducatrices en crèche"
        },
        {
            "noun": "Influencers",
            "occupation_M": "influenceurs",
            "occupation_F": "influenceuses"
        },
        {
            "noun": "Informal caregivers",
            "occupation_M": "proches aidants",
            "occupation_F": "proches aidantes"
        },
        {
            "noun": "Informants   ",
            "occupation_M": "informateurs",
            "occupation_F": "informatrices"
        },
        {
            "noun": "Inmates   ",
            "occupation_M": "détenus",
            "occupation_F": "détenues"
        },
        {
            "noun": "Innkeepers   ",
            "occupation_M": "aubergistes",
            "occupation_F": "aubergistes"
        },
        {
            "noun": "Instagrammers",
            "occupation_M": "instagrammeurs",
            "occupation_F": "instagrammeuses"
        },
        {
            "noun": "Interior decorators   ",
            "occupation_M": "décorateurs d'intérieur",
            "occupation_F": "décoratrices d'intérieur"
        },
        {
            "noun": "Interpreters   ",
            "occupation_M": "interprètes",
            "occupation_F": "interprètes"
        },
        {
            "noun": "Inventors   ",
            "occupation_M": "inventeurs",
            "occupation_F": "inventrices"
        },
        {
            "noun": "IT consultants   ",
            "occupation_M": "consultants informatiques",
            "occupation_F": "consultantes informatiques"
        },
        {
            "noun": "Janitors   ",
            "occupation_M": "concierges",
            "occupation_F": "concierges"
        },
        {
            "noun": "Jewelers   ",
            "occupation_M": "bijoutiers",
            "occupation_F": "bijoutières"
        },
        {
            "noun": "Job seekers   ",
            "occupation_M": "chercheurs d'emploi",
            "occupation_F": "chercheuses d'emploi"
        },
        {
            "noun": "Joggers   ",
            "occupation_M": "joggeurs",
            "occupation_F": "joggeuses"
        },
        {
            "noun": "Journalists   ",
            "occupation_M": "journalistes",
            "occupation_F": "journalistes"
        },
        {
            "noun": "Judges   ",
            "occupation_M": "juges",
            "occupation_F": "juges"
        },
        {
            "noun": "Jugglers   ",
            "occupation_M": "jongleurs",
            "occupation_F": "jongleuses"
        },
        {
            "noun": "Jurors   ",
            "occupation_M": "jurés",
            "occupation_F": "jurées"
        },
        {
            "noun": "Killers   ",
            "occupation_M": "tueurs",
            "occupation_F": "tueuses"
        },
        {
            "noun": "Kindergarten teachers   ",
            "occupation_M": "enseignants à l'école enfantine",
            "occupation_F": "enseignantes à l'école enfantine"
        },
        {
            "noun": "Lab technicians   ",
            "occupation_M": "techniciens de laboratoire",
            "occupation_F": "techniciennes de laboratoire"
        },
        {
            "noun": "Landscape gardeners   ",
            "occupation_M": "paysagistes",
            "occupation_F": "paysagistes"
        },
        {
            "noun": "Law clerks   ",
            "occupation_M": "greffiers",
            "occupation_F": "greffières"
        },
        {
            "noun": "Law professors   ",
            "occupation_M": "professeurs de droit",
            "occupation_F": "professeures de droit"
        },
        {
            "noun": "Lawyers   ",
            "occupation_M": "avocats",
            "occupation_F": "avocates"
        },
        {
            "noun": "Leaders   ",
            "occupation_M": "leaders",
            "occupation_F": "leaders"
        },
        {
            "noun": "Librarians   ",
            "occupation_M": "bibliothécaires",
            "occupation_F": "bibliothécaires"
        },
        {
            "noun": "Lieutenants   ",
            "occupation_M": "lieutenants",
            "occupation_F": "lieutenantes"
        },
        {
            "noun": "Life coaches",
            "occupation_M": "coachs de vie",
            "occupation_F": "coachs de vie"
        },
        {
            "noun": "Lifeguards   ",
            "occupation_M": "maîtres-nageurs",
            "occupation_F": "maîtresses-nageuses"
        },
        {
            "noun": "Lighthouse keepers   ",
            "occupation_M": "gardiens de phare",
            "occupation_F": "gardiennes de phare"
        },
        {
            "noun": "Lodgers   ",
            "occupation_M": "locataires",
            "occupation_F": "locataires"
        },
        {
            "noun": "Lorry drivers   ",
            "occupation_M": "chauffeurs poids lourds",
            "occupation_F": "chauffeuses poids lourds"
        },
        {
            "noun": "Magician’s assistants   ",
            "occupation_M": "magiciens",
            "occupation_F": "magiciennes"
        },
        {
            "noun": "Magicians   ",
            "occupation_M": "assistants de magiciens",
            "occupation_F": "assistantes de magiciens"
        },
        {
            "noun": "Make up artists   ",
            "occupation_M": "maquilleurs",
            "occupation_F": "maquilleuses"
        },
        {
            "noun": "Managers   ",
            "occupation_M": "managers",
            "occupation_F": "managers"
        },
        {
            "noun": "Manicurists   ",
            "occupation_M": "manucures",
            "occupation_F": "manucures"
        },
        {
            "noun": "Market Researchers",
            "occupation_M": "spécialistes d'étude de marché",
            "occupation_F": "spécialistes d'étude de marché"
        },
        {
            "noun": "Mathematicians   ",
            "occupation_M": "mathématiciens",
            "occupation_F": "mathématiciennes"
        },
        {
            "noun": "Mayors   ",
            "occupation_M": "maires",
            "occupation_F": "maires"
        },
        {
            "noun": "Mechanics   ",
            "occupation_M": "mécaniciens",
            "occupation_F": "mécaniciennes"
        },
        {
            "noun": "Medical doctors   ",
            "occupation_M": "docteurs",
            "occupation_F": "docteures"
        },
        {
            "noun": "Members of parliament   ",
            "occupation_M": "députés",
            "occupation_F": "députées"
        },
        {
            "noun": "Members of the armed forces    ",
            "occupation_M": "militaires",
            "occupation_F": "militaires"
        },
        {
            "noun": "Metallurgists   ",
            "occupation_M": "métallurgistes",
            "occupation_F": "métallurgistes"
        },
        {
            "noun": "Meteorologists   ",
            "occupation_M": "météorologues",
            "occupation_F": "météorologues"
        },
        {
            "noun": "Millionaires   ",
            "occupation_M": "millionnaires",
            "occupation_F": "millionnaires"
        },
        {
            "noun": "Miners   ",
            "occupation_M": "mineurs de fond",
            "occupation_F": "mineuses de fond"
        },
        {
            "noun": "Models   ",
            "occupation_M": "modèles",
            "occupation_F": "modèles"
        },
        {
            "noun": "Mountain climbers   ",
            "occupation_M": "alpinistes",
            "occupation_F": "alpinistes"
        },
        {
            "noun": "Murderers   ",
            "occupation_M": "meurtriers",
            "occupation_F": "meurtrières"
        },
        {
            "noun": "Musicians   ",
            "occupation_M": "musiciens",
            "occupation_F": "musiciennes"
        },
        {
            "noun": "Nail technicians",
            "occupation_M": "prothésistes ongulaires",
            "occupation_F": "prothésistes ongulaires"
        },
        {
            "noun": "Nannies   ",
            "occupation_M": "nounous",
            "occupation_F": "nounous"
        },
        {
            "noun": "Neighbours   ",
            "occupation_M": "voisins",
            "occupation_F": "voisines"
        },
        {
            "noun": "Neurologists   ",
            "occupation_M": "neurologues",
            "occupation_F": "neurologues"
        },
        {
            "noun": "Neurosurgeons   ",
            "occupation_M": "neurochirurgiens",
            "occupation_F": "neurochirurgiennes"
        },
        {
            "noun": "News readers   ",
            "occupation_M": "présentateurs du journal",
            "occupation_F": "présentatrices du journal"
        },
        {
            "noun": "Novelists   ",
            "occupation_M": "romanciers",
            "occupation_F": "romancières"
        },
        {
            "noun": "Nurses   ",
            "occupation_M": "infirmiers",
            "occupation_F": "infirmières"
        },
        {
            "noun": "Nutritionists   ",
            "occupation_M": "nutritionnistes",
            "occupation_F": "nutritionnistes"
        },
        {
            "noun": "Occupational therapists   ",
            "occupation_M": "ergothérapeutes",
            "occupation_F": "ergothérapeutes"
        },
        {
            "noun": "Oceanographers   ",
            "occupation_M": "océanographes",
            "occupation_F": "océanographes"
        },
        {
            "noun": "Office workers   ",
            "occupation_M": "employés de bureau",
            "occupation_F": "employées de bureau"
        },
        {
            "noun": "Orchestra conductors   ",
            "occupation_M": "chefs d'orchestre",
            "occupation_F": "cheffes d'orchestre"
        },
        {
            "noun": "Orthodontists   ",
            "occupation_M": "orthodontistes",
            "occupation_F": "orthodontistes"
        },
        {
            "noun": "Paid interns",
            "occupation_M": "stagiaires rémunérés",
            "occupation_F": "stagiaires rémunérées"
        },
        {
            "noun": "Parachutists   ",
            "occupation_M": "parachutistes",
            "occupation_F": "parachutistes"
        },
        {
            "noun": "Parents   ",
            "occupation_M": "parents",
            "occupation_F": "parents"
        },
        {
            "noun": "Pastry chefs   ",
            "occupation_M": "pâtissiers",
            "occupation_F": "pâtissières"
        },
        {
            "noun": "Patients   ",
            "occupation_M": "patients",
            "occupation_F": "patientes"
        },
        {
            "noun": "Pawnbrokers   ",
            "occupation_M": "prêteurs sur gage",
            "occupation_F": "prêteuses sur gage"
        },
        {
            "noun": "Pedestrians   ",
            "occupation_M": "piétons",
            "occupation_F": "piétonnes"
        },
        {
            "noun": "Pediatricians   ",
            "occupation_M": "pédiatres",
            "occupation_F": "pédiatres"
        },
        {
            "noun": "Pensioners   ",
            "occupation_M": "retraités",
            "occupation_F": "retraitées"
        },
        {
            "noun": "Personal trainers   ",
            "occupation_M": "coachs personnels",
            "occupation_F": "coachs personnelles"
        },
        {
            "noun": "Persons   ",
            "occupation_M": "personnes",
            "occupation_F": "personnes"
        },
        {
            "noun": "Pharmacists   ",
            "occupation_M": "pharmaciens",
            "occupation_F": "pharmaciennes"
        },
        {
            "noun": "Philanthropists   ",
            "occupation_M": "philanthropes",
            "occupation_F": "philanthropes"
        },
        {
            "noun": "Photographers   ",
            "occupation_M": "photographes",
            "occupation_F": "photographes"
        },
        {
            "noun": "Physicians   ",
            "occupation_M": "médecins",
            "occupation_F": "médecins"
        },
        {
            "noun": "Physicists   ",
            "occupation_M": "physiciens",
            "occupation_F": "physiciennes"
        },
        {
            "noun": "Physics students   ",
            "occupation_M": "étudiants en physique",
            "occupation_F": "étudiantes en physique"
        },
        {
            "noun": "Physiotherapists   ",
            "occupation_M": "physiothérapeutes",
            "occupation_F": "physiothérapeutes"
        },
        {
            "noun": "Piano players   ",
            "occupation_M": "pianistes",
            "occupation_F": "pianistes"
        },
        {
            "noun": "Pilots   ",
            "occupation_M": "pilotes",
            "occupation_F": "pilotes"
        },
        {
            "noun": "Playgroup leaders   ",
            "occupation_M": "responsables de garderie",
            "occupation_F": "responsables de garderie"
        },
        {
            "noun": "Plumbers   ",
            "occupation_M": "plombiers",
            "occupation_F": "plombières"
        },
        {
            "noun": "Podcast hosts",
            "occupation_M": "animateurs de podcast",
            "occupation_F": "animatrices de podcast"
        },
        {
            "noun": "Poets   ",
            "occupation_M": "poètes",
            "occupation_F": "poètes"
        },
        {
            "noun": "Police Inspectors   ",
            "occupation_M": "inspecteurs de police",
            "occupation_F": "inspectrices de police"
        },
        {
            "noun": "Police officers   ",
            "occupation_M": "policiers",
            "occupation_F": "policières"
        },
        {
            "noun": "Police sergeants   ",
            "occupation_M": "sergents de police",
            "occupation_F": "sergentes de police"
        },
        {
            "noun": "Political activists   ",
            "occupation_M": "militants politiques",
            "occupation_F": "militantes politiques"
        },
        {
            "noun": "Politicians   ",
            "occupation_M": "politiciens",
            "occupation_F": "politiciennes"
        },
        {
            "noun": "Postal workers   ",
            "occupation_M": "employés des postes",
            "occupation_F": "employées des postes"
        },
        {
            "noun": "Presidents",
            "occupation_M": "présidents (pays)",
            "occupation_F": "présidentes (pays)"
        },
        {
            "noun": "Priests   ",
            "occupation_M": "prêtres",
            "occupation_F": "prêtresses"
        },
        {
            "noun": "Primary school teachers   ",
            "occupation_M": "enseignants d'école primaire",
            "occupation_F": "enseignantes d'école primaire"
        },
        {
            "noun": "Prison guards   ",
            "occupation_M": "gardiens de prison",
            "occupation_F": "gardiennes de prison"
        },
        {
            "noun": "Private detectives   ",
            "occupation_M": "détectives privés",
            "occupation_F": "détectives privées"
        },
        {
            "noun": "Probation officers   ",
            "occupation_M": "agents de probation",
            "occupation_F": "agentes de probation"
        },
        {
            "noun": "Professional athletes   ",
            "occupation_M": "athlètes professionnels",
            "occupation_F": "athlètes professionnelles"
        },
        {
            "noun": "Professors   ",
            "occupation_M": "professeurs",
            "occupation_F": "professeures"
        },
        {
            "noun": "Proofreaders   ",
            "occupation_M": "relecteurs",
            "occupation_F": "relectrices"
        },
        {
            "noun": "Prostitutes   ",
            "occupation_M": "prostitués",
            "occupation_F": "prostituées"
        },
        {
            "noun": "Protestors   ",
            "occupation_M": "manifestants",
            "occupation_F": "manifestantes"
        },
        {
            "noun": "Psychiatrists   ",
            "occupation_M": "psychiatres",
            "occupation_F": "psychiatres"
        },
        {
            "noun": "Psychology students   ",
            "occupation_M": "étudiants en psychologie",
            "occupation_F": "étudiantes en psychologie"
        },
        {
            "noun": "Public Relations Officers",
            "occupation_M": "chargés de relations publiques",
            "occupation_F": "chargées de relations publiques"
        },
        {
            "noun": "Publishers   ",
            "occupation_M": "éditeurs",
            "occupation_F": "éditrices"
        },
        {
            "noun": "Racing car drivers   ",
            "occupation_M": "pilotes automobile",
            "occupation_F": "pilotes automobile"
        },
        {
            "noun": "Radio announcers   ",
            "occupation_M": "animateurs radio",
            "occupation_F": "animatrices radio"
        },
        {
            "noun": "Radio technicians   ",
            "occupation_M": "techniciens radio",
            "occupation_F": "techniciennes radio"
        },
        {
            "noun": "Rape victims   ",
            "occupation_M": "victimes de viol",
            "occupation_F": "victimes de viol"
        },
        {
            "noun": "Rapists   ",
            "occupation_M": "violeurs",
            "occupation_F": "violeuses"
        },
        {
            "noun": "Receptionists   ",
            "occupation_M": "réceptionnistes",
            "occupation_F": "réceptionnistes"
        },
        {
            "noun": "Relatives   ",
            "occupation_M": "membres de la famille",
            "occupation_F": "membres de la famille"
        },
        {
            "noun": "Remote workers",
            "occupation_M": "télétravailleurs",
            "occupation_F": "télétravailleuses"
        },
        {
            "noun": "Reporters   ",
            "occupation_M": "reporters",
            "occupation_F": "reporters"
        },
        {
            "noun": "Representatives",
            "occupation_M": "représentants",
            "occupation_F": "représentantes"
        },
        {
            "noun": "Rescue workers   ",
            "occupation_M": "secouristes",
            "occupation_F": "secouristes"
        },
        {
            "noun": "Research scientists   ",
            "occupation_M": "chercheurs scientifiques",
            "occupation_F": "chercheuses scientifiques"
        },
        {
            "noun": "Riding instructors",
            "occupation_M": "moniteurs d'équitation",
            "occupation_F": "monitrices d'équitation"
        },
        {
            "noun": "Road Crew",
            "occupation_M": "roadie",
            "occupation_F": "roadie"
        },
        {
            "noun": "Road workers   ",
            "occupation_M": "agent d'exploitation de la voirie",
            "occupation_F": "agente d'exploitation de la voirie"
        },
        {
            "noun": "Role players",
            "occupation_M": "joueurs de jeu de rôle",
            "occupation_F": "joueuses de jeu de rôle"
        },
        {
            "noun": "Romantic novelists   ",
            "occupation_M": "écrivains de romans romantiques",
            "occupation_F": "écrivaines de romans romantiques"
        },
        {
            "noun": "Roofers   ",
            "occupation_M": "couvreurs",
            "occupation_F": "couvreuses"
        },
        {
            "noun": "Rubbish collectors   ",
            "occupation_M": "éboueurs",
            "occupation_F": "éboueuses"
        },
        {
            "noun": "Runners   ",
            "occupation_M": "coureurs",
            "occupation_F": "coureuses"
        },
        {
            "noun": "Sailors   ",
            "occupation_M": "marins",
            "occupation_F": "marines"
        },
        {
            "noun": "Sales assistants   ",
            "occupation_M": "vendeurs",
            "occupation_F": "vendeuses"
        },
        {
            "noun": "Salespersons   ",
            "occupation_M": "commerciaux",
            "occupation_F": "commerciales"
        },
        {
            "noun": "Schoolchildren      ",
            "occupation_M": "écoliers",
            "occupation_F": "écolières"
        },
        {
            "noun": "Screenwriters   ",
            "occupation_M": "scénaristes",
            "occupation_F": "scénaristes"
        },
        {
            "noun": "Scuba divers   ",
            "occupation_M": "plongeurs (sous-marin)",
            "occupation_F": "plongeuses (sous-marin)"
        },
        {
            "noun": "Sculptors   ",
            "occupation_M": "sculpteurs",
            "occupation_F": "sculptrices"
        },
        {
            "noun": "Secretaries   ",
            "occupation_M": "secrétaires",
            "occupation_F": "secrétaires"
        },
        {
            "noun": "Security guards",
            "occupation_M": "agents de sécurité",
            "occupation_F": "agentes de sécurité"
        },
        {
            "noun": "Self employed",
            "occupation_M": "travailleurs indépendants",
            "occupation_F": "travailleuses indépendantes"
        },
        {
            "noun": "Serial killers   ",
            "occupation_M": "tueurs en série",
            "occupation_F": "tueuses en série"
        },
        {
            "noun": "Sex workers",
            "occupation_M": "travailleurs du sexe",
            "occupation_F": "travailleuses du sexe"
        },
        {
            "noun": "Sexual abusers",
            "occupation_M": "agresseurs sexuels",
            "occupation_F": "agresseuses sexuelles"
        },
        {
            "noun": "Shoemakers   ",
            "occupation_M": "cordonniers",
            "occupation_F": "cordonnières"
        },
        {
            "noun": "Shoplifters   ",
            "occupation_M": "voleurs à l'étalage",
            "occupation_F": "voleuses à l'étalage"
        },
        {
            "noun": "Shoppers   ",
            "occupation_M": "personnes qui font du shopping",
            "occupation_F": "personnes qui font du shopping"
        },
        {
            "noun": "Singers   ",
            "occupation_M": "chanteurs",
            "occupation_F": "chanteuses"
        },
        {
            "noun": "Single parents   ",
            "occupation_M": "parents isolés",
            "occupation_F": "parents isolées"
        },
        {
            "noun": "Skiers   ",
            "occupation_M": "skieurs",
            "occupation_F": "skieuses"
        },
        {
            "noun": "Smugglers   ",
            "occupation_M": "contrebandiers",
            "occupation_F": "contrebandières"
        },
        {
            "noun": "Snooker players   ",
            "occupation_M": "joueurs de billard",
            "occupation_F": "joueuses de billard"
        },
        {
            "noun": "Social workers   ",
            "occupation_M": "assistants sociaux",
            "occupation_F": "assistantes sociales"
        },
        {
            "noun": "Socialites   ",
            "occupation_M": "mondains",
            "occupation_F": "mondaines"
        },
        {
            "noun": "Soldiers   ",
            "occupation_M": "soldats",
            "occupation_F": "soldates"
        },
        {
            "noun": "Sommeliers",
            "occupation_M": "sommeliers",
            "occupation_F": "sommelières"
        },
        {
            "noun": "Sound engineers   ",
            "occupation_M": "ingénieurs du son",
            "occupation_F": "ingénieures du son"
        },
        {
            "noun": "Sous Chef",
            "occupation_M": "sous-chefs",
            "occupation_F": "sous-cheffes"
        },
        {
            "noun": "Spectators   ",
            "occupation_M": "spectateurs",
            "occupation_F": "spectatrices"
        },
        {
            "noun": "Speech therapists   ",
            "occupation_M": "logopédistes",
            "occupation_F": "logopédistes"
        },
        {
            "noun": "Spies   ",
            "occupation_M": "espions",
            "occupation_F": "espionne"
        },
        {
            "noun": "Sports coaches   ",
            "occupation_M": "coachs sportifs",
            "occupation_F": "coachs sportives"
        },
        {
            "noun": "Stalkers",
            "occupation_M": "harceleurs",
            "occupation_F": "harceleuses"
        },
        {
            "noun": "Statisticians   ",
            "occupation_M": "statisticiens",
            "occupation_F": "statisticiennes"
        },
        {
            "noun": "Stay at home parents",
            "occupation_M": "Parents au foyer",
            "occupation_F": "parents au foyer"
        },
        {
            "noun": "Stenographers",
            "occupation_M": "sténographes",
            "occupation_F": "sténographes"
        },
        {
            "noun": "Stockbrokers   ",
            "occupation_M": "agents de change",
            "occupation_F": "agentes de change"
        },
        {
            "noun": "Strippers   ",
            "occupation_M": "strip-teaseurs",
            "occupation_F": "strip-teaseuses"
        },
        {
            "noun": "Structural engineers   ",
            "occupation_M": "ingénieurs structurels",
            "occupation_F": "ingénieures structurelles"
        },
        {
            "noun": "Students   ",
            "occupation_M": "étudiants",
            "occupation_F": "étudiantes"
        },
        {
            "noun": "Supervisors   ",
            "occupation_M": "superviseurs",
            "occupation_F": "superviseuses"
        },
        {
            "noun": "Surfers   ",
            "occupation_M": "surfeurs",
            "occupation_F": "surfeuses"
        },
        {
            "noun": "Surgeons   ",
            "occupation_M": "chirurgiens",
            "occupation_F": "chirurgiennes"
        },
        {
            "noun": "Suspects   ",
            "occupation_M": "suspects",
            "occupation_F": "suspectes"
        },
        {
            "noun": "Swimmers   ",
            "occupation_M": "nageurs",
            "occupation_F": "nageuses"
        },
        {
            "noun": "Synchronized swimmers   ",
            "occupation_M": "nageurs synchronisés",
            "occupation_F": "nageuses synchronisées"
        },
        {
            "noun": "Systems analysts   ",
            "occupation_M": "analystes de systèmes",
            "occupation_F": "analystes de systèmes"
        },
        {
            "noun": "Tailors   ",
            "occupation_M": "tailleurs",
            "occupation_F": "tailleuses"
        },
        {
            "noun": "Tattoo artists",
            "occupation_M": "tatoueurs",
            "occupation_F": "tatoueuses"
        },
        {
            "noun": "Tax advisors   ",
            "occupation_M": "conseillers fiscaux",
            "occupation_F": "conseillères fiscales"
        },
        {
            "noun": "Taxi drivers   ",
            "occupation_M": "chauffeurs de taxi",
            "occupation_F": "chauffeuses de taxi"
        },
        {
            "noun": "Technicians   ",
            "occupation_M": "techniciens",
            "occupation_F": "techniciennes"
        },
        {
            "noun": "Teenagers      ",
            "occupation_M": "adolescents",
            "occupation_F": "adolescentes"
        },
        {
            "noun": "Temp workers",
            "occupation_M": "travailleurs temporaires",
            "occupation_F": "travailleuses temporaires"
        },
        {
            "noun": "Tennis players   ",
            "occupation_M": "joueurs de tennis",
            "occupation_F": "joueuses de tennis"
        },
        {
            "noun": "Terrorists   ",
            "occupation_M": "terroristes",
            "occupation_F": "terroristes"
        },
        {
            "noun": "Theatre directors   ",
            "occupation_M": "metteurs en scène",
            "occupation_F": "metteuses en scène"
        },
        {
            "noun": "Therapists",
            "occupation_M": "thérapeutes",
            "occupation_F": "thérapeutes"
        },
        {
            "noun": "Thieves   ",
            "occupation_M": "voleurs",
            "occupation_F": "voleuses"
        },
        {
            "noun": "Ticket inspectors   ",
            "occupation_M": "contrôleurs de billets",
            "occupation_F": "contrôleuses de billets"
        },
        {
            "noun": "Tiktokers",
            "occupation_M": "tiktokeurs",
            "occupation_F": "tiktokeuses"
        },
        {
            "noun": "Toddlers      ",
            "occupation_M": "enfants en bas âge",
            "occupation_F": "enfants en bas âge"
        },
        {
            "noun": "Tour guides   ",
            "occupation_M": "guides touristiques",
            "occupation_F": "guides touristiques"
        },
        {
            "noun": "Trade unionists   ",
            "occupation_M": "syndicalistes",
            "occupation_F": "syndicalistes"
        },
        {
            "noun": "Traffic engineers   ",
            "occupation_M": "ingénieurs en trafic",
            "occupation_F": "ingénieures en trafic"
        },
        {
            "noun": "Train conductors",
            "occupation_M": "contrôleurs de train",
            "occupation_F": "contrôleuses de train"
        },
        {
            "noun": "Translators   ",
            "occupation_M": "traducteurs",
            "occupation_F": "traductrices"
        },
        {
            "noun": "Travel agents   ",
            "occupation_M": "agents de voyage",
            "occupation_F": "agentes de voyage"
        },
        {
            "noun": "Trumpet players   ",
            "occupation_M": "trompettistes",
            "occupation_F": "trompettistes"
        },
        {
            "noun": "Tuba players   ",
            "occupation_M": "tubistes",
            "occupation_F": "tubistes"
        },
        {
            "noun": "TV show hosts",
            "occupation_M": "animateurs d'émission télévisées",
            "occupation_F": "animatrices d'émission télévisées"
        },
        {
            "noun": "Tyre fitters   ",
            "occupation_M": "monteurs de pneus",
            "occupation_F": "monteuses de pneus"
        },
        {
            "noun": "Uber drivers",
            "occupation_M": "chauffeurs uber",
            "occupation_F": "chauffeuses uber"
        },
        {
            "noun": "Unemployed",
            "occupation_M": "chômeurs",
            "occupation_F": "chômeuses"
        },
        {
            "noun": "Unpaid interns",
            "occupation_M": "stagiaires non-rémunérés",
            "occupation_F": "stagiaires non-rémunérées"
        },
        {
            "noun": "Vets   ",
            "occupation_M": "vétérinaires",
            "occupation_F": "vétérinaires"
        },
        {
            "noun": "Vice chancellors",
            "occupation_M": "vice-chanceliers",
            "occupation_F": "vice-chancelières"
        },
        {
            "noun": "Victims   ",
            "occupation_M": "victimes",
            "occupation_F": "victimes"
        },
        {
            "noun": "Violinists   ",
            "occupation_M": "violonistes",
            "occupation_F": "violonistes"
        },
        {
            "noun": "Waiters   ",
            "occupation_M": "serveurs",
            "occupation_F": "serveuses"
        },
        {
            "noun": "Wardens   ",
            "occupation_M": "directeurs de prison",
            "occupation_F": "directrices de prison"
        },
        {
            "noun": "Weavers   ",
            "occupation_M": "tisserands",
            "occupation_F": "tisserandes"
        },
        {
            "noun": "Web designers",
            "occupation_M": "webdesigners",
            "occupation_F": "webdesigners"
        },
        {
            "noun": "Wedding planners   ",
            "occupation_M": "organisateurs de mariages",
            "occupation_F": "organisatrices de mariages"
        },
        {
            "noun": "Weight lifters   ",
            "occupation_M": "haltérophiles",
            "occupation_F": "haltérophiles"
        },
        {
            "noun": "Welders   ",
            "occupation_M": "soudeurs",
            "occupation_F": "soudeuses"
        },
        {
            "noun": "Whistleblowers",
            "occupation_M": "lanceurs d'alerte",
            "occupation_F": "lanceuses d'alerte"
        },
        {
            "noun": "Wine connoisseurs   ",
            "occupation_M": "amateurs de vin",
            "occupation_F": "amatrices de vin"
        },
        {
            "noun": "Wood carvers   ",
            "occupation_M": "sculpteurs sur bois",
            "occupation_F": "sculptrices sur bois"
        },
        {
            "noun": "Wood workers   ",
            "occupation_M": "menuisiers",
            "occupation_F": "menuisières"
        },
        {
            "noun": "Workers   ",
            "occupation_M": "travailleurs",
            "occupation_F": "travailleuses"
        },
        {
            "noun": "Wrestlers   ",
            "occupation_M": "lutteurs",
            "occupation_F": "lutteuses"
        },
        {
            "noun": "Writers   ",
            "occupation_M": "écrivains",
            "occupation_F": "écrivaines"
        },
        {
            "noun": "X-ray technicians   ",
            "occupation_M": "techniciens radiologue",
            "occupation_F": "techniciennes radiologues"
        },
        {
            "noun": "Yoga instructors",
            "occupation_M": "professeurs de yoga",
            "occupation_F": "professeures de yoga"
        },
        {
            "noun": "Youngsters      ",
            "occupation_M": "jeunes",
            "occupation_F": "jeunes"
        },
        {
            "noun": "Youtubers",
            "occupation_M": "youtubeurs",
            "occupation_F": "youtubeuses"
        },
        {
            "noun": "Zoologists   ",
            "occupation_M": "zoologistes",
            "occupation_F": "zoologistes"
        }
    ]
}
