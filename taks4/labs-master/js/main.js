//выполнены пункты: 1,3,4,5,8

	var trigger=0, name, age, sex, education, mathematic, asu, cutting, programming,angl,tel; // обьявляем переменные которые понадобятся в ходе работы
		let start = document.getElementById("startTest").addEventListener("click",test);
		let upd  = 	document.getElementById('update').addEventListener('click', update);


		//start.addEventListener("click",test) // добавляем слушателя события click к элементу с id startTest
		function test(){ // Функция которая опрашивает пользователя
			name = prompt("Введите имя");
			age = prompt("Введите возраст");
			sex = prompt("Введите пол");
			tel = prompt("Введите номер телефона");
			education = confirm("У вас есть высше образование?");
			mathematic = confirm("Вы знаете математику?");
			asu = confirm("Вы знаете АСУ ТП?");
			cutting = confirm("Вы знаете теорию резания?");
			programming = confirm("Умеете программировать?");
			angl = confirm("Знаете англиский?");
			writeToPage();
			start.style.display.none;
		}
		function writeToPage(){ // функция которая записывает значение из наших переменных в элементы на странице
			/*
			document.getElementById("name") - возвращает элемент с id name
			document.getElementById("name").innerText - текст этого элемента
			У ЧЕКБОКСОВ НЕТ ТЕКСТА, поэтому мы пишем в свойство checked значения true или false
			document.getElementById("education").checked = education;
			*/
			$("#name").val(name)
			$("#age").val(age)
			$("#sex").val(sex);
			$("#tel").val(tel);
			$("#sex").focus();
			$("#age").focus();
			$("#name").focus();
			$("#tel").focus();
			document.getElementById("education").checked = education;
			document.getElementById("mathematic").checked = mathematic;
			document.getElementById("asu").checked = asu;
			document.getElementById("cutting").checked = cutting;
			document.getElementById("programming").checked = programming;
			document.getElementById("language").checked = angl;
			trigger=1;
			myFunction();
		}
		//	x.style.display = "none";
		function myFunction() { // эта функция автоматически проверяет подходит ли наш кандидат: "кандидаты со знанем АСУ ТП и высшим
					//образованием".
	    	var x = document.getElementById("div1");
		if (trigger==1) {
			if (document.getElementById("education").checked ==true && document.getElementById("asu").checked ==true)
			{
				var text ='<p class="stroke">ВЫ НАМ ПОДОШЛИ!</p>'
				x.innerHTML = text;
				x.style.display = "block";
			}
			else {
						var text ='<p class="stroke">ВЫ НАМ НЕ НУЖНЫ!</p>'
						x.innerHTML = text;
				}
		   }
		   $('#startTest').hide();
		   $('#update').attr('hidden',false);
		   $('#education').attr('disabled',true);
		   $('#mathematic').attr('disabled',true);
		   $('#asu').attr('disabled',true);
		   $('#cutting').attr('disabled',true);
		   $('#programming').attr('disabled',true);
		   $('#language').attr('disabled',true);
		}

	
		function update(){
			name = prompt("Введите имя");
			age = prompt("Введите возраст");
			sex = prompt("Введите пол");
			tel = prompt("Введите номер телефона");
		}