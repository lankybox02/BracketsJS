(()=>{var e={version:"v1.3.0"};console.log("%c BracketsJS: You are currently using "+e.version,"color: green; font-weight: bold;"),e.createElem=(e,t,o,s,n,l)=>{var i=document.createElement(e);return o&&(i.id=o),s&&(i.className=s),n&&(i.innerHTML=n),t&&(parent=document.getElementById(t),parent.appendChild(i)),"a"==e&&(i.href=l),i},e.removeLinks=()=>{for(var e=document.getElementsByTagName("link"),t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])},e.swapStyles=t=>{if(!t.endsWith(".css")){if(console.log("%c BracketsJS: "+t+" is not a css file.","color: red; font-weight: bold;"),!t.endsWith(".css"))return void console.log("%c BracketsJS: "+t+" is not a css file.","color: red; font-weight: bold;");removeLinks(),loadCSSFile(t)}e.addScript=(e,o)=>{if(e.endsWith(".js")){const t=document.createElement("script");return t.src=e,void document.getElementsByTagName("body")[0].appendChild(t)}if("fileName"==o&&(console.log("%c BracketsJS: fileName bypass is used, this is not recommended","color: orange; font-weight: bold;"),bypassFileExtension=!0),bypassFileExtension){{const t=document.createElement("script");t.src=e,document.getElementsByTagName("body")[0].appendChild(t)}removeLinks(),loadCSSFile(t)}else console.log("BracketsJS: "+e+" is not a javascript file.")}},e.addScript=(e,t)=>{if(e.endsWith(".js")){const t=document.createElement("script");t.src=e,document.getElementsByTagName("body")[0].appendChild(t)}else{if("fileName"==t&&(console.log("%c BracketsJS: fileName bypass is used, this is not recommended","color: orange; font-weight: bold;"),bypassFileExtension=!0),!(bypassFileExtension=!0))return void console.log("BracketsJS: "+e+" is not a javascript file.");{const t=document.createElement("script");t.src=e,document.getElementsByTagName("body")[0].appendChild(t)}}},e.removeElem=e=>{var t=get(e);o(t)},e.loadCSSFile=e=>{if(e.endsWith(".css")){const t=document.createElement("link");t.rel="stylesheet",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)}else console.log("%c BracketsJS: "+e+" is not a css file.","color: red; font-weight: bold;")},e.swapFavicon=e=>{var t=document.querySelector("link[rel*='icon']")||document.createElement("link");t.type="image/x-icon",t.rel="shortcut icon",t.href=e,document.getElementsByTagName("head")[0].appendChild(t)},e.toggleElementVisibility=e=>{var o=t("#"+e);"block"==o.style.display?o.style.display="none":o.style.display="block"},e.toggleClass=(e,o)=>{var s=t("#"+e);s.classList.contains(o)?s.classList.remove(o):s.classList.add(o)},e.getScripts=()=>{for(var e=document.getElementsByTagName("script"),t=[],o=0;o<e.length;o++)t.push(e[o].src);console.log("%c DEBUG: Scripts Loaded "+t,"color: green; font-weight: bold;")};var t=document.querySelector.bind(document);setTimeout.bind(window);const o=e=>e.parentNode.removeChild(e)})();