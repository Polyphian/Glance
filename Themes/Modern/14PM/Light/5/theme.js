//City
ctx.font = 'normal 64px -apple-system';
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$CITY$', 176, 726, 650);

//HighLowTemps
ctx.font = '37px -apple-system';
ctx.textAlign = "right";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$TEMPS$', 1076, 741, 260);

//Greeting
ctx.font = 'bold 64px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 90, 884, 1105);

//Line1
ctx.font = 'bold 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 90, 930, 1105);

//Line2
ctx.font = 'normal 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 90, 983, 1105);