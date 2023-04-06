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
        
        let previous = parseFloat(amnt["9. Ask Price"])
        let current = parseFloat(amnt["8. Bid Price"])
        let percent = (((current-previous)/previous)*100)
        console.log('Percent:',percent, Math.sign(percent))

        if (card != undefined){
            card.textContent = `${cash} ${(parseInt(val))}`
            name.textContent = coin


            if(coin == 'BTC'){
                let trackName = document.getElementById("p1-name")
                let trackPrev = document.getElementById("p1-prev")
                let trackVal = document.getElementById("p1-val")
    
                trackName.textContent = 'Bitcoin'
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }
            }
            if(coin == 'eth'){
                let trackName = document.getElementById("p2-name")
                let trackPrev = document.getElementById("p2-prev")
                let trackVal = document.getElementById("p2-val")
    
                trackName.textContent = 'Ethereum'
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }
            }
            if(coin == 'usdt'){
                let trackName = document.getElementById("p3-name")
                let trackPrev = document.getElementById("p3-prev")
                let trackVal = document.getElementById("p3-val")
    
                trackName.textContent = 'Tether'
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }
            }

        }
        
        return (parseFloat(current)).toFixed(2)
    })
}

function forex(from, to, card, name){

    fetch(`https://www.alphavantage.co/query?function=FX_DAILY&from_symbol=${from}&to_symbol=${to}&outputsize=full&apikey=${apikey2}`)
    .then(res => res.json())
    .then((data)=>{
        let source = data['Time Series FX (Daily)']
        let key = Object.keys(source)[0];
        let close = source[key]["4. close"];
        // console.log(close, source[Object.keys(source)[1]]["4. close"]);
        let amnt = (parseFloat(close)).toFixed(2)
        console.log(amnt);

        if (card != undefined){
            card.textContent = `${to} ${amnt}`
            name.textContent = from
        }
        
        let previous = parseFloat(source[Object.keys(source)[0]]["4. close"])
        let current = parseFloat(source[Object.keys(source)[1]]["4. close"])
        let percent = (((current-previous)/previous)*100)
        console.log('Percent:',percent, Math.sign(percent))

        if(from == 'USD'){
            let trackName = document.getElementById("p1-name")
            let trackPrev = document.getElementById("p1-prev")
            let trackVal = document.getElementById("p1-val")

            trackName.textContent = 'USD/KES'
            trackPrev.textContent = (previous).toFixed(2)
            if(Math.sign(percent) == -1){
                trackVal.textContent = `${percent}%`
                trackVal.style = 'color: red;'
            }
            if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                trackVal.textContent = `${percent}%`
                trackVal.style = 'color: green;'
            }
        }
        if(from == 'EUR'){
            let trackName = document.getElementById("p2-name")
            let trackPrev = document.getElementById("p2-prev")
            let trackVal = document.getElementById("p2-val")

            trackName.textContent = 'EUR/KES'
            trackPrev.textContent = (previous).toFixed(2)
            if(Math.sign(percent) == -1){
                trackVal.textContent = `${percent}%`
                trackVal.style = 'color: red;'
            }
            if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                trackVal.textContent = `${percent}%`
                trackVal.style = 'color: green;'
            }
        }
        if(from == 'CAD'){
            let trackName = document.getElementById("p3-name")
            let trackPrev = document.getElementById("p3-prev")
            let trackVal = document.getElementById("p3-val")

            trackName.textContent = 'CAD/KES'
            trackPrev.textContent = (previous).toFixed(2)
            if(Math.sign(percent) == -1){
                trackVal.textContent = `${percent}%`
                trackVal.style = 'color: red;'
            }
            if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                trackVal.textContent = `${percent}%`
                trackVal.style = 'color: green;'
            }
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
        let amnt = (parseFloat(close)).toFixed(2)
        console.log(amnt);

        let previous = parseFloat(source[Object.keys(source)[0]]["4. close"])
        let current = parseFloat(source[Object.keys(source)[1]]["4. close"])
        let percent = (((current-previous)/previous)*100)
        console.log('Percent:',percent, Math.sign(percent))

        if (card != undefined){
            card.textContent = `$ ${amnt}`

            if(stock == 'TSLA'){
                name.textContent = 'Tesla'

                let trackName = document.getElementById("p1-name")
                let trackPrev = document.getElementById("p1-prev")
                let trackVal = document.getElementById("p1-val")

                trackName.textContent = 'TSLA'
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }

            }
            else if(stock == 'MSFT'){
                name.textContent = 'Microsoft'

                let trackName = document.getElementById("p2-name")
                let trackPrev = document.getElementById("p2-prev")
                let trackVal = document.getElementById("p2-val")

                trackName.textContent = stock
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }

            }
            else if(stock == 'GOOGL'){
                name.textContent = 'Google'
                
                let trackName = document.getElementById("p3-name")
                let trackPrev = document.getElementById("p3-prev")
                let trackVal = document.getElementById("p3-val")

                trackName.textContent = stock
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }

            }
            else{name.textContent = stock}
        }
        
        return amnt
    })
}



function commodites(goods, card, name){

    fetch(`https://www.alphavantage.co/query?function=${goods}&interval=monthly&apikey=${apikey3}`)
    .then(res => res.json())
    .then((list)=>{
        let source = list.data;
        let key = source[0];
        console.log(key);
        let close = key["value"];
        let amnt = (parseFloat(close))
        console.log(amnt);

        let previous = parseFloat(source[1]["value"])
        let current = parseFloat(source[0]["value"])
        let percent = (((current-previous)/previous)*100)
        console.log('Percent:',percent, Math.sign(percent))

        if (card != undefined){
            card.textContent = `$ ${amnt}`
            if(goods == 'WTI'){
                name.textContent = 'Crude Oil / barrel'

                let trackName = document.getElementById("p1-name")
                let trackPrev = document.getElementById("p1-prev")
                let trackVal = document.getElementById("p1-val")

                trackName.textContent = 'Crude Oil'
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }
            }
            else if(goods == 'COPPER'){
                name.textContent = 'Copper / tonne'

                let trackName = document.getElementById("p2-name")
                let trackPrev = document.getElementById("p2-prev")
                let trackVal = document.getElementById("p2-val")

                trackName.textContent = goods
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }
            }
            else if(goods == 'NATURAL_GAS'){
                name.textContent = 'Nat GAS / 1m B.T.U'

                let trackName = document.getElementById("p3-name")
                let trackPrev = document.getElementById("p3-prev")
                let trackVal = document.getElementById("p3-val")

                trackName.textContent = 'Natural gas'
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }
            }
            else{name.textContent = goods}
        }
        
        return amnt
    })
}




function indicators(indicator, card, name){

    fetch(`https://www.alphavantage.co/query?function=${indicator}&apikey=${apikey2}`)
    .then(res => res.json())
    .then((data)=>{
        if(indicator == 'KEN'){
            card.textContent = `$ 1,811`
            name.textContent = 'GDP/Capita'

            
            let previous = 2082
            let current = 1811
            let percent = (((current-previous)/previous)*100)
            console.log('Percent:',percent, Math.sign(percent))
           
                let trackName = document.getElementById("p3-name")
                let trackPrev = document.getElementById("p3-prev")
                let trackVal = document.getElementById("p3-val")
    
                trackName.textContent = "Kenya's GDP"
                trackPrev.textContent = (previous).toFixed(2)
                if(Math.sign(percent) == -1){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: red;'
                }
                if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                    trackVal.textContent = `${percent}%`
                    trackVal.style = 'color: green;'
                }
        }
        else{
            let amnt = data["data"]
            let val = amnt[0]["value"]
            
            let previous = parseFloat(amnt[1]["value"])
            let current = parseFloat(amnt[0]["value"])
            let percent = (((current-previous)/previous)*100)
            console.log('Percent:',percent, Math.sign(percent))

            if (card != undefined){
                card.textContent = `${(parseFloat(val).toFixed(2))}%`
                name.textContent = indicator
    
    
                if(indicator == 'INFLATION'){
                    let trackName = document.getElementById("p1-name")
                    let trackPrev = document.getElementById("p1-prev")
                    let trackVal = document.getElementById("p1-val")
        
                    trackName.textContent = 'Consumer Prices'
                    trackPrev.textContent = (previous).toFixed(2)
                    if(Math.sign(percent) == -1){
                        trackVal.textContent = `${percent}%`
                        trackVal.style = 'color: red;'
                    }
                    if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                        trackVal.textContent = `${percent}%`
                        trackVal.style = 'color: green;'
                    }
                }
                if(indicator == 'UNEMPLOYMENT'){
                    let trackName = document.getElementById("p2-name")
                    let trackPrev = document.getElementById("p2-prev")
                    let trackVal = document.getElementById("p2-val")
        
                    trackName.textContent = 'Unemployment Rates'
                    trackPrev.textContent = (previous).toFixed(2)
                    if(Math.sign(percent) == -1){
                        trackVal.textContent = `${percent}%`
                        trackVal.style = 'color: red;'
                    }
                    if(Math.sign(percent) == 1 || Math.sign(percent) == 0){
                        trackVal.textContent = `${percent}%`
                        trackVal.style = 'color: green;'
                    }
                }
    
            }
        }
        

        
        
        return (parseFloat(val)).toFixed(2)
    })
}





let visual = document.querySelector('#chart')


document.addEventListener('DOMContentLoaded', ()=>{
    
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
            // ======CRYPTO loading========= //
            if(name == 'Crypto'){
                crpyto("BTC", "KES", cardVal1, cardName1)
                crpyto("eth", "KES", cardVal2, cardName2)
                crpyto("usdt", "KES", cardVal3, cardName3)
            }
            // ======Forex loading========= //
            else if(name == 'Forex'){
                forex('USD', "KES", cardVal1, cardName1)
                forex('EUR', "KES", cardVal2, cardName2)
                forex('CAD', "KES", cardVal3, cardName3)
            }
            // ======Stocks loading========= //
            else if(name == 'Stocks'){
                stocks('TSLA', cardVal1, cardName1)
                stocks('MSFT', cardVal2, cardName2)
                stocks('GOOGL', cardVal3, cardName3)
            }
            // ======Commodities loading========= //
            else if(name == 'Commodites'){
                commodites('WTI', cardVal1, cardName1)
                commodites('COPPER', cardVal2, cardName2)
                commodites('NATURAL_GAS', cardVal3, cardName3)
            }
            // ======Indicators loading========= //
            else if(name == 'Indicators'){
                indicators('INFLATION', cardVal1, cardName1)
                indicators('UNEMPLOYMENT', cardVal2, cardName2)
                indicators('KEN', cardVal3, cardName3)
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
})



