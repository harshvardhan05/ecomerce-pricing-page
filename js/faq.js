const spanQ1 = document.querySelector("#q1")
const spanQ2 = document.querySelector("#q2")
const spanQ3 = document.querySelector("#q3")
const spanQ4 = document.querySelector("#q4")
const spanQ5 = document.querySelector("#q5")
const spanQ6 = document.querySelector("#q6")
const spanQ7 = document.querySelector("#q7")
const spanQ8 = document.querySelector("#q8")
const spanQ9 = document.querySelector("#q9")
const spanQ10 = document.querySelector("#q10")
const spanQ11 = document.querySelector("#q11")
const spanQ12 = document.querySelector("#q12")


const ans1 = document.querySelector("#ans1")
const ans2 = document.querySelector("#ans2")
const ans3 = document.querySelector("#ans3")
const ans4 = document.querySelector("#ans4")
const ans5 = document.querySelector("#ans5")
const ans6 = document.querySelector("#ans6")
const ans7 = document.querySelector("#ans7")
const ans8 = document.querySelector("#ans8")
const ans9 = document.querySelector("#ans9")
const ans10 = document.querySelector("#ans10")
const ans11 = document.querySelector("#ans11")
const ans12 = document.querySelector("#ans12")

let count = 0;
spanQ1.addEventListener("click", function() {
    count = count + 1;
    console.log("clicked")
    if(count%2 != 0){
        ans1.style.display = "block"
        spanQ1.style.background  = "black"
    }
    else{
        ans1.style.display = "none"
        spanQ1.style.background = "white"
    }
    
})

spanQ2.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans2.style.display = "block" , spanQ2.style.background  = "black" ) : (ans2.style.display = "none", spanQ2.style.background = "white")
})

spanQ3.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans3.style.display = "block" , spanQ3.style.background  = "black" ) : (ans3.style.display = "none", spanQ3.style.background = "white")
})

spanQ4.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans4.style.display = "block" , spanQ4.style.background  = "black" ) : (ans4.style.display = "none", spanQ4.style.background = "white")
})

spanQ5.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans5.style.display = "block" , spanQ5.style.background  = "black" ) : (ans5.style.display = "none", spanQ5.style.background = "white")
})

spanQ6.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans6.style.display = "block" , spanQ6.style.background  = "black" ) : (ans6.style.display = "none", spanQ6.style.background = "white")
})

spanQ7.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans7.style.display = "block" , spanQ7.style.background  = "black" ) : (ans7.style.display = "none", spanQ7.style.background = "white")
})

spanQ8.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans8.style.display = "block" , spanQ8.style.background  = "black" ) : (ans8.style.display = "none", spanQ8.style.background = "white")
})

spanQ9.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans9.style.display = "block" , spanQ9.style.background  = "black" ) : (ans9.style.display = "none", spanQ9.style.background = "white")
})

spanQ10.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans10.style.display = "block" , spanQ10.style.background  = "black" ) : (ans10.style.display = "none", spanQ10.style.background = "white")
})

spanQ11.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans11.style.display = "block" , spanQ11.style.background  = "black" ) : (ans11.style.display = "none", spanQ11.style.background = "white")
})

spanQ12.addEventListener("click", function() {
    count = count + 1
    count%2 != 0 ? (ans12.style.display = "block" , spanQ12.style.background  = "black" ) : (ans12.style.display = "none", spanQ12.style.background = "white")
})