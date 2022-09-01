const nft = $('#table');
const pallete = $('#pallete')
// const picker = $('#picker')
const picker = document.querySelector("#picker");

// picker.addEventListener("input", updateFirst, false);
picker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
//   document.querySelectorAll("p").forEach((p) => {
//     p.style.color = event.target.value;
//   });
console.log(event.target.value)
color = event.target.value
}

var color = 'rgb(100, 0, 0)'

function changeColor(){
    // color = $(this).css("background-color");
    // color = picker.value;
    console.log(picker.value)
}



function fill(){
    console.log(color)
    console.log($(this).css("background-color"))

    let old_color = $(this).css("background-color")//rgbToHex($(this).css("background-color"));



    if(old_color === color){

        console.log("erasing selection")

        $(this).css("background-color", 'rgb(255, 255, 255)')

    }else{

        console.log("filling selection")

        $(this).css('background-color', color)
    }

};

nft.on('click', 'td', fill);

// pallete.on('click', 'td', changeColor);
// picker.on("change", changeColor);

