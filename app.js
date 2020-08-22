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

            console.log(item);
            item.nextElementSibling.innerText = parseInt(item.nextElementSibling.innerText) + 1;
            total.innerText = parseInt(total.innerText) - 1;


            if (parseInt(total.innerText) == 0) {


                const countries = document.querySelectorAll('.country');

                const result = [];



                for (const country of countries) {
                    let resEl = {};

                    [...country.querySelectorAll('span[class^="Contestant-"]')].forEach((span) => resEl[span.className.split('-')[1]] = Number(document.getElementById(span.id).innerHTML))
                    result.push(resEl);
                }

                let images = ["img1", "img2", "img3", "img4"]
                for (var i = 0; i <= images.length; i++) {

                }

                const obj = Object.assign({}, ...result);
                const sorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);
                const result1 = sorted.map(([Contestant, value], i) => ({ Contestant, value, id: i + 1, img: images[i] }));

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
        }
    };
});