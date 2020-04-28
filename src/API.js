

export function getTweets(symbol) {
  const token = process.env.REACT_APP_TOKEN;
  const url = `https://api.stocktwits.com/api/2/streams/symbols.json?access_token=${token}&symbols=${symbol}`;
	const output = fetch(url)
		.then((res) => res.body)
		.then((body) => {
			const reader = body.getReader();
			return new ReadableStream({
				start(controller) {
					return pump();
					function pump() {
						return reader.read().then(({ done, value }) => {
							// When no more data needs to be consumed, close the stream
							if (done) {
								controller.close();
								return;
							}
							// Enqueue the next data chunk into our target stream
							controller.enqueue(value);
							return pump();
						});
					}
				},
			});
		})
		.then((stream) => new Response(stream))
		.then((response) => response.json())
		.catch((err) => console.error(err));
	return output;
}

// {
//   method: "POST",
//   mode: "cors",
//   headers: new Headers({
//     "content-type": "application/json",
//   }),
//   body: JSON.stringify({
//     symbol: symbol,
//   }
//});
