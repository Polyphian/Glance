ctx.translate(0, 40);
//Greeting
ctx.font = 'bold 57px -apple-system';
ctx.textAlign = "left";
//Always White
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.35)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 80, 1391, 998);

//Line1
ctx.font = 'bold 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 226, 1521, 870);

//Line2
ctx.font = 'normal 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 226, 1569, 870);