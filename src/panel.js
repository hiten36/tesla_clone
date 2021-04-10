export function panel_js() {
    document.getElementById('main_nav').style.display = 'block';
    document.getElementsByClassName('sb')[0].addEventListener('click', () => {
        document.getElementById('menu_logo').style.display = 'none';
        document.getElementById('close_logo').style.display = 'block';
        document.querySelector('.sidebox').classList.add('side_ani');
        document.querySelector('.sidebox').classList.add('side_ani1');
        document.querySelector('.sidebox').classList.remove('side_ani2');
        document.querySelector('.sidebox').classList.remove('side_ani3');
    })
    document.getElementsByClassName('sb')[1].addEventListener('click', () => {
        document.getElementById('menu_logo').style.display = 'block';
        document.getElementById('close_logo').style.display = 'none';
        document.querySelector('.sidebox').classList.remove('side_ani');
        document.querySelector('.sidebox').classList.remove('side_ani1');
        document.querySelector('.sidebox').classList.add('side_ani2');
        document.querySelector('.sidebox').classList.add('side_ani3');
    })
    document.addEventListener('mouseup', (e) => {
        document.getElementById('menu_logo').style.display = 'block';
        document.getElementById('close_logo').style.display = 'none';
        let b1 = document.querySelector('.sidebox');
        let b2 = document.getElementById('menu_logo');
        if (!b1.contains(e.target) && !b2.contains(e.target)) {
            if (document.querySelector('.sidebox').classList.contains('side_ani')) {
                document.querySelector('.sidebox').classList.remove('side_ani');
                document.querySelector('.sidebox').classList.remove('side_ani1');
                document.querySelector('.sidebox').classList.add('side_ani2');
                document.querySelector('.sidebox').classList.add('side_ani3');
            }
        }
    })
    window.addEventListener('scroll', () => {
        var height = document.documentElement.scrollTop;
        if (height > 530) {
            let b = document.querySelectorAll('.nav_a');
            for (var i of b) {
                i.classList.add('nav_a1');
            }
        }
        if (height > 1007) {
            let b = document.querySelectorAll('.nav_a');
            for (var i of b) {
                i.classList.remove('nav_a1');
            }
        }
        if (height > 2013) {
            let b = document.querySelectorAll('.nav_a');
            for (var i of b) {
                i.classList.add('nav_a1');
            }
        }
        if (height > 2966) {
            let b = document.querySelectorAll('.nav_a');
            for (var i of b) {
                i.classList.remove('nav_a1');
            }
        }
        if (height > 5933) {
            let b = document.querySelectorAll('.nav_a');
            for (var i of b) {
                i.classList.add('nav_a1');
            }
        }
        if (height > 6670) {
            let b = document.querySelectorAll('.nav_a');
            for (var i of b) {
                i.classList.remove('nav_a1');
            }
        }
        if (height > 6930) {
            let b = document.querySelectorAll('.nav_a');
            for (var i of b) {
                i.classList.add('nav_a1');
            }
        }
        if (height < 530) {
            let b = document.querySelectorAll('.nav_a');
            for (var i of b) {
                i.classList.remove('nav_a1');
            }
        }
    })
}