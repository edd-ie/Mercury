# [MERCURY](https://edd-ie.github.io/Mercury)
The web app that displays the latest prices of various commodities. It uses the Alpha Vantage API to fetch data and display it on the page.

## Table of Contents
1. [Getting started](#Getting-started)
2. [Usage](#Usage)
3. [Code](#Code)
    - [Crypto currencies()](#crypto)
    - [Stocks()](#stocks)
    - [Commodities()](#commodities)
    - [Indictators()](#indictators)
4. [Sources](#Sources)


## <a id="Getting-started">Getting started</a> 
To access **Mercury** website, simply click this url:
[Mercury website](https://edd-ie.github.io/Mercury)

**Cloning** the project files to your local repository:
* HTTPS => ```https://github.com/edd-ie/Mercury.git```
* SSH => ```git@github.com:edd-ie/Mercury.git```
* Git CLI => ```gh repo clone edd-ie/Mercury```

Then, open the **index.html** file in your web browser to view the website.

## <a id="Usage">Usage</a>
The Mercury website displays the latest prices of various commodities, including crude oil, copper, and natural gas. The prices are updated on a monthly basis and are fetched from the Alpha Vantage API.

To view the current **crypto** prices, click on it's tab on from the left pannel on the site. It will source the data for prices for ```BTC, Ethereum & Tether``` and display it on the cards UI. 
Below the cards the site click on the details to views previous prices and percentage increase / decrease

To view the current **forex** prices, click on it's tab on from the left pannel on the site. It will source the data for prices for ```USD/KES, EUR/KES & CAD/KES``` and display it on the cards UI. 
Below the cards the site click on the details to views previous prices and percentage increase / decrease

To view the current **Stocks** prices, click on it's tab on from the left pannel on the site. It will source the data for prices for ```Tesla, Microsoft & Google``` and display it on the cards UI. 
Below the cards the site click on the details to views previous prices and percentage increase / decrease

To view the current **Commodities** prices, click on it's tab on from the left pannel on the site. It will source the data for prices for ```crude oil, Copper & Natural gas``` and display it on the cards UI. 
Below the cards the site click on the details to views previous prices and percentage increase / decrease

To view the financial **Indicator**, click on it's tab on from the left pannel on the site. It will source the data for prices for ```Inflation, Unemployment & GDP per Capita``` and display it on the cards UI. 
Below the cards the site click on the details to views previous prices and percentage increase / decrease

Below the left panel, user can view **Market closing/Openning** times for various markets: ```New york stock exchange, Nairobi stock exchange, Hong Kong stock exchange & london stock exchange```

## <a id="Code">Code</a>
The JavaScript code for the Mercury website is included in the index.js file. The file contains various functions: ```crypto()```, ```stocks()```, ```commodities()```, ```indictators()```.

### <a id="crypto">crypto()</a>
The ```crypto()``` function is responsible for crypto currencies fetching data from the Alpha Vantage API and displaying it on the page. It takes four arguments: ```coin, cash, card, name```.

    Coin - identifies the specific crypto currency to be compared
    Cash - identifies the specific currcurrencyent to be compared 
    Card - specifies which card the details will be posted
    Name - specifies which name is to be displayed on the cards
### <a id="forex">forex()</a>
The ```forex()``` function is responsible for fetching currency data from the Alpha Vantage API and displaying it on the page. It takes four arguments: ```from, to, card, name```.

    from - identifies the specific buy currency to be compared
    to - identifies the specific sell currency to be compared 
    Card - specifies which card the details will be posted
    Name - specifies which name is to be displayed on the cards
### <a id="stocks">stocks()</a>
The ```stocks()``` function is responsible for fetching currency data from the Alpha Vantage API and displaying it on the page. It takes three arguments: ```stock, card, namee```.

    stock - identifies the specific stock to be displayed on the cards
    Card - specifies which card the details will be posted
    Name - specifies which name is to be displayed on the cards
### <a id="commodities">commodities()</a>
The ```commodities()``` function is responsible for fetching commodites data from the Alpha Vantage API and displaying it on the page. It takes three arguments: ```goods, card, name```.

    good - identifies the specific goods to be displayed on the cards
    Card - specifies which card the details will be posted
    Name - specifies which name is to be displayed on the cards
### <a id="indictators">indictators()</a>
The ```indictators()``` function is responsible for fetching data from the Alpha Vantage API and displaying it on the page. It takes foue arguments: ```indicator, card, name```.

    indicator - identifies the specific indicator to be displayed on the cards
    Card - specifies which card the details will be posted
    Name - specifies which name is to be displayed on the cards
    

## <a id="Sources">Sources()</a>
The project fetches data from outside sources using **APIs** and widgets
* Data source - [Alpha Vantage api](https://www.alphavantage.co/documentation/)
* Widget source - [Trading view](http://tradingview.com/)
* Fonts source - [Google Fonts](https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap)
* Icons source - [Google Icons](https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,1,0)
