import httpx

with open("http.txt", 'w') as file:
	file.write(httpx.get("http://anhtrongdzpro.azdigi.shop/proxy/proxy.php?key=admin&type=2&timeout=10000&protocol=http").text)
	file.write(httpx.get("http://api.nm2302.site/get-proxy.php?key=dkhcuti&type=all").text)