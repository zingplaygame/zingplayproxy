// Block Revoke-Ota No PPQ
// *=======================*
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
function FindProxyForURL(url, host) {
if (anti[host]) 
{return "PROXY Tim Cook";} 
return "DIRECT";}




















