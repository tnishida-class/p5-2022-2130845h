// テキスト「キーボード操作に反応する」
let x, y, vy;
const g = 1; // 重力加速度
const vyMax = 30;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  y > Height && y < 0;
  vy = 8;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y, 50);

  vy = constrain(vy + g, -vyMax, vyMax);

  if(y > -1 * Height + 25){ y += -1 * vy; }
  if(keyIsDown(LEFT_ARROW)){ x -= 10; }
  if(keyIsDown(RIGHT_ARROW)){ x += 10; }
  if(keyIsDown(" ".charCodeAt(0))){ y += vy; }

  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y > height){ vy = -1 * vy; }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);

}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
