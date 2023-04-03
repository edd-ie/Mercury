const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sideBar = document.querySelector('aside');

menuBtn.addEventListener('click',()=>{
    sideBar.style.display = 'block';
})

closeBtn.addEventListener('click',()=>{
    sideBar.style.display = 'none';
})

// theme
const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme')
    
    themeBtn.querySelector('span:first-child').classList.toggle('active');
    themeBtn.querySelector('span:last-child').classList.toggle('active');
})









// import Chart from 'chart.js/auto';
// import { getRelativePosition } from 'chart.js/helpers';

// let chart = document.querySelector('#chart').getContext('2d');

// new Chart(chart,{
//     type: 'line',
//     data: {
//         label: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//         datasets: [
//             {
//                 label: 'BTC',
//                 data: [123,242,456,323,535,242],
//                 borderColor: 'red',
//                 borderWidth: 2
//             },
//             {
//                 label: 'ETH',
//                 data: [123,242,456,323,535,242],
//                 borderColor: 'blue',
//                 borderWidth: 2
//             },
//             {
//                 label: 'DGE',
//                 data: [123,242,456,323,535,242],
//                 borderColor: 'green',
//                 borderWidth: 2
//             }
//         ]
//     },
//     options: {
//         responsive: true
//     }
// })