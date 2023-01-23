var randomnumber1=Math.floor(Math.random()*6)+1;
var imagesource1="/Dicee Challenge - Starting Files/images/dice"+randomnumber1+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagesource1);


var randomnumber2=Math.floor(Math.random()*6)+1;
var imagesource2="/Dicee Challenge - Starting Files/images/dice"+randomnumber2+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",imagesource2);

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").textContent="🚩 Player 1 Wins!!";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").textContent="Player 2 Wins!! 🚩";
}
else
{
    document.querySelector("h1").textContent="Draw Roll Again";
}

// document.querySelector(".btn").reload();
