table = document.createElement("table")
table.setAttribute('id','new_table');
  table.border=1;
  table.style.border="1px solid blue";
   
   row=document.createElement("TR");
    row=table.insertRow(-1);
      var frequency=0;
     tableHead=["Date","Description"];
    for(let i=0;i<tableHead.length;i++)
    {
        header=document.createElement("TH");
        header.innerHTML=tableHead[i];
        header.setAttribute("onclick","sort("+frequency+")")
         row.appendChild(header);
         frequency+=1;

    }

 
  count=0;


function displayItems()
{
    var task=document.getElementsByClassName("content")[0];
   if(task.style.display=="none")
   {
     task.style.display="block";
   }
  else
  {
    task.style.display="block";
  }
  
}
function delete_item(element)
{
    element.remove();
}


function generate()
{
    var task=document.getElementsByClassName("content")[0];
    task.style.display="none";
    var arrObj = [];
    arrData = [];
    

    var date=document.getElementById("dateId").value;
    var text_area=document.getElementById("descriptionArea").value;
   
    



if(date == "" || text_area== "")
{
  alert("please enter the data");
}    
else 
{
    arrObj.push({"date":date,"text_area":text_area});
    
    
    for (let i=0;i<arrObj.length;i++){
        arrData.push(Object.values(arrObj[i]));

    }
    


    for (let i=0;i<arrData.length;i++){
        var row = document.createElement("tr");
        row=table.insertRow(-1);
        row.setAttribute("id","row"+count);
        for(let j=0;j<arrData[i].length+1;j++)
        {
           if(j==2)
           {
            var new_cell = document.createElement("td");
            new_cell = row.insertCell(-1);
            var btn=document.createElement("button");
            btn.setAttribute("onclick","delete_item(row"+count+")");
            var a=document.createTextNode("Delete");
            btn.appendChild(a);
            new_cell.appendChild(btn);
          } 
           else
           {
            var new_cell = document.createElement("td");            
            new_cell = row.insertCell(-1);
            new_cell.innerHTML=arrData[i][j];
           }
            

         }
         count+=1;
    }
    
    
}

document.body.appendChild(table);
    
}