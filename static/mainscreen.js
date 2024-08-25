function slideup(){
    slide(0);
}

function slidedown()
{
    slide(1);
}

function screenani(obj){
    obj.style.opacity = 0;
}

var posscr = 1;
var prepos =posscr;
var no = 1;
function slide(number)
{
    if (no > 1)
    {
        document.getElementById('screen1').style.opacity = 0;
    }
    let s = document.getElementById('screen' + posscr);
    let imageout = document.getElementById('homeimage' + posscr);
    let text1out = document.getElementById('p1t' + posscr);
    let text2out = document.getElementById('p2t' + posscr);
    let linkout = document.getElementById('link' + posscr);
    
    imageout.classList.remove('animateimgin');
    imageout.classList.remove('animateimgout');
    text1out.classList.remove('animatetextin');
    text2out.classList.remove('animatetextin');
    linkout.classList.remove('animatetextin');
    void imageout.offsetWidth;

    imageout.classList.add('animateimgout');
    text1out.classList.add('animatetextout');
    text2out.classList.add('animatetextout');
    linkout.classList.add('animatetextout');

    // setTimeout(screenani(s), 999);

    prepos = posscr;

    if(number == 0)
    {
        if(posscr + 1 > 3 )
        {
            posscr = 1;
        }
        else
        {
            posscr = posscr+1;
        } 
    }
    else
    {
        if(posscr - 1 < 1 )
        {
            posscr = 3;
        }
        else
        {
            posscr = posscr-1;
        } 
    }

    

    
    let s1 = document.getElementById('screen' + posscr);
    imageout = document.getElementById('homeimage' + posscr);
    text1out = document.getElementById('p1t' + posscr);
    text2out = document.getElementById('p2t' + posscr);
    linkout = document.getElementById('link' + posscr);
    
    imageout.classList.remove('animateimgin');
    imageout.classList.remove('animateimgout');
    s1.classList.remove('animatefadein');
    text1out.classList.remove('animatetextin');
    text2out.classList.remove('animatetextin');
    linkout.classList.remove('animatetextin');
    text1out.classList.remove('animatetextout');
    text2out.classList.remove('animatetextout');
    linkout.classList.remove('animatetextout');
    void imageout.offsetWidth;
    void s1.offsetWidth;
    void text1out.offsetWidth;
    void text2out.offsetWidth;
    void linkout.offsetWidth;

    s1.style.zIndex = 100+no;

    s1.classList.add('animatefadein');
    imageout.classList.add('animateimgin');
    text1out.classList.add('animatetextin');
    text2out.classList.add('animatetextin');
    linkout.classList.add('animatetextin');

    no++;

    

}