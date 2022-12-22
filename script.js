'use strict'
const btn = document.querySelector('button');
const span_arr = document.getElementById('block_arr');
const span_min = document.getElementById('block_min');
const span_max = document.getElementById('block_max');
const span_average = document.getElementById('block_average');
const span_sum = document.getElementById('block_sum');
const span_multi = document.getElementById('block_multi');
let arr = [];

btn.addEventListener('click', function() {
    arr = [];
    for (let i = 0; i < 10; i++){
        arr.push(Math.round(Math.random()*20)-10);
    }
    span_arr.innerHTML = arr;
    span_min.innerHTML = Math.min(...arr);
    span_max.innerHTML = Math.max(...arr);
    const sumNumbers = arr.reduce((a,b) => a + b);
    span_average.innerHTML = sumNumbers / 10;
    span_sum.innerHTML = sumNumbers;
    span_multi.innerHTML = arr.reduce((a,b) => a * b);
})