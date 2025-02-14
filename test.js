var myArray = [1,2,1,3,3,1,2,1,5,1];
let numCount = {}
for (let num of myArray){
	if(numCount[num]){
		numCount[num] += '*'
	} else {
		numCount[num] = '*'	
	}	
}

for(let num in numCount){
	console.log(`${num}, ${numCount}`)
}