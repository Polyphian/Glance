//City
ctx.font = 'normal 62px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$CITY$', 186, 1343, 1000);

//HighLowTemps
ctx.font = '36px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$TEMPS$', 1100, 1360, 1000);

//Greeting
ctx.font = 'bold 62px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 88, 1452, 1000);

//Line1
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 88, 1532);

//Line2
ctx.font = 'normal 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 88, 1584, 1100);