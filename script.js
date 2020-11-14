/*random Article selection - Start*/
var articleNumber = 2;
var a = Math.floor(Math.random()*articleNumber+1);
printOne(a);
function printOne(any){
for(i=1;i<=articleNumber;i++){
	if(i!=any){
		document.getElementById("Aritcle-Body-"+i).style.display="none";
	}
	document.getElementById("Aritcle-Body-"+any).style.display="block";
}
}
/*random Article selection - End*/
/*Moving the Articles constantly - Start*/
var move=a;
changeArticleConstantly();
function changeArticleConstantly(){
var x = setInterval(function(){
		move=move+1;
	if(move>articleNumber){
		move=1;
	}
	printOne(move);
},12000);
}
/*Moving the Articles constantly - End*/