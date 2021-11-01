const pop = document.getElementById('pop');
const shareIcon = document.getElementById('btn');
const drawer = document.getElementById('drawer')


shareIcon.addEventListener('click', share);
pop.addEventListener('click', share);

function share(){
    if ( pop.style.display ==='none') {
        pop.style.display='flex';
        shareIcon.style.display='none';
    } else {pop.style.display='none';
    shareIcon.style.display='block';
}
}
   

