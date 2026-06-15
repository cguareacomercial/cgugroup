
document.querySelectorAll('.card').forEach(c=>{
c.addEventListener('mousemove',e=>{
const r=c.getBoundingClientRect();
c.style.transform=`rotateY(${(e.clientX-r.left-r.width/2)/25}deg)`;
});
c.addEventListener('mouseleave',()=>c.style.transform='rotateY(0deg)');
});
