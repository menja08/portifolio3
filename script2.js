//
textBox();
function textBox() {
    //select box
    let box = document.getElementById("projects");
    //box.style.borderColor = "red";
    let boxChildren = box.children;
    let slideLength = boxChildren.length;

    //select dots
    let threeDots = document.getElementById("threeDots");
    //threeDots.style.borderColor = "yellow";
    threeDotsChildren = threeDots.children;

    for(let i = 1; i < slideLength; i++) {
        boxChildren[i].style.display = "none";
    }

    let slideCounter = 0;

    setInterval(function () {
        setTimeout(function () {
            // display the current image of the slide
            boxChildren[slideCounter].style.display = "flex";//block
            threeDotsChildren[slideCounter].style.color = "green";

            //hide the rest of the images
            let j = 0;
            for(let i=0; i < slideLength; i++) {
                if(j !== slideCounter) {
                    boxChildren[j].style.display = "none";
                    threeDotsChildren[j].style.color = "grey";
                }
                j++;
            }
        }, 100);
        slideCounter++; //next slide to be displayed
        //reset slideCounter
        if(slideCounter === slideLength) {
            slideCounter = 0;
        }
    }, 4000);
}

/* add a mouse over listener(onmouseenter, onmouseout)
assign setInterval() a variable which can be cleared; on mouse leave, run setInterval again
* */