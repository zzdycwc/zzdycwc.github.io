let myImage = document.querySelector('img');
myImage.onclick = function(){
	let mySrc = myImage.getAttribute('src');
	if (mySrc === 'images/火狐01.png') {
		myImage.setAttribute('src','images/js001.png');
	} else{
		myImage.setAttribute('src','images/火狐01.png');
	}
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla 酷毙了，' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function() {
   setUserName();
}






/*关键词src拼写粗心，错误的写为scr,导致重复测试不通过，已更正*/
//let myImage = document.querySelector('img');
//myImage.onclick = function() {
//  let mySrc = myImage.getAttribute('src');
//  if(mySrc === 'images/火狐01.png') {
//    myImage.setAttribute('src', 'images/js001.png');
//  } else {
//    myImage.setAttribute('src', 'images/火狐01.png');
//  }
//}
