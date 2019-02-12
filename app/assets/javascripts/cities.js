$( document ).ready(function() {
	console.log('lwwwwwwwwwww');
	$("#newCity").change( function(event) {
		event.target.form['city_version_number'].value++;
	    var request = new XMLHttpRequest();
	    request.open(event.target.form.method, event.target.form.action);
	    request.send(new FormData(event.target.form));

		$("#saved_message").fadeIn( 300 ).delay( 2000 ).fadeOut( 300 ); 

	});
});