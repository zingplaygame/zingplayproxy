// Block Ota Update
// *=======================*
function FindProxyForURL(url, host) {
var anti = {
"crl.apple.com":1,
"mesu.apple.com":1,
"gdmf.apple.com":1,
"www.gdmf.apple.com":1,
"iadc.qwape.com":1,
"updates-http.cdn-apple.com":1,
"iadsk.apple.com":1,
"swscan.apple.com":1,
"world-gen.g.aaplimg.com":1,
"appldnld.apple.com":1,
"appldnld.apple.com.akadns.net":1,
"gdmf.apple.com.akadns.net":1,
"mesu-cdn.apple.com.akadns.net":1,
"mesu-cdn.origin-apple.com.akadns.net":1,
"mesu.g.aaplimg.com":1,
"gdmf.apple.com.akadns.net":1,
"ocsp.int-x3.letsencrypt.org":1,
"ppq.apple.com":1}; 

var ads = {
"ocsp.apple.com":1,
"googleads.g.doubleclick.net":1,
"adservice.google.com":1,
"www.google-analytics.com":1,
"launches.appsflyer.com":1} 

var lastPos; do {
if (anti.hasOwnProperty(host)) 
{return "PROXY 0.0.0.0:0; SOCKS5 0.0.0.0:0; SOCKS 0.0.0.0:0; SOCKS4 0.0.0.0:0";} 
if (ads.hasOwnProperty(host)) 
{return "PROXY Timcook; SOCKS5 Timcook; SOCKS Timcook; SOCKS4 Timcook";} 
lastPos = host.indexOf('.') + 1; 
host = host.slice(lastPos);} 
while (lastPos >= 1);

return "DIRECT";}















