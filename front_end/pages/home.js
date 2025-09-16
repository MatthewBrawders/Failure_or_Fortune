// pages/home.js start
const coinImg = new URL('../assets/FoF_coin.png', import.meta.url).toString();

export default function Home() {
  return `
    <div class="wrap card">
      <div class="hero">
        <h1 class="brand">FAILURE or FORTUNE</h1>

        <div class="coin-wrap">
          <img src="${coinImg}" alt="FoF Coin" class="coin-img" />
        </div>

        <p class="subtitle">Forge characters, weave tales, and let fate decide.</p>
        <div class="home-cta">
          <a class="button cta-large" href="#/journey">Start Your Journey</a>
        </div>
      </div>
    </div>

    <div class="embers" id="embers"></div>
    <div class="embers-omni" id="embersOmni"></div>
  `;
}

export function mountHomeEffects(){
  const R = (min,max)=> Math.random()*(max-min)+min;

  document.body.classList.add('route-home');

  const start = document.querySelector('.home-cta a[href="#/journey"]');
  if (start && !start.dataset.walkInit){
    start.dataset.walkInit = '1';
    start.addEventListener('click', (e)=>{
      e.preventDefault();
      e.stopImmediatePropagation();  
      const body = document.body;
      const card = document.querySelector('.wrap.card');

      body.classList.add('walking');
      card?.classList.add('hide-ui');

    setTimeout(()=>{
      body.classList.remove('walking');
      body.classList.remove('route-home');
      window.location.hash = '#/journey';
    }, 1600);
    }, { capture: true });          
  }


  const el = document.getElementById('embers');
  if (el && !el.dataset.init){
    el.dataset.init = '1';
    const N = 28;
    for(let i=0;i<N;i++){
      const d = document.createElement('div');
      d.className = 'ember';
      d.style.setProperty('--x', R(0,100).toFixed(2)+'vw');
      d.style.setProperty('--s', R(2,4).toFixed(2)+'px');
      d.style.setProperty('--t', R(26,42).toFixed(2)+'s');
      d.style.setProperty('--d', R(0,8).toFixed(2)+'s');
      d.style.setProperty('--dx1', R(-8,8).toFixed(2)+'vw');
      d.style.setProperty('--dx2', R(-10,10).toFixed(2)+'vw');
      d.style.setProperty('--dx3', R(-8,8).toFixed(2)+'vw');
      el.appendChild(d);
    }
  }

  const root = document.getElementById('embersOmni');
  if (root && !root.dataset.init){
    root.dataset.init = '1';
    const dirs = ['n','s','e','w','ne','nw','se','sw'];
    const M = 40;
    for(let i=0;i<M;i++){
      const d = document.createElement('span');
      d.className = 'spark';
      const dir = dirs[Math.floor(Math.random()*dirs.length)];
      d.dataset.dir = dir;
      d.style.setProperty('--s', (Math.random()*2+1.5).toFixed(2)+'px');
      d.style.setProperty('--t', (Math.random()*28+42).toFixed(2)+'s');
      d.style.setProperty('--d', (-Math.random()*8).toFixed(2)+'s');

      let sx, sy;
      if(dir==='n'){ sx=(Math.random()*100)+'vw'; sy='100vh'; }
      else if(dir==='s'){ sx=(Math.random()*100)+'vw'; sy='0vh'; }
      else if(dir==='e'){ sx='0vw'; sy=(Math.random()*100)+'vh'; }
      else if(dir==='w'){ sx='100vw'; sy=(Math.random()*100)+'vh'; }
      else if(dir==='ne'){ sx='0vw'; sy='100vh'; }
      else if(dir==='nw'){ sx='100vw'; sy='100vh'; }
      else if(dir==='se'){ sx='0vw'; sy='0vh'; }
      else { sx='100vw'; sy='0vh'; }
      d.style.setProperty('--sx', sx);
      d.style.setProperty('--sy', sy);
      d.style.setProperty('--dx', ((Math.random()*20)-10).toFixed(2)+'vw');
      d.style.setProperty('--dy', ((Math.random()*20)-10).toFixed(2)+'vh');
      root.appendChild(d);
    }
  }
}

export function unmountHomeEffects(){
  for (const id of ['embers','embersOmni']){
    const n = document.getElementById(id);
    if (n) { n.textContent = ''; delete n.dataset.init; }
  }
  document.body.classList.remove('route-home','walking');
  const card = document.querySelector('.wrap.card');
  card?.classList.remove('hide-ui');
}
// pages/home.js end
