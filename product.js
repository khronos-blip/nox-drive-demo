(() => {
  const products = {
    lime: {name:'Ion Lime',tag:'Citrus frequency / 01',title:'ION<br>LIME.',lead:'Lime and yuzu. A sharp citrus taste with a dry finish.',description:'Acid lime, bright yuzu, and a restrained mineral finish.',image:'lime-hero',alt:'Ion Lime tub with fresh citrus',signal:'#c9ff36',caption:'Signal / 01'},
    berry: {name:'Riot Berry',tag:'Redline frequency / 02',title:'RIOT<br>BERRY.',lead:'Red berries and hibiscus. Bold, tart and never subtle.',description:'Raspberry, blackcurrant depth, and a hibiscus edge.',image:'nox-berry',alt:'Riot Berry pre-workout tub lying on steel',signal:'#ff6b9e',caption:'Signal / 02'},
    polar: {name:'Polar Shock',tag:'Cold frequency / 03',title:'POLAR<br>SHOCK.',lead:'Blue raspberry and citrus. A crisp, cooling finish.',description:'A cool fruit profile with a clean finish and restrained sweetness.',image:'nox-polar',alt:'Polar Shock pre-workout tub held by an athlete',signal:'#80e8ff',caption:'Signal / 03'}
  };
  const key=new URLSearchParams(location.search).get('flavor');
  const selected=Object.hasOwn(products,key)?key:'lime';
  const product=products[selected];
  document.title=product.name+' — NØX Drive';
  document.documentElement.style.setProperty('--signal',product.signal);
  document.getElementById('product-tag').textContent=product.tag;
  document.getElementById('product-title').innerHTML=product.title;
  document.getElementById('product-lead').textContent=product.lead;
  document.getElementById('product-description').textContent=product.description;
  document.getElementById('product-caption').textContent=product.caption;
  const img=document.getElementById('product-image');
  img.src='assets/'+product.image+'.webp';
  img.srcset='assets/'+product.image+'-640.webp 640w, assets/'+product.image+'.webp 1254w';
  img.sizes='(max-width:780px) 100vw, 52vw';
  img.alt=product.alt;
  document.getElementById('product-add').href='index.html?add='+selected+'#shop';
  document.querySelector('[data-related="'+selected+'"]').setAttribute('aria-current','page');
})();
