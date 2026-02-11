function FindProxyForURL(url, host) {
    // Список доменов, которые пойдут напрямую (без прокси)
    if (isPlainHostName(host) || 
        shExpMatch(host, "*.local") || 
        isInNet(host, "10.0.0.0", "255.0.0.0") ||
        isInNet(host, "192.168.0.0", "255.255.0.0")) {
        return "DIRECT";
    }

    // Твой SOCKS5 сервер (замени IP и порт на свои)
    // ВАЖНО: Большинство систем требуют префикс SOCKS5 или SOCKS
    return "SOCKS5 10.1.30.107:8050; SOCKS 10.1.30.107:8050; DIRECT";
}
