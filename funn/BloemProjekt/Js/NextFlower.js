imgNum = 0;
counter = 0;
output = 0;

function nextFlower() {
    counter += 1;
    if (imgNum==6){
        imgNum = 0;
        document.getElementById("next").innerHTML="0";
        document.getElementById('picture').src="img/0_Flower.jpg";
        document.getElementById("counter").innerHTML="Made "+Math.ceil(counter/7)+" flowers";
    } else {
    imgNum += 1;
    document.getElementById("cliks").innerHTML="Total of "+counter+" cliks";
    document.getElementById('picture').src="img/"+imgNum+"_Flower.jpg";
    document.getElementById("next").innerHTML=imgNum;
    }
}

