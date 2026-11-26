const opening=document.getElementById('opening'),letter=document.getElementById('letter'),openBtn=document.getElementById('open'),musicBtn=document.getElementById('music');
const bgMusic=document.getElementById('bgMusic');
let playing=false;
openBtn.addEventListener('click',()=>{opening.style.display='none';letter.style.display='block';window.scrollTo({top:0,behavior:'smooth'});petals();});
function petals(){setInterval(()=>{if(letter.style.display==='none')return;const f=document.createElement('div');f.className='flower';f.textContent=['🌸','♡','✧','❀'][Math.floor(Math.random()*4)];f.style.left=Math.random()*100+'vw';f.style.fontSize=(12+Math.random()*18)+'px';f.style.animationDuration=(6+Math.random()*7)+'s';document.body.appendChild(f);setTimeout(()=>f.remove(),14000)},850)}
// Musik berasal dari file lokal: musik/piano.mp3
musicBtn.addEventListener('click',async()=>{
  if(!playing){
    try{
      await bgMusic.play();
      playing=true;
      musicBtn.textContent='♫';
    }catch(error){
      alert('Tambahkan file musik bernama piano.mp3 ke folder musik terlebih dahulu.');
    }
  }else{
    bgMusic.pause();
    playing=false;
    musicBtn.textContent='♪';
  }
});
window.addEventListener('scroll',()=>{let max=document.documentElement.scrollHeight-window.innerHeight;document.getElementById('bar').style.width=(max>0?window.scrollY/max*100:0)+'%'});
