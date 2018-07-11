/* Al Eliminar una pregunta */
function delBoxPregunta(nro){
	$("#box-pregunta"+nro).remove();
	$("#body-table-querys-row-"+nro).remove();
};

/** Crear Accordion Contenidor **/
function newBoxPreguntas(type){
	var newid = 0;
	$.each($("#accordion .panel"), function() {
		if (parseInt($(this).data("id")) > newid) {
			newid = ("00" + parseInt($(this).data("id"))).substr(-2,2);;
		}
	});
	newid++;
	newid = ("00" + newid).substr(-2,2);
	console.log(newid);
	
	outHtml = '';
	outHtml += '<div class="panel-heading" role="tab" id="heading-query-'+newid+'">';
		outHtml += '<h4 class="panel-title">';
			outHtml += '<a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapse-query-'+newid+'" aria-expanded="false" aria-controls="collapse-query-'+newid+'">';
			  outHtml += 'Pregunta # '+newid;
			outHtml += '</a>';
			outHtml += '<a class="btn btn-xs btn-danger" style="float:right;" href="javascript:delBoxPregunta('+"'"+newid+"'"+');">';
				outHtml += '<i class="glyphicon glyphicon-remove"></i>';
			outHtml += '</a>';
		outHtml += '</h4>';
	outHtml += '</div>';
	
	outHtml += '<div id="collapse-query-'+newid+'" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="heading-query-'+newid+'">';
		outHtml += '<div class="panel-body">';
			jQuery('.body-table-querys').append("<tr id='body-table-querys-row-"+newid+"'><th>"+newid+"</th><th>Pregunta # "+newid+"</th><th>"+type+"</th><th></th></tr>");
				
			outHtml += '<div class="input-group">';
				outHtml += '<span class="input-group-addon">Pregunta</span>';
				outHtml += '<textarea name="query-'+newid+'-pregunta" type="text" class="form-control" placeholder="Cual es la pregunta?"></textarea>';
			outHtml += '</div>';
				outHtml += '<input type="hidden" name="query-'+newid+'-pregunta_type" class="form-control" value="'+type+'" />';
			outHtml += '<hr>';
			outHtml += '<h3>Respuestas';
				outHtml += '<a class="btn btn-xs btn-success" style="float:right;" href="javascript:newQueryType('+"'"+newid+"','"+type+"'"+');">';
					outHtml += '<i class="glyphicon glyphicon-plus"></i>';
				outHtml += '</a>';
			outHtml += '</h3>';
			$htmlInt = '<table class="table table-responsive" width="100%" style="text-align:center;" id="query-'+newid+'-tab_logic">';
				$htmlInt += '<thead>';
					$htmlInt += '<tr>';
						outHtml += crearFormGeneral(newid,type);
					$htmlInt += '</tr>';
				$htmlInt += '</thead>';
				$htmlInt += '<tbody></tbody>';
			$htmlInt += '</table>';
			
			
		outHtml += '</div>';
	outHtml += '</div>';
	
	var div = $("<div></div>", {
		"data-id": newid,
		"html": outHtml,
		"class": "panel panel-default",
		"id": "box-pregunta"+newid
	});
	
	// Agregar la nueva fila
	$(div).appendTo($('#accordion'));	
}

/** Crear Tabla General **/
function crearFormGeneral(newid,type){
	switch(type) {
		case 'unique':
			$htmlInt += '<th>Correcta / Incorrecta</th>';
			$htmlInt += '<th>Respuesta</th>';
			$htmlInt += '<th>Retro-Alimentacion</th>';
			$htmlInt += '<th>Borrar</th>';
			return $htmlInt;
			break;
		case 'multiple':
			$htmlInt += '<th>Correcta / Incorrecta</th>';
			$htmlInt += '<th> % </th>';
			$htmlInt += '<th>Respuesta</th>';
			$htmlInt += '<th>Retro-Alimentacion</th>';
			$htmlInt += '<th>Borrar</th>';
			return $htmlInt;
			break;
		case 'boolean':
			$htmlInt += '<th>Falsa / Verdadera</th>';
			$htmlInt += '<th>Retro-Alimentacion - Gana</th>';
			$htmlInt += '<th>Retro-Alimentacion - Pierde</th>';
			$htmlInt += '<th>Borrar</th>';
			return $htmlInt;
			break;
		case 'pairing':
			$htmlInt += '<th>Subpregunta</th>';
			$htmlInt += '<th>Subrespuesta</th>';
			$htmlInt += '<th>Borrar</th>';
			return $htmlInt;
			break;
		default:
						$htmlInt += '<th>ERROR AL GENERAR LA TABLA { main::JS }</th>';
			return $htmlInt;
			break;
	}


}

/** Crear Formularios **/
function newQueryType(nro_query,type){
	var newid = 0;
	$.each($("#query-"+nro_query+"-tab_logic tr"), function() {
		if (parseInt($(this).data("id")) > newid) {
			newid = parseInt($(this).data("id"));
		}
	});
	newid++;
	console.log(newid);
	
	htmlInt = '';
	switch(type) {
		case 'unique':
			htmlInt += '<td data-name="checkbox_good"><input name="checkbox_good'+newid+'" type="checkbox" /></td>';
			htmlInt += '<td data-name="response_text"><textarea name="response_text'+newid+'" class="form-control" placeholder="Ingrese la respuesta"></textarea></td>';
			htmlInt += '<td data-name="retro_text"><textarea name="retro_text'+newid+'" class="form-control" placeholder="Ingrese la Retro-Alimentacion"></textarea></td>';
			htmlInt += '<td data-name="del"><button name="del'+newid+'" class="btn btn-danger glyphicon glyphicon-remove row-remove"></button></td>';
			break;
		case 'multiple':
			htmlInt += '<td data-name="checkbox_good"><input name="checkbox_good'+newid+'" type="checkbox" /></td>';
			htmlInt += '<td data-name="porcent"><input class="form-control" name="porcent'+newid+'" type="numer" /></td>';
			htmlInt += '<td data-name="response_text"><textarea name="response_text'+newid+'" class="form-control" placeholder="Ingrese la respuesta"></textarea></td>';
			htmlInt += '<td data-name="retro_text"><textarea name="retro_text'+newid+'" class="form-control" placeholder="Ingrese la Retro-Alimentacion"></textarea></td>';
			htmlInt += '<td data-name="del"><button name="del'+newid+'" class="btn btn-danger glyphicon glyphicon-remove row-remove"></button></td>';
			break;
		case 'boolean':
			htmlInt += '<td data-name="checkbox_good"><input name="checkbox_good'+newid+'" type="checkbox" /></td>';
			htmlInt += '<td data-name="response_text"><textarea name="response_text'+newid+'" class="form-control" placeholder="Ingrese la respuesta"></textarea></td>';
			htmlInt += '<td data-name="retro_text"><textarea name="retro_text'+newid+'" class="form-control" placeholder="Ingrese la Retro-Alimentacion"></textarea></td>';
			htmlInt += '<td data-name="del"><button name="del'+newid+'" class="btn btn-danger glyphicon glyphicon-remove row-remove"></button></td>';
			break;
		case 'pairing':
			htmlInt += '<td data-name="response_text"><textarea name="response_text'+newid+'" class="form-control" placeholder="Ingrese la respuesta"></textarea></td>';
			htmlInt += '<td data-name="retro_text"><textarea name="retro_text'+newid+'" class="form-control" placeholder="Ingrese la Retro-Alimentacion"></textarea></td>';
			htmlInt += '<td data-name="del"><button name="del'+newid+'" class="btn btn-danger glyphicon glyphicon-remove row-remove"></button></td>';
			break;
		default:
			htmlInt += '<td data-name="checkbox_good"><input name="checkbox_good'+newid+'" type="checkbox" /></td>';
			htmlInt += '<td data-name="del"><button name="del'+newid+'" class="btn btn-danger glyphicon glyphicon-remove row-remove"></button></td>';
			break;
	}
	
	var tr = $("<tr></tr>", {
		id: "pregunta-"+nro_query+"-respuesta"+newid,
		"data-id": newid,
		"html": htmlInt
	});
	
	// Agregar la nueva fila
	$(tr).appendTo($("#query-"+nro_query+"-tab_logic"));			
	$(tr).find("td button.row-remove").on("click", function() {
		 $(this).closest("tr").remove();
	});
}

function newQuery(nro_query){
	var newid = 0;
	$.each($("#query-"+nro_query+"-tab_logic tr"), function() {
		if (parseInt($(this).data("id")) > newid) {
			newid = parseInt($(this).data("id"));
		}
	});
	newid++;
	console.log(newid);
	
	htmlInt = '';			
	htmlInt += '<td data-name="checkbox_good"><input name="checkbox_good'+newid+'" type="checkbox" /></td>';
	htmlInt += '<td data-name="response_text"><textarea name="response_text'+newid+'" class="form-control" placeholder="Ingrese la respuesta"></textarea></td>';
	htmlInt += '<td data-name="retro_text"><textarea name="retro_text'+newid+'" class="form-control" placeholder="Ingrese la Retro-Alimentacion"></textarea></td>';
	htmlInt += '<td data-name="del"><button name="del'+newid+'" class="btn btn-danger glyphicon glyphicon-remove row-remove"></button></td>';
	
		
	var tr = $("<tr></tr>", {
		id: "pregunta-"+nro_query+"-respuesta"+newid,
		"data-id": newid,
		"html": htmlInt
	});
	
	// Agregar la nueva fila
	$(tr).appendTo($("#query-"+nro_query+"-tab_logic"));			
	$(tr).find("td button.row-remove").on("click", function() {
		 $(this).closest("tr").remove();
	});
}

function reemplazarCaracteres(stringDefault){
	stringDefault = stringDefault.replace("~", "\\~");
	stringDefault = stringDefault.replace("=", "\\=");
	stringDefault = stringDefault.replace("#", "\\#");
	stringDefault = stringDefault.replace("{", "\\{");
	stringDefault = stringDefault.replace("}", "\\}");
	stringDefault = stringDefault.replace(/['"`´]+/g, "\\'");
	stringDefault = stringDefault.replace("^", "\\^");
	stringDefault = stringDefault.replace(/(?:\r\n|\r|\n)/g, "\\n");
	return stringDefault;
}

function generarCode(){
	jQuery('#messages-global').html("");
	finalText = "";
	
	/* Buscar Caytegorias. */
	category = '';
	category_total = $('input[name="category"]').length;
	
	$.each($('input[name="category"]'), function(index) {
		if(index == 0 || category == '' || category == ' '){
			category = $(this).val();
		}else{
			category += '/' + $(this).val();
		}
	});
	
	//category = $('input[name="category"]').val();
	if(category == '' || category == undefined || category == ' '){ createAlerts('Ingresa la categoria','danger'); return false; };
	finalText += '\n$CATEGORY: '+category+"\n\n";
	query_detect = new Array();
	
	// Buscar Preguntas
	$.each($("#accordion .panel"), function() {
		if (parseInt($(this).data("id")) > 0) {
			pregunta = {};
			pregunta.id = $(this).data("id");
			pregunta.title = reemplazarCaracteres($('[name="query-'+pregunta.id+'-pregunta"]').val());
			if(pregunta.title == '' || pregunta.title == undefined || pregunta.title == ' '){ createAlerts("La pregunta # "+pregunta.id+" esta vacia.",'danger'); return false; };
			pregunta.type = $('[name="query-'+pregunta.id+'-pregunta_type"]').val();
			pregunta.response = new Array();
			
			// Validar si la pregunta tiene porcentaje
			if(pregunta.type == 'multiple'){ recolectar_porcen = true; }else{ recolectar_porcen = false; };
			
			// Buscar respuestas
			$.each($("#query-"+pregunta.id+"-tab_logic tr"), function() {
				if (parseInt($(this).data("id")) > 0) {
					respuesta = {};
					respuesta.id = parseInt($(this).data("id"));
					respuesta.text = reemplazarCaracteres($('#query-'+pregunta.id+'-tab_logic [name="response_text'+respuesta.id+'"]').val());
					respuesta.retro_text = reemplazarCaracteres($('#query-'+pregunta.id+'-tab_logic [name="retro_text'+respuesta.id+'"]').val());
					respuesta.value = $('#query-'+pregunta.id+'-tab_logic [name="checkbox_good'+respuesta.id+'"]').is(":checked");
					
					// Agregar el porcentaje
					if(recolectar_porcen == true){ respuesta.porcent = $('#query-'+pregunta.id+'-tab_logic [name="porcent'+respuesta.id+'"]').val(); }
					
					
					// Agregar Colores
					respuesta.color = 'none';
					if(pregunta.type == 'unique'){
						if(respuesta.value == true){ respuesta.color = 'green'; }
						else{ respuesta.color = 'red'; };
					}
					if(pregunta.type == 'multiple'){
						if(respuesta.value == true){ respuesta.color = 'green'; }
						else{ respuesta.color = 'red'; };
						
						if(respuesta.porcent > 0 && respuesta.porcent !== undefined && respuesta.porcent !== '' && respuesta.porcent !== ' '){ respuesta.color = 'orange'; }
					}
					
					pregunta.response.push(respuesta);
				}
			});
			query_detect.push(pregunta);
		}
	});
	console.log(query_detect);
	
	
	// 2da Parte
	for (var k in query_detect){
		if (query_detect.hasOwnProperty(k)) {
			// Organizar para UNIQUE => Unica Respuesta
			if(query_detect[k].type == 'unique'){
				finalText += "::Pregunta "+query_detect[k].id+"::";
				finalText += query_detect[k].title+" {\n";
				target = query_detect[k].response;
				for (var j in target){
					if (target.hasOwnProperty(j)) {
						if(target[j].retro_text !== '' && target[j].retro_text !== undefined){ target[j].retro_text = '#'+'<p><span style\\="background-color: '+target[j].color+'; color: white; padding-left: 8px; padding-right: 8px"><strong><b>'+target[j].retro_text+'</b></strong></span></p>'; }
						if(target[j].value == true){ temp_tag = '='; }else{ temp_tag = '~'; }
						finalText += temp_tag+target[j].text+target[j].retro_text+"\n";
					}
				}
				finalText += "}\n\n";
			}
			
			
			// Organizar para boolean => Falso o Verdadero
			else if(query_detect[k].type == 'boolean'){				
				finalText += "::Pregunta "+query_detect[k].id+"::";
				finalText += query_detect[k].title+" {";
					target = query_detect[k].response;
					
					
					
					if(target[0].retro_text !== '' && target[0].retro_text !== undefined){ target[0].retro_text = '#'+'<p><span style\\="background-color: red; color: white; padding-left: 8px; padding-right: 8px"><strong><b>'+target[0].retro_text+'</b></strong></span></p>'; }
					
					if(target[0].value == true){ temp_tag = 'T'; }else{ temp_tag = 'F'; }
					finalText += temp_tag+target[0].retro_text+"#"+'<p><span style\\="background-color: green; color: white; padding-left: 8px; padding-right: 8px"><strong><b>'+target[0].text+'</b></strong></span></p>';
				finalText += "}\n\n";
			}
			
			
			// Organizar para pairing => Emparejamiento
			else if(query_detect[k].type == 'pairing'){
				finalText += "::Pregunta "+query_detect[k].id+"::";
				finalText += query_detect[k].title+" {\n";
				target = query_detect[k].response;
				for (var j in target){
					if (target.hasOwnProperty(j)) {
						
						finalText += "="+target[j].text+" -> "+target[j].retro_text+"\n";
					}
				}
				finalText += "}\n\n";
			}
			
			
			// Organizar para multiple => Multiple Respuesta
			else if(query_detect[k].type == 'multiple'){
				finalText += "::Pregunta "+query_detect[k].id+"::";
				finalText += query_detect[k].title+" {\n";
				target = query_detect[k].response;
				console.log(query_detect[k]);
				for (var j in target){
					if (target.hasOwnProperty(j)) {
						if(target[j].retro_text !== '' && target[j].retro_text !== undefined){ target[j].retro_text = '#'+'<p><span style\\="background-color: '+target[j].color+'; color: white; padding-left: 8px; padding-right: 8px"><strong><b>'+target[j].retro_text+'</b></strong></span></p>'; }
						
						//if(target[j].retro_text !== '' && target[j].retro_text !== undefined){ target[j].retro_text = '#'+target[j].retro_text; }
						if(target[j].value == true){ temp_tag = '='; }else{ temp_tag = '~'+'%'+target[j].porcent+'%'; }
						finalText += temp_tag+target[j].text+target[j].retro_text+"\n";
					}
				}
				finalText += "}\n\n";
			}
			else{
				console.log("opcion no parametrizada.")
			}
		}
	}
	console.log(finalText);
	
	// Colocar resultado
	$("#result-code").val(finalText);
}

function download2(){	
	//uriContent = "data:application/octet-stream," + encodeURIComponent($("#result-code").val());
	uriContent = "data:application/octet-stream;charset=utf-8," + ($("#result-code").val());
	newWindow = window.open(uriContent, 'neuesDokument');
}

function download(filename) {
	var pom = document.createElement('a');
	pom.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent($("#result-code").val()));
	//pom.setAttribute('download', filename);
	pom.setAttribute('download', $('input[name="category"]').val()); // Colocar el nombre de la categoria como nombre del archivo .TXT

	if (document.createEvent) {
		var event = document.createEvent('MouseEvents');
		event.initEvent('click', true, true); 
		pom.dispatchEvent(event);
	}
	else {
		pom.click();
	}
}
		
function createAlerts(message,type){
	if(message == undefined){ message = 'Sin mensaje'; };
	if(type == undefined){ type = 'info'; };
	
	$html = '<div class="alert alert-'+type+'">'+message+'</div>';
	jQuery('#messages-global').html($html);
}
