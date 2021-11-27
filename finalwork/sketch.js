// 最終課題を制作しよう


let x,y;
let balls = [];
let balls2=[];

function setup(){
  createCanvas(windowWidth, windowHeight);

}
function windowResized(){ // ウィンドウがリサイズされるたびにこの関数が自動的に実行される
  resizeCanvas(windowWidth, windowHeight); // キャンバスをリサイズする（createCanvasではないので注意）
}


function draw(){
  background(160, 192, 255);

fill(255,255,255);
ellipse(windowWidth/2, windowHeight/2+100,150,150);
ellipse(windowWidth/2, windowHeight/2-25,100,100);
fill(250,80,67);
ellipse(windowWidth/2-20, windowHeight/2-30,20,20);
ellipse(windowWidth/2+20, windowHeight/2-30,20,20);
fill(0);
ellipse(windowWidth/2, windowHeight/2,60,5);
rect(windowWidth/2-15, windowHeight/2-105,30,30);
strokeWeight(4);
stroke(51);
line(windowWidth/2-80, windowHeight/2+30,windowWidth/2-30, windowHeight/2+80);
line(windowWidth/2+80, windowHeight/2+30,windowWidth/2+35, windowHeight/2+80);



  fill(255,255,255);
  noStroke();
  for(let i=40;i<windowWidth-40;i=i+40){
    ellipse(i,30,80,50);
  }
  fill(240,240,242);
  for(let h = 0; h < balls.length; h++){ // すべてのボールを描画し、速度の分だけ移動させる
    let b = balls[h];
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;
    b.y += b.vy;
  }
fill(151,155,191);
  for(let j = 0; j < balls2.length; j++){ // すべてのボールを描画し、速度の分だけ移動させる
    let b2 = balls2[j];
    ellipse(b2.x, b2.y, b2.size);
    b2.x += b2.vx;
    b2.y += b2.vy;
  }


}


function mouseClicked(){

    if(mouseY<windowHeight/2){
      const b = { x: mouseX, y: mouseY, size: 30, vx: 0, vy: 2 };
      balls.push(b);
}
else {
  const b2 = { x: mouseX, y: mouseY, size: 20, vx: 2, vy: 4 };
  balls2.push(b2);
}
}
