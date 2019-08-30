# bookmarklets

If you don't know what bookmarklets are, I recommend this easy read: https://www.howtogeek.com/189358/beginner-geek-how-to-use-bookmarklets-on-any-device/

And if you are not sure how to install a bookmarklet, you can find detailed instructions here: https://mreidsma.github.io/bookmarklets/installing.html

## Amazon - Sort by number of reviews

The bookmarklet below changes the sort of your current Amazon.com search to order the results by descending number of user reviews. I find that using this sort in combination with the "Avg. Customer Review" filter greatly improves my searches.

> Note: for some reason this sort does not work until you limit your search to a "department" of the Amazon.com online store. 

```javascript
javascript:void((function(){ var url = new URL(location.href); var search_params = new URLSearchParams(url.search);  search_params.set('s', 'review-count-rank'); url.search = search_params.toString(); location.href = url.toString(); })());
```

Here is a link demonstrating the result for USB cables: https://www.amazon.com/s?k=usb+cable&i=electronics&s=review-count-rank
