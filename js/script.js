let $ = document

let keyCode = $.getElementById("keyCode")
let key = $.getElementById("key")
let location1 = $.getElementById("location1")
let which = $.getElementById("which")
let code = $.getElementById("code")


document.body.addEventListener('keydown', function (event) {
	
	starter.style.display = 'none'
	heading.style.display = 'flex'
	ascii.style.display = 'flex'
	infos.style.display = 'flex'

	event.preventDefault()

	keyCode.innerHTML = event.keyCode
	key.innerHTML = event.key
	location1.innerHTML = event.location
	which.innerHTML = event.which
	code.innerHTML = event.code
})