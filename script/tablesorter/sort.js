      var grid = document.getElementById('inp-table');

      grid.onclick = function(e) {
        var target = e && e.target || window.event.srcElement;

        if (target.tagName != 'TH') return;
					$('#myList').find('tr:lt('+x+')').attr('hidden', 'hidden');
        sortGrid(target.cellIndex, target.getAttribute('data-type'));
          $('#myList').find('tr:lt('+x+')').removeAttr('hidden');
      };

      function sortGrid(colNum, type) {
        var tbody = grid.getElementsByTagName('tbody')[0];

        // Составить массив из TR
        var rowsArray = [], i;
        for(i = 0; i<tbody.children.length; i++) {
          rowsArray.push(tbody.children[i]);
        }

        // 
        var compare;

        switch(type) {
          case 'number':
            if(document.getElementById('fa-sort-down') !== null && document.getElementById('fa-sort-down').cellIndex == colNum) {
                compare = function (rowA, rowB) {
                    var a = rowA.cells[colNum].innerHTML;
                    var b = rowB.cells[colNum].innerHTML;
                    if(a == 'Н/Д')
                        a = '300';
                    else if(b == 'Н/Д')
                        b = '300';
                    if (a.charAt(a.length - 1) == '%') {
                        a = a.substring(0, a.length - 1);
                    }
                    if (b.charAt(b.length - 1) == '%') {
                        b = b.substring(0, b.length - 1);
                    }
                    return a - b;
                };
                document.getElementById('fa-sort-down').id = 'fa-sort-up';
            } else {
                compare = function (rowA, rowB) {
                    var a = rowA.cells[colNum].innerHTML;
                    var b = rowB.cells[colNum].innerHTML;
                    if(a == 'Н/Д')
                        a = '-1';
                    else if(b == 'Н/Д')
                        b = '-1';
                    if (a.charAt(a.length - 1) == '%') {
                        a = a.substring(0, a.length - 1);
                    }
                    if (b.charAt(b.length - 1) == '%') {
                        b = b.substring(0, b.length - 1);
                    }
                    return b - a;
                };
                if (document.getElementById('fa-sort-down') !== null)document.getElementById('fa-sort-down').removeAttribute('id');
                else if (document.getElementById('fa-sort-up') !== null)document.getElementById('fa-sort-up').removeAttribute('id');
                grid.tHead.rows[0].cells[colNum].id = 'fa-sort-down';
            }
            break;
          case 'string':
              if(document.getElementById('fa-sort-down') !== null && document.getElementById('fa-sort-down').cellIndex == colNum) {
                  compare = function (rowA, rowB) {
                      var str1 = rowA.cells[colNum].innerHTML.toLowerCase();
                      var str2 = rowB.cells[colNum].innerHTML.toLowerCase();
                      if (str1.charAt(0) == '"') {
                          str1 = str1.substr(1);
                      }
                      if (str2.charAt(0) == '"') {
                          str2 = str2.substr(1);
                      }
						if(str1[0] == 'і')
						{
							return (str2[0] < 'и') ? -1 : 1; 
						}
						else if (str2[0] == 'і')
						{
							return (str1[0] > 'й') ? -1 : 1;
						}
                      return str1 > str2 ? -1 : 1;
					  
                  };
                  document.getElementById('fa-sort-down').id = 'fa-sort-up';
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
					  if(str1[0] == 'і')
						{
							return (str2[0] < 'и') ? 1 : -1; 
						}
						else if (str2[0] == 'і')
						{
							return (str1[0] > 'й') ? 1 : -1;
						}
                      return str1 > str2 ? 1 : -1;
                  };
                  if (document.getElementById('fa-sort-down') !== null)document.getElementById('fa-sort-down').removeAttribute('id');
                  else if (document.getElementById('fa-sort-up') !== null)document.getElementById('fa-sort-up').removeAttribute('id');
                  grid.tHead.rows[0].cells[colNum].id = 'fa-sort-down';
              }
            break;
        }
				
        rowsArray.sort(compare);
          
        grid.removeChild(tbody);

        //tbody.innerHTML = '' не працює IE
        while(tbody.firstChild) {
          tbody.removeChild(tbody.firstChild);
        }

        for(i=0; i<rowsArray.length; i++) {
          tbody.appendChild(rowsArray[i]);
        }

        grid.appendChild(tbody);

      }
