const scrSize = document.getElementById("wh");
const unreads = document.getElementsByClassName("unread");
const unreadID = document.getElementById("post7");
const markRead = document.getElementById("read");
const dotUnread = document.getElementsByClassName("dotUnread");
const notiCount = document.getElementById("notiCount");
const unreadArr = Array.from(unreads);
const dots = Array.from(dotUnread);

let i = 0;
let counts = 3;
markRead.addEventListener("click", function() {
    for(i; i < (dotUnread.length); i++) {
        dotUnread[i].style.display="none";
        unreads[i].style.backgroundColor = "white";
        notiCount.innerHTML = 0;
    }
    
})




unreadArr.forEach( (button, index) => 
{
    button.addEventListener("click", () => 
    {
        dotUnread[index].style.display = "none";
        unreads[index].style.backgroundColor = "white";
        counts -= 1;
        notiCount.innerHTML = counts;
        if(counts < 0) {
            notiCount.innerHTML = 0;
        }

    });
})

function size () {
    let h = window.innerHeight;
    let w = window.innerWidth;
    scrSize.innerHTML = w + "x" + h + " wxh";
}