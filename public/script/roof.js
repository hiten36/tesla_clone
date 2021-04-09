document.getElementById('main_nav').style.display='block';
var b2 = document.querySelectorAll('.sp16_inner1');
for (b of b2) {
    b.addEventListener('click', (e) => {
        if ((!e.target.classList.contains('sp16_active')) && !(e.target.parentNode.classList.contains('sp16_active'))) {
            if((e.target.id.slice(6,)>3 || e.target.parentNode.id.slice(6,)>3) && document.querySelector('.sp16_active').id.slice(6,)<3)
            {
                let b11=document.querySelectorAll('.sp16_inner1');
                    for(i of b11)
                    {
                        i.classList.add('roof_an4');
                        i.classList.add('roof_anp1');
                        i.classList.remove('roof_an5');
                        i.classList.remove('roof_an1');
                        i.classList.remove('roof_an');
                        i.classList.remove('roof_an2');
                        i.classList.remove('roof_an3');
                        i.classList.remove('roof_anp');
                    }
            }
            else if((e.target.id.slice(6,)<3 && e.target.parentNode.id.slice(6,)<3) && document.querySelector('.sp16_active').id.slice(6,)>3){
                let b11=document.querySelectorAll('.sp16_inner1');
                for(i of b11)
                {
                    i.classList.remove('roof_an4');
                    i.classList.remove('roof_anp1');
                    i.classList.add('roof_an5');
                    i.classList.remove('roof_an1');
                    i.classList.remove('roof_an');
                    i.classList.remove('roof_an2');
                    i.classList.remove('roof_an3');
                    i.classList.remove('roof_anp');
                }
            }
            if((e.target.id=='sp16_i3' || e.target.parentNode.id=='sp16_i3'))
            {
                if(document.querySelector('.sp16_active').id.slice(6,)<3)
                {
                    let b11=document.querySelectorAll('.sp16_inner1');
                    for(i of b11)
                    {
                        i.classList.remove('roof_an4');
                        i.classList.remove('roof_an5');
                        i.classList.remove('roof_an3');
                        i.classList.add('roof_an');
                        i.classList.add('roof_anp');
                        i.classList.remove('roof_an2');
                        i.classList.remove('roof_an1');
                        i.classList.remove('roof_anp1');
                    }
                }
                else
                {
                    let b11=document.querySelectorAll('.sp16_inner1');
                    for(i of b11)
                    {
                        i.classList.remove('roof_an4');
                        i.classList.remove('roof_an5');
                        i.classList.remove('roof_an3');
                        i.classList.remove('roof_an1');
                        i.classList.remove('roof_an');
                        i.classList.add('roof_anp');
                        i.classList.remove('roof_anp1');
                        i.classList.add('roof_an2');
                    }
                }
            }
            if(document.querySelector('.sp16_active').id=='sp16_i3')
            {
                if(e.target.id.slice(6,)>3 || e.target.parentNode.id.slice(6,)>3)
                {
                    let b11=document.querySelectorAll('.sp16_inner1');
                    for(i of b11)
                    {
                        i.classList.remove('roof_an4');
                        i.classList.remove('roof_an2');
                        i.classList.remove('roof_an5');
                        i.classList.remove('roof_an');
                        i.classList.remove('roof_anp');
                        i.classList.remove('roof_an3');
                        i.classList.add('roof_an1');
                        i.classList.add('roof_anp1');
                    }
                }
                else
                {
                    let b11=document.querySelectorAll('.sp16_inner1');
                    for(i of b11)
                    {
                        i.classList.remove('roof_an4');
                        i.classList.remove('roof_an2');
                        i.classList.remove('roof_an5');
                        i.classList.remove('roof_an');
                        i.classList.remove('roof_anp');
                        i.classList.remove('roof_an1');
                        i.classList.remove('roof_anp1');
                        i.classList.add('roof_an3');
                        
                    }
                }
            }
            var ids = document.querySelector('.sp16_active').id;
            document.getElementById(ids).classList.remove('sp16_active');
            var bor = document.getElementById(ids).children[0];
            bor.style.display = 'block';
            let b_clickpos = e.target.getBoundingClientRect().left;
            let b_currpos = document.getElementById(ids).getBoundingClientRect().left;
            let offset_pos = Math.ceil(b_clickpos - b_currpos);
            if (e.target.tagName != 'DIV') {
                offset_pos -= 20;
            }
            offset_pos -= 4;
            var pos = 0;
            var pos1 = 0;
            var pos2 = 1;
            var id = null;
            clearInterval(id);
            id = setInterval(frame, 5);
            function frame() {
                if (offset_pos > 0) {
                    if (pos1 >= offset_pos) {
                        bor.style.display = 'none';
                        if (e.target.tagName != 'DIV') {
                            e.target.parentNode.classList.add('sp16_active');
                        }
                        else {
                            e.target.classList.add('sp16_active');
                        }
                        clearInterval(id);
                    } else {
                        pos += pos2 * 6;
                        pos1 += pos2 * 6;
                        bor.style.left = pos + "px";
                    }
                }
                else {
                    if (pos1 <= offset_pos) {
                        bor.style.display = 'none';
                        if (e.target.tagName != 'DIV') {
                            e.target.parentNode.classList.add('sp16_active');
                        }
                        else {
                            e.target.classList.add('sp16_active');
                        }
                        clearInterval(id);
                    } else {
                        pos -= pos2 * 6;
                        pos1 -= pos2 * 6;
                        bor.style.left = pos + "px";
                    }
                }
            }
        }
    })
}
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
    if(height>1007)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
    if(height>2066)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.add('nav_a1');
        }
    }
    if(height>3973)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
    if(height>6198)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.add('nav_a1');
        }
    }
    if(height>7150)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
    if(height>8420)
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