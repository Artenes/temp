
var quotes = [

	"Eu quero guardar teu beijo<br>Na concha das mãos",
	"Teu cheiro eu levo feito mancha na roupa<br>Que eu nao lavo não",
	"Sou alvo pros teus olhos claros parecidos<br>Com essa estação",
	"E adoro os efeitos sonoros de quando você sussura<br>Absurdos no ouvido do meu coração",
	"Se eu corro<br>Eu corro demais so pra te ver meu bem",		
	"É que eu quero um socorro<br>Se eu corro",

];

function randomNumber () {
	return Math.floor((Math.random() * 5));
}

$(document).ready(function() {	
	function getRandomColor() {
		var letters = '0123456789ABCDEF'.split('');
		var color = '#';
		for (var i = 0; i < 6; i++ ) {
			color += letters[Math.floor(Math.random() * 16)];
		}
			return color;
	}
	function change_color(){
		var rdColor = getRandomColor();
		$("body").animate({
			backgroundColor: rdColor
		}, 500);
		$("#quoteDiv").animate({
			color: rdColor
		}, 500);
		$("p").animate({
			color: rdColor
		}, 500);
		$("button").animate({
			backgroundColor: rdColor
		}, 500);
	}	
	function quote_color()
	{
		currentQuote = quotes[randomNumber()];
		$("#quoteDiv").stop().hide(0).fadeIn("slow");
		$("#quoteDiv").stop().html("<i class='fa fa-quote-left'></i> "+currentQuote).hide(0).fadeIn("slow");
		change_color();
	}

	quote_color();
	$("#btnColor").click(quote_color);
	$("#btnTweet").on('click', function(){
		var txt = "https://twitter.com/intent/tweet?text="+$("#quoteDiv").text()+" "+$("#authorP").text();
		window.open(txt,'name','width=600,height=400');
	});
});