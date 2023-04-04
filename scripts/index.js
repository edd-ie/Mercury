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



let card1 = document.querySelector('#cardName1') 
let card2 = document.querySelector('#cardName2') 
let card3 = document.querySelector('#cardName3') 

let cardVal1 = document.querySelector('#cardVal1').firstElementChild
let cardVal2 = document.querySelector('#cardVal2').firstElementChild 
let cardVal3 = document.querySelector('#cardVal3').firstElementChild 

let cardName1 = card1.lastElementChild
let cardName2 = card2.lastElementChild
let cardName3 = card3.lastElementChild

let cardPic1 = card1.firstElementChild
let cardPic2 = card2.firstElementChild
let cardPic3 = card3.firstElementChild



let apikey = '8Y3ZRNIZUKSYH7LW'
let apikey2 = '6MWEH0GBI07CMSYP'
let apikey3 = 'KRNHKX4XK0HPQ1NT.'

//=======> Crypto Url 
let value;
let currency;

function crpyto(coin, cash, card, name){

    fetch(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${coin}&to_currency=${cash}&apikey=8Y3ZRNIZUKSYH7LW`)
    .then(res => res.json())
    .then((data)=>{
        let amnt = data["Realtime Currency Exchange Rate"]
        let val = amnt["5. Exchange Rate"]
        
        if (card != undefined){
            card.textContent = `${cash} ${(parseInt(val))}`
            name.textContent = coin
        }
        
        return (parseInt(close)).toFixed(2)
    })
}

function forex(from, to, card, name){

    fetch(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${from}&to_symbol=${to}&outputsize=full&apikey=${apikey2}`)
    .then(res => res.json())
    .then((data)=>{
        let source = data['Time Series FX (Daily)']
        let key = Object.keys(source)[0];
        let close = source[key]["4. close"];
        let amnt = (parseInt(close)).toFixed(2)
        console.log(amnt);

        if (card != undefined){
            card.textContent = `${to} ${amnt}`
            name.textContent = from
        }
        
        return amnt
    })
}



function stocks(stock, card, name){

    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&outputsize=full&apikey=${apikey3}`)
    .then(res => res.json())
    .then((data)=>{
        let source = data['Time Series (5min)']
        let key = Object.keys(source)[0];
        let close = source[key]["4. close"];
        let amnt = (parseInt(close)).toFixed(2)
        console.log(amnt);

        if (card != undefined){
            card.textContent = `$ ${amnt}`
            name.textContent = stock
        }
        
        return amnt
    })
}


let visual = document.querySelector('#chart')
console.log('view',visual.textContent);


// ================== Tab select ===============================
let tab = document.querySelectorAll('Aside .sidebar')
console.log(tab)

for(let i = 0; i < tab.length; i++){
    let skip = tab.length;
    
    tab[i].addEventListener('mouseover', ()=>{
        let active = tab[i].firstElementChild
        active.setAttribute('class', 'active');
    })

    tab[i].addEventListener('mouseout', ()=>{
        let active = tab[i].firstElementChild
        active.removeAttribute('class', 'active');
    })

    tab[i].addEventListener('click', ()=>{
        let name = tab[i].firstElementChild.lastElementChild.textContent
        // ======CRYPTO========== //
        if(name == 'Crypto'){
            crpyto("BTC", "KES", cardVal1, cardName1)
            crpyto("eth", "KES", cardVal2, cardName2)
            crpyto("usdt", "KES", cardVal3, cardName3)
        }
        else if(name == 'Forex'){
            forex('USD', "KES", cardVal1, cardName1)
            forex('EUR', "KES", cardVal2, cardName2)
            forex('CAD', "KES", cardVal3, cardName3)
        }
        else if(name == 'Stocks'){
            stocks('TSLA', cardVal1, cardName1)
            stocks('MSFT', cardVal2, cardName2)
            stocks('GOOGL', cardVal3, cardName3)
        }
        else if(name == 'Commodites'){

        }
        else if(name == 'Indicators'){

        }
        else if(name == 'Analytics'){

        }

    })
}


// ============== TIME ==============//



		
function countdown (elem, open, close){
    // Set the opening and closing times
		let openingTime = [open, 0]; // 9:00am Eastern time
		let closingTime = [close, 0]; // 6:00pm

        if(elem == 'lse'){closingTime = [close, 30]}

		// Set the days of the week
		let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

		// Update the countdown clock every second

    setInterval(function() {
        // Get the current date and time
        let currentDate = new Date();
        let currentDayOfWeek = currentDate.getDay(); // 0 (Sunday) to 6 (Saturday)
        let currentHour = currentDate.getHours();
        let currentMinute = currentDate.getMinutes();
        let currentSecond = currentDate.getSeconds();
    
        // Calculate the time until the next opening and closing times
        let timeUntilOpening = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), openingTime[0], openingTime[1]) - currentDate;
        let timeUntilClosing = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), closingTime[0], closingTime[1]) - currentDate;
    
        // If it's already past closing time on Friday, set the next opening time to Monday at 9:00am
        if (currentDayOfWeek == 5 && currentHour >= closingTime[0]) {
            timeUntilOpening = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 3, openingTime[0], openingTime[1]) - currentDate;
        }
    
        // If the next opening time is in the past, set it to the next day
        if (timeUntilOpening < 0) {
            timeUntilOpening = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, openingTime[0], openingTime[1]) - currentDate;
        }
    
        // If the next closing time is in the past, set it to the next day
        if (timeUntilClosing < 0) {
            timeUntilClosing = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1, closingTime[0], closingTime[1]) - currentDate;
        }
    
        // Calculate the hours, minutes, and seconds until the next opening or closing time
        let timeUntil = (timeUntilOpening < timeUntilClosing) ? timeUntilOpening : timeUntilClosing;
        let hours = Math.floor(timeUntil / (1000 * 60 * 60));
        let minutes = Math.floor((timeUntil % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeUntil % (1000 * 60)) / 1000);
    
        // Display the countdown clock
        if (timeUntil < timeUntilClosing) {
            document.getElementById(elem).innerHTML = "Opens in " + hours + "h " + minutes + "m " + seconds + "s";
        } else {
            document.getElementById(elem).innerHTML = "Closes in " + hours + "h " + minutes + "m " + seconds + "s";
        }
    
        // If the countdown is finished, display a message and
        if (timeUntil < 0) {
            if (currentDayOfWeek == 5) {
                document.getElementById(elem).innerHTML = "Closed, opening on Monday at " + openingTime[0] + ":" + (openingTime[1] < 10 ? "0" + openingTime[1] : openingTime[1]);
            } else {
                document.getElementById(elem).innerHTML = "Closed, opening tomorrow at " + openingTime[0] + ":" + (openingTime[1] < 10 ? "0" + openingTime[1] : openingTime[1]);
            }
        }		
    }, 1000);
}

countdown('nyse', 16, 9)
countdown('hkse', 4, 9)
countdown('lse', 11, 19)
countdown('nse', 9, 15)

// Update the current time every second
var currentTime = setInterval(function() {
    // Get the current date and time
    var currentDate = new Date();
    var currentHour = currentDate.getHours();
    var currentMinute = currentDate.getMinutes();
    var currentSecond = currentDate.getSeconds();

    // Convert the hour to 12-hour format and determine AM or PM
    var meridiem = "AM";
    if (currentHour > 12) {
        currentHour -= 12;
        meridiem = "PM";
    }

    // Display the current time
    document.getElementById("current-time").innerHTML = currentHour + ":" + (currentMinute < 10 ? "0" + currentMinute : currentMinute) + ":" + (currentSecond < 10 ? "0" + currentSecond : currentSecond) + " " + meridiem;
}, 1000);



