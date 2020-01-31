import "../scss/style.scss"


let input = document.querySelector("input"),
	form = document.querySelector("form"),
	clone = document.querySelector(".comment").cloneNode(true);

function makeDate() {
	let d = new Date()

	let monthes = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабяр'.split(',');
	let m = monthes[d.getMonth()]
	let str = `${d.getDate()} ${m} ${d.getFullYear()}`
	return str
}

function makeComent() {
	clone.querySelector(".name").textContent = "Voronov Roman"
	clone.querySelector(".date").textContent = makeDate()
	clone.querySelector(".text").textContent = input.value
	return clone
}

form.addEventListener("submit", (e)=>{
	e.preventDefault();
	let com = makeComent()
	document.querySelector(".list").appendChild(com)
})
