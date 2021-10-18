let values = document.querySelector(".values");
let guests = document.querySelector(".guests_lists");
let plus_m = document.querySelector(".plus_matures");
let minus_m = document.querySelector(".min_matures");
let mature = document.querySelector(".matures_value");
    let matureVal = 0;
let plus_c = document.querySelector(".plus_child");
let minus_c = document.querySelector(".min_child");
let child = document.querySelector(".child_value");
    let childVal = 0;
let plus_b = document.querySelector(".plus_baby");
let minus_b = document.querySelector(".min_baby");
let baby = document.querySelector(".baby_value");
    let babyVal = 0;
let subm = document.querySelector(".sub");
let clear = document.querySelector(".clear");
    plus_m.onclick = function(){
        matureVal ++;
        mature.textContent = matureVal;
    }
    minus_m.onclick = function(){
        matureVal --;
        mature.textContent = matureVal;
    }
    plus_c.onclick = function(){
        childVal ++;
        child.textContent = childVal;
    }
    minus_c.onclick = function(){
        childVal --;
        child.textContent = childVal;
    }
    plus_b.onclick = function(){
        babyVal ++;
        baby.textContent = babyVal;
    }
    minus_b.onclick = function(){
        babyVal --;
        baby.textContent = babyVal;
    }
    values.onclick = function(){
        guests.classList.toggle("guests_lists-non");
    }
let guest = " гость";

subm.onclick = function(){
    if(matureVal + childVal + babyVal > 1){
        guest = " гостей";
    }
    values.textContent = matureVal + childVal + babyVal + guest;
}

clear.onclick = function(){
    matureVal = 0;
    childVal = 0;
    babyVal = 0;
    mature.textContent = matureVal;
    child.textContent = childVal;
    baby.textContent = babyVal;
    values.textContent = "Сколько гостей";
}
