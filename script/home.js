document.getElementById('main_nav').style.display='block';
document.getElementsByClassName('sb')[0].addEventListener('click',()=>{
    document.getElementById('menu_logo').style.display='none';
    document.getElementById('close_logo').style.display='block';
    document.querySelector('.sidebox').classList.add('side_ani');
    document.querySelector('.sidebox').classList.add('side_ani1');
    document.querySelector('.sidebox').classList.remove('side_ani2');
    document.querySelector('.sidebox').classList.remove('side_ani3');
})
document.getElementsByClassName('sb')[1].addEventListener('click',()=>{
    document.getElementById('menu_logo').style.display='block';
    document.getElementById('close_logo').style.display='none';
    document.querySelector('.sidebox').classList.remove('side_ani');
    document.querySelector('.sidebox').classList.remove('side_ani1');
    document.querySelector('.sidebox').classList.add('side_ani2');
    document.querySelector('.sidebox').classList.add('side_ani3');
})
document.addEventListener('mouseup',(e)=>{
    document.getElementById('menu_logo').style.display='block';
    document.getElementById('close_logo').style.display='none';
    let b1=document.querySelector('.sidebox');
    let b2=document.getElementById('menu_logo');
    if(!b1.contains(e.target) && !b2.contains(e.target))
    {
        if(document.querySelector('.sidebox').classList.contains('side_ani'))
        {
            document.querySelector('.sidebox').classList.remove('side_ani');
            document.querySelector('.sidebox').classList.remove('side_ani1');
            document.querySelector('.sidebox').classList.add('side_ani2');
            document.querySelector('.sidebox').classList.add('side_ani3');
        }
    }
})
console.log(document.documentElement.scrollTop);
window.addEventListener('scroll',()=>{
    var height = document.documentElement.scrollTop;
    if(height>106 && height<220)
    {
        document.getElementById('tc2').children[0].classList.add('scrollani');
        setTimeout(() => {
            document.getElementById('tc2').children[0].classList.remove('scrollani');
        }, 601);
    }
    if(height>1162 && height<1280)
    {
        document.getElementById('tc3').children[0].classList.add('scrollani');
        setTimeout(() => {
            document.getElementById('tc3').children[0].classList.remove('scrollani');
        }, 601);
    }
    if(height>2161 && height<2280)
    {
        document.getElementById('tc4').children[0].classList.add('scrollani');
        setTimeout(() => {
            document.getElementById('tc4').children[0].classList.remove('scrollani');
        }, 601);
    }
    if(height>3155 && height<3270)
    {
        document.getElementById('tc5').children[0].classList.add('scrollani');
        setTimeout(() => {
            document.getElementById('tc5').children[0].classList.remove('scrollani');
        }, 601);
    }
    if(height>4176 && height<4290)
    {
        document.getElementById('tc6').children[0].classList.add('scrollani');
        setTimeout(() => {
            document.getElementById('tc6').children[0].classList.remove('scrollani');
        }, 601);
    }
    if(height>5175 && height<5295)
    {
        document.getElementById('tc7').children[0].classList.add('scrollani');
        setTimeout(() => {
            document.getElementById('tc7').children[0].classList.remove('scrollani');
        }, 601);
    }
    if(height>4560)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.add('nav_a1');
        }
    }
    if(height>5990)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
    if(height<4560)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
})