//City
ctx.font = 'normal 62px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$CITY$', 190, 2033, 1000);

//HighLowTemps
ctx.font = 'bold 36px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$TEMPS$', 1100, 2032, 1000);

//Greeting
ctx.font = 'bold 62px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$GREETING$', 88, 2152, 1000);

//Line1
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$STRING1$', 88, 2242);

//Line2
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$STRING2$', 88, 2294, 1100);