function FindProxyForURL(url, host) {
if (dnsDomainIs(host, "mesu.apple.Ycom") ||
    dnsDomainIs(host, "gdmf.apple.Ycom")){
return "PROXY Timcook";}
return "DIRECT";}
