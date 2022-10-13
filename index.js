let globalSubmitted = false ;

function validate(isSubmitted = false) {
	let firstName = document.getElementById('first-name').value;
	let lastName = document.getElementById('last-name').value;
	let email = document.getElementById('email').value;
	let city = document.getElementById('city').value;
	let state = document.getElementById('state').value;
	let zip = document.getElementById('zip').value;
	let TermsConditions = document.getElementById('t-and-c').checked;
	let error = false;

	if(isSubmitted) {
		`` 
		globalSubmitted = true;
	}

	if(globalSubmitted) {
		if(firstName.length >= 2) {
			document.getElementById('first-name-valid').style.display = 'block';
			document.getElementById('first-name-invalid').style.display = 'none';
		} else {
			document.getElementById('first-name-invalid').style.display = 'block';
			document.getElementById('first-name-valid').style.display = 'none';
			error = true;
		}

		if(lastName.length >= 2) {
			document.getElementById('last-name-valid').style.display = 'block';
			document.getElementById('last-name-invalid').style.display = 'none';
		} else {
			document.getElementById('last-name-invalid').style.display = 'block';
			document.getElementById('last-name-valid').style.display = 'none';
			error = true;
		}

		if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.lastIndexOf(".") >= 3
		) {
			document.getElementById("email-valid").style.display = "block";
			document.getElementById("email-invalid").style.display = "none";
		} else {
			document.getElementById("email-invalid").style.display = "block";
			document.getElementById("email-valid").style.display = "none";
			error = true;
		}

		if(city.length >= 3) {
			document.getElementById('city-valid').style.display = 'block';
			document.getElementById('city-invalid').style.display = 'none';
		} else {
			document.getElementById('city-invalid').style.display = 'block';
			document.getElementById('city-valid').style.display = 'none';
			error = true;
		}

		if(state != 'None') {
			document.getElementById('state-valid').style.display = 'block';
			document.getElementById('state-invalid').style.display = 'none';
		} else {
			document.getElementById('state-invalid').style.display = 'block';
			document.getElementById('state-valid').style.display = 'none';
			error = true;
		}

		let zipNumber = parseInt(zip)
		if(zip.length === 6 && !isNaN(zipNumber)) {
			document.getElementById('zip-valid').style.display = 'block';
			document.getElementById('zip-invalid').style.display = 'none';
		} else {
			document.getElementById('zip-invalid').style.display = 'block';
			document.getElementById('zip-valid').style.display = 'none';
			error = true;
		}

		if(TermsConditions) {
			document.getElementById('t-and-c-invalid').style.display = 'none';
		} else {
			document.getElementById('t-and-c-invalid').style.display = 'block';
			error = true;
		}

		if(!error && isSubmitted) {
			alert('Your Registration details saved successfully!');

			document.getElementById('registrationform').reset();

			let vFeed = document.getElementsByClassName('valid-feedback');
			for(let i = 0; i < vFeed.length; i++) {
				vFeed[i].style.display = 'none';
			}
			let invalidFeed = document.getElementsByClassName('invalid-feedback');
			for(let i = 0; i < invalidFeed.length; i++) {
				invalidFeed[i].style.display = 'none';
			}
		}
	}
}
