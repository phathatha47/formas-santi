		var aciertos = 0;


		var correct = document.getElementById('correct');
		var wrong = document.getElementById('wrong');
		var all = document.getElementById('all');
		
		$(document).ready(function () {
			$('div.drag').draggable({
				cursor:'pointer',
				revert:'invalid'
			});
			$('div.drop').droppable({
				drop: function (event,ui) {
						var dragObj = ui.draggable[0];
						var dropObj = this.id;
						console.log(dragObj.id + ' ' + dropObj);

						// Las comprobaciones se realizan comparando los 'id´s' de los 2 eventos
						if(dropObj==dragObj.id){
							aciertos++;
							$('#' + dragObj.id).draggable({
								revert: 'invalid'
							});

							// La funcion getComputedStyle nos genera un objeto de los atributos css relacionados al objeto
							var colorDrop = window.getComputedStyle(dragObj,null).getPropertyValue('background-color');
							console.log(window.getComputedStyle(dragObj,null))
							correct.play();

							$(this).css('background-color',colorDrop);
							console.log(colorDrop)
							$('#'+dragObj.id).css('display','none');
							comprobar();
						}else {
							$('#' + dragObj.id).draggable({
								revert: 'valid'
							});

							wrong.play();

						}
					}
 			});
		});



		// FUNCIONES



		function comprobar() {
			if(aciertos==4){
				$('body').prepend("<a href='' id='reintento'><img src='img/repetir.png' /></a>");
				all.play();
			}
			
		}


		function aleatorio(){
			var tipos = {

				'drag': ['rect','semic','gorro','circ'],
				'drop': ['rect','semic','gorro','circ']

			};

			for(valor in tipos) {
				console.log(tipos[valor])
				var desorden = tipos[valor].sort(function() {return Math.random() - 0.5});

				for (var i = 0; i < desorden.length; i++) {
					$('#' + valor).append("<div id='" + desorden[i] + "' class='" + valor +"'></div>");
				}					
				
			}
		}

		