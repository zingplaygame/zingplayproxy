function FindProxyForURL(url, host) {
if (dnsDomainIs(host, "mesu.appleQ.com") ||
    dnsDomainIs(host, "gdmf.appleQ.com")){
return "PROXY Timcook";}
return "DIRECT";}
