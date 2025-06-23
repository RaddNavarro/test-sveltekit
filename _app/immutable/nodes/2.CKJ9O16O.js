import{f as A,b as k}from"../chunks/B0UZfepC.js";import{o as Z}from"../chunks/DX1DRLb7.js";import{z as F,S as K,o as N,C as _,j as J,p as Q,G as E,a8 as ee,X as ae,Y as se,Z as H,n as R,q as I,r as te,_ as Y,A as j,$ as re,an as S,x as z,g as q,ao as ie,ad as le,ap as B,aq as ne,ar as Xe,w as oe,as as xe,W as ve,at as ce,au as fe,k as de,i as ue,av as pe,aw as me,ax as he,ay as $e,P as m,O as h,N as T,M as ge,B as _e,L as we,D as ye}from"../chunks/DOxCyudQ.js";import{g as be}from"../chunks/Wj4ftdt0.js";import"../chunks/DXcpl0W3.js";import{s as Ie}from"../chunks/DrC35kx6.js";function Ee(s,e){return e}function ke(s,e,a,r){for(var i=[],l=e.length,X=0;X<l;X++)Xe(e[X].e,i,!0);var c=l>0&&i.length===0&&a!==null;if(c){var d=a.parentNode;oe(d),d.append(a),r.clear(),w(s,e[0].prev,e[l-1].next)}xe(i,()=>{for(var f=0;f<l;f++){var t=e[f];c||(r.delete(t.k),w(s,t.prev,t.next)),ve(t.e,!c)}})}function Ae(s,e,a,r,i,l=null){var X=s,c={flags:e,items:new Map,first:null};{var d=s;X=_?N(J(d)):d.appendChild(F())}_&&Q();var f=null,t=!1,p=ee(()=>{var n=a();return ue(n)?n:n==null?[]:z(n)});K(()=>{var n=E(p),v=n.length;if(t&&v===0)return;t=v===0;let o=!1;if(_){var b=ae(X)===se;b!==(v===0)&&(X=H(),N(X),R(!1),o=!0)}if(_){for(var $=null,x,u=0;u<v;u++){if(I.nodeType===8&&I.data===te){X=I,o=!0,R(!1);break}var L=n[u],y=r(L,u);x=G(I,c,$,null,L,y,u,i,e,a),c.items.set(y,x),$=x}v>0&&N(H())}_||Le(n,c,X,i,e,r,a),l!==null&&(v===0?f?Y(f):f=j(()=>l(X)):f!==null&&re(f,()=>{f=null})),o&&R(!0),E(p)}),_&&(X=I)}function Le(s,e,a,r,i,l,X){var c=s.length,d=e.items,f=e.first,t=f,p,n=null,v=[],o=[],b,$,x,u;for(u=0;u<c;u+=1){if(b=s[u],$=l(b,u),x=d.get($),x===void 0){var L=t?t.e.nodes_start:a;n=G(L,e,n,n===null?e.first:n.next,b,$,u,r,i,X),d.set($,n),v=[],o=[],t=n.next;continue}if(Te(x,b,u),(x.e.f&S)!==0&&Y(x.e),x!==t){if(p!==void 0&&p.has(x)){if(v.length<o.length){var y=o[0],g;n=y.prev;var U=v[0],C=v[v.length-1];for(g=0;g<v.length;g+=1)D(v[g],y,a);for(g=0;g<o.length;g+=1)p.delete(o[g]);w(e,U.prev,C.next),w(e,n,U),w(e,C,y),t=y,n=C,u-=1,v=[],o=[]}else p.delete(x),D(x,t,a),w(e,x.prev,x.next),w(e,x,n===null?e.first:n.next),w(e,n,x),n=x;continue}for(v=[],o=[];t!==null&&t.k!==$;)(t.e.f&S)===0&&(p??(p=new Set)).add(t),o.push(t),t=t.next;if(t===null)continue;x=t}v.push(x),n=x,t=x.next}if(t!==null||p!==void 0){for(var M=p===void 0?[]:z(p);t!==null;)(t.e.f&S)===0&&M.push(t),t=t.next;var P=M.length;if(P>0){var W=c===0?a:null;ke(e,M,W,d)}}q.first=e.first&&e.first.e,q.last=n&&n.e}function Te(s,e,a,r){ie(s.v,e),s.i=a}function G(s,e,a,r,i,l,X,c,d,f){var t=(d&ce)!==0,p=(d&fe)===0,n=t?p?le(i):B(i):i,v=(d&ne)===0?X:B(X),o={i:v,v:n,k:l,a:null,e:null,prev:a,next:r};try{return o.e=j(()=>c(s,n,v,f),_),o.e.prev=a&&a.e,o.e.next=r&&r.e,a===null?e.first=o:(a.next=o,a.e.next=o.e),r!==null&&(r.prev=o,r.e.prev=o.e),o}finally{}}function D(s,e,a){for(var r=s.next?s.next.e.nodes_start:a,i=e?e.e.nodes_start:a,l=s.e.nodes_start;l!==r;){var X=de(l);i.before(l),l=X}}function w(s,e,a){e===null?s.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}const Ce=Symbol("is custom element"),Me=Symbol("is html");function O(s,e,a,r){var i=Ne(s);_&&(i[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||i[e]!==(i[e]=a)&&(e==="loading"&&(s[pe]=a),a==null?s.removeAttribute(e):typeof a!="string"&&Re(s).includes(e)?s[e]=a:s.setAttribute(e,a))}function Ne(s){return s.__attributes??(s.__attributes={[Ce]:s.nodeName.includes("-"),[Me]:s.namespaceURI===me})}var V=new Map;function Re(s){var e=V.get(s.nodeName);if(e)return e;V.set(s.nodeName,e=[]);for(var a,r=s,i=Element.prototype;i!==r;){a=$e(r);for(var l in a)a[l].set&&e.push(l);r=he(r)}return e}var Se=A('<a target="_blank" class="svelte-ci6kiw"><div class="card p-8 flex-col gap-7 svelte-ci6kiw"><img alt="images" class="svelte-ci6kiw"/> <div class="label-container flex items-center justify-center"><p class="svelte-ci6kiw"> </p></div></div></a>'),Ue=A('<main class="main flex gap-7 svelte-ci6kiw"></main>');function He(s,e){var a=Ue();Ae(a,21,()=>e.cardItems,Ee,(r,i)=>{var l=Se(),X=h(l),c=h(X),d=T(c,2),f=h(d),t=h(f,!0);m(f),m(d),m(X),m(l),ge(()=>{O(l,"href",E(i).url),O(c,"src",E(i).image),Ie(t,E(i).label)}),k(r,l)}),m(a),k(s,a)}const qe=""+new URL("../assets/react.DtEvrjCX.png",import.meta.url).href,Be=""+new URL("../assets/cpp.iwYUqiod.png",import.meta.url).href,De=""+new URL("../assets/svelte.I4G44eyL.png",import.meta.url).href,Oe=""+new URL("../assets/unity.B8kSqziW.png",import.meta.url).href;var Ve=A('<main class="flex items-center justify-center flex-col gap-20"><h1>Made projects in these</h1> <div class="page-wrapper flex items-center justify-center svelte-1gyuq28"><div class="card-grid flex gap-8 svelte-1gyuq28"><!></div></div></main>');function Ye(s){const e=[{image:qe,label:"React",url:"https://react.dev/"},{image:Be,label:"C++",url:"https://learn.microsoft.com/en-us/cpp/cpp/?view=msvc-170"},{image:De,label:"Svelte",url:"https://svelte.dev/"},{image:Oe,label:"Unity",url:"https://unity.com/"}];var a=Ve(),r=T(h(a),2),i=h(r),l=h(i);He(l,{get cardItems(){return e}}),m(i),m(r),m(a),k(s,a)}var je=A(`<main class="flex flex-col items-center justify-center h-full"><h1 class="svelte-9msmib">Contact Me</h1> <div class="flex flex-row justify-center items-center py-10 gap-20"><div class="github flex flex-row justify-center"><a href="https://github.com/RaddNavarro" target="_blank"><pre class="font-mono svelte-9msmib">
                                                  
                ##################                
            ##########################            
          ##############################          
        ##################################        
      ######################################      
     ########################################     
    ########      ####       ###      ########    
   #########                          #########   
  ###########                         ##########  
 ###########                          ########### 
 ##########                            ########## 
 #########                              ######### 
##########                              ##########
##########                              ##########
 ##########                            ########## 
 ###########                          ########### 
  ###########                        ###########  
  #############                    #############  
   ###### ###########        ##################   
    ######  ########          ################    
     #######  #####           ###############     
       ######                 #############       
        ############          ############        
           #########          #########           
              ######          ######              
                                                  
			</pre></a> <small class="pt-6 pl-3 svelte-9msmib">Emman</small></div> <div class="gmail flex-row flex items-center justify-center h-20"><a href="mailto:radian.ollet.navarro@gmail.com"><pre class="svelte-9msmib">
			   
		  $$$$$$$                             :::::::          
		$$$$$$$$$$$                         :::::::::::        
		$$$$$$$$$$$XXX                   XX+:::::::::::        
		$$$$$$$$$$$XXXXX               XXXX+:::::::::::        
		$$$$$$$$$$$XXXXXXXX          XXXXXX+:::::::::::        
		xxX$$$$$$$$XXXXXXXXXX     XXXXXXXXX+:::::::::;;        
		xxxxX$$$$$$XXXXXXXXXXXXXXXXXXXXXXXX+:::::::;;;;        
		xxxxxxxX$$$XXXXXXXXXXXXXXXXXXXXXXXX+::::;;;;;;;        
		xxxxxxxxxX$XXXXXXXXXXXXXXXXXXXXXXXX+::;;;;;;;;;        
		xxxxxxxxxxxxXXXXXXXXXXXXXXXXXXXXXXX+;;;;;;;;;;;        
		xxxxxxxxxxxx XXXXXXXXXXXXXXXXXXXXX ;;;;;;;;;;;;        
		xxxxxxxxxxxx    XXXXXXXXXXXXXXX    ;;;;;;;;;;;;        
		xxxxxxxxxxxx      XXXXXXXXXXX      ;;;;;;;;;;;;        
		xxxxxxxxxxxx         XXXXX         ;;;;;;;;;;;;        
		xxxxxxxxxxxx                       ;;;;;;;;;;;;        
		xxxxxxxxxxxx                       ;;;;;;;;;;;;        
		xxxxxxxxxxxx                       ;;;;;;;;;;;;        
		xxxxxxxxxxxx                       ;;;;;;;;;;;;        
		 xxxxxxxxxxx                       ;;;;;;;;;;;         
			</pre></a> <small class="text-1 pl-2 svelte-9msmib">radian.ollet.navarro@gmail.com</small></div></div></main>`);function ze(s){var e=je();k(s,e)}var Ge=A(`<section class="w-full svelte-138v9ie" id="main"><div class="wrapper svelte-138v9ie"><pre class="font-bold z-10 svelte-138v9ie">
				
			
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗       ███████╗██████╗ ██╗██████╗  █████╗ ██╗   ██╗██╗
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝       ██╔════╝██╔══██╗██║██╔══██╗██╔══██╗╚██╗ ██╔╝██║
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗         █████╗  ██████╔╝██║██║  ██║███████║ ╚████╔╝ ██║
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝         ██╔══╝  ██╔══██╗██║██║  ██║██╔══██║  ╚██╔╝  ╚═╝
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗▄█╗    ██║     ██║  ██║██║██████╔╝██║  ██║   ██║   ██╗
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝╚═╝    ╚═╝     ╚═╝  ╚═╝╚═╝╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝
                                                                                                                    

		</pre> <div class="subtitle wrap-break-word svelte-138v9ie"><p class="svelte-138v9ie">I'm Friday, and I like to develop shi like games, and websites. This is my personal website,
				so I would update this from time to time. That's it.</p></div></div> <div class="absolute inset-0" id="particles-js"></div> <div class="wave svelte-138v9ie"><svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" class="svelte-138v9ie"><path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill svelte-138v9ie"></path></svg></div></section> <section id="about" class="z-100 svelte-138v9ie"><!></section> <footer class="h-75 svelte-138v9ie" id="contacts"><!></footer>`,1);function Qe(s,e){_e(e,!0),Z(()=>{document.addEventListener("keydown",c=>{c.key.toLowerCase()==="h"?be("/"):c.key.toLowerCase()==="a"?document.getElementById("about").scrollIntoView({behavior:"smooth",block:"start"}):c.key.toLowerCase()==="c"&&document.getElementById("contacts").scrollIntoView({behavior:"smooth",block:"start"})})});var a=Ge(),r=T(we(a),2),i=h(r);Ye(i),m(r);var l=T(r,2),X=h(l);ze(X),m(l),k(s,a),ye()}export{Qe as component};
