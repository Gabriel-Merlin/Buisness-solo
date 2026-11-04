/* Statut ouvert / fermé + jour en cours */
(function(){
  var S={0:[[18,0,22,30]],1:[[11,30,14,30],[18,0,22,30]],2:[[11,30,14,30],[18,0,22,30]],3:[[11,30,14,30],[18,0,22,30]],4:[[11,30,14,30],[18,0,22,30]],5:[[11,30,14,30],[18,0,23,0]],6:[[11,30,14,30],[18,0,23,0]]};
  var n=new Date(),d=n.getDay(),m=n.getHours()*60+n.getMinutes(),open=null,next=null;
  S[d].forEach(function(s){var a=s[0]*60+s[1],b=s[2]*60+s[3];if(m>=a&&m<b)open=b;else if(m<a&&next===null)next=a;});
  var el=document.getElementById('status'),f=function(x){return Math.floor(x/60)+'h'+(x%60?('0'+x%60).slice(-2):'')};
  if(el){el.className='status on '+(open?'open':'');el.textContent=open?'Ouvert · jusqu’à '+f(open):(next!==null?'Fermé · ouvre à '+f(next):'Fermé · ouvre demain');}
  var r=document.querySelector('#hours tr[data-d="'+d+'"]');if(r)r.className='today';
})();

/* Onglets de la carte */
var showTab;
(function(){
  var tabs=[].slice.call(document.querySelectorAll('.tabs [role=tab]'));
  if(!tabs.length)return;
  function show(t){tabs.forEach(function(b){var on=b===t;b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;document.getElementById(b.getAttribute('aria-controls')).hidden=!on;});}
  showTab=function(id){var t=document.getElementById('t-'+id);if(t)show(t);};
  tabs.forEach(function(b,i){b.addEventListener('click',function(){show(b)});b.addEventListener('keydown',function(e){var n=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(n){var t=tabs[(i+n+tabs.length)%tabs.length];t.focus();show(t);}});});
  show(tabs[0]);
})();

/* Pages : #accueil, #carte, #carte-burgers, #formules, #avis, #infos */
(function(){
  var views=[].slice.call(document.querySelectorAll('.view'));
  var names=views.map(function(v){return v.getAttribute('data-view')});
  var titles={accueil:'La Pause Kebab',carte:'La carte – La Pause Kebab',formules:'Formules – La Pause Kebab',avis:'Avis – La Pause Kebab',infos:'Horaires et accès – La Pause Kebab'};
  var tabIds={menus:1,burgers:1,assiettes:1,barquettes:1,extras:1};
  function route(){
    var hash=(location.hash||'').replace('#','');
    var page=hash.split('-')[0],tab=hash.split('-')[1];
    if(names.indexOf(page)<0){page='accueil';tab=null;}
    views.forEach(function(v){v.hidden=v.getAttribute('data-view')!==page;});
    if(page==='carte'&&showTab)showTab(tabIds[tab]?tab:'menus');
    [].forEach.call(document.querySelectorAll('[data-nav]'),function(a){
      if(a.getAttribute('data-nav')===page)a.setAttribute('aria-current','page');else a.removeAttribute('aria-current');
    });
    document.title=titles[page];
    window.scrollTo(0,0);
  }
  window.addEventListener('hashchange',route);
  route();
})();

/* Menu aux trois traits */
(function(){
  var b=document.getElementById('burger'),d=document.getElementById('drawer');if(!b||!d)return;
  function set(o){b.setAttribute('aria-expanded',o);b.setAttribute('aria-label',o?'Fermer le menu':'Ouvrir le menu');d.hidden=!o;}
  b.addEventListener('click',function(){set(d.hidden)});
  d.addEventListener('click',function(e){var a=e.target.closest('a');if(a)set(false);});
  document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});
  window.addEventListener('hashchange',function(){set(false)});
})();

/* Filtre des avis par étoiles */
(function(){
  var rows=[].slice.call(document.querySelectorAll('.barrow')),list=document.getElementById('rev-list'),out=document.getElementById('rev-count');
  if(!rows.length||!list)return;
  var cards=[].slice.call(list.querySelectorAll('.quote'));
  function apply(f){
    rows.forEach(function(r){r.setAttribute('aria-pressed',r.getAttribute('data-filter')===f)});
    var n=0;cards.forEach(function(c){var ok=f==='all'||c.getAttribute('data-stars')===f;c.hidden=!ok;if(ok)n++;});
    var tot=rows.filter(function(r){return r.getAttribute('data-filter')===f})[0].querySelector('b').textContent;
    if(f==='all')out.innerHTML=n+' avis affichés<small>sur '+tot+' avis au total.</small>';
    else if(n===0)out.innerHTML='Avis '+f+' étoile'+(f>1?'s':'')+' · '+tot+' au total<small>Aucun de ces avis n’est affiché pour le moment.</small>';
    else out.innerHTML='Avis '+f+' étoile'+(f>1?'s':'')+' · '+n+' affiché'+(n>1?'s':'')+'<small>sur '+tot+' au total.</small>';
  }
  var rm=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  rows.forEach(function(r){r.addEventListener('click',function(){apply(r.getAttribute('data-filter'));out.scrollIntoView({behavior:rm?'auto':'smooth',block:'start'});})});
  apply('all');
})();
