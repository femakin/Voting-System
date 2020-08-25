var total = document.querySelector(".header_vote_number");
var minusBtn = document.querySelectorAll("#minus");
var plusBtn = document.querySelectorAll("#plus");
var GetTotal = document.getElementById('get_all');
var value1 = document.getElementById('Contestant_One');
var value2 = document.getElementById('Contestant_Two');
var value3 = document.getElementById('Contestant_Three');
var value4 = document.getElementById('Contestant_Four');
var value5 = document.getElementById('Contestant_Five');
var value6 = document.getElementById('Contestant_Six');


plusBtn.forEach(function(item) {
    item.onclick = function() {


        if (parseInt(total.innerText) > 0) {

            // console.log(item);
            item.nextElementSibling.innerText = parseInt(item.nextElementSibling.innerText) + 1;
            total.innerText = parseInt(total.innerText) - 1;


            if (parseInt(total.innerText) < 0) {
                return;
            }
            document.getElementById("bar").style.width = Math.round(10 * parseInt(total.innerText)) + "%";

            if (parseInt(total.innerText) == 0) {
                const ALL_INPUT_FIELD = document.querySelectorAll('Input_field');

                const result = [];



                for (const Input_field of ALL_INPUT_FIELD) {
                    let resEl = {};

                    [...Input_field.querySelectorAll('span[class^="Contestant-"]')].forEach((span) => resEl[span.className.split('-')[1]] = Number(document.getElementById(span.id).innerHTML))
                    result.push(resEl);
                }
                console.log(result)

                let images = ["/img/Erica.png", "/img/ozo.png", "/img/Kidd.png", "/img/Dorathy.png", "/img/Vee.png", "/img/Laycon.png"]

                const obj = Object.assign({}, ...result);

                const result1 = Object.entries(obj).map(([Contestant, value], i) => ({ Contestant, value, id: i + 1, img: images[i] }));
                const sorted = result1.sort((a, b) => {
                    if (a.value > b.value) return -1;
                    else if (a.value < b.value) return 1;
                    else return 0;
                })


                const stringifyObject = JSON.stringify(sorted);
                window.localStorage.setItem('result', stringifyObject);

                console.log(result1);


            }
        }
    };
});

minusBtn.forEach(function(item) {
    item.onclick = function() {
        if (parseInt(item.previousElementSibling.innerText) > 0) {
            item.previousElementSibling.innerText = parseInt(item.previousElementSibling.innerText) - 1;
            total.innerText = parseInt(total.innerText) + 1;
            document.getElementById("bar").style.width = Math.round(10 * parseInt(total.innerText)) + "%";
        }
    };
});