
 var filled = [];
 for(var j = 0;j < 10;j++) {
   filled[j] = false;
 }
 var produced = [];
 var queue = [];
 var consumed = [];
 var index = 0;
 var qindex = 0;
 var cindex = 0;
 function Produce() {
   var flag = true;
   var random = Math.floor(Math.random() * 10) + 0;

   if(qindex > 9) {
     alert("No more Production");
     return;
   }
   var node = document.createElement("p");
   var textnode = document.createTextNode(random);
   node.appendChild(textnode);
   document.getElementById("pro").appendChild(node);
   for(var i = 0; i < qindex;i++) {
     if(queue[i] == random) {
       flag = false;
       break
     }
   }
   if(flag) {
     var space;
     for(var j = 9;j >=0 ;j--) {
       if(!filled[j]) {
         space = j;
         filled[j] = true;
         break;
       }
     }
     queue.push(random);
     document.getElementById(space).appendChild(node.cloneNode(true));
     qindex++;
   }
 //  $("pro").appendChild(node);
   produced[index] = random;
   index++;
 }

 function Consume() {
   if(qindex <= 0) {
     alert("No Items");
     return;
   }
   var j;
   var num = queue.shift();
   for(j = 0;j < qindex-1;j++) {
     var data = document.getElementById(9-j);
     var sdata = document.getElementById(9-j-1);
     data.getElementsByTagName("p")[0].innerHTML = sdata.getElementsByTagName("p")[0].innerHTML;
   }
   //j++;
   var data = document.getElementById(9-j);
   var cd = data.getElementsByTagName("p")[0];
   cd.remove();
   filled[9-j] = false;
   qindex--;
   var node = document.createElement("p");
   var textnode = document.createTextNode(num);
   node.appendChild(textnode);
   document.getElementById("con").appendChild(node);
 }
