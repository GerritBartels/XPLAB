// In this file you can specify the trial data for your experiment

/*
const trial_info = {
    forced_choice: [
        {
            question: "What's on the bread?",
            picture: "images/question_mark_02.png",
            option1: 'jam',
            option2: 'ham',
            correct: 'jam'
        },
        {
            question: "What's the weather like?",
            picture: "images/weather.jpg",
            option1: "shiny",
            option2: "rainbow",
            correct: "shiny"
        }
    ]
};

*/

const images = shuffle(["1_50_different.jpg", "1_50_same.jpg", "1_150_different.jpg", "1_150_same.jpg", "2_50_different.jpg", "2_50_same.jpg", "2_150_different.jpg", "2_150_same.jpg",
"3_50_different.jpg", "3_50_same.jpg", "3_150_different.jpg", "3_150_same.jpg", "4_50_different.jpg", "4_50_same.jpg", "4_150_different.jpg", "4_150_same.jpg",
"5_50_different.jpg", "5_50_same.jpg", "5_150_different.jpg", "5_150_same.jpg", "6_50_different.jpg", "6_50_same.jpg", "6_150_different.jpg", "6_150_same.jpg",
"7_50_different.jpg", "7_50_same.jpg", "7_150_different.jpg", "7_150_same.jpg", "8_50_different.jpg", "8_50_same.jpg", "8_150_different.jpg", "8_150_same.jpg",
"9_50_different.jpg", "9_50_same.jpg", "9_150_different.jpg", "9_150_same.jpg", "10_50_different.jpg", "10_50_same.jpg", "10_150_different.jpg", "10_150_same.jpg",
"11_50_different.jpg", "11_50_same.jpg", "11_150_different.jpg", "11_150_same.jpg", "12_50_different.jpg", "12_50_same.jpg", "12_150_different.jpg", "12_150_same.jpg",
"13_50_different.jpg", "13_50_same.jpg", "13_150_different.jpg", "13_150_same.jpg", "14_50_different.jpg", "14_50_same.jpg", "14_150_different.jpg", "14_150_same.jpg",
"15_50_different.jpg", "15_50_same.jpg", "15_150_different.jpg", "15_150_same.jpg"]);


const create_trials = function(index_beginning, index_end) {
  const trials = [];
  for(i=index_beginning; i<index_end; i++) {
    var trial = {
      question: "Are these two figures the same except for their orientation?",
      picture: 'mental_rotation_images/' + images[i],
      key1: 'j',
      key2: 'f',
      j: 'same',
      f: 'different',
      expected: get_same_diff(images[i]),
      degree: get_degree(images[i]),
      number_of_image: get_img_num(images[i]),
    };
    trials.push(trial);
  }
  return trials;
};


const trial_info = {
  training: create_trials(0,12),
  main: create_trials(12, 60),
};


/*
const keypress_geoms = {
  key_press:[
    {
            question: "Are the two objects identical?",
            picture: "mental_rotation_images/10_150_same.jpg",
            key1: "f",
            key2: "j",
            f: "same",
            j: "different",
            expected:"same",
            degree: "150",
            picture_number:"10"
        },
    {
            question: "Are the two objects identical?",
            picture: "mental_rotation_images/4_50_different.jpg",
            key1: "f",
            key2: "j",
            f: "same",
            j: "different",
            expected:"different",
            degree: "50",
            picture_number:"4"
        },
    {
            question: "Are the two objects identical?",
            picture: "mental_rotation_images/2_150_different.jpg",
            key1: "s",
            key2: "k",
            s: "same",
            k: "different",
            expected:"different",
            degree: "150",
            picture_number:"2"
        },
    {
            question: "Are the two objects identical?",
            picture: "mental_rotation_images/9_150_same.jpg",
            key1: "s",
            key2: "k",
            s: "same",
            k: "different",
            expected:"same",
            degree: "150",
            picture_number:"9"
        },
    {
            question: "Are the two objects identical?",
            picture: "mental_rotation_images/8_50_same.jpg",
            key1: "s",
            key2: "k",
            s: "same",
            k: "different",
            expected:"same",
            degree: "50",
            picture_number:"8"
        },
    ]
};
*/
