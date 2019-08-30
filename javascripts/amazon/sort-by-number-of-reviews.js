function () {
  var url = new URL(location.href);
  var search_params = new URLSearchParams(url.search);
  search_params.set('s', 'review-count-rank');
  url.search = search_params.toString();
  location.href = url.toString();
}
