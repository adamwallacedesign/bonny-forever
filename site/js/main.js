/* Bonny Forever site scripts, loaded by every page in site/.
   Each block checks its elements exist, so the same file can load on all pages. */

/* Mobile menu (all pages). The toggle button is only visible below the nav breakpoint:
   992px in styles.css, 800px in commercial.css (see "MOBILE MENU" in each). */
(function(){
  var btn=document.querySelector('.nav-toggle');
  if(!btn)return;
  var header=btn.closest('header');
  var nav=document.getElementById(btn.getAttribute('aria-controls'));
  function isOpen(){ return btn.getAttribute('aria-expanded')==='true'; }
  function setOpen(open){
    header.classList.toggle('nav-open',open);
    btn.setAttribute('aria-expanded',open?'true':'false');
  }
  btn.addEventListener('click',function(){ setOpen(!isOpen()); });
  // Close when a menu link is tapped
  nav.addEventListener('click',function(e){ if(e.target.closest('a'))setOpen(false); });
  // Close when tapping anywhere outside the header
  document.addEventListener('click',function(e){ if(isOpen()&&!header.contains(e.target))setOpen(false); });
  // Close on Escape and put keyboard focus back on the button
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&isOpen()){ setOpen(false); btn.focus(); } });
  // Reset if the window is widened past the breakpoint while the menu is open
  window.addEventListener('resize',function(){ if(isOpen()&&getComputedStyle(btn).display==='none')setOpen(false); });
})();

/* Enquiry form (index.html). Was an inline onsubmit="" attribute.
   NOTE: shows a thank-you message but does not send the enquiry anywhere yet. */
(function(){
  var form=document.getElementById('enquiryForm');
  if(!form)return;
  form.addEventListener('submit',function(event){
    event.preventDefault(); document.getElementById('formSuccess').style.display='block'; this.reset();
  });
})();

/* Enquiry type pre-selection (index.html). Links such as index.html?enquiry=business#contact
   choose the matching "What are you planning?" option (values: wedding, celebration,
   business, other). Without ?enquiry= the dropdown stays on "Choose one". */
(function(){
  var select=document.getElementById('type');
  if(!select)return;
  var wanted=new URLSearchParams(window.location.search).get('enquiry');
  if(!wanted)return;
  for(var i=0;i<select.options.length;i++){
    if(select.options[i].value===wanted){ select.value=wanted; break; }
  }
})();

/* Bonny Signature photo lightbox (weddings.html). Each .sig-tile opens its own photo; a tile
   can add one more with data-extra-src and data-extra-alt (the floral arch does). The large
   <img> is only created when a photo opens, so the page never holds an empty image, and
   every photo and thumbnail carries real alt text. */
(function(){
  var lb=document.getElementById('lb');
  if(!lb)return; // lightbox only exists on weddings.html
  var stage=lb.querySelector('.lb-stage'), thumbs=document.getElementById('lbThumbs');
  var prev=document.getElementById('lbPrev'), next=document.getElementById('lbNext'), closeBtn=document.getElementById('lbClose');
  var img=null, photos=[], i=0, opener=null;

  function show(n){
    i=(n+photos.length)%photos.length;
    if(!img){ img=document.createElement('img'); stage.insertBefore(img,next); }
    img.src=photos[i].src; img.alt=photos[i].alt;
    Array.prototype.forEach.call(thumbs.children,function(b,k){
      b.className=k===i?'on':''; b.setAttribute('aria-pressed',k===i?'true':'false');
    });
    var single=photos.length<2; // one photo: hide arrows and thumbnails
    prev.style.display=next.style.display=thumbs.style.display=single?'none':'';
    lb.classList.toggle('multi',!single);
  }
  function open(tile){
    var main=tile.querySelector('.sig-photo img');
    photos=[{src:main.currentSrc||main.src, alt:main.alt}];
    if(tile.dataset.extraSrc) photos.push({src:tile.dataset.extraSrc, alt:tile.dataset.extraAlt});
    thumbs.innerHTML='';
    photos.forEach(function(p,k){
      var b=document.createElement('button'), t=document.createElement('img');
      b.type='button'; t.src=p.src; t.alt=p.alt; b.appendChild(t);
      b.addEventListener('click',function(){ show(k); });
      thumbs.appendChild(b);
    });
    opener=tile; lb.classList.add('open'); document.body.style.overflow='hidden';
    show(0); closeBtn.focus();
  }
  function close(){
    lb.classList.remove('open'); document.body.style.overflow='';
    if(opener) opener.focus(); // back to the photo that was opened
  }
  document.querySelectorAll('.sig-tile').forEach(function(t){ t.addEventListener('click',function(){ open(t); }); });
  closeBtn.addEventListener('click',close);
  prev.addEventListener('click',function(){ show(i-1); });
  next.addEventListener('click',function(){ show(i+1); });
  lb.addEventListener('click',function(e){ if(e.target===lb) close(); });
  document.addEventListener('keydown',function(e){
    if(!lb.classList.contains('open'))return;
    if(e.key==='Escape')close();
    if(e.key==='ArrowLeft')show(i-1);
    if(e.key==='ArrowRight')show(i+1);
  });
})();
