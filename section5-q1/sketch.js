// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love keyakizaka46",100, 100, 200, 255, 200);
}

function balloon(t, x, y, r, g, b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  let wid = w + p * 2
  let hei = h + p * 4
  noStroke();
  fill(r, g, b);
  rect(x, y, wid, hei);
  triangle(wid / 2 + x, hei + y, wid / 2 + x + 20 , hei + y , wid / 2 + x + 5, (hei + y) + 15); 
  fill(0);
  text(t, p + x, h + p + y);
}
