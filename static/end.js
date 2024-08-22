const observer1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('animateshow1');
        }


    });
},{
    threshold : 0.5,
});

const s1 = document.getElementById('show1');
observer1.observe(s1);

const observer2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show2');
        }


    });
},{
    threshold : 0.5,
});

const s2 = document.querySelectorAll('.line');
s2.forEach((el)=>observer2.observe(el));