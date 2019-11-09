//api key: KVtPDlU5TfAMaVQLWvsYQQo6sta3L8Dz
// api secret: zwIH5Nd32sRsGhns
// example call: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
//<script type="text/javascript">
var my_key= "KVtPDlU5TfAMaVQLWvsYQQo6sta3L8Dz";
var question= $("#searchTerm").val();
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + question + "&api-key="+ my_key;
var num_responses=5;




function get_a_result(){
    $("#articles").empty();
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {


        for (var i=0; i<num_responses; i++){
            console.log(response);
            console.log(response.response.docs[i]);
            console.log(response.response.docs[i].headline.main);
            console.log(response.response.docs[i].abstract);
            console.log(response.response.docs[i].pub_date);
            console.log(response.response.docs[i].byline.original);
            console.log(response.response.docs[i].web_url);
            var_new_div=$("<div>");
            $(var_new_div).append("<H3>"+response.response.docs[i].headline.main+"</H3>")
            $(var_new_div).append("<p>"+response.response.docs[i].abstract+"</p>")
            $(var_new_div).append("<p>"+response.response.docs[i].pub_date+"</p>")
            $(var_new_div).append("<p>"+response.response.docs[i].byline.original+"</p>")
            console.log("<a href=\""+response.response.docs[i].web_url+"\">"+response.response.docs[i].web_url+"</a>");
            $(var_new_div).append("<a href=\""+response.response.docs[i].web_url+"\">"+response.response.docs[i].web_url+"</a>")
            $("#articles").append(var_new_div);
        }
        
       

        
       


    });
}

get_a_result();

//</script>
