document.getElementById('main_nav').style.display='block';
document.getElementById('sp17_btn1').addEventListener('click',()=>{
    if(!document.getElementById('sp17_btn1').classList.contains('sp17_active'))
    {
        let cls=document.querySelectorAll('.sp17_btn');
        for(i of cls)
        {
            if(i.classList.contains('sp17_active'))
            {
                i.classList.remove('sp17_active');
            }
        }
        document.getElementById('sp17_btn1').classList.add('sp17_active');
    }
})
document.getElementById('sp17_btn2').addEventListener('click',()=>{
    if(!document.getElementById('sp17_btn2').classList.contains('sp17_active'))
    {
        let cls=document.querySelectorAll('.sp17_btn');
        for(i of cls)
        {
            if(i.classList.contains('sp17_active'))
            {
                i.classList.remove('sp17_active');
            }
        }
        document.getElementById('sp17_btn2').classList.add('sp17_active');
    }
})
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
window.addEventListener('scroll',()=>{
    var height = document.documentElement.scrollTop;
    if(height>530)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.add('nav_a1');
        }
    }
    if(height>963)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
    if(height>4937)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.add('nav_a1');
        }
    }
    if(height<530)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
})