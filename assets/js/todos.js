//Check Off specific todos by Clicking
$("li").click(function(){
	$(this).toggleClass("completed");	
});

//Click on X to delete ToDo
$("ul").on("click","span",function(event){
	//$(this).remove(); this removes the span only
	$(this).parent().fadeOut(500,function(){
		$(this).remove();//Both this are diff.Think Y?
	}); //Works!
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){//to check the type of key
		//grab text from todo
		var todoText = $(this).val();
		$(this).val("");
		//create a new li and add to ul
		//using '' so that quotes do not interfere
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ todoText +"</li>");

	}
});//here see the difference on() and click() event
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});