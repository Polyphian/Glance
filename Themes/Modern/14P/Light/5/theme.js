//City
ctx.font = 'normal 57px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$CITY$', 173, 699, 590);

//HighLowTemps
ctx.font = '34px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$TEMPS$', 990, 713, 200);

//Greeting
ctx.font = 'bold 57px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 94, 795, 998);

//Line1
ctx.font = 'bold 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 94, 873, 998);

//Line2
ctx.font = 'normal 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 94, 921, 998);