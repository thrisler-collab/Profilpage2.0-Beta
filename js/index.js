

const ek = document.querySelector("#einklappen");
const but = document.querySelector("#btn");
const tickbtn = document.querySelector('#tickbtn');
const msgbox = document.querySelector('#msg');
const msgbtn = document.querySelector('#msgbtn');
const badges = document.getElementById('btnbadges');
const pl = document.querySelector('#playlists');
const bgs = document.querySelector('.itc');
const plbtn = document.querySelector('#btnspo');

const gitbtn = document.querySelector('#gitbtn');
const gitpr = document.querySelector('#gitpr');
const showmore = document.querySelector('#showmore');
const lmsgb = document.querySelector('#lmsgb-id');
const lmsgbbtn = document.querySelector('#btnwl');

bgs.classList.add('show');
ek.classList.add("show");
pl.classList.add("show");
gitpr.classList.add("show");

but.addEventListener("click", () => {
    if(ek.classList.contains("show")){
        ek.classList.remove("show"); 
        ek.classList.add("notshown")
        but.innerHTML = "□"
    } else {
        ek.classList.add("show");
        ek.classList.remove("notshown")
        but.innerHTML = "&times"
    }

});

gitbtn.addEventListener("click", () => {
    if(gitpr.classList.contains("show")){
        gitpr.classList.remove("show");
        gitpr.classList.add("notshown")
        gitbtn.innerHTML = "□"
    } else {
        gitpr.classList.add("show");
        gitpr.classList.remove("notshown")
        gitbtn.innerHTML = "&times"
    }

});

tickbtn.addEventListener("click", () => {
    if(msgbox.classList.contains("show")){
       
    } else {
        msgbox.classList.add("show");
        msgbox.classList.remove("notshown")
    }
})

msgbtn.addEventListener("click", () => {
    msgbox.classList.remove("show"); 
    msgbox.classList.add("notshown");
});

badges.addEventListener("click", () => {
    if(bgs.classList.contains("show")){
        bgs.classList.remove("show");
        bgs.classList.add("notshown")
        badges.innerHTML = "□"
    } else {
        bgs.classList.add("show");
        bgs.classList.remove("notshown")
        badges.innerHTML = "&times"
    }
});



plbtn.addEventListener("click", () =>  {
 if(pl.classList.contains("show")){
    pl.classList.remove("show");
    pl.classList.add("notshown")
    plbtn.innerHTML = "□"
 } else {
    pl.classList.add("show");
    pl.classList.remove("notshown")
    plbtn.innerHTML = "&times"
 }


});

lmsgb.classList.add("notshown");

showmore.addEventListener("click", () =>{
    lmsgb.classList.remove("notshown");
    lmsgb.classList.add("show");
})

lmsgbbtn.addEventListener("click", () =>{
    lmsgb.classList.remove("show");
    lmsgb.classList.add("notshown");
})

