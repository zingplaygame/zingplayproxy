// Antirevoke by Neon
// Add Antiota by Manh Hung
// *=======================*

var blacklist = {"tinhte.vn":1,"m.baomoi.com":1,"m.tinhte.vn":1,"baomoi.com":1};

function FindProxyForURL(url, host) 
{if (
dnsDomainIs(host, "ocsp.apple.com") ||
dnsDomainIs(host, "ocsp.int-x3.letsencrypt.org") ||
dnsDomainIs(host, "crl.apple.com") ||
dnsDomainIs(host, "mesu.apple.com") ||
dnsDomainIs(host, "gdmf.apple.com") ||
dnsDomainIs(host, "www.gdmf.apple.com") ||
dnsDomainIs(host, "iadc.qwape.com") ||
dnsDomainIs(host, "iadsk.apple.com") ||
dnsDomainIs(host, "swscan.apple.com") ||
dnsDomainIs(host, "world-gen.g.aaplimg.com") ||
dnsDomainIs(host, "appldnld.apple.com") ||
dnsDomainIs(host, "ppq.apple.com") ||
dnsDomainIs(host, "adservice.google.com") ||
dnsDomainIs(host, "unlimapps.com") ||
dnsDomainIs(host, "doubleclick.net") ||
dnsDomainIs(host, "adtiming.com")) 
{return "PROXY 1.3.3.7:1337";}

if (
isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) 
{return "DIRECT";}

if (isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) 
{return "DIRECT";}

if (blacklist[host]) 
{return "PROXY 127.0.0.1:80";}

return "DIRECT";}
