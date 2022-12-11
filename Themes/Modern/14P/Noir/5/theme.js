//City
ctx.font = 'normal 57px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$CITY$', 173, 686, 590);

//HighLowTemps
ctx.font = '34px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$TEMPS$', 990, 700, 200);

//Greeting
ctx.font = 'bold 57px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 94, 799, 998);

//Line1
ctx.font = 'bold 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 94, 877, 998);

//Line2
ctx.font = 'normal 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 94, 925, 998);