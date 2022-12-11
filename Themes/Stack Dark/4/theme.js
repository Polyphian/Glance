//Greeting
ctx.font = 'bold 66px -apple-system';
ctx.textAlign = "center";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 12;
ctx.shadowColor = "rgba(0,0,0,0.9)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 642, 1086, 1000);

//Line1
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 238, 1221, 1000);

//Line2
ctx.font = 'normal 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 238, 1276, 1000);

//Cal E
ctx.font = 'bold 22px -apple-system';
ctx.textAlign = "center";
ctx.fillStyle = "#000000";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$Date E$', 143, 1450, 1000);

//Cal dd
ctx.font = 'bold 48px -apple-system';
ctx.textAlign = "center";
ctx.fillStyle = "#FFCD00";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$Date dd$', 143, 1512, 1000);

//Cal Line1
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Next: $Cal Next Title$', 238, 1469, 1000);

//Cal Line2
ctx.font = 'normal 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Starts $Cal Next Start$. Ends $Cal Next End$.', 238, 1524, 1000);

//Moon Line1
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('The moon is currently in a $MOONPHASE$ phase.', 238, 1716, 1000);

//Moon Line2
ctx.font = 'normal 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Sunrise: $SUNRISE$. Sunset: $SUNSET$.', 238, 1766, 1000);

//Batt Line1
ctx.font = 'bold 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Battery was last recorded at $BATTERY$%', 238, 1963, 1000);

//Batt Line2
ctx.font = 'normal 42px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Last updated: $LastUpdate$.', 238, 2013, 1000);