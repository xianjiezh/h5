export function getUserAnswer(obj){
	const questionAndAnsweList = Object.keys(obj);
	const resultArray = [];
	questionAndAnsweList.forEach((item)=>{
		const answer = item.split('-')[1];
		resultArray.push(answer)
	});
	return resultArray
}
