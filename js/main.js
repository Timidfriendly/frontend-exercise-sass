/* form validation */
$.validator.setDefaults({
	submitHandler: function() { alert("submitted!"); }
});

$(function() {
	// validate signup form on keyup and submit
	$("#signup").validate({
		rules: {
			username: {
				required: true,
				minlength: 6
			},
			fullname: {
				required: true,
				minlength: 5
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
				minlength: 5
			},
			passwordconfirm: {
				required: true,
				minlength: 5,
				equalTo: "#password"
			},
		},
		messages: {
			username: {
				required: "Please enter your desired username",
			},
			fullname: {
				required: "Your full name is required",
				minlength: "Your username must consist of at least 4 characters"
			},
			email: {
				required: "Please enter a valid email address",
			},
			password: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long"
			},
			passwordconfirm: {
				required: "Please provide a password",
				minlength: "Your password must be at least 5 characters long",
				equalTo: "Please enter the same password as above"
			}
		}
	});
});

$(".datepicker").datepicker({
	format: 'mm-dd-yyyy'
});

/* UX enhancement  */


var $birthdate = $("#birthdate");
$("#birthdate").focus(function() {
	$birthdate.attr("placeholder","dd-mm-yyyy");
});

