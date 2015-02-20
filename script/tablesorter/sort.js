      var grid = document.getElementById('inp-table');

      grid.onclick = function(e) {
        var target = e && e.target || window.event.srcElement;

        if (target.tagName != 'TH') return;

        // Если TH -- сортируем
				$('#myList').find('tr:lt('+x+')').attr("hidden", "hidden");
        sortGrid(target.cellIndex, target.getAttribute('data-type'));
				$('#myList').find('tr:lt('+x+')').removeAttr("hidden");
      };

      function sortGrid(colNum, type) {
        var tbody = grid.getElementsByTagName('tbody')[0];

        // Составить массив из TR
        var rowsArray = [], i;
        for(i = 0; i<tbody.children.length; i++) {
          rowsArray.push(tbody.children[i]);
        }

        // определить функцию сравнения, в зависимости от типа
        var compare;

        switch(type) {
          case 'number':
            if(document.getElementById('sorted') !== null && document.getElementById('sorted').cellIndex == colNum) {
                compare = function (rowA, rowB) {
                    var a = rowA.cells[colNum].innerHTML;
                    var b = rowB.cells[colNum].innerHTML;
                    if(a.charAt(a.length-1) == '%'){a=a.substring(0, a.length-1);}
                    if(b.charAt(b.length-1) == '%'){b=b.substring(0, b.length-1);}
                    return b - a;
                };
                document.getElementById('sorted').removeAttribute("id");
                //grid.tHead.rows[0].cells[colNum].id = 'sorted';
            }	else {
                compare = function (rowA, rowB) {
                    var a = rowA.cells[colNum].innerHTML;
                    var b = rowB.cells[colNum].innerHTML;
                    if(a.charAt(a.length-1) == '%'){a=a.substring(0, a.length-1);}
                    if(b.charAt(b.length-1) == '%'){b=b.substring(0, b.length-1);}
                    return a - b;
                };
                if (document.getElementById('sorted') !== null)document.getElementById('sorted').removeAttribute("id");
                grid.tHead.rows[0].cells[colNum].id = 'sorted';
            }
            break;
          case 'string':
                if(document.getElementById('sorted') !== null && document.getElementById('sorted').cellIndex == colNum) {
                    compare = function (rowA, rowB) {
                        var str1 = rowA.cells[colNum].innerHTML.toLowerCase();
                        var str2 = rowB.cells[colNum].innerHTML.toLowerCase();
                        if (str1.charAt(0) == '"') {
                            str1 = str1.substr(1);
                        }
                        if (str2.charAt(0) == '"') {
                            str2 = str2.substr(1);
                        }
                        return str1 > str2 ? -1 : 1;
                    };
                    document.getElementById('sorted').removeAttribute("id");
                }	else {
                    compare = function (rowA, rowB) {
                        var str1 = rowA.cells[colNum].innerHTML.toLowerCase();
                        var str2 = rowB.cells[colNum].innerHTML.toLowerCase();
                        if (str1.charAt(0) == '"') {
                            str1 = str1.substr(1);
                        }
                        if (str2.charAt(0) == '"') {
                            str2 = str2.substr(1);
                        }
                        return str1 > str2 ? 1 : -1;
                    };
                    if (document.getElementById('sorted') !== null)document.getElementById('sorted').removeAttribute("id");
                    grid.tHead.rows[0].cells[colNum].id = 'sorted';
                }
            break;
        }

        // сортировать
				
        rowsArray.sort(compare);

        // Убрать tbody из большого DOM документа для лучшей производительности
        grid.removeChild(tbody);
				
        // Убрать TR из TBODY.
        // Присваивание tbody.innerHTML = '' не работает в IE
        // 
        // на самом деле без этих строк можно обойтись! 
        // при добавлении appendChild все узлы будут сами перемещены на правильное место!
        while(tbody.firstChild) {
          tbody.removeChild(tbody.firstChild);
        }
 

        // добавить результат в нужном порядке в TBODY
        for(i=0; i<rowsArray.length; i++) {
          tbody.appendChild(rowsArray[i]);
        }

        grid.appendChild(tbody);

      }
