//javascript, jQuery
console.log("hello world!")
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=JB57LXX6RTn0Td7BIpM5YCGLbYf7Z0Ls&limit=5");
xhr.done(function(data) { console.log("success got data", data); });