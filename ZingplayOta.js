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

	var blacklist = {"appldnld.apple.com":1,"appldnld.apple.com.akadns.net":1,"appldnld.g.aaplimg.com":1,"mesu.apple.com":1,"mesu-cdn.apple.com.akadns.net":1,"mesu-cdn.origin-apple.com.akadns.net":1,"mesu.g.aaplimg.com":1,"gdmf.apple.com":1,"gdmf.apple.com.akadns.net":1};


	return "DIRECT";
}
