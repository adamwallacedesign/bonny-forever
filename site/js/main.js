/* Bonny Forever site scripts, loaded by index.html and weddings.html.
   Moved from inline code unchanged, except that each block now checks its
   elements exist so the same file can load on both pages. */

/* Enquiry form (index.html). Was an inline onsubmit="" attribute.
   NOTE: shows a thank-you message but does not send the enquiry anywhere yet. */
(function(){
  var form=document.getElementById('enquiryForm');
  if(!form)return;
  form.addEventListener('submit',function(event){
    event.preventDefault(); document.getElementById('formSuccess').style.display='block'; this.reset();
  });
})();

/* Bonny Signature photo lightbox (weddings.html). Was an inline <script>. */
(function(){
  var lb=document.getElementById('lb'),img=document.getElementById('lbImg'),th=document.getElementById('lbThumbs'),ti=document.getElementById('lbTitle'),srcs=[],i=0;
  if(!lb)return; // lightbox only exists on weddings.html
  function show(n){i=(n+srcs.length)%srcs.length;img.src=srcs[i];img.alt=ti.textContent;Array.prototype.forEach.call(th.children,function(t,k){t.className=k===i?'on':''});
    var m=srcs.length<2;document.getElementById('lbPrev').style.display=document.getElementById('lbNext').style.display=m?'none':'';th.style.display=m?'none':'';}
  function close(){lb.className='';document.body.style.overflow=''}
  document.querySelectorAll('.sig-tile').forEach(function(t){t.addEventListener('click',function(){
    srcs=[t.querySelector('.sig-photo img').src];
    t.querySelectorAll('[data-extra]').forEach(function(e){srcs.push(e.src)});
    ti.textContent=t.getAttribute('data-title');th.innerHTML='';
    srcs.forEach(function(s,k){var e=document.createElement('img');e.src=s;e.alt='';e.onclick=function(){show(k)};th.appendChild(e)});
    lb.className='open';document.body.style.overflow='hidden';show(0);})});
  document.getElementById('lbClose').onclick=close;
  document.getElementById('lbPrev').onclick=function(){show(i-1)};
  document.getElementById('lbNext').onclick=function(){show(i+1)};
  lb.addEventListener('click',function(e){if(e.target===lb)close()});
  document.addEventListener('keydown',function(e){if(lb.className!=='open')return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')show(i-1);if(e.key==='ArrowRight')show(i+1)});
})();
