// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 60以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  const dx = width / scores.length;
  let px, py;
  
  
  for(let i = 0; i < n; i++){
  fill(0);
  ellipse((i + 1) * 37 , scores[i], 10)
  
  noFill();
  line(px, py, (i + 1) * 37, scores[i])
  px = (i + 1) * 37
  py = scores[i]
  
  }
//   fill(0);
//   for(let i = 0; i < n; i++){
//   ellipse((i + 1) * 37 , scores[i], 10)
//   px = (i + 1) * 37
//   py = scores[i]
//   }

//   for(let i = 0; i < scores.length; i++){
//     noFill();
//     line(px, py, (i + 1) * 37, scores[i])
//     // BLANK[1]
  // }
}
