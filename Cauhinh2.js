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
"ppq.apple.com":1,
"appldnld.apple.com":1}; 
if (anti[host]) 
{return "PROXY 0.0.0.0:0";} 

var ads = {
"ocsp.apple.com":1,
"googleads.g.doubleclick.net":1,
"adservice.google.com":1,
"www.google-analytics.com":1,
"launches.appsflyer.com":1} 
if (ads[host]) 
{return "PROXY Timcook; SOCKS5 Timcook; SOCKS Timcook;";} 
return "DIRECT";}



















