var CHODI = "DIRECT";
var CHANADS = "PROXY 127.0.0.1:80";
var CHANTHUHOI = "PROXY 1.3.3.7:1337";
var thuhoi = {"ocsp.apple.com","crl.apple.com"};
function FindProxyForURL(url, host) {
	if (dnsDomainIs(host, thuhoi)){
		return CHANTHUHOI;
	}

	if (isInNet(dnsResolve(host), "10.0.0.0", "255.0.0.0") ||
		isInNet(dnsResolve(host), "172.16.0.0", "255.240.0.0") ||
		isInNet(dnsResolve(host), "192.168.0.0", "255.255.0.0")) {
		return CHODI;
	}
	
	if (isInNet(dnsResolve(host), "127.0.0.0", "255.0.0.0")) {
		return CHODI;
	}
	
	return CHODI;
}
