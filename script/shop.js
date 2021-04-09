document.getElementById('main_nav').style.display='none';
let b=document.querySelectorAll('.shop_nav1');
for(i of b)
{
    i.addEventListener('mouseover',(e)=>{
        let ids=e.target.id.slice(6,);
        document.querySelector(`.sn${ids}`).style.display='flex';
        let b1=document.querySelectorAll('.nav_a');
        for(j of b1)
        {
            j.classList.remove('nav_a2');
        }
        let b2=document.querySelectorAll('.sn_nav');
        for(k of b2)
        {
            if(k.id!=document.querySelector(`.sn${ids}`).id)
            {
                k.style.display='none';
            }
        }
        document.querySelector(`.sn${ids}`).addEventListener('mouseleave',(e)=>{
            e.target.style.display='none';
            let b1=document.querySelectorAll('.nav_a');
            for(j of b1)
            {
                j.classList.add('nav_a2');
            }
        })
    })
}
window.addEventListener('scroll',()=>{
    var height=document.documentElement.scrollTop;
    if(height>835)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.remove('nav_a2');
        }
    }
    if(height<835)
    {
        let b=document.querySelectorAll('.nav_a');
        for(i of b)
        {
            i.classList.add('nav_a2');
        }
    }
})
document.getElementById('search_img1').addEventListener('click',()=>{
    document.getElementById('search_img').style.display='inline-flex';
    document.getElementById('search_img').classList.add('search_img_ani');
    setTimeout(() => {
        document.getElementById('search_img').style.width='20vmin';
        document.getElementById('search_img').style.right='-10%';
        document.getElementById('search_img').classList.remove('search_img_ani');
    }, 401);
})