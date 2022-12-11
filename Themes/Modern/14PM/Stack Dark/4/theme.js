//Everything is too high for some reason
ctx.translate(0, 40);

//Greeting
ctx.font = 'bold 63px -apple-system';
ctx.textAlign = "center";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 645, 894, 1090);

//Line1
ctx.font = 'bold 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 246, 1053, 932);

//Line2
ctx.font = 'normal 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 246, 1108, 932);

//Cal Line1
ctx.font = 'bold 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Next: $Cal Next Title$', 246, 1301, 932);

//Cal Line2
ctx.font = 'normal 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Starts $Cal Next Start$. Ends $Cal Next End$.', 246, 1357, 932);

//Moon Line1
ctx.font = 'bold 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('The moon is currently in a $MOONPHASE$ phase.', 246, 1551, 932);

//Moon Line2
ctx.font = 'normal 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Sunrise: $SUNRISE$. Sunset: $SUNSET$.', 246, 1607, 932);

//Batt Line1
ctx.font = 'bold 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Battery was last recorded at $BATTERY$%', 246, 1805, 932);

//Batt Line2
ctx.font = 'normal 43px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Last updated: $LastUpdate$.', 246, 1861, 932);

//Cal E
ctx.font = 'bold 24px -apple-system';
ctx.textAlign = "center";
ctx.fillStyle = "#1E1E26";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$Date E$', 153, 1278, 1000);

//Cal dd
ctx.font = 'bold 45px -apple-system';
ctx.textAlign = "center";
ctx.fillStyle = "#FFCD00";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$Date dd$', 153, 1340, 116);