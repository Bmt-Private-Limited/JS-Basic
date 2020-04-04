document.getElementById("show").addEventListener("click" , function(){

    document.getElementById("box").style.opacity="1";

})

document.getElementById("hide").addEventListener("click" , function(){

    document.getElementById("box").style.opacity="0";
})



document.getElementById("show1").addEventListener("click" , function(){

    document.getElementById("box1").setAttribute(
        "style","transform:rotate(360deg)"
    )

})

document.getElementById("hide1").addEventListener("click" , function(){

    document.getElementById("box1").setAttribute(
        "style","transform:rotate(-360deg)"
    )

})


document.getElementById("menushow").addEventListener("click" , function(){

    document.getElementById("menubar").setAttribute(
        "style","transform:scaleY(1)"
    )
})



document.getElementById("hidemenu").addEventListener("click" , function(){

    document.getElementById("menubar").setAttribute(
        "style","transform:scaleY(0)"
    )
})
