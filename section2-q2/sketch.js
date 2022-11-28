// チェッカー
function setup() {
  createCanvas(200, 200);
  background(255)
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i + j) % 2 == 0){
        fill(255);
        rect(size * i, size * j, size * (i + 1), size * (j + 1)) 
      }
      else{fill(150);
        rect(size * i, size * j, size * (i + 1), size * (j + 1))     
      }
      if((i + j) % 2 !== 0 && j <= 2){
        fill(255, 0, 0);
        ellipse(size * i + size / 2, size * j + size / 2, size * 7/8);
      }
      else if((i + j) % 2 !== 0 && j >= 5 ){
          fill(0);
        ellipse(size * i + size / 2, size * j + size / 2, size * 7/8) ;
        
      }
    }
  }

}
      


