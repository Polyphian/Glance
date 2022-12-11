//City
ctx.font = 'normal 64px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$CITY$', 189, 1024, 650);

//HighLowTemps
ctx.font = '37px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$TEMPS$', 1083, 1039, 260);

//Greeting
ctx.font = 'bold 64px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 102, 1153, 1105);

//Line1
ctx.font = 'bold 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 102, 1238, 1105);

//Line2
ctx.font = 'normal 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 102, 1290, 1105);