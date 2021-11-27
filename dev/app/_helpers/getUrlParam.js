function get_url_param(href, key, def) {
  if (arguments.length == 2) def = null;
  var qs = href.substring(href.indexOf("?") + 1);
  var s = qs.split("&");
  for (var k in s) {
    var s2 = s[k].split("=");
    if (s2[0] == key) return decodeURIComponent(s2[1]);
  }
  return def;
}

export default get_url_param;
