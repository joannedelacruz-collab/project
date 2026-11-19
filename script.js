// Add your real profile links here. Empty ones stay inactive (nothing is invented).
var SOCIALS={email:"",facebook:"",instagram:"",x:"",linkedin:""};
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return[].slice.call((r||document).querySelectorAll(s))};
$("#yr").textContent=new Date().getFullYear();
function go(id){var e=document.getElementById(id);if(e)e.scrollIntoView({behavior:"smooth"})}
$$("[data-go]").forEach(function(b){b.addEventListener("click",function(){go(b.dataset.go)})});
$$("a[href^='#']").forEach(function(a){a.addEventListener("click",function(e){var h=a.getAttribute("href");if(h.length>1){e.preventDefault();go(h.slice(1));$("#links").classList.remove("open");$("#menu").setAttribute("aria-expanded","false")}})});
$("#menu").addEventListener("click",function(){var o=$("#links").classList.toggle("open");this.setAttribute("aria-expanded",o)});
// social icons: copy to footer, wire links
var f=$("#fsoc");
$$(".info .ic").forEach(function(a){var k=a.dataset.s,u=SOCIALS[k];
 if(u){a.href=k==="email"?"mailto:"+u:u;a.target=k==="email"?"":"_blank";a.rel="noopener"}
 else{a.title="Link not set yet";a.addEventListener("click",function(e){e.preventDefault()})}
 var c=a.cloneNode(true);if(!u)c.addEventListener("click",function(e){e.preventDefault()});f.appendChild(c)});
// nav highlight
var secs=$$("section"),ls=$$(".nav a.l");
addEventListener("scroll",function(){var y=scrollY+120,cur="home";secs.forEach(function(s){if(s.offsetTop<=y)cur=s.id});ls.forEach(function(l){l.classList.toggle("on",l.getAttribute("href")==="#"+cur)})});
// section search
$("#search").addEventListener("submit",function(e){e.preventDefault();var q=$("#q").value.trim().toLowerCase();if(!q)return;
 var m={home:"home name tagline student",about:"about me introduction school",skills:"skills canva photoshop java",contact:"contact email form social facebook instagram"};
 for(var k in m){if(m[k].split(" ").some(function(w){return w.indexOf(q)===0||q.indexOf(w)===0})){go(k);return}}
 $("#q").value="";$("#q").placeholder="No match found"});
// form validation
function bad(el,msg){var f=el.parentNode;f.classList.toggle("bad",!!msg);$(".err",f).textContent=msg||""}
$("#form").addEventListener("submit",function(e){e.preventDefault();
 var n=$("#name"),p=$("#number"),m=$("#msg"),ok=true;
 var v=n.value.trim();bad(n,v.length<2?"Please enter your name.":"");if(v.length<2)ok=false;
 var d=p.value.replace(/[\s\-()+]/g,"");var pe=!/^\d{7,15}$/.test(d);bad(p,pe?"Enter a valid number (7–15 digits).":"");if(pe)ok=false;
 var me=m.value.trim().length<5;bad(m,me?"Please write a short message.":"");if(me)ok=false;
 $("#ok").textContent="";
 if(ok){$("#ok").textContent="Thank you! Your message is ready to send.";this.reset()}});
