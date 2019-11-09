//api key: KVtPDlU5TfAMaVQLWvsYQQo6sta3L8Dz
// api secret: zwIH5Nd32sRsGhns
// example call: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

var my_key= "KVtPDlU5TfAMaVQLWvsYQQo6sta3L8Dz";
var question= $("#searchTerm").val();
//var question= "London";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + question + "&api-key="+ my_key;
var num_responses=$("#numRecords").val();
//var num_responses=4;


function get_a_result(){
    $("#articles").empty();
    //console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {


        for (var i=0; i<num_responses; i++){
          //  console.log(response);
          //  console.log(response.response.docs[i]);
            
            var_new_div=$("<div>");
            $(var_new_div).append("<H3>"+response.response.docs[i].headline.main+"</H3>")
            $(var_new_div).append("<p>"+response.response.docs[i].abstract+"</p>")
            $(var_new_div).append("<p>"+response.response.docs[i].pub_date+"</p>")
            $(var_new_div).append("<p>"+response.response.docs[i].byline.original+"</p>")
           // console.log("<a href=\""+response.response.docs[i].web_url+"\">"+response.response.docs[i].web_url+"</a>");
            $(var_new_div).append("<a href=\""+response.response.docs[i].web_url+"\">"+response.response.docs[i].web_url+"</a>")
            $("#articles").append(var_new_div);
        }
        

    });
}


$("#searchBtn").on("click",function(event){
    event.preventDefault();
    
     question= $("#searchTerm").val();
     queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + question + "&api-key="+ my_key;
     num_responses=$("#numRecords").val();
     get_a_result();

});

