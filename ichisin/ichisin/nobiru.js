document.write('<img src="./men1.png" width=300 height=500 name="war" />');
var sw=1;
image=new Array(30);
image[1]="./men1.png";
image[2]="./men2.png";
image[3]="./men3.png";
image[4]="./men4.png";
image[5]="./men5.png";
image[6]="./men6.png";
image[7]="./men7.png";
image[7.5]="./men7.5.png";
image[8]="./men8.png";
image[9]="./men9.png";
image[10]="./men10.png";
image[11]="./men11.png";
image[12]="./men12.png";
image[13]="./men13.png";
image[14]="./men14.png";
image[15]="./men15.png";
image[16]="./men16.png";
image[17]="./men17.png";
image[18]="./men18.png";
image[19]="./men19.png";
image[20]="./men20.png";
image[21]="./men21.png";
image[22]="./men22.png";
image[23]="./men23.png";
image[24]="./men24.png";
image[25]="./men25.png";
image[26]="./men26.png";
image[27]="./men27.png";
image[28]="./men28.png";
image[29]="./men29.png";
image[30]="./men30.png";

hyouji();
function hyouji()
{
  setTimeout("hyouji()",200);
  document.war.src=image[sw];
  sw=sw+1
  if (sw>30){sw=1;}
}
//-->
