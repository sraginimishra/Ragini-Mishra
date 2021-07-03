
const search = document.querySelector(".search-input");
const InputBox = search.querySelector("input");
const suggBox = search.querySelector(".autocom-box");

//if user press any key and release
InputBox.onkeyup = (e)=>{
	//console.log(e.target.value);}
	let userData = e.target.value;
	let array = [];
	if(userData){
		array = suggestions.filter((data)=>{
		return data.toLocaleLowerCase();

		});
		//console.log(array);
		array = array.map((data)=>{
		return data = '<li>' + data + '</li>';
		});
	console.log(array);
	search.classList.add('active');
	//showList(array);
	let allList = suggBox.querySelectorAll("li");
	for (var i = 0; i<allList.length; i++) {
		allList[i].setAttribute("onclick", "select(this)");
	}
}
else{
		search.classList.remove('active');

}

}

function showList(list){
	let listData;
	if(!list.length){
		userValue = InputBox.value;
		listData = '<li>' + userValue + '</li>';
	}
	else{
		listData = list.join('');
	}
		suggBox.innerHTML = listData;
}