$(document).ready(function(){
	$( "#dialog" ).dialog({ autoOpen: false });
	$( "#popup" ).click(function() {
		$( "#dialog" ).dialog( "open" );
	});
});