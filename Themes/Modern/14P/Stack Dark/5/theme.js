//Everything is too high for some reason
ctx.translate(0, 38);

//Greeting
ctx.font = 'bold 63px -apple-system';
ctx.textAlign = "center";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$GREETING$', 590, 636, 1090);

//Line1
ctx.font = 'bold 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING1$', 225, 781, 852);

//Line2
ctx.font = 'normal 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "#ffffff";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$STRING2$', 225, 832, 852);

//Cal Line1
ctx.font = 'bold 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Next: $Cal Next Title$', 225, 1008, 852);

//Cal Line2
ctx.font = 'normal 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Starts $Cal Next Start$. Ends $Cal Next End$.', 225, 1059, 852);

//Moon Line1
ctx.font = 'bold 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('The moon is currently in a $MOONPHASE$ phase.', 225, 1237, 852);

//Moon Line2
ctx.font = 'normal 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Sunrise: $SUNRISE$. Sunset: $SUNSET$.', 225, 1288, 852);

//Batt Line1
ctx.font = 'bold 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Battery was last recorded at $BATTERY$%', 225, 1469, 852);

//Batt Line2
ctx.font = 'normal 39px -apple-system';
ctx.textAlign = "left";
ctx.fillStyle = "rgba(255,255,255,0.93)";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('Last updated: $LastUpdate$.', 225, 1520, 852);

//Cal E
ctx.font = 'bold 24px -apple-system';
ctx.textAlign = "center";
ctx.fillStyle = "#1E1E26";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$Date E$', 140, 989, 1000);

//Cal dd
ctx.font = 'bold 45px -apple-system';
ctx.textAlign = "center";
ctx.fillStyle = "#FFCD00";
ctx.shadowOffsetY = 4;
ctx.shadowColor = "rgba(0,0,0,0.1)";
ctx.shadowBlur = 32;
ctx.fillText('$Date dd$', 140, 1045, 116);