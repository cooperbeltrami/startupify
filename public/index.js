document.getElementsByClassName('btn')[0].addEventListener('click', () => {
	generateStartupName();
});

document.getElementsByClassName('form-control')[0].addEventListener('keyup', event => {
	if (event.key === 'Enter') return generateStartupName();
});

function generateStartupName() {
	let input = document.getElementsByClassName('form-control')[0];
	const error = document.getElementsByClassName('error')[0];

	error.innerText = '';

	if (!input.value) return error.innerText = 'Please enter something.';
	if (input.value.length < 5) return error.innerText = 'Enter something longer than 5 characters.';

	input = input.value.replace(/[aeiou]/gi, '');

	document.getElementsByTagName('BODY')[0].innerHTML = `
		<!-- CENTER CONTAINER -->
		<div class="middle-container">

			<!-- HEADERS -->
			<div class="header">Congratulations!</div>
			<div class="subheading">Here is your new startup name!</div>

			<!-- STARTUP NAME -->
			<p class="header startupname">${input}</p>
		</div>
	`;
}