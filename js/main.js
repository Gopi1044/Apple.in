let btn1=document.body.querySelector("nav ol").getElementsByTagName("li")
// console.log(btn1);
let model1=document.body.getElementsByClassName("sub_nav")
// console.log(model1);
let btn=[];
let model=[];
for(let i=1;i<11;i++){
    btn[i-1]=btn1[i]
    model[i-1]=model1[i-1]
}
let nav=document.querySelector("nav ol")
// nav.onmouseover=(e)=>{
//     console.log(e.target);
//     i=btn.indexOf(e.target)
//     if(!isNaN(i)){
//         event(i)
//     }
// }
nav.addEventListener("mouseover",(e)=>{
    i=btn.indexOf(e.target)
    if(!isNaN(i)){
        event(i)
    }
})
console.log(btn);
console.log(model);
let event = (i) => {
    btn[i].onmouseover = (e)=>{
        console.log(e.target);
        model[i].style.display="flex"
    }
    btn[i].onmouseleave = ()=>{
        model[i].style.display="none"
    }
    model[i].onmouseover = ()=>{
        model[i].style.display="flex"
    }
    model[i].onmouseleave= ()=>{
        model[i].style.display="none" 
    }
}
// btn[0].onmouseover=()=>event(0);
// btn[1].onmouseover=()=>event(1);
// btn[2].onmouseover=()=>event(2);
// btn[3].onmouseover=()=>event(3);
// btn[4].onmouseover=()=>event(4);
// btn[5].onmouseover=()=>event(5);
// btn[6].onmouseover=()=>event(6);
// btn[7].onmouseover=()=>event(7);
// btn[8].onmouseover=()=>event(8);
// btn[9].onmouseover=()=>event(9);





// let store=document.getElementById("nav btn 1")
// let sub_store=document.getElementById("store")
//
// store.onmouseover = ()=>{
//     sub_store.style.display="flex"
// }
// store.onmouseleave = ()=>{
//     sub_store.style.display="none"
// }
// sub_store.onmouseover = ()=>{
//     sub_store.style.display="flex"
// }
// sub_store.onmouseleave= ()=>{
//     sub_store.style.display="none" 
// }



// let mac=document.getElementById("nav btn 2")
// let sub_mac=document.getElementById("mac")
// mac.onmouseover = ()=>{
//     sub_mac.style.display="flex"
// }
// mac.onmouseleave = ()=>{
//     sub_mac.style.display="none"
// }
// sub_mac.onmouseover = ()=>{
//     sub_mac.style.display="flex"
// }
// sub_mac.onmouseleave= ()=>{
//     sub_mac.style.display="none"
// }


// let ipad=document.getElementById("nav btn 3")
// let sub_ipad=document.getElementById("ipad")
// ipad.onmouseover = ()=>{
//     sub_ipad.style.display="flex"
// }
// ipad.onmouseleave = ()=>{
//     sub_ipad.style.display="none"
// }
// sub_ipad.onmouseover = ()=>{
//     sub_ipad.style.display="flex"
// }
// sub_ipad.onmouseleave= ()=>{
//     sub_ipad.style.display="none"
// }


// let iphone=document.getElementById("nav btn 4")
// let sub_iphone=document.getElementById("iphone")
// iphone.onmouseover = ()=>{
//     sub_iphone.style.display="flex"
// }
// iphone.onmouseleave = ()=>{
//     sub_iphone.style.display="none"
// }
// sub_iphone.onmouseover = ()=>{
//     sub_iphone.style.display="flex"
// }
// sub_iphone.onmouseleave= ()=>{
//     sub_iphone.style.display="none"
// }


// let watch=document.getElementById("nav btn 5")
// let sub_watch=document.getElementById("watch")
// watch.onmouseover = ()=>{
//     sub_watch.style.display="flex"
// }
// watch.onmouseleave = ()=>{
//     sub_watch.style.display="none"
// }
// sub_watch.onmouseover = ()=>{
//     sub_watch.style.display="flex"
// }
// sub_watch.onmouseleave= ()=>{
//     sub_watch.style.display="none"
// }


// let airpods=document.getElementById("nav btn 6")
// let sub_airpods=document.getElementById("airpods")
// airpods.onmouseover = ()=>{
//     sub_airpods.style.display="flex"
// }
// airpods.onmouseleave = ()=>{
//     sub_mac.style.display="none"
// }
// sub_airpods.onmouseover = ()=>{
//     sub_airpods.style.display="flex"
// }
// sub_airpods.onmouseleave= ()=>{
//     sub_airpods.style.display="none"
// }

// let tv=document.getElementById("nav btn 7")
// let sub_tv=document.getElementById("tv")
// tv.onmouseover = ()=>{
//     sub_tv.style.display="flex"
// }
// tv.onmouseleave = ()=>{
//     sub_tv.style.display="none"
// }
// sub_tv.onmouseover = ()=>{
//     sub_tv.style.display="flex"
// }
// sub_tv.onmouseleave= ()=>{
//     sub_tv.style.display="none"
// }


// let entertainment=document.getElementById("nav btn 8")
// let sub_entertainment=document.getElementById("entertainment")
// entertainment.onmouseover = ()=>{
//     sub_entertainment.style.display="flex"
// }
// entertainment.onmouseleave = ()=>{
//     sub_mac.style.display="none"
// }
// sub_mac.onmouseover = ()=>{
//     sub_entertainment.style.display="flex"
// }
// sub_entertainment.onmouseleave= ()=>{
//     sub_entertainment.style.display="none"
// }



// let accessories=document.getElementById("nav btn 9")
// let sub_accessories=document.getElementById("accessories")
// accessories.onmouseover = ()=>{
//     sub_accessories.style.display="flex"
// }
// accessories.onmouseleave = ()=>{
//     sub_accessories.style.display="none"
// }
// sub_accessories.onmouseover = ()=>{
//     sub_accessories.style.display="flex"
// }
// sub_accessories.onmouseleave= ()=>{
//     sub_accessories.style.display="none"
// }


// let support=document.getElementById("nav btn 10")
// let sub_support=document.getElementById("support")
// support.onmouseover = ()=>{
//     sub_support.style.display="flex"
// }
// support.onmouseleave = ()=>{
//     sub_support.style.display="none"
// }
// sub_support.onmouseover = ()=>{
//     sub_support.style.display="flex"
// }
// sub_support.onmouseleave= ()=>{
//     sub_support.style.display="none"
// }
