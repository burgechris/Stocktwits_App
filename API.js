const getTweetsURL = `https://api.stocktwits.com/api/2/streams/symbols.json?access_token=${process.env.TOKEN}&symbols=AAPL`;

export function getTweets(symbol) {
  return fetch(getTweetsURL, {
    method: 'POST',
    mode: 'cors',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      symbol: symbol
    })
  });
};