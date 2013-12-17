$(document).ready(function(){
	var macAddress = $("#macAddress");
	function formatMAC(e) {
		var r = /([a-f0-9]{2})([a-f0-9]{2})/i,
			str = e.target.value.replace(/[^a-f0-9]/ig, "");
		
		while (r.test(str)) {
			str = str.replace(r, '$1' + ':' + '$2');
		}

		e.target.value = str.slice(0, 17);
	}

	macAddress.on("keyup", formatMAC);

	$('#macAddress').keypress(function(e) {
		if(e.which == 13){
			OpenInNewTab("http://yalesniffer.herokuapp.com/shortmac/" + $('#macAddress').val().toLowerCase());
		}
	});

	function OpenInNewTab(url){
		var win = window.open(url, '_blank');
		win.focus();
	}

});