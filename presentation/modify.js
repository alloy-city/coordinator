export default function() {
	var hName = $("#create-presentation-title").val();
	var str = $("#create-presentation-slides").val();

	str = "UPDATE `fr_presentations_diapos` SET diapo1='"+str;

	var i=2;
	while (str.indexOf('\t') >= 0){
		str = str.replace('\t', "',diapo"+i+"='");
		i++;
	}

	str = str+"'";

	var ii=i;
	while (ii <= 70){
		str = str+",diapo"+ii+"=NULL";
		ii++;
	}

	str = str+" WHERE HangoutName='"+hName+"'";

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
        $('#success-message').text('Présentation modifiée !');
      });
			console.log('presentation modified');
		}
	});
	return false;
}
