const scrSize = document.getElementById("wh");
const unreads = document.getElementsByClassName("unread");
const unreadID = document.getElementById("post7");
const markRead = document.getElementById("read");
const dotUnread = document.getElementsByClassName("dotUnread");
const notiCount = document.getElementById("notiCount");
let i = 0;
let counts = 3;
markRead.addEventListener("click", function() {
    for(i; i < (dotUnread.length); i++) {
        dotUnread[i].style.display="none";
        unreads[i].style.backgroundColor = "white";
        notiCount.innerHTML = 0;
    }
    
})

for(let x of unreads) {
    x.addEventListener("click", function() {
        
        this.classList = "read";
        counts -= 1;
        notiCount.innerHTML = counts;
        if(counts < 0) {
            notiCount.innerHTML = 0;
        }
        
        console.log(unreads);
        // console.log(this.children)
        
    })
}

function size () {
    let h = window.innerHeight;
    let w = window.innerWidth;
    scrSize.innerHTML = w + "x" + h + " wxh";
}