var exports = (module.exports = {
	removeAllTweetMinusLast: function(tweetAccount, home_timeline) {
		if (home_timeline.length > 1) {
			home_timeline.forEach((tweet, index) => {
				if (index !== 0) {
					tweetAccount.post('statuses/destroy/' + tweet['id_str'], function(err, data, response) {});
				}
			});
		}
	}
});
