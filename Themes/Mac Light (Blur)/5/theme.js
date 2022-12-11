//City
ctx.font = 'normal 62px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$CITY$', 186, 878, 1000);

//HighLowTemps
ctx.font = '36px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$TEMPS$', 1100, 895, 1000);

//Greeting
ctx.font = 'bold 62px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 88, 1015, 1000);

//Line1
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 88, 1105, 1100);

//Line2
ctx.font = 'normal 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 88, 1157, 1100);