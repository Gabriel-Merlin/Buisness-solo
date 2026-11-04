(function(){
  var S={0:[[18,0,22,30]],1:[[11,30,14,30],[18,0,22,30]],2:[[11,30,14,30],[18,0,22,30]],3:[[11,30,14,30],[18,0,22,30]],4:[[11,30,14,30],[18,0,22,30]],5:[[11,30,14,30],[18,0,23,0]],6:[[11,30,14,30],[18,0,23,0]]};
  var n=new Date(),d=n.getDay(),m=n.getHours()*60+n.getMinutes(),open=null,next=null;
  S[d].forEach(function(s){var a=s[0]*60+s[1],b=s[2]*60+s[3];if(m>=a&&m<b)open=b;else if(m<a&&next===null)next=a;});
  var el=document.getElementById('status'),f=function(x){return Math.floor(x/60)+'h'+(x%60?('0'+x%60).slice(-2):'')};
  if(el){el.className='status on '+(open?'open':'');el.textContent=open?'Ouvert · jusqu’à '+f(open):(next!==null?'Fermé · ouvre à '+f(next):'Fermé · ouvre demain');}
  var r=document.querySelector('#hours tr[data-d="'+d+'"]');if(r)r.className='today';
})();

(function(){
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  function show(t){tabs.forEach(function(b){var on=b===t;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;document.getElementById(b.getAttribute('aria-controls')).hidden=!on;});}
  tabs.forEach(function(b,i){b.addEventListener('click',function(){show(b)});b.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(n){var t=tabs[(i+n+tabs.length)%tabs.length];t.focus();show(t);}});});
  show(tabs[0]);
})();
