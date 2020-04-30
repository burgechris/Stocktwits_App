export function getTweets(symbol) {
  const token = process.env.REACT_APP_TOKEN;
  const url = `https://api.stocktwits.com/api/2/streams/symbols.json?access_token=${token}&symbols=${symbol}`;
  return fetch(url, {
    method: "POST",
    mode: "cors",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: JSON.stringify({
      symbol: symbol
    })
  });
}