const io = new IntersectionObserver((entries)=>{
  for (const e of entries){
    if (e.isIntersecting) e.target.classList.add('in');
  }
},{threshold:.07});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

(function(){
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('[data-href]').forEach(a=>{
    if (a.getAttribute('data-href').toLowerCase() === here) a.classList.add('active');
  });
})();
