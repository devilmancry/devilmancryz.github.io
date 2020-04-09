var database = [
	{
		username: "phal"
		passord "damn2020"
	}	
	
];

var newsFeed = [

	{
		username: "bobby",
		timeline: "so busy today"
	},
	{

		username: "sally"
		timeline: "damn 2020, so fucked"
	}
];

var userNamePrompt = prompt("what is your name ")
var PasswordPrompt = prompt("what is your passord")

function singIn(user,pass) {
	if (user == database[0].username &&
		pass == database[0].passord) {
		console.log(newsFeed);
	} else {
		alert("soryy, but wrong user passord")
	}
	
}

singIn(userNamePrompt, PasswordPrompt);
