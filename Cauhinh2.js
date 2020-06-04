// Block Revoke-Ota PPQ
// *=======================*
function FindProxyForURL(url, host) {
var anti = {
"mesu.apple.com":1,
"updates-http.cdn-apple.com":1,
"gdmf.apple.com":1}; 
if (anti[host]) 
{return "PROXY Timcook; SOCKS5 Timcook; SOCKS Timcook;";} 

var ads = {
"googleads.g.doubleclick.net":1,
"adservice.google.com":1,
"www.google-analytics.com":1,
"launches.appsflyer.com":1,
"baomoi.com":1,
"m.baomoi.com":1} 
if (ads[host]) 
{return "PROXY Tim Cook";} 

return "DIRECT";}



















