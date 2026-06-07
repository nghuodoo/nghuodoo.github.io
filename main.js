// lang handled inline in each page
(function(){
  var l=localStorage.getItem('nth_lang')||'en';
  if(l==='vi') document.body.classList.add('vi');
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.textContent = l==='vi' ? 'EN' : 'VI';
  });
})();
function toggleLang(){
  var v=document.body.classList.toggle('vi');
  localStorage.setItem('nth_lang', v?'vi':'en');
  document.querySelectorAll('.lang-btn').forEach(function(b){
    b.textContent = v ? 'EN' : 'VI';
  });
}
document.querySelector('.hamburger') && document.querySelector('.hamburger').addEventListener('click',function(){
  document.querySelector('.nav-links').classList.toggle('open');
});
