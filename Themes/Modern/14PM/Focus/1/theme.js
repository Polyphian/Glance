//City
ctx.font = 'normal 64px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$CITY$', 211, 2048, 650);

//HighLowTemps
ctx.font = '37px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$TEMPS$', 1194, 2063, 260);

//Greeting
ctx.font = 'bold 64px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 95, 2170, 1105);

//Line1
ctx.font = 'bold 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 95, 2256, 1105);

//Line2
ctx.font = 'normal 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 95, 2309, 1105);