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

options_education[options_education.length] = experiment_strings.option_pnts