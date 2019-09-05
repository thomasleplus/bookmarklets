function () {
  var url = new URL(location.href);
  var search_params = new URLSearchParams(url.search);
  if (!search_params.get('rh')) {
    window.alert('Please narrow down your search to a specific department for the sort to take effect.');
  }
  search_params.set('s', 'review-count-rank');
  url.search = search_params.toString();
  location.href = url.toString();
}
