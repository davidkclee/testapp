$( document ).ready(function() {

$("#btnCars").bind('touchstart mousedown', function(){
	var term= "button=" + $(this).val();
	$.ajax({
		url:'http://icemas.org/apptest/reply.php',
		type:'POST',
		data:term,
		cache: false,
		dataType:'jsonp',
		error:function(xhr,text_status,strError){
			alert('Error Message: '+text_status);
			alert('HTTP Error: '+strError);
		},
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
		url:'http://icemas.org/apptest/reply.php',
		type:'POST',
		data:term,
		cache: false,
		dataType: 'jsonp',
		error:function(xhr,text_status,strError){
			alert("no connection");
			alert(xhr.responseText);
		},
		timeout:60000,
		success:function(data){
			$("#result").html("");
			for(var i in data){
				$("#result").append("<li>"+data[i]+"</li>");
			}
		}
	});
});

});