// Block Revoke-Ota PPQ
// *=======================*
function FindProxyForURL(url, host) {
var anti = {
"ocsp.apple.com":1,
"crl.apple.com":1,
"mesu.apple.com":1,
"gdmf.apple.com":1,
"www.gdmf.apple.com":1,
"iadc.qwape.com":1,
"iadsk.apple.com":1,
"swscan.apple.com":1,
"world-gen.g.aaplimg.com":1,
"appldnld.apple.com":1}; 
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


















