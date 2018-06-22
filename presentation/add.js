export default function() {
	var hName = $("#create-presentation-title").val();
	var str = $("#create-presentation-slides").val();

	var columnNames = '';
	var nSlides = 0;

	while (str.indexOf('\t') >= 0){
		str = str.replace('\t', "','");
		nSlides++;
	}
	for (var i=1;i<(nSlides+2);i++){
		if (i<nSlides+1){
			columnNames = columnNames+"`diapo"+i+"`,";
		}else {
			columnNames = columnNames+"`diapo"+i+"`";
		}
	}
	str = "INSERT INTO `fr_presentations_diapos`(`HangoutName`,"+columnNames+") VALUES ('"+hName+"','"+str+"')"
	str = encodeURIComponent(str);
	//console.log(str);
	$.ajax({
		type	: 'post',
		url		: "php/add_presentation.php",
		data	: "query="+str,
		success	: function(results){
			// results = JSON.parse(results);
      $.get("../admin/views/alert-success.html", function(data){
        $('#create-presentation-form').parent().append(data);
        $('#success-message').text('Nouvelle présentation enregistrée !');
      });
			console.log('presentation created');
		}
	});
	return false;
}