function saveData(name, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'record_result.php'); //
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
}

const jsPsych = initJsPsych({
    experiment_width: 750,
    on_finish: function () {
        document.body.innerHTML = '<p style="text-align: center;">Jouw gegevens zijn bewaard. Hartelijk bedankt voor je deelname.</p>';

        saveData(fileName, jsPsych.data.get().csv());
        jsPsych.endExperiment();
    }
});

// Following lines are to recover ID (named `dnid`) from URL if ID created on other page
// const queryString = window.location.search;
// const urlParams = new URLSearchParams(queryString);
// const participant_id = urlParams.get('dnid')

var participant_id = jsPsych.randomization.randomID(10);
var fileName = 'norm-'+participant_id;

var order = jsPsych.randomization.sampleWithoutReplacement([0,1], 1)[0]; // if order = 1 then M/F, else F/M
console.log(order);
// Store ID and condition
jsPsych.data.addProperties({
    participant: participant_id,
    orderMF: order
});

var stimuli_select = jsPsych.randomization.sampleWithoutReplacement(stimuli, 25);


if (order===1) {
    var x = 'M';
    var y = 'F';
}
else {
    var x = 'F';
    var y = 'M';
}

const verhouding = {
    'M': 'mannen',
    'F': 'vrouwen'
}

const symbolen = {
    'M': '♂',
    'F': '♀'
}

const toestemming = {
    type: jsPsychHtmlButtonResponse,
    stimulus: consigne_consent,
    choices: ['Ik ga akkoord']
};

const instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: function() {
        return '<strong>INSTRUCTIES</strong>' +
            '<p>In deze studie zijn we geïnteresseerd in wat mensen denken dat de genderverhoudingen zijn binnen ' +
            'verschillende groepen. Zijn de meeste juweliers in Nederland '+verhouding[x]+' of juist '+verhouding[y]+', of is het een 50/50 split?</p>' +
            '<p>Tijdens deze taak krijg je 25 zelfstandige naamwoorden te zien die verwijzen naar bepaalde groepen ' +
            '(zoals ‘juweliers’). Bij elk zelfstandig naamwoord vragen we je om met behulp van een schaal aan te geven ' +
            'wat je denkt dat de verhouding is tussen ' + verhouding[x] + ' en ' + verhouding[y] + ' in Nederland binnen deze groep. Het gaat hier ' +
            'alleen om jouw inschatting van de huidige stand van zaken in Nederland; je hoeft het niet zeker te weten.</p>' +
            '<p>Als je klaar bent om te beginnen, klik dan op ‘Beginnen’.</p>';
    },
    choices: ['Beginnen']
};

const procedure = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: '',
            choices: [],
            trial_duration: 800
        },
        { // AFFICHER L’ÉCHELLE ET LES NOMS À JUGER
            type: jsPsychSurveyLikert,
            questions: [
                {
                    prompt: function() {
                        return "Geef jouw inschatting van de verhouding van " + verhouding[x] + " / " + verhouding[y] + " aan:"
                    },
                    labels: function() {
                        var dutchx = jsPsych.timelineVariable("dutch"+x, true);
                        var dutchy = jsPsych.timelineVariable("dutch"+y, true);

                        var labels = [
                            "100 / 0<p style='font-size: small; position: relative; left: 50%; transform: translateX(-50%); width: auto; display: inline-block;'><strong>"+dutchx+"</strong> <span style='font-size: large'>"+symbolen[x]+"</span></p>", // <p>("+verhouding[x]+")</p>
                            "90 / 10",
                            "80 / 20",
                            "70 / 30",
                            "60 / 40",
                            "<strong>50 / 50</strong>",
                            "40 / 60",
                            "30 / 70",
                            "20 / 80",
                            "10 / 90",
                            "0 / 100<p p style='font-size: small; position: relative; left: 50%; transform: translateX(-50%); width: auto; display: inline-block;'><strong>"+dutchy+"</strong> <span style='font-size: large'>"+symbolen[y]+"</span></p>" // <p>("+verhouding[y]+")</p>
                        ];

                        return labels;
                    },
                    required: true,
                }
            ],
            button_label: "Verder",
            on_finish: function (data) {
                data.stereotype = jsPsych.timelineVariable("stereotype", true);
                data.noun = jsPsych.timelineVariable("noun", true);
                data.trialType = 'scaleMF';
                // console.log(data)
            }
        },
    ],
    timeline_variables: stimuli_select, // .slice(0,1)
    randomize_order: true,
}

var debrief = {
    timeline: [
        {
            type: jsPsychHtmlButtonResponse,
            stimulus: consigne_debrief,
            choices: ['Verder'],
        },
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {prompt: 'Wat is jouw leeftijd?', options: options_age, required: true},
                {prompt: 'In welke provincie woon je?', options: options_pronvinces, required: true},
                {prompt: 'Wat is jouw genderidentiteit?', options: options_genre, required: true},
                {prompt: 'Wat is je hoogst genoten opleiding?', options: options_education, required: true},
                {prompt: 'Welke talen werden thuis gesproken tijdens je jeugd?', options: options_langues, required: true},
                //{prompt: 'Ben jij bekend met zogenaamde “inclusieve vormen” van zelfstandige naamworden in talen zoals het Duits (bv. Mitarbeiter*in), het Frans (bv. les employé·es), of het Spaans (bv. amigxs)?', options: options_YN, required: true},
                //{prompt: 'Hoe belangrijk vind je het om inclusief taalgebruik aan te moedigen?', options: options_langincl, required: true},
                //{prompt: 'Probeer jij jouw taalgebruik aan te passen om meer inclusief te zijn?', options: options_proprelang, required: true}
            ],
            button_label: 'Verder',
            data: {
                participant: participant_id,
                trialType: 'q-questionnaire'
            }
        },
/*        {
            type: jsPsychSurveyText,
            questions: [
                {prompt: 'Als je ”ja” zei tegen de laatste vraag, geef aan hoe je jouw taalgebruik probeert aan te passen:', rows:5, columns: 40}
            ],
            button_label: 'Verder',
            data: {
                participant: participant_id,
                trialType: 'q-inclusief_taalgebruik'
            }
        }*/
    ]
}



const timeline = [
    toestemming,
    instructions,
    procedure,
    debrief
]

jsPsych.run(timeline);