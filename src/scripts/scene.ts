const canvas = document.querySelector<HTMLCanvasElement>('#research-canvas')!;
const ctx = canvas.getContext('2d');
if (ctx) {
  const context = ctx;
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const button = document.querySelector<HTMLButtonElement>('#motion-toggle')!;
  let paused = motion.matches, visible = true, angle = 0.3, frame = 0, last = 0, width = 0, height = 0;
  const points: {x:number;y:number;z:number;accent:boolean;size:number}[] = [];
  // A toroidal point cloud: a small mathematical sculpture made of discrete tokens.
  for (let i = 0; i < 70; i++) for (let j = 0; j < 23; j++) {
    const u = i / 70 * Math.PI * 2, v = j / 23 * Math.PI * 2;
    const radius = 1 + .32 * Math.cos(v);
    points.push({ x: radius * Math.cos(u), y: radius * Math.sin(u), z: .32 * Math.sin(v), accent: i > 45 && i < 59, size: 1.3 + (j % 3) * .18 });
  }
  function draw() {
    context.clearRect(0,0,width,height);
    const scale = Math.min(width * .29, height * .31);
    const projected = points.map(p => {
      const x = p.x * Math.cos(angle) - p.z * Math.sin(angle);
      const z = p.x * Math.sin(angle) + p.z * Math.cos(angle);
      const y = p.y * .61 - z * .79;
      const depth = p.y * .79 + z * .61;
      const perspective = 4 / (4 - depth * .3);
      return {x:width/2 + (x * .92 - y * .23) * scale * perspective, y:height*.465 + (x * .23 + y * .92)*scale*perspective, depth, accent:p.accent, size:p.size*perspective};
    }).sort((a,b)=>a.depth-b.depth);
    for (const p of projected) {
      context.globalAlpha = .35 + (p.depth+1.4)/2.8*.65;
      context.fillStyle = p.accent ? '#ff724e' : '#4267f5';
      context.beginPath(); context.arc(p.x,p.y,p.size,0,Math.PI*2);context.fill();
    }
    context.globalAlpha = 1;
  }
  function tick(time:number) {
    if (last) angle += Math.min(time-last,40)*.00012;
    last = time; draw();
    frame = requestAnimationFrame(tick);
  }
  function sync() {
    cancelAnimationFrame(frame); last=0;
    button.textContent = paused ? '▷' : 'Ⅱ';
    button.setAttribute('aria-pressed',String(paused));
    button.setAttribute('aria-label',paused?'Play animation':'Pause animation');
    if(!paused && visible && !document.hidden) frame=requestAnimationFrame(tick); else draw();
  }
  const resize = () => {
    width=canvas.clientWidth; height=canvas.clientHeight;
    const dpr=Math.min(window.devicePixelRatio||1,2);
    canvas.width=width*dpr;canvas.height=height*dpr;context.setTransform(dpr,0,0,dpr,0,0);draw();
  };
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();}).observe(canvas);
  button.addEventListener('click',()=>{paused=!paused;sync();});
  motion.addEventListener('change',()=>{paused=motion.matches;sync();});
  document.addEventListener('visibilitychange',sync);
  resize();sync();
}
