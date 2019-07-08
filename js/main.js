document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
});
   

let o = document.querySelector('.odometer');

const nVVV = () => {
	let oPos = document.querySelector(".odometer").offsetTop;
    if ((window.scrollY + window.outerHeight - 90) >= oPos ) {
		return true
    }
	return false

}

document.addEventListener("scroll" , () => { document.querySelector(".odometer").innerHTML = nVVV() ? 500 : 100; });