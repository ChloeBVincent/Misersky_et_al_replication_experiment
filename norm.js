function saveData(name, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'record_result.php'); //
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
}

const jsPsych = initJsPsych({
    experiment_width: 750,
    on_finish: function () {
        document.body.innerHTML = '<p style="text-align: center;">'+
		experiment_strings.message_end +
		'</p>';

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

var stimuli_select = jsPsych.randomization.sampleWithoutReplacement(stimuli, 1);


if (order===1) {
    var x = 'M';
    var y = 'F';
}
else {
    var x = 'F';
    var y = 'M';
}

const ratio_labels = {
    'M': experiment_strings.label_ratio_men,
    'F': experiment_strings.label_ratio_women
}

const symbols = {
    'M': '♂',
    'F': '♀'
}

const consent = {
    type: jsPsychHtmlButtonResponse,
    stimulus: consent_page,
	//choices: ['Ik ga akkoord']
	choices: [experiment_strings.button_agree]
};

const instructions = {
    type: jsPsychHtmlButtonResponse,
    stimulus: instructions_page,
    choices: [experiment_strings.button_start]
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
                        return experiment_strings.question_proportion + ratio_labels[x] + " / " + ratio_labels[y] + ":"
                    },
                    labels: function() {
                        var occupation_x = jsPsych.timelineVariable("occupation_" + x, true);
                        var occupation_y = jsPsych.timelineVariable("occupation_" + y, true);

                        var labels = [
                            "100 / 0<p style='font-size: small; position: relative; left: 50%; transform: translateX(-50%); width: auto; display: inline-block;'><strong>"+occupation_x+"</strong> <span style='font-size: large'>"+symbols[x]+"</span></p>", // <p>("+verhouding[x]+")</p>
                            "90 / 10",
                            "80 / 20",
                            "70 / 30",
                            "60 / 40",
                            "<strong>50 / 50</strong>",
                            "40 / 60",
                            "30 / 70",
                            "20 / 80",
                            "10 / 90",
                            "0 / 100<p p style='font-size: small; position: relative; left: 50%; transform: translateX(-50%); width: auto; display: inline-block;'><strong>"+occupation_y+"</strong> <span style='font-size: large'>"+symbols[y]+"</span></p>" // <p>("+verhouding[y]+")</p>
                        ];

                        return labels;
                    },
                    required: true,
                }
            ],
            button_label: experiment_strings.button_next,
            on_finish: function (data) {
                //data.stereotype = jsPsych.timelineVariable("stereotype", true);
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
            choices: [experiment_strings.button_next],
        },
        {
            type: jsPsychSurveyMultiChoice,
            questions: [
                {prompt: experiment_strings.question_age, options: options_age, required: true},
                {prompt: experiment_strings.question_region, options: options_region, required: true},
                {prompt: experiment_strings.question_gender, options: options_genre, required: true},
                {prompt: experiment_strings.question_education, options: options_education, required: true},
                {prompt: experiment_strings.question_language, options: options_language, required: true},
                //{prompt: 'Ben jij bekend met zogenaamde “inclusieve vormen” van zelfstandige naamworden in talen zoals het Duits (bv. Mitarbeiter*in), het Frans (bv. les employé·es), of het Spaans (bv. amigxs)?', options: options_YN, required: true},
                //{prompt: 'Hoe belangrijk vind je het om inclusief taalgebruik aan te moedigen?', options: options_langincl, required: true},
                //{prompt: 'Probeer jij jouw taalgebruik aan te passen om meer inclusief te zijn?', options: options_proprelang, required: true}
            ],
            button_label: experiment_strings.button_next,
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
    consent,
    instructions,
    procedure,
    debrief
]

jsPsych.run(timeline);