$( document ).ready(function() {

$("#btnCars").bind('touchstart mousedown', function(){
	var term= "button=" + $(this).val();
	$.ajax({
		url:'reply.php',
		type:'POST',
		cache: false,
		data:term,
		dataType:'jsonp',		
		timeout:60000,
		success:function(data){
			$("#result").html("");
			for(var i in data){
				$("#result").append("<li>"+data[i]+"</li>");
			}
		}
	});
});

$("#btnBikes").bind('touchstart mousedown', function(){
	var term= "button=" + $(this).val();
	$.ajax({
		url:'reply.php',
		type:'POST',
		cache: false,
		data:term,
		dataType: 'jsonp',		
		timeout:60000,
		success:function(data){
			$("#result").html("");
			for(var i in data){
				$("#result").append("<li>"+data[i]+"</li>");
			}
		}
	});
});

$("#result").ajaxError(function(event, request, settings, exception) {
  $("#result").html("Error Calling: " + settings.url + "<br />HTTP Code: " + request.status);
});

});