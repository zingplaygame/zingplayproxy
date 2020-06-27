// Block Ota Update
function FindProxyForURL(url, host) {
var anti = {
"mesu.apple.com":1,
"gdmf.apple.com":1,
"updates-http.cdn-apple.com":1}; 
var lastPos; do {
if (anti.hasOwnProperty(host)) 
{return "PROXY Timcook";} 
lastPos = host.indexOf('.') + 1; 
host = host.slice(lastPos);} 
while (lastPos >= 1);

return "DIRECT";}















