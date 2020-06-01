// Antirevoke by Neon
// Add Antiota by Manh Hung
// *=======================*

var anti = {"ocsp.apple.com":1,"crl.apple.com":1,"mesu.apple.com":1,"gdmf.apple.com":1,"www.gdmf.apple.com":1,"iadc.qwape.com":1,"iadsk.apple.com":1,"swscan.apple.com":1,"world-gen.g.aaplimg.com":1,"appldnld.apple.com":1,"ppq.apple.com":1};

function FindProxyForURL(url, host) {

if (anti[host]) 
{return "PROXY 0.0.0.0:0";}

var ads = {"www.googleadservices.com":1,"googleadservices.com":1,"adservice.google.com":1,"doubleclick.net":1,"doubleclick.net":1,"adtiming.com":1,"tinhte.vn":1,"m.tinhte.vn":1,"www.tinhte.vn":1,"baomoi.com":1,"m.baomoi.com":1};

if (ads[host]) 
{return "PROXY 0.0.0.0:0";}

return "DIRECT";}























