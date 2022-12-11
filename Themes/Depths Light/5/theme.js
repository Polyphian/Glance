//City
ctx.font = 'normal 62px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$CITY$', 190, 805, 1000);

//HighLowTemps
ctx.font = 'bold 36px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$TEMPS$', 1100, 805, 1000);

//Greeting
ctx.font = 'bold 62px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$GREETING$', 88, 924, 1000);

//Line1
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$STRING1$', 88, 1014);

//Line2
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#424242";
ctx.shadowOffsetY = 2;
ctx.shadowColor = "rgba(255,255,255,1)";
ctx.shadowBlur = 0;
ctx.fillText('$STRING2$', 88, 1066, 1100);
