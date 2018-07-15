"use strict";

function random() {
	//can access the arguments array via process.argv
	//input `npm start float 0 10`
	if (process.argv[2] == "float" && process.argv[3] == "0" && process.argv[4] == "10"){
		console.log(Math.random()* 10)
	// npm start int 0 10
	}else if (process.argv[2] == "int" && process.argv[3] == "0" && process.argv[4] == "10"){
		console.log(Math.floor(Math.random() * 10))
	// npm start float
	}else if (process.argv[2] == "float" ){
		console.log(Math.random())
	// npm start int
	}else if(process.argv[2] == "int"){
		console.log(parseInt((Math.random() * 100), 10))
	// npm start
	}else if(process.argv[2] == null){
		console.log(parseInt((Math.random())))
	}
}
random();
