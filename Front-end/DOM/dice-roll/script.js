
function random(){
    var ran = Math.random();//range [0,1)
    ran*=6;//range[0,6)
    ran+=1;//range[1,7)
    ran=Math.floor(ran);//range [1,6]
    return ran;
}

function image_gen(prefix){
    var image = prefix+".png";
    return image;
}

function change_heading(arg){
    document.querySelector("h1").textContent=arg;
}

function change_dice(dice_no,image){
    var img_arr = document.getElementsByTagName("img");
    var img = img_arr[dice_no-1];
    img.src = "image/"+image;

}

function winner(){
    var p1 = random();
    var p2 = random();
    console.log(p1,p2);
    change_dice(1,image_gen(p1));
    change_dice(2,image_gen(p2));
    if(p1>p2){
        change_heading("🚩 Winner Player 1");
    }
    else if(p1<p2){
        change_heading("🚩 Winner Player 2");

    }
    else{
        change_heading("Draw");
    }
}

window.onload = () => {
    if (sessionStorage.loaded) {
        winner();
    }
    sessionStorage.loaded = true;
};