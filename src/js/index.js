import "../scss/style.scss"


let input = document.querySelector("input"),
	form = document.querySelector("form");

function makeDate() {
	let d = new Date()
	let monthes = 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабяр'.split(',');
	let m = monthes[d.getMonth()]
	let str = `${d.getDate()} ${m} ${d.getFullYear()}`
	return str
}

function makeComent() {
	let clone = document.querySelector(".comment").cloneNode(true);
	clone.querySelector(".name").textContent = "Voronov Roman"
	clone.querySelector(".date").textContent = makeDate()
	clone.querySelector(".text").textContent = input.value
	document.querySelector(".list").appendChild(clone)
}

function ctrlEnter(event, formElem){
	if((event.ctrlKey) && ((event.keyCode == 0xA)||(event.keyCode == 0xD))){
        formElem.submit.click();
    }
}

form.addEventListener(("submit" || ctrlEnter()), (e)=>{
	e.preventDefault();
	makeComent()
	input.value = ""
})