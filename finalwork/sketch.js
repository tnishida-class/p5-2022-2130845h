// 最終課題を制作しよう
let u = 100;
let v = 100;
let w = 100;
let x = 100;
let y = 100;
let z = 100;
let a = 100;
let b = 100;
let c = 100;
let d = 100;
let e = 300;
let f = 300;

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
  text("1", 65, 430);
  text("2", 190, 430);
  text("3", 315, 430);
  text("Guide", 177, 470)
  text("キーボードの1~3を押してください", 105, 500)
  text("確認するにはGを押してください", 110, 520)
}

function keyPressed(){
  if(key == "g"){
    noFill();
    stroke(0, 255, 0);
    rect(169, 450, 50, 30);
    stroke(0, 255, 0); 
    line(100, 50, 100, 350)
    line(300, 50, 300, 350)
  }
  if(key == "1"){
    let y = 30
    let z = 170
    let e = 230
    let f = 370
    noFill();
    stroke(255, 0, 0);
    rect(54, 410, 30, 30);
    stroke(0, 0, 0); 
    mullerlyerA(u, v, w, x, y, z);
    mullerlyerB(a, b, c, d, e, f);
  }
  else if(key == "2"){  
    let u = 100;
    let v = 100;
    let w = 100;
    let x = 100;
    let y = 100;
    let z = 100;
    let a = 100;
    let b = 100;
    let c = 100;
    let d = 100;
    let e = 300;
    let f = 300;
    noFill();
    stroke(255, 0, 0) ;
    rect(180, 410, 30, 30);
    stroke(0, 0, 0);
    mullerlyerA(u, v, w, x, y, z);
    mullerlyerB(a, b, c, d, e, f);
  }
  else if(key == "3"){
    let u = 130
    let v = 130
    let w = 70
    let x = 70
    let a = 70
    let b = 70
    let c = 130
    let d = 130
    noFill();
    stroke(255, 0, 0) ;
    rect(305, 410, 30, 30);
    stroke(0, 0, 0);
    mullerlyerA(u, v, w, x, y, z);
    mullerlyerB(a, b, c, d, e, f);
  }
}

function keyReleased(){
    noFill();
    stroke(255, 255, 255);
    rect(169, 450, 50, 30);
    rect(54, 410, 30, 30);
    rect(180, 410, 30, 30);
    rect(305, 410, 30, 30);
    fill(255, 255, 255)
    rect(50, 50, 400, 300)
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

  
function mullerlyerA(x1, x2, x3, x4, y1, y2){
  line(100, 100, 300, 100);
  line(100, 100, x1-50, y1+50);
  line(100, 100, x2-50, y2-50);
  line(300, 100, x3+250, y1+50);
  line(300, 100, x4+250, y2-50);
}
  
function mullerlyerB(x5, x6, x7, x8, y3, y4){
  line(100, 300, 300, 300);
  line(100, 300, x5+50, y3+50)
  line(100, 300, x6+50, y4-50)
  line(300, 300, x7+150, y3+50)
  line(300, 300, x8+150, y4-50)
}

