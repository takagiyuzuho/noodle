<!--
document.open();
document.write("<img src='./picture/men1.png' width='300' height='500' name='war' />");
document.close();
// -->
var sw=1;
image=new Array(30);
image[1]="./picture/men1.png";
image[2]="./picture/men2.png";
image[3]="./picture/men3.png";
image[4]="./picture/men4.png";
image[5]="./picture/men5.png";
image[6]="./picture/men6.png";
image[7]="./picture/men7.png";
image[7.5]="./picture/men7.5.png";
image[8]="./picture/men8.png";
image[9]="./picture/men9.png";
image[10]="./picture/men10.png";
image[11]="./picture/men11.png";
image[12]="./picture/men12.png";
image[13]="./picture/men13.png";
image[14]="./picture/men14.png";
image[15]="./picture/men15.png";
image[16]="./picture/men16.png";
image[17]="./picture/men17.png";
image[18]="./picture/men18.png";
image[19]="./picture/men19.png";
image[20]="./picture/men20.png";
image[21]="./picture/men21.png";
image[22]="./picture/men22.png";
image[23]="./picture/men23.png";
image[24]="./picture/men24.png";
image[25]="./picture/men25.png";
image[26]="./picture/men26.png";
image[27]="./picture/men27.png";
image[28]="./picture/men28.png";
image[29]="./picture/men29.png";
image[30]="./picture/men30.png";

hyouji();
function hyouji()
{
  setTimeout("hyouji()",200);
  document.war.src=image[sw];
  sw=sw+1
  if (sw>30){sw=1;}
}


//-->
