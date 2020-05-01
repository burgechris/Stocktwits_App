# StockTwits

#### _Stock Tweets Application, 2020_

#### By _**Christopher Burge**_

This is a simple React application where you can search for and display tweets based on a stock's trading symbol.

### Prerequisites

_Latest version of node.js_
_Your favorite IDE_
_Your browser of choice_

### Installing

- Open Terminal
- Type: git clone https://github.com/burgechris/Stocktwits_App.git
- Run: npm install
- Run: npm start
- Open your browser and navigate to http://localhost:3000/

## Application Component Tree

<img src="src/assets/Application Component Chart.png"
     alt="Application Component Tree"
     style="float: center" 
     height= "400" /> 

## Application Layout

<img src="src/assets/Application Layout.png"
     alt="Application UI Diagram"
     style="float: center" 
     height= "400" />      

## Built With

* [Javascript](https://javascript.info/) - The primary language used
* [React-Native](https://reactjs.org/) - The JavaScript library used
* [Material UI](https://material-ui.com/) - React UI Components

## Assignment Requirements
* Allow the user to input a US stock symbol or several symbols (eg: AAPL, BABA, BAC, etc…)
* Pull tweets from StockTwits that mention this symbol (stock symbols usually have a $ before them, like: $AAPL, $BABA, etc…)
* Display the latest matching tweets. How you display them is up to you.
* When a new tweet comes in, it should automatically be added without having to refresh the page.
  - I did not get to this objective. I would have used the useInterval hook to automatically fetch new tweets every 10 seconds, based on the symbol search criteria.
* The user should be able to later add/remove symbols as well. If a user deletes a symbol, the matching tweets should also disappear.
  - I did not complete this objective. I was thinking I would display an icon for each symbol searched. If you searched a new symbol, it would add the icon to the top of the page. If you clicked the 'x' on the icon, it would disappear taking all the corresponding tweets with it using a filter method.
* The number of tweets for a given symbol needs to be represented.


## Authors

* [ChrisBurge](https://github.com/burgechris)

## License

*Open-source*

Copyright (c) 2019 **_Christopher Burge_**


