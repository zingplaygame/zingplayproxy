// Block Ota Update
function FindProxyForURL(url, host) {
var anti = {
"mesu.apple.com":1,
"gdmf.apple.com":1,
"updates-http.cdn-apple.com":1}; 
var lastPos; do {
if (anti.hasOwnProperty(host)) 
{return "PROXY 0.0.0.0:0; SOCKS5 0.0.0.0:0; SOCKS 0.0.0.0:0; SOCKS4 0.0.0.0:0";} 
lastPos = host.indexOf('.') + 1; 
host = host.slice(lastPos);} 
while (lastPos >= 1);

return "DIRECT";}















