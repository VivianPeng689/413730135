let angle = 0
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0)  //背景顏色為黑色
  angleMode(DEGREES)  //設定使用到角度，採用數字的方式0~360
  frameRate(6)
}

function draw() {  //開始畫圖,每秒會進入draw()會執行60次
  //background(220);
  background(0)
  //translate(width/2,height/2)
  translate(mouseX,mouseY)  //設定原點(0，0)在滑鼠游標移動
  //視窗的中心點畫一個600*600的方形，框線為白色，不填滿顏色
  
  noFill()
  stroke(255)
  strokeWeight(1)
  rectMode(CENTER)  //設定方形的中心點為座標
  //otate(sin(angle)*40) //三角函數sin的質介於-1~1間，*40之後，旋轉角度介於-40~40
  //rect(0,0,600,600,100)  //畫一個方形(600,600)，圓弧在四角寬高為100


  for (let i=0;i<30;i=i+1) {
    //let r = random(50,255)  //抽一個亂數，亂數的值會介於50(包含)~~255(不包含)間
    //let g = random(50,255)  //抽一個亂數，亂數的值會介於50(包含)~~255(不包含)間
    //let b = random(50,255)  //抽一個亂數，亂數的值會介於50(包含)~~255(不包含)間
    let r = map(sin(frameCount),-1,1,30,200)  //對應，sin的值介於-1~1之間，當sin()的值位於-1~1的位置
    let g = map(cos(frameCount/2),-1,1,10,20)  //對應
    let b = map(sin(frameCount/4),-1,1,200,255)  //對應
    stroke(r,g,b)

  rotate(sin(angle-i*2)*mouseY/10)
  rect(0,0,100+(mouseX/10)-i*3,100+(mouseX/10)-i*3,20)


  angle = angle+10
  
}
}
