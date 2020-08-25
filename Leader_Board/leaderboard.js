const getLeaderBoard = window.localStorage.getItem('result');
const parseLeaderBoard = JSON.parse(getLeaderBoard);
console.log(parseLeaderBoard);

const getName = document.querySelectorAll('.image_name');
const getImage = document.querySelectorAll('img');


parseLeaderBoard.map((value, index) => {
    getImage[index].src = `../${value.img}`;
    getName[index].innerHTML = value.Contestant;

})

// document.getElementById("image_display").innerHTML = '<img src="' + result1[0].img + '">';
getLastLeaderBoard = parseLeaderBoard[parseLeaderBoard.length - 1];
console.log(getLastLeaderBoard);
document.querySelector('.error_message').innerHTML = `${getLastLeaderBoard.Contestant} was evicted`;