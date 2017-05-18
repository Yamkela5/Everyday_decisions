//the tasks must be displayed in a table
function addTask(Table) {

            var table = document.getElementById(Table);

            var Counter = table.rows.length;
            var row = table.insertRow(Counter);

          var b=document.getElementById('tasks').value;
 var cell1 = row.insertCell(0);
            var element1 = document.createElement("input");
            element1.type = "text";
            element1.style.width="100%";
            element1.name = "txtbox[]";
            element1.value=b;
                   cell1.appendChild(element1);
                   //create a table row for a checkbox
 var cell2 = row.insertCell(1);
            var element2 = document.createElement("input");
            element2.type = "checkbox";
            element2.name="chkbox[]";
            cell2.appendChild(element2);
document.getElementById('tasks').value=" ";
document.getElementById('pTotal').innerHTML= Counter + 1;
       }

       //document.getElementById('pTotal').innerHTML= rowCount + 1;
       //delete done tasks function
       function removeTasks(Table) {

            var table = document.getElementById(Table);
            var Counter = table.rows.length;

            for(var i=0; i<Counter; i++) {
                var row = table.rows[i];
                var chkbox = row.cells[1].childNodes[0];
                if(null != chkbox && true == chkbox.checked) {
                    table.deleteRow(i);
                    rowCount--;
                    i--;
//Count total task lest
 document.getElementById('pTotal').innerHTML= Counter;

            }
            }
        }
