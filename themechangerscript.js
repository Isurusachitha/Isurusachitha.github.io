console.log("  Its Working!")

let theme = localStorage.getItem("theme")

if(theme==null){

    setTheme("blue")

}else {
    setTheme(theme)
}


let themeDots = document.getElementsByClassName('theme-dot')

for ( let i = 0; themeDots.length > i; i++) {

     themeDots[i].addEventListener('click',function (){

         let  mode  = this.dataset.mode
         console.log("Option clicked",mode)
         setTheme(mode)
     } )
}

function setTheme(mode){

    if(mode=="light"){
        document.getElementById("theme-style").href = "light.css"

    }
    if(mode=="blue"){
        document.getElementById("theme-style").href = "default_blue.css"

    }

    if(mode=="green"){

        document.getElementById("theme-style").href = "green.css"
    }

    if(mode=="purple"){

        document.getElementById("theme-style").href = "purple.css"
    }

    localStorage.setItem("theme",mode)

}

document.getElementById("submit-btn").addEventListener('click',function (){

    window.alert(" Contact Form is Under-construction . Please use LinkedIn or Email to Reach me");

} )