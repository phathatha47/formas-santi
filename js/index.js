		var aciertos = 0;

		var aciertosObj = {
			'rect': 0,
			'circ': 0,
			'semic': 0,
			'gorro' : 0
		};


		var correct = document.getElementById('correct');
		var wrong = document.getElementById('wrong');
		var all = document.getElementById('all');
		
		function darPropiedades() {
			$('div.drag').draggable({
				cursor:'pointer',
				revert:'invalid'
			});
			$('.drop').droppable({
				drop: function (event,ui) {
						var dragObj = ui.draggable[0];
						var dropObj = this.id;
						console.log(dragObj.id + ' ' + dropObj);
						if(dropObj==dragObj.id && aciertosObj[dragObj.id]==0){
							aciertosObj[dragObj.id]++;
							aciertos++;
							console.log(aciertosObj);
							$('#' + dragObj.id).draggable({
								revert: 'invalid'
							});
							var colorDrop = window.getComputedStyle(dragObj,null).getPropertyValue('background-color');
							
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
		};



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
			darPropiedades();
		}

		