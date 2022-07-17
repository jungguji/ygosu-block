let starbbs = document.querySelectorAll("a[href='/community/?bid=starbbs'")

starbbs.forEach((a, i)=> {
	a.parentElement.parentElement.style.display = 'none';
});