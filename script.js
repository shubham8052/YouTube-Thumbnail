function CreateCard(title, cname, views, monthold, duration, thumbnail) {
    let viewstr
    if (views < 1000) {
        viewstr = views / 1000 + "K";
    }
    else if (views > 1000000) {
        viewstr = views / 1000000 + "M";
    } else {
        viewstr = views / 1000 + "K";
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="">
            </div>
            <div class="capsule">${duration}</div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cname} . ${viewstr} views . ${monthold} month ago</p>
            </div>
        </div>`
        document.querySelector(".container").innerHTML=document.querySelector(".container").innerHTML + html
}

CreateCard("Introduction to Backend || Sigma web development course -Tutorial #1", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")
