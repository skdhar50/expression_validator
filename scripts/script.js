let menu = document.getElementById("drop_down");
let check_btn = document.querySelector(".check_btn");
let valid = document.querySelector(".valid");
let invalid = document.querySelector(".invalid");

// hide any section
function hide_section(element) {
	element.classList.add("hidden");
}

// show any section
function show_section(element) {
	element.classList.remove("hidden");
}

// Checking
function check_validity(value) {
	if (value) {
		show_section(valid);
		setTimeout(function () {
			hide_section(valid);
		}, 3000);
	} else {
		show_section(invalid);
		setTimeout(function () {
			hide_section(invalid);
		}, 3000);
	}
}

check_btn.addEventListener("click", function (e) {
	let value = e.target.parentElement.querySelector("input").value;
	let selected = menu.value;

	// only works if there is a value
	if (value !== "") {
		switch (selected) {
			case "email":
				let email_re =
					/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
				check_validity(email_re.test(value));
				break;
			case "name":
				let name_re = /^[a-zA-Z ]+$/;
				check_validity(name_re.test(value));
				break;
			case "phone":
				let phone_re = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;
				check_validity(phone_re.test(value));
				break;
			case "post_code":
				let post_code_re = /^\d{4}$/;
				check_validity(post_code_re.test(value));
				break;
		}
	}
});
