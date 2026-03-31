

const consigne_consent =
    '<img src="rugr_logonlv_rood_rgb.png" style="width: 150px;" alt="Rijksuniversiteit Groningen">' +
    '<p>Dit is een studie over de perceptie van de genderverhoudingen voor verschillende groepen binnen de Nederlandse maatschappij. ' +
    'Deze studie wordt uitgevoerd door dr. Alexander Martin en dr. Hans Wilke van de Rijksuniversiteit Groningen en ' +
    'is goedgekeurd door de Commissie voor Ethische Toetsing Onderzoek van de Faculteiten der Letteren, Wijsbegeerte, en ' +
    'Science and Engineering (projectnummer 99743463).</p>' +
    '<div style="margin: 4px, 4px; padding: 4px; width: 750px; height: 200px; overflow-x: hidden; overflow-y: auto; text-align: left;">' +
    '<p style="font-size: 80%; line-height: 120%;"><strong>Waarom dit onderzoek?</strong><br/>Dit onderzoek zal ons een idee geven van hoe Nederlanders de ' +
    'hoeveelheid mannen en vrouwen binnen verschillende groepen inschatten.</p>' +
    '<p style="font-size: 80%; line-height: 120%;"><strong>Wat vragen we van je tijdens het onderzoek?</strong><br/>Deze ' +
    'studie bestaat uit twee delen. Voor het eerste deel zie je verschillende groepsnamen op het scherm en moet je ' +
    'aangeven hoeveel mannen en hoeveel vrouwen je denkt dat er daadwerkelijk zijn binnen die groep in Nederland. ' +
    'Voor het tweede deel stellen we je enkele vragen over jou, zoals je leeftijd en genderidentiteit.</p>' +
    '<p style="font-size: 80%; line-height: 120%;"><strong>Hoe gaan we met je gegevens om?</strong><br/>De verwerking van je ' +
    'gegevens helpt ons om analyses uit te voeren over patronen van inschattingen. Jouw gegevens zullen alleen voor ' +
    'wetenschappelijke doeleinden worden verwerkt en zullen in geen enkel geval voor commerciële doeleinden worden ' +
    'gebruikt. Alle gegevens worden direct opgeslagen op een beveiligde server van de Rijksuniversiteit Groningen en ' +
    'worden compleet anoniem verwerkt. Onderzoeksgegevens die gepubliceerd of openbaar gemaakt worden zullen in geen ' +
    'enkel geval persoonlijke informatie bevatten en kunnen niet worden gekoppeld aan jou. Wees je ervan bewust dat jouw anonieme ' +
    'antwoorden kunnen worden gebruikt voor toekomstig onderzoek.</p>' +
    '<p style="font-size: 80%; line-height: 120%;"><strong>Moet ik meedoen aan dit onderzoek?</strong><br/>Deelname aan dit onderzoek is vrijwillig. Als je besluit ' +
    'om niet mee te doen, hoef je niet uit te leggen waarom, en zal dit geen negatieve gevolgen voor je hebben. Je gegevens ' +
    'kunnen niet worden verwijderd na deelname, omdat alle data anoniem zijn.</p>' +
    '<p style="font-size: 80%; line-height: 120%;"><strong>Wat moet je nog meer weten?</strong><br/>Laat het ons vooral weten als je nog vragen of opmerkingen hebt ' +
    'over deze studie. Je kunt je vragen nu, tijdens, of na afloop van de studie stellen. Je kunt dit doen door een email ' +
    'te sturen naar de voor deze studie verantwoordelijke onderzoeker: <span style="white-space: nowrap;">alexander . martin [at] rug . nl.</span></p>' +
    '<p style="font-size: 80%; line-height: 120%;">Heb je vragen of zorgen over je rechten als deelnemer of over de ' +
    'handelswijze van het onderzoeksteam? Neem dan contact op met de Commissie voor Ethische Toetsing Onderzoek (CETO) ' +
    'van de Faculteiten der Letteren, Wijsbegeerte, en Science and Engineering van de Rijksuniversiteit Groningen: ' +
    '<span style="white-space: nowrap;">ceto [at] rug . nl</span>. </p>' +
    '</div>' +
    '<p>Bij deze verklaar ik, de deelnemer, dat:</p>' +
    '<ul style="font-size: 80%; text-align: left; line-height: 120%;"> \
        <li>Ik de informatie over het onderzoek heb gelezen en begrepen en ik vrijwillig instem met deelname. Ik weet bij wie ik terecht kan voor vragen en weet wat mijn rechten zijn.</li>\
        <li>Ik ben me ervan bewust dat deelname aan deze studie geheel vrijwillig is. Ik kan mijn toestemming om deel te nemen aan dit onderzoek intrekken tot het einde van de vragenlijst.</li>\
        <li>Ik begrijp dat ik voor deze studie mijn inschattingen van verhoudingen tussen mannen en vrouwen binnen bepaalde groepen moet aangeven.</li>\
    </ul>' +
    '<p>Daarnaast stem ik toe dat:</p>' +
    '<ul style="font-size: 80%; text-align: left; line-height: 120%;"> \
        <li>De anonieme data die ik verstrek openbaar zullen worden gepubliceerd op het Open Science Framework.</li>\
    </ul>';

const consigne_debrief =
    '<p>Je bent nu klaar met het eerste deel van de studie. Nu stellen we je enkele vragen over jezelf en je ervaringen. ' +
    'Als je een vraag niet wilt beantwoorden, kun je ‘Zeg ik liever niet’ selecteren.</p>';

const options_YN = [
    'Ja',
    'Nee',
    'Zeg ik liever niet'
];

const options_age = [
    '18–24',
    '25–34',
    '35–44',
    '45–64',
    '65+',
    'Zeg ik liever niet'
];

const options_education = [
    'Geen opleiding',
    'Middelbare school (VMBO, HAVO, VWO, etc.)',
    'Middelbaar beroepsonderwijs (MBO)',
    'Hoger beroepsonderwijs (HBO)',
    'Wetenschappelijk onderwijs (Universiteit)',
    'Zeg ik liever niet'
];

const options_genre = [
    'Man',
    'Vrouw',
    'Non-binair',
    'Anders',
    'Zeg ik liever niet'
];

const options_langues = [
    'Alleen Nederlands',
    'Nederlands en dialect',
    'Alleen dialect',
    'Nederlands en een andere taal dan het Nederlands',
    'Alleen een andere taal dan het Nederlands',
    'Zeg ik liever niet'
];

const options_pronvinces = [
    'Groningen',
    'Friesland',
    'Drenthe',
    'Overijssel',
    'Flevoland',
    'Gelderland',
    'Utrecht',
    'Noord-Holland',
    'Zuid-Holland',
    'Zeeland',
    'Noord-Brabant',
    'Limburg',
    'Ergens anders',
    'Zeg ik liever niet'
];

const options_langincl = [
    'Zeer belangrijk',
    'Enigzins belangrijk',
    'Neutraal',
    'Niet zo belangrijk',
    'Helemaal niet belangrijk',
    'Zeg ik liever niet'
]

const options_proprelang = [
    'Ja, heel vaak',
    'Ja, vaak',
    'Ja, soms',
    'Ja, maar zelden',
    'Nee',
    'Zeg ik liever niet'
]

const stimuli = [
    {
        "noun": "Chemists",
        "repf": 0.3983333333,
        "stereotype": "n",
        "dutchM": "Apothekers",
        "dutchF": "Apothekeressen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Poets",
        "repf": 0.405,
        "stereotype": "n",
        "dutchM": "Dichters",
        "dutchF": "Dichteressen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Accountants",
        "repf": 0.4125,
        "stereotype": "n",
        "dutchM": "Boekhouders",
        "dutchF": "Boekhoudsters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Innkeepers",
        "repf": 0.415,
        "stereotype": "n",
        "dutchM": "Gastheren",
        "dutchF": "Gastvrouwen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "History professors",
        "repf": 0.415,
        "stereotype": "n",
        "dutchM": "Geschiedenisdocenten",
        "dutchF": "Geschiedenisdocentes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Political activists",
        "repf": 0.4166666667,
        "stereotype": "n",
        "dutchM": "Politieke activisten",
        "dutchF": "Politieke activistes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Meteorologists",
        "repf": 0.4166666667,
        "stereotype": "n",
        "dutchM": "Meteorologen",
        "dutchF": "Meteorologes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Landscape gardeners",
        "repf": 0.4216666667,
        "stereotype": "n",
        "dutchM": "Tuinarchitecten",
        "dutchF": "Tuinarchitectes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Government officials",
        "repf": 0.4233333333,
        "stereotype": "n",
        "dutchM": "Overheidsambtenaren",
        "dutchF": "Overheidsambtenaressen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Campers",
        "repf": 0.4233333333,
        "stereotype": "n",
        "dutchM": "Kampeerders",
        "dutchF": "Kampeersters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Lawyers",
        "repf": 0.425,
        "stereotype": "n",
        "dutchM": "Advocaten",
        "dutchF": "Advocates",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Astrologists",
        "repf": 0.425,
        "stereotype": "n",
        "dutchM": "Astrologen",
        "dutchF": "Astrologes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Philanthropists",
        "repf": 0.4266666667,
        "stereotype": "n",
        "dutchM": "Filantropen",
        "dutchF": "Filantropes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Orthodontists",
        "repf": 0.4283333333,
        "stereotype": "n",
        "dutchM": "Orthodontisten",
        "dutchF": "Orthodontistes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Runners",
        "repf": 0.4366666667,
        "stereotype": "n",
        "dutchM": "Hardlopers",
        "dutchF": "Hardloopsters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Bricklayers",
        "repf": 0.11,
        "stereotype": "m",
        "dutchM": "Metselaars",
        "dutchF": "Metselaarsters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Construction workers",
        "repf": 0.13,
        "stereotype": "m",
        "dutchM": "Bouwvakkers",
        "dutchF": "Bouwvaksters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Plumbers",
        "repf": 0.1333333333,
        "stereotype": "m",
        "dutchM": "Loodgieters",
        "dutchF": "Loodgietsters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Car mechanics",
        "repf": 0.135,
        "stereotype": "m",
        "dutchM": "Automonteurs",
        "dutchF": "Automonteuses",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Crane operators",
        "repf": 0.1366666667,
        "stereotype": "m",
        "dutchM": "Kraanmachinisten",
        "dutchF": "Kraanmachinestes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Football coaches",
        "repf": 0.1383333333,
        "stereotype": "m",
        "dutchM": "Voetbaltrainer",
        "dutchF": "Voetbaltrainster",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Lorry drivers",
        "repf": 0.145,
        "stereotype": "m",
        "dutchM": "Vrachtwagenchauffeurs",
        "dutchF": "Vrachtwagenchauffeuses",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Rubbish collectors",
        "repf": 0.1466666667,
        "stereotype": "m",
        "dutchM": "Vuilnismannen",
        "dutchF": "Vuilnisvrouwen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Carpenters",
        "repf": 0.152,
        "stereotype": "m",
        "dutchM": "Timmermannen",
        "dutchF": "Timmervrouwen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Wood workers",
        "repf": 0.1566666667,
        "stereotype": "m",
        "dutchM": "Houtbewerkers",
        "dutchF": "Houtbewerksters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Firefighters",
        "repf": 0.1566666667,
        "stereotype": "m",
        "dutchM": "Brandweermannen",
        "dutchF": "Brandweervrouwen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Roofers",
        "repf": 0.16,
        "stereotype": "m",
        "dutchM": "Dakdekkers",
        "dutchF": "Dakdeksters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Soldiers",
        "repf": 0.165,
        "stereotype": "m",
        "dutchM": "Soldaten",
        "dutchF": "Soldates",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Hunters",
        "repf": 0.165,
        "stereotype": "m",
        "dutchM": "Jagers",
        "dutchF": "Jageressen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Road workers",
        "repf": 0.1666666667,
        "stereotype": "m",
        "dutchM": "Wegwerkers",
        "dutchF": "Wegwerksters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Knitters",
        "repf": 0.75,
        "stereotype": "f",
        "dutchM": "Breiers",
        "dutchF": "Breisters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Fortune tellers",
        "repf": 0.76,
        "stereotype": "f",
        "dutchM": "Waarzeggers",
        "dutchF": "Waarzegsters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Ballet dancers",
        "repf": 0.766,
        "stereotype": "f",
        "dutchM": "Balletdansers",
        "dutchF": "Balletdanseressen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Tarot card readers",
        "repf": 0.77,
        "stereotype": "f",
        "dutchM": "Tarotkaartleggers",
        "dutchF": "Tarotkaartlegsters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Primary school teachers",
        "repf": 0.7733333333,
        "stereotype": "f",
        "dutchM": "Meesters",
        "dutchF": "Juffen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Florists",
        "repf": 0.775,
        "stereotype": "f",
        "dutchM": "Bloemisten",
        "dutchF": "Bloemistes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Nurses",
        "repf": 0.7783333333,
        "stereotype": "f",
        "dutchM": "Verplegers",
        "dutchF": "Verpleegsters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Aerobics instructors",
        "repf": 0.7783333333,
        "stereotype": "f",
        "dutchM": "Zumba instructeurs",
        "dutchF": "Zumba instructrices",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Synchronized swimmers",
        "repf": 0.7883333333,
        "stereotype": "f",
        "dutchM": "Synchroonzwemmers",
        "dutchF": "Synchroonzwemsters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Birth attendants",
        "repf": 0.8033333333,
        "stereotype": "f",
        "dutchM": "Vroedmannen",
        "dutchF": "Vroedvrouwen",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Kindergarten teachers",
        "repf": 0.81,
        "stereotype": "f",
        "dutchM": "Kleuterleiders",
        "dutchF": "Kleuterleidsters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Prostitutes",
        "repf": 0.8416666667,
        "stereotype": "f",
        "dutchM": "Gigolo’s",
        "dutchF": "Prostituees",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Nursery teachers",
        "repf": 0.8466666667,
        "stereotype": "f",
        "dutchM": "Pedagogisch medewerkers",
        "dutchF": "Pedagogisch medewerksters",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Beauticians",
        "repf": 0.8683333333,
        "stereotype": "f",
        "dutchM": "Schoonheidsspecialisten",
        "dutchF": "Schoonheidsspecialistes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    },
    {
        "noun": "Manicurists",
        "repf": 0.8783333333,
        "stereotype": "f",
        "dutchM": "Nagelstylisten",
        "dutchF": "Nagelstylistes",
        "existsNL": 1,
        "okfortext": 1,
        "selected": 1
    }
];

