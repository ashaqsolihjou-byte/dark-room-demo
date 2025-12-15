
let battery=100;let enemyX,enemyY;let gameOver=false;
function setup(){createCanvas(windowWidth,windowHeight);enemyX=random(width);enemyY=random(height);} 
function draw(){background(0);
  if(gameOver){fill(255);textAlign(CENTER,CENTER);text('ادامه دارد...',width/2,height/2);return;}
  battery-=0.02;fill(255);text('باتری: '+battery.toFixed(0)+'%',20,30);
  enemyX+= (mouseX-enemyX)*0.01; enemyY+=(mouseY-enemyY)*0.01;
  fill(50);ellipse(enemyX,enemyY,60);
  if(dist(mouseX,mouseY,enemyX,enemyY)<30) gameOver=true;
  fill(255,255,200,150);ellipse(mouseX,mouseY,200);
}
