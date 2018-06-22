export default function() {
	var hName = $("#create-presentation-title").val();

	$.ajax({
		type	: 'post',
		url		: "php/check_presentation.php",
		data	: "query="+hName,
		success	: function(results){
			results = JSON.parse(results);
			if(results==1){modifyPresentation()}else{addPresentation()};
		}
	});
	return false;
}