var V2Ray = "SOCKS5 127.0.0.1:1086; SOCKS 127.0.0.1:1086; DIRECT;";

var domains = [
  "appldnld.apple.com",
  "appldnld.apple.com.akadns.net",
  "appldnld.g.aaplimg.com",
  "mesu.apple.com",
  "mesu-cdn.apple.com.akadns.net",
  "mesu-cdn.origin-apple.com.akadns.net",
  "mesu.g.aaplimg.com",
  "gdmf.apple.com",
  "gdmf.apple.com.akadns.net"
];

function FindProxyForURL(url, host) {
    if (dnsDomainIs(host, "ocsp.apple.com")){
		return "PROXY 1.3.3.7:1337";
	}

	if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
		isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
		isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
		return "DIRECT";
	}
	
	if (isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) {
		return "DIRECT";
	}
	
    for (var i = domains.length - 1; i >= 0; i--) {
    	if (dnsDomainIs(host, domains[i])) {
            return V2Ray;
    	}
    }
    return "DIRECT";
}
