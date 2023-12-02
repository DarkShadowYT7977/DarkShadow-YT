const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

function startDownload() {
    // Set the delay in milliseconds (25 seconds in this case)
    var delayInMilliseconds = 25000;
    var countdownElement = document.getElementById('countdown');

    // Display initial countdown text
    countdownElement.textContent = 'Starting download in 25 seconds...';

    // Use setInterval to update the countdown text every second
    var countdownInterval = setInterval(function () {
        delayInMilliseconds -= 1000;

        // Update the countdown text
        countdownElement.textContent = 'Starting download in ' + (delayInMilliseconds / 1000) + ' seconds...';

        // Check if the delay is over
        if (delayInMilliseconds <= 0) {
            clearInterval(countdownInterval);
            downloadNow("https://www.mediafire.com/file/p4ap3mcvl56or5j/BlueMoon_%255B3.8%255D-Bata.lua/file");
        }
    }, 1000);
}

function downloadNow(link) {
    // Open the download link
    window.location.href = link;
}