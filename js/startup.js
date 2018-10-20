function octounushide(){
	var x = document.getElementById("Gambar").src
	var btn = document.getElementById("btnoctounus").value
	if (btn === "Hide Image") {
		document.getElementById("Gambar").src = "";
		document.getElementById("btnoctounus").value = "Show Image";
	} else if (btn === "Show Image") {
		document.getElementById("Gambar").src = "https://scontent-sit4-1.cdninstagram.com/vp/43f463068c5827041492eaf85be6a6e9/5BC83BBA/t51.2885-15/e35/22157961_280311375791235_5726509604045586432_n.jpg";
		document.getElementById("btnoctounus").value = "Hide Image";
	} else {
		alert("An Unknown Error Has been encountered!\nPlease copy and send this code to developer : 0x5U344R\n")
	}
}

function selfdestruct(){
	var conf = prompt("NamaOrtu 2.5.0 - WARNING!!\n\nAre you sure want to DESTROY this page?\n(This Action can be recovered by refreshing this page.)\n\nOption:\nType 1 if you want me to self destruct\nType 2 if you want to cancel\n")
	switch(conf) {
		case "1":
			document.getElementById("main").style = "display:none;"
			document.getElementById("badan").style = "background-image:none;"
			break;
		case "2":
			alert("That's Good!")
			break;
		case null:
			alert("Hmm... Wise Desicion")
			break;
		default:
			alert("An Unknown Error Has been encountered!\nPlease copy and send this code to developer : 0x5U344R\n")
			break;
	}
}