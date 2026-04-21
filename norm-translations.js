var experiment_strings = all_translations[language];

var options_age = [
    '18–24',
    '25–34',
    '35–44',
    '45–64',
    '65+',
    experiment_strings.option_pnts
];

var options_genre = [
    experiment_strings.option_gender_male,
    experiment_strings.option_gender_female,
    experiment_strings.option_gender_nb,
    experiment_strings.option_gender_other,
    experiment_strings.option_pnts
];

var options_education_all = [
    experiment_strings.option_education_1,
    experiment_strings.option_education_2,
    experiment_strings.option_education_3,
    experiment_strings.option_education_4,
    experiment_strings.option_education_5,
    experiment_strings.option_education_6,
    experiment_strings.option_education_7,
    experiment_strings.option_education_8
];

var options_education = [];

for (var i = options_education_all.length -1 ; i >=0 ; i--) {
    if (options_education_all[i]!=""){
        options_education[i] = options_education_all[i];
    }
}

options_education[options_education.length] = experiment_strings.option_pnts;


var consigne_debrief = '<p>'+ experiment_strings.message_transition +'</p>';


// Do we really need those? 
var options_language_all = [
    experiment_strings.option_language_1,
    experiment_strings.option_language_2,
    experiment_strings.option_language_3,
    experiment_strings.option_language_4,
    experiment_strings.option_language_5
];

var options_language = [];

for (var i = options_language_all.length -1 ; i >=0 ; i--) {
    if (options_language_all[i]!=""){
        options_language[i] = options_language_all[i];
    }
}

options_language[options_language.length] = experiment_strings.option_pnts;


var options_region_all = [
    experiment_strings.option_region_1,
    experiment_strings.option_region_2,
    experiment_strings.option_region_3,
    experiment_strings.option_region_4,
    experiment_strings.option_region_5,
    experiment_strings.option_region_6,
    experiment_strings.option_region_7,
    experiment_strings.option_region_8,
    experiment_strings.option_region_9,
    experiment_strings.option_region_10,
    experiment_strings.option_region_11,
    experiment_strings.option_region_12,
    experiment_strings.option_region_13
];

var options_region = [];

for (var i = options_region_all.length -1 ; i >=0 ; i--) {
    if (options_region_all[i]!=""){
        options_region[i] = options_region_all[i];
    }
}

options_region[options_region.length] = experiment_strings.option_pnts;

var consent_page = all_htmls["consent_"+language+".html"];

var instructions_page = all_htmls["instructions_"+language+".html"];