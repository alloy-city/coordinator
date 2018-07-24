export default function() {
	$.ajax({
		type	: 'post',
		url		: "php/get_debt_users.php",
		success	: function(results){
			results = JSON.parse(results);

			function countProperties(results) {
				var count = 0;
				for(var prop in results) {
					if(results.hasOwnProperty(prop))
						++count;
				}
				return count;
			}
			var numberOfMatchs = countProperties(results);

			var markUp = [
				'<div class="table-responsive">',
					'<table id="searchResultTable" class="table table-striped table-hover table-condensed">',
						'<tr>',
			        '<th>ID</th>',
			        '<th>XP</th>',
			        '<th>email</th>',
			        '<th>phone</th>',
			        '<th>CPF</th>',
			        '<th class="text-right">Dette réglée</th>',
			      '</tr>',
			    '</table>',
			  '</div>'
			].join('');
			$('#searchResult').html(markUp);



			//$('#searchResult').html('<tr><th>ID</th><th>XP</th><th>email</th><th>phone</th><th>CPF</th><th></th></tr>');

			if (numberOfMatchs == 0){
				$('#searchResult').append("<p>Pas de résultats</p>");
			}else{
				for (var i = 0; i < numberOfMatchs; i++){
					var debtList = "<tr id='debt-line-"+results[i].id+"'><td>"+results[i].id+"</td><td>"+(Number(results[i].xp)+Number(results[i].xp_facilitator))+"</td><td>"+results[i].email+"</td><td>"+results[i].tels+"</td><td>"+results[i].cpf+"</td><td><button class='btn btn-danger btn-xs pull-right' onclick='killDebt("+results[i].id+")'>Dette réglée</button></td></tr>";
					$('#searchResultTable').append(debtList);
				}
			}
		}
	});
	return false;
}