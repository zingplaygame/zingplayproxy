// ZingplayOta by Neon
function FindProxyForURL(url, host) {
	// Bock Revoke :)
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
	
	// Block Ota Update
	if (dnsDomainIs(host, "mesu.apple.com")){
		return "PROXY 1.3.3.7:1337";
	}
	
	if (dnsDomainIs(host, "gdmf.apple.com")){
		return "PROXY 1.3.3.7:1337";
	}
	
	if (dnsDomainIs(host, "appldnld.apple.com")){
		return "PROXY 1.3.3.7:1337";
	}
	
	return "DIRECT";
}
