// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;
let sizex, size;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 100;
  size = 50;
  frameRate(20);
  sizex = 1;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
  noStroke();
  fill(255, 100, 100);
  ellipse(width / 2, width / 2, size);
  if(size >= 105){size = 50, sizex = 1;}
  else if(mouseIsPressed){size = size + 3*sizex, sizex += 1;} 
  else{size = size + sizex, sizex += 1;}
}

