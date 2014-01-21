$( document ).ready(function() {

$("#btnCars").bind('touchstart mousedown', function(){
	var term= "button=" + $(this).val();
	$.ajax({
		url:'reply.php',
		type:'POST',
		data:term,
		dataType:'json',
		error:function(jqXHR,text_status,strError){
			var err = eval("(" + jqXHR.responseText + ")");
			alert(err.Message);
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
		url:'reply.php',
		type:'POST',
		data:term,
		dataType:'json',
		error:function(jqXHR,text_status,strError){
			alert("no connection");
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