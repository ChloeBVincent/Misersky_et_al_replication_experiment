function saveData(name, data){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'record_result.php'); //
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({filename: name, filedata: data}));
}

const jsPsych = initJsPsych({
    experiment_width: 750,
    on_finish: function () {
        saveData(fileName, jsPsych.data.get().csv());
        document.body.innerHTML = '<p style="text-align: center;">Jouw gegevens worden opgeslagen. Even geduld s.v.p.</p>';

        setTimeout(function () { location.href = redirect_url }, 1000);
        jsPsych.endExperiment();
    }
});

var participant_id = jsPsych.randomization.randomID(10);
var fileName = 'norm-consent-'+participant_id;
// Store ID
jsPsych.data.addProperties({
    participant: participant_id,
});
//var redirect_url = 'https://www.alexandermartin.nl/exp/mgen/norm/norm.html?dnid=' + participant_id;
var redirect_url = './norm.html?dnid=' + participant_id;

var consent_form = {
    type: jsPsychSurveyText,
    questions: [
        {prompt: consigne_consent}
    ],
    button_label: ['Ik ga akkoord']
}

var timeline = [
    consent_form
]

jsPsych.run(timeline);