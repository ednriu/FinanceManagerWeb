//click on the radio which disables other options
function verify_new_pass(myInput) {
	if(myInput.text == null)
		{
		document.getElementById("newpass1").disabled = false;
		document.getElementById("newpass2").disabled = false;
		}
	else
		{
		document.getElementById("newpass1").disabled = true;
		document.getElementById("newpass2").disabled = true;
		}
};






