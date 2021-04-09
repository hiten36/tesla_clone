document.getElementById('main_nav').style.display='block';
var i1 = document.getElementById('i1');
var i2 = document.getElementById('i2');
var i3 = document.getElementById('i3');
i2.style.display = 'none';
i3.style.display = 'none';
document.getElementById('left').addEventListener('click', () => {
    if (document.getElementById('i1').style.display == 'none') {
        let ids2 = document.querySelector('.active_img').id;
        let ids3 = ids2.slice(1,);
        let sp3_inner=document.querySelectorAll('.sp3_inner');
        for(i of sp3_inner){
            let sp3_id=i.id.slice(9,);
            if(ids3-1!=sp3_id)
            {
                i.style.display='none';
            }
            else{
                i.style.display='block';
            }
        }
        document.getElementById(`l${ids3}`).classList.remove('active_dot');
        document.getElementById(`l${ids3}`).children[0].classList.add('dot2');
        document.querySelector('.active_img').classList.add('slide');
        setTimeout(() => {
            document.querySelector('.dot2').classList.remove('dot2');
            document.querySelector('.active_img').classList.remove('slide');
            id1 = document.querySelector('.active_img').id;
            document.getElementById(id1).classList.remove('active_img');
            document.getElementById(id1).style.display = 'none';
        }, 250);
        setTimeout(() => {
            let ids = document.getElementById(id1).previousElementSibling.id;
            let ids1 = ids.slice(1,);
            document.getElementById(`l${ids1}`).classList.add('active_dot');
            document.getElementById(id1).previousElementSibling.style.display = 'block';
            document.getElementById(id1).previousElementSibling.classList.add('slide2');
            document.getElementById(id1).previousElementSibling.classList.add('active_img');
        }, 250);
        setTimeout(() => {
            document.querySelector('.active_img').classList.remove('slide2');
        }, 500);
    }
    else {
        let sp3_inner=document.querySelectorAll('.sp3_inner');
        for(i of sp3_inner){
            let sp3_id=i.id.slice(9,);
            if(sp3_id==3)
            {
                i.style.display='block';
            }
            else{
                i.style.display='none';
            }
        }
        i1.classList.add('slide3');
        document.getElementById('l1').children[0].classList.add('dot3');
        document.getElementById('l1').classList.remove('active_dot');
        setTimeout(() => {
            i1.classList.remove('active_img');
            document.getElementById('l1').children[0].classList.remove('dot3');
            i1.classList.remove('slide3');
            i1.style.display = 'none';
        }, 250);
        setTimeout(() => {
            ids = i1.parentNode.children[i1.parentNode.children.length - 1].id;
            ids1 = ids.slice(1,);
            document.getElementById(`l${ids1}`).classList.add('active_dot');
            i1.parentNode.children[i1.parentNode.children.length - 1].style.display = 'block';
            i1.parentNode.children[i1.parentNode.children.length - 1].classList.add('active_img');
            i1.parentNode.children[i1.parentNode.children.length - 1].classList.add('slide4');
        }, 250);
        setTimeout(() => {
            i1.parentNode.children[i1.parentNode.children.length - 1].classList.remove('slide4');
        }, 500);
    }
})
document.getElementById('right').addEventListener('click', () => {
    if (document.getElementById('i3').style.display == 'none') {
        let ids1 = document.querySelector('.active_img').id;
        let ids2 = ids1.slice(1,);
        let sp3_inner=document.querySelectorAll('.sp3_inner');
        for(i of sp3_inner){
            let sp3_id=i.id.slice(9,);
            if((Number(ids2)+1)!=sp3_id){
                
                i.style.display='none';
            }
            else{
                i.style.display='block';
            }
        }
        document.getElementById(`l${ids2}`).children[0].classList.add('dot1');
        document.getElementById(`l${ids2}`).classList.remove('active_dot');
        document.querySelector('.active_img').classList.add('slide3');
        setTimeout(() => {
            document.querySelector('.active_img').classList.remove('slide3');
            id1 = document.querySelector('.active_img').id;
            let ids3 = id1.slice(1,);
            document.getElementById(`l${ids3}`).children[0].classList.remove('dot1');
            document.getElementById(`l${ids3}`).nextElementSibling.classList.add('active_dot');
            document.getElementById(id1).classList.remove('active_img');
            document.getElementById(id1).style.display = 'none';
        }, 250);
        setTimeout(() => {
            document.getElementById(id1).nextElementSibling.style.display = 'block';
            document.getElementById(id1).nextElementSibling.classList.add('slide4');
            document.getElementById(id1).nextElementSibling.classList.add('active_img');
        }, 250);
        setTimeout(() => {
            document.querySelector('.active_img').classList.remove('slide4');
        }, 500);
    }
    else {
        let sp3_inner=document.querySelectorAll('.sp3_inner');
        for(i of sp3_inner){
            let sp3_id=i.id.slice(9,);
            if(sp3_id==1)
            {
                i.style.display='block';
            }
            else{
                i.style.display='none';
            }
        }
        i3.classList.add('slide');
        document.getElementById('l3').children[0].classList.add('dot4');
        document.getElementById('l3').classList.remove('active_dot');
        setTimeout(() => {
            i3.classList.remove('active_img');
            i3.classList.remove('slide');
            document.getElementById('l3').children[0].classList.remove('dot4');
            i3.style.display = 'none';
        }, 250);
        setTimeout(() => {
            let ids1 = i3.parentNode.children[0].id;
            let ids2 = ids1.slice(1,);
            document.getElementById(`l${ids2}`).classList.add('active_dot');
            i3.parentNode.children[0].style.display = 'block';
            i3.parentNode.children[0].classList.add('active_img');
            i3.parentNode.children[0].classList.add('slide2');
        }, 250);
        setTimeout(() => {
            i3.parentNode.children[0].classList.remove('slide2');
        }, 500);
    }
})
document.querySelector('.sp11_inner1').addEventListener('click',()=>{
    if(!document.querySelector('.sp11_inner1').classList.contains('sp11_active'))
    {
        document.querySelector('.sp11_inner2').classList.remove('sp11_active');
        document.querySelector('.sp11_bor2').style.display='block';
        document.querySelector('.sp11_bor2').classList.add('sp11_active_ani2');
        setTimeout(() => {
            document.querySelector('.sp11_bor2').style.display='none';
            document.querySelector('.sp11_bor2').classList.remove('sp11_active_ani2');
            document.querySelector('.sp11_inner1').classList.add('sp11_active');
            
        }, 495);
    }
})
document.querySelector('.sp11_inner2').addEventListener('click',()=>{
    if(!document.querySelector('.sp11_inner2').classList.contains('sp11_active'))
    {
        document.querySelector('.sp11_inner1').classList.remove('sp11_active');
        document.querySelector('.sp11_bor1').style.display='block';
        document.querySelector('.sp11_bor1').classList.add('sp11_active_ani1');
        setTimeout(() => {
            document.querySelector('.sp11_bor1').classList.remove('sp11_active_ani1');
            document.querySelector('.sp11_bor1').style.display='none';
            document.querySelector('.sp11_inner2').classList.add('sp11_active');
            
        }, 495);
    }
})
var b2=document.querySelectorAll('.sp16_inner1');
for(b of b2)
{
    b.addEventListener('click',(e)=>{
        if((!e.target.classList.contains('sp16_active')) && !(e.target.parentNode.classList.contains('sp16_active')))
        {
            var ids=document.querySelector('.sp16_active').id;
            document.getElementById(ids).classList.remove('sp16_active');
            var bor=document.getElementById(ids).children[0];
            bor.style.display='block';
            let b_clickpos=e.target.getBoundingClientRect().left;
            let b_currpos=document.getElementById(ids).getBoundingClientRect().left;
            let offset_pos=Math.ceil(b_clickpos-b_currpos);
            if(e.target.tagName!='DIV')
            {
                offset_pos-=20;
            }
            offset_pos-=4;
            var pos=0;
            var pos1=0;
            var pos2=1;
            var id=null;
            clearInterval(id);
            id = setInterval(frame, 5);
            function frame() {
                if(offset_pos>0)
                {
                    if (pos1 >= offset_pos) {
                        bor.style.display='none';
                        if(e.target.tagName!='DIV')
                        {
                            e.target.parentNode.classList.add('sp16_active');
                        }
                        else{
                            e.target.classList.add('sp16_active');
                        }
                        clearInterval(id);
                    } else {
                    pos+=pos2*6;
                    pos1+=pos2*6;
                    bor.style.left = pos + "px"; 
                    }
                }
                else{
                    if (pos1 <= offset_pos) {
                        bor.style.display='none';
                        if(e.target.tagName!='DIV')
                        {
                            e.target.parentNode.classList.add('sp16_active');
                        }
                        else{
                            e.target.classList.add('sp16_active');
                        }
                        clearInterval(id);
                    } else {
                    pos-=pos2*6;
                    pos1-=pos2*6;
                    bor.style.left = pos + "px"; 
                    }
                }
            }
        }
    })
}
document.getElementById('sp17_btn1').addEventListener('click',()=>{
    if(!document.getElementById('sp17_btn1').classList.contains('sp17_active'))
    {
        document.getElementById('sp17_btn1').classList.add('sp17_active');
        document.getElementById('sp17_btn2').classList.remove('sp17_active');
    }
})
document.getElementById('sp17_btn2').addEventListener('click',()=>{
    if(!document.getElementById('sp17_btn2').classList.contains('sp17_active'))
    {
        document.getElementById('sp17_btn2').classList.add('sp17_active');
        document.getElementById('sp17_btn1').classList.remove('sp17_active');
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
    if(height>742)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.add('nav_a1');
        }
    }
    if(height>4505)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
    if(height>7470)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.add('nav_a1');
        }
    }
    if(height>9637)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
    if(height>11858)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.add('nav_a1');
        }
    }
    if(height>12830)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
    if(height<742)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a1');
        }
    }
})