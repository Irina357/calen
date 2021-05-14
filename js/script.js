//let numberOfFilms = +prompt('Hou match films', 'Hou match films');

let personalMovieDB = {
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	
	start: function start() {
	personalMovieDB.count = +prompt('Hou match films', 'Hou match films');	
	while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count) ){
		personalMovieDB.count = +prompt('Hou match films', 'Hou match films');
		}
		return personalMovieDB.count;
	/*personalMovieDB.count = +prompt('Hou match films', 'Hou match films');	
	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms) ){
		numberOfFilms = +prompt('Hou match films', 'Hou match films');
		}
		return numberOfFilms;*/	
	},
	
	rememberMyFilms: function rememberMyFilms() {
	let film;
	let filmappraisal;
	 	for (let i = 0; i < 2; i++) {
	film = prompt('Whot film?', '');
	filmappraisal = prompt('appraisal?', '');
	if ((film !== null && filmappraisal !== null && film.length < 5 && film != '' && filmappraisal != '')){
		personalMovieDB.movies[film] = filmappraisal;
	} else {
		i--;
		alert('error');
		}
		};
	},
	
    showMyDB: function showMyDB() {
	if (personalMovieDB.privat === false) {
		alert('False');
		} else {
			alert('True');
		}
	},
	
	writeYuorGeneres: function writeYuorGeneres() {
		let namber;
		for(let i = 1; i < 4; i++) {
			namber = prompt(`Love Ganr?`, '');
			if (namber !== null && namber !== ''){
				personalMovieDB.genres[i-1] = namber;
			} else {
		i--;
		alert('error');
		}
		}
		/*for (let key in personalMovieDB.genres)	{
		let x = +key + 1;
		console.log('Love Ganr');
		console.log(x);
		console.log(`name:${personalMovieDB.genres[key]}`);	
	}*/
		/*personalMovieDB.genres.forEach (function(item, i){
			console.log('Love: '+ (i + 1) + 'names: ' + item);
		});*/
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Love ${i +1} - name ${item}`);
		})
		
	},
	
	detectPersonalLevel: function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
	alert('1');
	} 
	else if (10 < personalMovieDB.count &&  personalMovieDB.count < 30) {
		alert('2');	
	}
	else if (personalMovieDB.count > 30) {
		alert('3')
	} 
	else (alert('Error'))
	},
	
	toggleVisimleMyDB: function() {
		if (personalMovieDB.privat === false) {
			personalMovieDB.privat = true
		} else if (personalMovieDB.privat === true) {
			personalMovieDB.privat = false
		}
	},
	
	count: 0
};
personalMovieDB.start();

personalMovieDB.rememberMyFilms();

personalMovieDB.showMyDB();

personalMovieDB.writeYuorGeneres();

personalMovieDB.detectPersonalLevel();

personalMovieDB.toggleVisimleMyDB();

console.log(personalMovieDB);












