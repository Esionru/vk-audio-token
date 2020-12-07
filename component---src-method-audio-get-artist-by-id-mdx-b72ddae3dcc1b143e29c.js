(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{BIbq:function(t,e,n){"use strict";n.r(e),n.d(e,"_frontmatter",(function(){return i})),n.d(e,"default",(function(){return d}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("E/Ix"),r=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}var i={};void 0!==i&&i&&i===Object(i)&&Object.isExtensible(i)&&!i.hasOwnProperty("__filemeta")&&Object.defineProperty(i,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/method/audio.getArtistById.mdx"}});var c={_frontmatter:i},l=r.a;function d(t){var e=t.components,n=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,["components"]);return Object(a.b)(l,o({},c,n,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"audiogetartistbyid"},"audio.getArtistById"),Object(a.b)("p",null,"Get information about artist by id."),Object(a.b)("p",null,"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"artist_id"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Id of the artist (for example, returned by audio.searchArtists)")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"extended (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Return more information (id of the VK page for that artist)")))),Object(a.b)("p",null,"Example (Kate):"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'\n$artistId = \'1204512717686522332\';\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    "https://api.vk.com/method/audio.getArtistById?access_token=".TOKEN."&artist_id=".\n    $artistId."&extended=1&v=5.95"\n);\n\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),"<?php\n\ninclude __DIR__.'/../../autoloader.php';\n\nuse Vodka2\\VKAudioToken\\SupportedClients;\n\n//Token obtained by example_microg.php script\ndefine('TOKEN', $argv[1]);\ndefine('USER_AGENT', SupportedClients::Kate()->getUserAgent());\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_HTTPHEADER, array('User-Agent: '.USER_AGENT));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n\n$artistId = '1204512717686522332';\n\ncurl_setopt(\n    $ch,\n    CURLOPT_URL,\n    \"https://api.vk.com/method/audio.getArtistById?access_token=\".TOKEN.\"&artist_id=\".\n    $artistId.\"&extended=1&v=5.95\"\n);\n\necho json_encode(json_decode(curl_exec($ch)), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE).\"\\n\\n\";\n")))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/method/audio.getArtistById.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-method-audio-get-artist-by-id-mdx-b72ddae3dcc1b143e29c.js.map