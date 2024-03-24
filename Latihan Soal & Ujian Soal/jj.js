const questions = [
	{
		question: "Apa simbol kimia untuk air?",
		answers: {
			a: "H2O",
			b: "CO2",
			c: "O2",
			d: "H2O2",
		},
		correctAnswer: "a",
	},
	{
		question: "Berapa jumlah proton dalam inti atom hidrogen?",
		answers: {
			a: "1",
			b: "2",
			c: "0",
			d: "3",
		},
		correctAnswer: "a",
	},
	{
		question: "Apa rumus kimia untuk garam meja (natrium klorida)?",
		answers: {
			a: "NaCl",
			b: "HCl",
			c: "NaOH",
			d: "H2SO4",
		},
		correctAnswer: "a",
	},
	{
		question:
			"Jika sebuah atom kehilangan elektron, ion yang dihasilkan disebut sebagai?",
		answers: {
			a: "Anion",
			b: "Kation",
			c: "Neutron",
			d: "Isotop",
		},
		correctAnswer: "b",
	},
	{
		question:
			"Berapa jumlah unsur kimia yang ditemukan dalam tabel periodik modern?",
		answers: {
			a: "92",
			b: "118",
			c: "100",
			d: "50",
		},
		correctAnswer: "b",
	},
	{
		question: "Apa simbol kimia untuk besi?",
		answers: {
			a: "Fe",
			b: "Au",
			c: "Ag",
			d: "Pb",
		},
		correctAnswer: "a",
	},
	{
		question: "Berapa jumlah unsur kimia dalam molekul air (H2O)?",
		answers: {
			a: "1",
			b: "2",
			c: "3",
			d: "0",
		},
		correctAnswer: "c",
	},
	{
		question: "Apa rumus kimia untuk asam sulfat?",
		answers: {
			a: "H2SO4",
			b: "HCl",
			c: "NaOH",
			d: "NH3",
		},
		correctAnswer: "a",
	},
	{
		question:
			"Jika sebuah atom mendapatkan elektron, ion yang dihasilkan disebut sebagai?",
		answers: {
			a: "Anion",
			b: "Kation",
			c: "Neutron",
			d: "Isotop",
		},
		correctAnswer: "a",
	},
	{
		question: "Berapa jumlah neutron dalam inti atom karbon-12?",
		answers: {
			a: "6",
			b: "12",
			c: "8",
			d: "4",
		},
		correctAnswer: "a",
	},
	{
		question: "Apa simbol kimia untuk klorin?",
		answers: {
			a: "Cl",
			b: "C",
			c: "Co",
			d: "Cr",
		},
		correctAnswer: "a",
	},
	{
		question:
			"Berapa jumlah unsur kimia yang terdapat dalam molekul oksigen (O2)?",
		answers: {
			a: "1",
			b: "2",
			c: "3",
			d: "0",
		},
		correctAnswer: "b",
	},
	{
		question: "Apa rumus kimia untuk asam nitrat?",
		answers: {
			a: "HNO3",
			b: "H2SO4",
			c: "HCl",
			d: "NaOH",
		},
		correctAnswer: "a",
	},
	{
		question: "Apa nama unsur kimia dengan simbol Pb?",
		answers: {
			a: "Platina",
			b: "Timah",
			c: "Perak",
			d: "Kalsium",
		},
		correctAnswer: "b",
	},
	{
		question: "Berapa jumlah proton dalam inti atom oksigen?",
		answers: {
			a: "6",
			b: "8",
			c: "4",
			d: "10",
		},
		correctAnswer: "b",
	},
];

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

buildQuiz();

submitButton.addEventListener("click", showResults);

function buildQuiz() {
	const output = [];

	questions.forEach((currentQuestion, questionNumber) => {
		const answers = [];

		for (letter in currentQuestion.answers) {
			answers.push(
				`<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                </label>`
			);
		}

		output.push(
			`<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>`
		);
	});

	quizContainer.innerHTML = output.join("");
}

function showResults() {
	const answerContainers = quizContainer.querySelectorAll(".answers");

	let numCorrect = 0;

	questions.forEach((currentQuestion, questionNumber) => {
		const answerContainer = answerContainers[questionNumber];
		const selector = `input[name=question${questionNumber}]:checked`;
		const userAnswer = (answerContainer.querySelector(selector) || {}).value;

		if (userAnswer === currentQuestion.correctAnswer) {
			numCorrect++;
			answerContainers[questionNumber].style.color = "lightgreen";
		} else {
			answerContainers[questionNumber].style.color = "red";
		}
	});

	resultsContainer.innerHTML = `${numCorrect} dari ${questions.length} soal benar`;
}
