// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;

  //noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // 補足： i,j の変化がわかりやすくなるように入れています
    if ((i+j)%2==1) {
      fill(135, 130, 130);
    }
    else {
    noFill();
    noStroke();
    }
rect(size * i, size * j, size, size);

if(j<3){
if((i+j)%2==1){
  fill(255,0,0);}
}
else if(j<5){
  noFill();
}
else{
if((i+j)%2==1){
  fill(0,0,0);}
}
ellipseMode(CENTER);
ellipse(size * i+12.5, size * j+12.5, size, size);




        // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
