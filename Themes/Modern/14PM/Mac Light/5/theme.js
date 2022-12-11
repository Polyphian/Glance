//City
ctx.font = 'normal 64px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$CITY$', 189, 785, 650);

//HighLowTemps
ctx.font = '37px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$TEMPS$', 1083, 800, 260);

//Greeting
ctx.font = 'bold 64px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 102, 914, 1105);

//Line1
ctx.font = 'bold 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 102, 999, 1105);

//Line2
ctx.font = 'normal 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#444444";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 102, 1051, 1105);