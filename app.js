var btn = document.querySelector('.search_btn');
var box = document.querySelector('.search_box')
btn.addEventListener('click',function(){
    this.parentElement.classList.toggle('open')
	this.previousElementSibling.focus()
})