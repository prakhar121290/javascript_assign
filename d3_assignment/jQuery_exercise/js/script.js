$(document).ready(function()  {
   $("#find").click(function()  {
    $(".table_poster").empty();
    $(".table_data").empty();
    var title = $("#textbox").val();
   	 $.get("http://www.omdbapi.com/", {s: title}, function(data, status){
        if(status === "success")
        if(status === "error")
            alert("Error: " + xhr.status);
        var keys= Object.keys(data.Search[0]);
        console.log(data.Search[0]);
          $('.table_data').append("<thead><tr><th>Poster</th><th>Title</th><th>Year</th><th>imdbID</th><th>Type</th></tr></thead>");
          $.each(data.Search, function(i, detail){
         $('.table_data').append("<tr><td><img src="+detail.Poster+"</img></td><td>"+detail.Title+"</td><td>"+detail.Year+"</td><td>"+detail.imdbID+"</td><td>"+ detail.Type + "</td></tr>");
       })
     }); //get function ends here  
   });  //click function ends
 }); //ready function ends