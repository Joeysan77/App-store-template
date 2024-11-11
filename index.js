var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("header").style.top = "0px";
    document.getElementById("options").style.bottom = "0px";
    document.getElementById("hech").className = "fa-solid fa-chevron-up"
    a = 1
    document.getElementById("container").style.paddingTop = "60px"
  } else {
  document.getElementById("options").style.bottom = "-53px";
    document.getElementById("hech").className = "fa-solid fa-chevron-down"
    a = 0
    document.getElementById("container").style.paddingTop = "10px"
    document.getElementById("header").style.top = "-53px";
  }
  prevScrollpos = currentScrollPos;
}
a = 1
function turn() {
    if (a == 1) {
        document.getElementById("options").style.bottom = "-53px";
    document.getElementById("hech").className = "fa-solid fa-chevron-down"
    document.getElementById("container").style.paddingTop = "10px"
    document.getElementById("header").style.top = "-53px";
    a = 0
    }
    else if (a == 0) {
        document.getElementById("header").style.top = "0px";
    document.getElementById("options").style.bottom = "0px";
    document.getElementById("hech").className = "fa-solid fa-chevron-up"
    a = 1
    document.getElementById("container").style.paddingTop = "60px"
    }
}
function darke() {
    dark = document.getElementById("dark")
    dark.style.display = "block"
    function dark1() {
        dark.style.background = "rgb(0,0,0,0.6)"
        dark.style.backdropFilter = "blur(20px)"
    }
   setTimeout(dark1 , 50)
}

function darkk() {
    dark = document.getElementById("dark")
    dark.style.background = "transparent"
    dark.style.backdropFilter = "blur(0px)"
    function darkk1() {
        
        dark.style.display = "none"
    }
   setTimeout(darkk1 , 500)
}
function men() {
    menn = document.getElementById("menu")
    sediv = document.getElementById("search-div")
    too = document.getElementById("tool")
    pla = document.getElementById("platf")
    too2 = document.getElementById("tool2")
    menn.style.display = "block"
    function mer() {
    menn.style.opacity = "1"
    menn.style.right = "0"
    setTimeout(men1 , 300)
        function men1() {
        too.style.opacity = "1"
        setTimeout(men2 , 300)
        function men2() {  
            too2.style.opacity = "1"
            setTimeout(men3 , 300)
            function men3() {
            sediv.style.opacity = "1"
                
                setTimeout(men4 , 300)
                function men4() {
                    pla.style.opacity = "1"
                }
            }
        }
    }
  }
    darke()
    setTimeout(mer , 50)
}
function closer() {
    menn = document.getElementById("menu")
    sediv = document.getElementById("search-div")
    too = document.getElementById("tool")
    pla = document.getElementById("platf")
    too2 = document.getElementById("tool2")
    sediv.style.opacity = "0"
    too.style.opacity = "0"
    pla.style.opacity = "0"
    too2.style.opacity = "0"
    function menn1() {
        menn.style.right = "-100%"
        menn.style.opacity = "0"
        function menn2() {
            menn.style.display = "none"
        }
        setTimeout(menn2 , 500)
    }
    setTimeout(menn1 , 150)
    setTimeout(darkk , 150)
}
function sear() {

    sediv = document.getElementById("seh")
    seh = document.getElementById("sec")
   seh.style.position = "fixed"
   sediv.style.display = "flex"
    function searc() {
    seh.style.height = "100%"
    seh.style.width = "100%"
    seh.style.top = "0"
    seh.style.backdropFilter = "blur(20px)"
    seh.style.opacity = "1"
    sediv.style.opacity = "1"
    }
    setTimeout(searc ,100)
}
function searr() {

    seh = document.getElementById("sec")
    sediv = document.getElementById("seh")
    seh.style.height = ""
    seh.style.width = "100%"
    seh.style.backdropFilter = "blur(0px)"
    sediv.style.opacity = "0"
    seh.style.top= "32.5%"
    function searc() {
    seh.style.position = ""
   sediv.style.display = "none"
    }
    setTimeout(searc ,250)
}
function showsub() {
    sub = document.getElementById("sub")
    sub.style.display = "block"
    function ssub() {
        sub.style.opacity = "1"
        sub.style.bottom = "0"
        
    }
    setTimeout(ssub , 50)
}
function hidesub() {
    sub = document.getElementById("sub")
    
    sub.style.opacity = "0"
        sub.style.bottom = "-50%"
    function hsub() {
        sub.style.display = "none"
        
    }
    setTimeout(hsub , 300)
}
function minec() {
    document.getElementById("subimg").src = "game-images/small-minecraft.jpg"
    document.getElementById('subp').innerHTML = "MOJANG - Minecraft Bedrock (MCPE)"
    showsub()
    darked()
}
function freef() {
    document.getElementById("subimg").src = "game-images/small-freefire.jpg"
    document.getElementById('subp').innerHTML = "GARENA - FreeFire - mobile"
    showsub()
    darked()
}
function pugbm() {
    document.getElementById("subimg").src = "game-images/small-pugb.jpg"
    document.getElementById('subp').innerHTML = "PUGB - mobile"
    showsub()
    darked()
}
function ange() {
    document.getElementById("subimg").src = "game-images/small-anger.jpg"
    document.getElementById('subp').innerHTML = "Anger of stick 5"
    showsub()
    darked()
}

function codm() {
    document.getElementById("subimg").src = "game-images/small-codm.jpg"
    document.getElementById('subp').innerHTML = "Call of duty - MOBILE"
    showsub()
    darked()
}

function angrybirds() {
    document.getElementById("subimg").src = "game-images/small-angrybirds.jpg"
    document.getElementById('subp').innerHTML = "Angry Birds"
    showsub()
    darked()
}

function candy() {
    document.getElementById("subimg").src = "game-images/small-candy.jpg"
    document.getElementById('subp').innerHTML = "Candy Crush SAGA"
    showsub()
    darked()
}
function darked() {
    dark = document.getElementById("dark")
    dark.style.display = "block"
    function dark1() {
        dark.style.background = "rgb(0,0,0,0.2)"
        dark.style.backdropFilter = "blur(p0px)"
    }
   setTimeout(dark1 , 50)
}
function showlogin() {
   login =  document.getElementById("login")
   login.style.display = "block"
   function showlog() {
       login.style.opacity = "1"
   }
   setTimeout(showlog , 50)
   darke()
}

function hidelogin() {
   login =  document.getElementById("login")
   
   login.style.opacity = "0"
   function hidelog() {
       login.style.display = "none"
   }
   setTimeout(hidelog , 500)
   darkk()
}
function runb() {
    logema = document.getElementById("loginemail")
    corr = document.getElementById("corr")
    loed =document.getElementById("loed")
    lma = logema.value
    if (lma.includes(".com") == false && lma.length >= 1) {
        corr.className = "fa fa-x"
        corr.style.color = "orangered"
        loed.style.background = "transparent"
    }
    else if (lma.includes(".com") == true  &&  lma.length > 6) {
        corr.className = 'fa fa-check'
        corr.style.color = '#4bb543'
        loed.style.background = 'rgb(75,181,67,0.2)'
    }
    else if (lma.includes(".com") == false && lma.length == 0) {
        corr.className = ''
    }
    else if (lma.includes(".com") == true  &&  lma.length <= 6) {
        corr.className = 'fa fa-x'
        corr.style.color = 'red'
        loed.style.background = 'transparent'
    }
}