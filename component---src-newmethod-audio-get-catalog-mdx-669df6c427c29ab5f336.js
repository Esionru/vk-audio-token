(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{kQLV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return l})),n.d(t,"default",(function(){return b}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("FlsD"),n("q1tI");var a=n("E/Ix"),r=n("hhGP");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var l={};void 0!==l&&l&&l===Object(l)&&Object.isExtensible(l)&&!l.hasOwnProperty("__filemeta")&&Object.defineProperty(l,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/newmethod/audio.getCatalog.mdx"}});var c={_frontmatter:l},i=r.a;function b(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(i,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"audiogetcatalog"},"audio.getCatalog"),Object(a.b)("p",null,"Get current user sections or search for artists."),Object(a.b)("p",null,"Parameters:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Value"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"artist_id (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Artist id")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"query (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Audio name or performer to search for")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"context (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Id of the context")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"count (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Number of sections to return")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"start_from (optional)"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Id of the offset")))),Object(a.b)("p",null,"Context ids are returned in the ",Object(a.b)("inlineCode",{parentName:"p"},"context")," field.\nOffset is returned in the ",Object(a.b)("inlineCode",{parentName:"p"},"next_from")," field."),Object(a.b)("p",null,"If neither ",Object(a.b)("inlineCode",{parentName:"p"},"artist_id")," nor ",Object(a.b)("inlineCode",{parentName:"p"},"query")," are specified, sections for the current user are returned."),Object(a.b)("p",null,"Example — search for audios by an artist (VK Official):"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'\n$query = "Justin Bieber - Baby";\n\ncurl_setopt(\n    $ch, CURLOPT_URL, "https://api.vk.com/method/audio.getCatalog"\n);\ncurl_setopt($ch,\n    CURLOPT_POSTFIELDS,\n    "v=5.116&https=1&lang=en&query=".urlencode($query)."&access_token=".TOKEN\n);\n\n')),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-php"}),'<?php\n\ninclude __DIR__.\'/../../autoloader.php\';\n\nuse Vodka2\\VKAudioToken\\SupportedClients;\n\n//Credentials obtained by example_vkofficial.php script\ndefine(\'TOKEN\', $argv[1]);\ndefine(\'USER_AGENT\', SupportedClients::VkOfficial()->getUserAgent());\n$ch = curl_init();\n\ncurl_setopt($ch,CURLOPT_HTTPHEADER, array(\'User-Agent: \'.USER_AGENT));\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_POST, 1);\n\n$query = "Justin Bieber - Baby";\n\ncurl_setopt(\n    $ch, CURLOPT_URL, "https://api.vk.com/method/audio.getCatalog"\n);\ncurl_setopt($ch,\n    CURLOPT_POSTFIELDS,\n    "v=5.116&https=1&lang=en&query=".urlencode($query)."&access_token=".TOKEN\n);\n\necho json_encode(json_decode(curl_exec($ch)), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)."\\n\\n";\n')))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/newmethod/audio.getCatalog.mdx"}}),b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-newmethod-audio-get-catalog-mdx-669df6c427c29ab5f336.js.map