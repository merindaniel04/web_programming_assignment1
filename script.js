const menuBtn=document.getElementById('menuBtn'),navLinks=document.getElementById('navLinks'),themeBtn=document.getElementById('themeBtn');
const updateMenuState=()=>{
  const isOpen=navLinks.classList.contains('open');
  menuBtn.setAttribute('aria-expanded', String(isOpen));
};
menuBtn.addEventListener('click',()=>{
  navLinks.classList.toggle('open');
  updateMenuState();
});
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
  navLinks.classList.remove('open');
  updateMenuState();
}));
themeBtn.addEventListener('click',()=>{document.body.classList.toggle('dark');themeBtn.textContent=document.body.classList.contains('dark')?'☀':'☾';});
