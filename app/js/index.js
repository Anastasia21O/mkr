let play = document.querySelector('.virsta-play');
let play_parts = document.querySelectorAll('.virsta-play-part');

function start() {
    let random_number = randomUniqueNum(25, 25);
    let count = 0;

    play.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let div = document.createElement('div');
            div.className = 'virsta-play-part';
            div.innerHTML = `<strong><b>${random_number[count++]}</b></strong>`;
            play.append(div);
        }
    }

    play_parts = document.querySelectorAll('.virsta-play-part');

    for (let i = 0; i < play_parts.length; i++) {
        play_parts[i].addEventListener("click", function (e) {
            let a = play_parts[i].textContent;
            let b = parseInt(a) + 5;
            play_parts[i].innerHTML = `<strong><b>${b}</b></strong>`;
        });
    }
}

function randomUniqueNum(range, outputCount) {

    let arr = [];
    for (let i = 1; i <= range; i++) {
        arr.push(i)
    }

    let result = [];

    for (let i = 1; i <= outputCount; i++) {
        const random = Math.floor(Math.random() * (range - i));
        result.push(arr[random]);
        arr[random] = arr[range - i];
    }

    return result;
}

start();