(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{kug9:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return c})),n.d(t,"default",(function(){return i}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var r=n("E/Ix"),a=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var c={};void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/method/audio.getCount.mdx"}});var u={_frontmatter:c},l=a.a;function i(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(r.b)(l,o({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"audiogetcount"},"audio.getCount"),Object(r.b)("p",null,"Get count of user or community audios"),Object(r.b)("p",null,"Parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",o({parentName:"tr"},{align:null}),"Value"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",o({parentName:"tr"},{align:null}),"owner_id"),Object(r.b)("td",o({parentName:"tr"},{align:null}),"Id of the user or community")))),Object(r.b)("p",null,"Example (Kate):"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),'\n$ownerId = -34384434;\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    "https://api.vk.com/method/audio.getCount?access_token=".TOKEN.\n    "&owner_id=$ownerId&v=5.95"\n);\n\n')),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-php"}),"<?php\n\ninclude __DIR__.'/../../autoloader.php';\n\nuse Vodka2\\VKAudioToken\\SupportedClients;\n\n//Token obtained by example_microg.php script\ndefine('TOKEN', $argv[1]);\ndefine('USER_AGENT', SupportedClients::Kate()->getUserAgent());\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_HTTPHEADER, array('User-Agent: '.USER_AGENT));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n\n$ownerId = -34384434;\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    \"https://api.vk.com/method/audio.getCount?access_token=\".TOKEN.\n    \"&owner_id=$ownerId&v=5.95\"\n);\n\necho json_encode(json_decode(curl_exec($ch)), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE).\"\\n\\n\";\n")))}void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/method/audio.getCount.mdx"}}),i.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-method-audio-get-count-mdx-ca59b83236ab435ded8e.js.map