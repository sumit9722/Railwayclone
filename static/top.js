function inanimation()
{
    const ele = document.querySelector('.menuopen');
    ele.classList.add('animatefadeind0');
}

function outanimation()
{
    const ele = document.querySelector('.menuopen');
    ele.classList.remove('animatefadeind0');
}

var toggle = false

function menuon(){
    const b1 = document.getElementById('bar1');
    const b2 = document.getElementById('bar2');
    const but = document.getElementById('but');
    const mainmenu = document.querySelector('.needed');
    const mainbar = document.querySelector('.menubar');
    const fullbody = document.querySelector('body');
    const nav = document.querySelector('.nav');
    const obs = document.querySelectorAll('.navitem1');

    if (toggle)
    {
        b1.classList.remove('rotate1');
        b2.classList.remove('rotate2');
        but.classList.remove('menuonbutton');
        mainmenu.style.display= 'none';
        mainbar.style.position='static';
        fullbody.style.overflow = 'auto';
        obs.forEach((ob)=>ob.style.opacity = 1);
        nav.style.backgroundColor = 'rgba(250, 250, 250, 0.8)';
        toggle=false;
        setTimeout(outanimation(), 50);
    }
    else{
        b1.classList.add('rotate1');
        b2.classList.add('rotate2');
        but.classList.add('menuonbutton');
        mainmenu.style.display= 'block';
        mainbar.style.position='fixed';
        fullbody.style.overflow = 'Hidden';
        obs.forEach((ob)=>ob.style.opacity= 0);
        nav.style.backgroundColor = 'black';
        toggle=true;
        setTimeout(inanimation(), 50);
    }
}

var lastScroll = window.pageYOffset;

window.addEventListener("scroll", () => {
    const body = document.body;
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
    ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
    }
    lastScroll = currentScroll;
});


var cursor = document.getElementById('mvideo');

document.addEventListener('mousemove', function(e){
    let x = e.clientX;
    let y = e.clientY;
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
});