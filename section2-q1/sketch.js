// 小手調べ
function setup(){
  createCanvas(101, 101);
  background(255)
  noFill();
  stroke(0, 0, 255)
  for(let i = 0; i < 10; i++){
    ellipse(51, 51, 10 * (i + 1))
    if(i > 3){
      stroke(255, 0, 0)
    }
  }
  
}
