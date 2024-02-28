
const profileSecoundPartHide = document.querySelector("#einklappen");
const profileClosingButton = document.querySelector("#btn");
const verfiedTickOnProfile = document.querySelector('#tickbtn');
const msgbox = document.querySelector('#msg');
const msgBoxClosingButton = document.querySelector('#msgbtn');
const badges = document.getElementById('btnbadges');
const playlists = document.querySelector('#playlists');
const badgesITC = document.querySelector('.itc');
const spotifyClosingButton = document.querySelector('#btnspo');

const githubClosingButton = document.querySelector('#gitbtn');
const githubProjects = document.querySelector('#gitpr');
const showMoreButton = document.querySelector('#showmore');
const moreLinksMsgBox = document.querySelector('#lmsgb-id');
const moreLinksMsgBoxClosingButton = document.querySelector('#btnwl');

badgesITC.classList.add('show');
profileSecoundPartHide.classList.add("show");
playlists.classList.add("show");
githubProjects.classList.add("show");

window.addEventListener("resize", (event) => {
    changeBackgroundIMG();
});

profileClosingButton.addEventListener("click", () => {
    if(profileSecoundPartHide.classList.contains("show")){
        profileSecoundPartHide.classList.remove("show");
        profileSecoundPartHide.classList.add("notshown")
        profileClosingButton.innerHTML = "□"
    } else {
        profileSecoundPartHide.classList.add("show");
        profileSecoundPartHide.classList.remove("notshown")
        profileClosingButton.innerHTML = "&times"
    }

});

githubClosingButton.addEventListener("click", () => {
    if(githubProjects.classList.contains("show")){
        githubProjects.classList.remove("show");
        githubProjects.classList.add("notshown")
        githubClosingButton.innerHTML = "□"
    } else {
        githubProjects.classList.add("show");
        githubProjects.classList.remove("notshown")
        githubClosingButton.innerHTML = "&times"
    }

});

verfiedTickOnProfile.addEventListener("click", () => {
    if(msgbox.classList.contains("show")){
       
    } else {
        msgbox.classList.add("show");
        msgbox.classList.remove("notshown")
    }
})

msgBoxClosingButton.addEventListener("click", () => {
    msgbox.classList.remove("show"); 
    msgbox.classList.add("notshown");
});

badges.addEventListener("click", () => {
    if(badgesITC.classList.contains("show")){
        badgesITC.classList.remove("show");
        badgesITC.classList.add("notshown")
        badges.innerHTML = "□"
    } else {
        badgesITC.classList.add("show");
        badgesITC.classList.remove("notshown")
        badges.innerHTML = "&times"
    }
});



spotifyClosingButton.addEventListener("click", () =>  {
 if(playlists.classList.contains("show")){
    playlists.classList.remove("show");
    playlists.classList.add("notshown")
    spotifyClosingButton.innerHTML = "□"
 } else {
    playlists.classList.add("show");
    playlists.classList.remove("notshown")
    spotifyClosingButton.innerHTML = "&times"
 }


});

moreLinksMsgBox.classList.add("notshown");

showMoreButton.addEventListener("click", () =>{
    moreLinksMsgBox.classList.remove("notshown");
    moreLinksMsgBox.classList.add("show");
})

moreLinksMsgBoxClosingButton.addEventListener("click", () =>{
    moreLinksMsgBox.classList.remove("show");
    moreLinksMsgBox.classList.add("notshown");
})

function changeBackgroundIMG(){
    if (window.innerWidth < 800){
        document.getElementById("backgr").src = "src/m1.jpg"
        console.log("gewechselt")
    }
    if (window.innerWidth > 800){
        document.getElementById("backgr").src = "src/bg1.png"
    }
}