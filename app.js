
function ttlWordCount(str){
	return 	str
	.split(" ")
	.length;
}

function unqWordCount(str){
	var arr = str.split(" ");
	return arr
	.filter((x, i) => arr.indexOf(x) === i)
	.length;

}

function avgWordLength(str){
	return str
	.split(" ")
	.map(x => x.trim().length)
	.reduce((a , b) => a+b)
	/ttlWordCount(str); 
}

function avgSntcLength(str){
	var arr = str.split(".")
	.filter(Boolean);
	return arr
	.map(x => x.trim().length)
	.reduce((a, b) => a + b)
	/arr.length;
}

function main(){
	$("button").click(function (e){
		e.preventDefault();
		
		var str = $("textarea").val();	
		var strippedStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
		var strWPeriod = str.replace(/[,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
		
		$(".text-report").removeClass("hidden");
		$(".ttlWordCount").text(ttlWordCount(strippedStr));
		$(".unqWordCount").text(unqWordCount(strippedStr));
		$(".avgWordLength").text(avgWordLength(strippedStr));
		$(".avgSntcLength").text(avgSntcLength(strWPeriod));


	});
}

$(document).ready(main());


// var str ="It was November. Although it was not yet late, the sky was dark when I turned into Laundress Passage. Father had finished for the day, switched off the shop lights and closed the shutters; but so I would not come home to darkness he had left on the light over the stairs to the flat. Through the glass in the door it cast a foolscap rectangle of paleness onto the wet pavement, and it was while I was standing in that rectangle, about to turn my key in the door, that I first saw the letter. Another white rectangle, it was on the fifth step from the bottom, where I couldn't miss it."
//

