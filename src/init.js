import './a';

function ThisIsMyFunchik(){
	if (!PRODUCTION){
		console.log(VERSION);
	}

	console.log('html5', HTML5_SUPPORT)

	$('body').html(VERSION);
}

ThisIsMyFunchik("ara brat");