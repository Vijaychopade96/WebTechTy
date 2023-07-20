
let chessContainer = document.getElementById('chessContainer')

for(i=1;i<9;i++)
{
	let box1 = document.createElement('div')
	if(i % 2 == 0){
		box1.style.backgroundColor = 'black'
	}
	else{
		box1.style.backgroundColor = 'white'
	}
}

for(i = 1 ;i < 9 ;i++){
	let box2 = document.createElement('div')
	if(i % 2 == 0){
		box2.style.backgroundColor= 'white'
	}
	else{
		box2.style.backgroundColor = 'black'
	}
}

