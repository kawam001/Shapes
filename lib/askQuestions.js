const colorKeywords = require('./colorBank.js')

const askQuestions = [
    {
        name: 'shape',
        message: 'Shape of your logo:',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    {
        name: 'shapeColorChoice',
        message: 'Format for color of the shape: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Shape color keyword:",
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    {
        type: "input",
        name: "shapeColor",
        message: "Hexadecimal number (#CCCCCC) of color:",
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },

    {
        name: 'text',
        message: 'LOGO text - Maximum Three Characters:',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Character length exceeded - Please try again");
            }
            return true;
        }
    },

    {
        name: 'textColorChoice',
        message: 'Color format for text: ',
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },
    {
        type: "input",
        name: "textColor",
        message: "Text color keyword:",
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
            return console.log("\n Please enter a valid color keyword")
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "Hexadecimal number (#CCCCCC) for Text Color:",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if (!answer.match(hexRegEx)) {
                return console.log("\n Please enter a valid hexadecimal")
            }
            return true;
        }
    },
];

module.exports = askQuestions;