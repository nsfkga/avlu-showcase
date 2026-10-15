/* Investor deck print controls v2.4.0. © 2026 Nathaniel Schroeder. */
(function(){
  'use strict';
  if(typeof document==='undefined')return;
  const print=document.getElementById('print-pitch');
  if(print)print.addEventListener('click',()=>window.print());
  document.addEventListener('keydown',event=>{
    if(event.target && /^(INPUT|TEXTAREA|BUTTON)$/.test(event.target.tagName))return;
    if(!['ArrowRight','ArrowLeft'].includes(event.key))return;
    const slides=[...document.querySelectorAll('.pitch-slide')];
    const current=slides.findIndex(slide=>slide.id===(location.hash||'#slide-1').slice(1));
    const next=Math.max(0,Math.min(slides.length-1,(current===-1?0:current)+(event.key==='ArrowRight'?1:-1)));
    if(slides[next])location.hash=slides[next].id;
  });
})();
