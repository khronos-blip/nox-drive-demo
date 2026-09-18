(() => {
'use strict';
const flavors={
lime:{index:"01",name:"Ion Lime",split:"Ion<br>Lime",image:"nox-ion-lime.webp",alt:"Black NØX Drive Ion Lime pre-workout tub with vivid lime signal graphics",accent:"#c9ff36",rgb:"201,255,54",signal:"Citrus frequency",hero:"Ion Lime transmits a sharp citrus signal with yuzu voltage and a mineral-dry finish.",description:"Acid lime, bright yuzu, and a restrained mineral finish. Clean, dry, and intentionally electric.",notes:["Acid / 4 of 5","Sweet / 2 of 5","Dry finish"]},
berry:{index:"02",name:"Riot Berry",split:"Riot<br>Berry",image:"nox-riot-berry.webp",alt:"Black NØX Drive Riot Berry pre-workout tub with vivid magenta signal graphics",accent:"#ff3f87",rgb:"255,63,135",signal:"Redline frequency",hero:"Riot Berry broadcasts tart red fruit, dark hibiscus, and a hard-edged sour finish.",description:"Tart raspberry, blackcurrant depth, and hibiscus bite. Dark fruit tuned above the sugar noise.",notes:["Tart / 4 of 5","Sweet / 3 of 5","Berry finish"]},
polar:{index:"03",name:"Polar Shock",split:"Polar<br>Shock",image:"nox-polar-shock.webp",alt:"Black NØX Drive Polar Shock pre-workout tub with vivid ice-blue signal graphics",accent:"#55ddff",rgb:"85,221,255",signal:"Cold frequency",hero:"Polar Shock cuts through with blue raspberry, bright citrus, and a clean cooling tail.",description:"Blue raspberry, lucid citrus, and a calibrated cooling finish. High contrast without heavy sweetness.",notes:["Cold / 5 of 5","Sweet / 3 of 5","Clean finish"]}};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const cart=createDemoCart({overlay:'#backdrop',trigger:'.cart-trigger',list:'#cart-items',total:'#total',badge:'.count',currency:'USD',noun:'loadout',openClass:'active',overlayClass:'active',bodyClass:'cart-open'});
let active='lime';
function select(key) {
  const f=flavors[key];active=key;
  document.documentElement.style.setProperty('--accent',f.accent);
  document.documentElement.style.setProperty('--rgb',f.rgb);
  document.body.dataset.flavor=key;
  setProductPhoto($('#product-image'),key+'-hero',f.name+' pre-workout jar in its own photographic setting');
  setProductPhoto($('#frequency-image'),key+'-detail','Detail photograph of '+f.name+' and its sensory presentation');
  $('#product-index').textContent=f.index;
  $('#telemetry-name').textContent=f.name+' / '+f.index;
  $('#telemetry-note').textContent=f.signal;
  $('#hero-summary').textContent=f.hero;
  $('#frequency-index').textContent='Frequency '+f.index;
  $('#frequency-name').innerHTML=f.split;
  $('#frequency-description').textContent=f.description;
  $('#frequency-notes').replaceChildren(...f.notes.map(n=>{const span=document.createElement('span');span.textContent=n;return span;}));
  $('#hero-cta').textContent='Load '+f.name+' / $34';
  $$('button[data-flavor]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.flavor===key)));
}
function add(bundle) {
  const f=flavors[active], trio=bundle==='trio', double=bundle==='double';
  cart.add({id:trio?'trio':bundle+'-'+active,name:trio?'Full Spectrum':(double?'Dual Signal':'Single Frequency')+' / '+f.name,
    note:trio?'3 tubs · Ion Lime + Riot Berry + Polar Shock · 90 servings':(double?'2 tubs · 60 servings':'1 tub · 30 servings'),
    price:trio?89:double?64:34,image:'assets/'+active+'-hero-640.webp'});
}
$$('button[data-flavor]').forEach(b=>b.addEventListener('click',()=>select(b.dataset.flavor)));
$$('[data-bundle]').forEach(b=>b.addEventListener('click',()=>add(b.dataset.bundle)));
$('#hero-cta').addEventListener('click',()=>add('single'));select('lime');
})();
