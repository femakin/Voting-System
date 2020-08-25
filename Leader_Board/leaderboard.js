const getLeaderBoard = window.localStorage.getItem('result');
const parseLeaderBoard = JSON.parse(getLeaderBoard);
console.log(parseLeaderBoard);

const getName = document.querySelectorAll('.image_name');
const getImage = document.querySelectorAll('img');


parseLeaderBoard.map((value, index) => {
    getImage[index].src = `../${value.img}`;
    getName[index].innerHTML = value.Contestant;

})