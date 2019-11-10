//api key: KVtPDlU5TfAMaVQLWvsYQQo6sta3L8Dz
// api secret: zwIH5Nd32sRsGhns
// example call: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey

var my_key= "KVtPDlU5TfAMaVQLWvsYQQo6sta3L8Dz";
var question= $("#searchTerm").val();
var queryURL;
var num_responses=$("#numRecords").val();


function get_a_result(){
    //here the query is built, send it, wait for a response and fill up Div's with the responses, up to the requested number.
    $("#articles").empty();
    //console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {


        for (var i=0; i<num_responses; i++){
            console.log(response);
          //  console.log(response.response.docs[i]);
            
            var_new_div=$("<div>");
            $(var_new_div).append("<H3>"+response.response.docs[i].headline.main+"</H3>")
            $(var_new_div).append("<p>"+response.response.docs[i].abstract+"</p>")
            var my_date=response.response.docs[i].pub_date.split("T");      //get rid of everything after the "T"
            var trimmed_date=my_date[0];
            $(var_new_div).append("<p>"+trimmed_date+"</p>")
            $(var_new_div).append("<p>"+response.response.docs[i].byline.original+"</p>")
           // console.log("<a href=\""+response.response.docs[i].web_url+"\">"+response.response.docs[i].web_url+"</a>");
            $(var_new_div).append("<a href=\""+response.response.docs[i].web_url+"\">"+response.response.docs[i].web_url+"</a>")
            $("#articles").append(var_new_div);
        }
        

    });
}


$("#searchBtn").on("click",function(event){
    //build the search URL and send it.
    event.preventDefault();
    
     question= $("#searchTerm").val();
     var temp_string=buildDateString();
     queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + question +buildDateString()+ "&api-key="+ my_key;
     
     console.log(queryURL);
     num_responses=$("#numRecords").val();
     get_a_result();

});

function buildDateString(){
//build the filter portion of the URL by searching the optional date inputs.  If either are blank,return blank.
    var start_year = parseInt($("#startYear").val());
    var end_year = parseInt($("#endYear").val());


    //"&fq=pub_year:("+temp_string+")
    var temp_str="";

    if ((start_year>0)&&(end_year>0)){
        //optional years ahve been added.
        for (var i=parseInt(start_year); i<parseInt(end_year+1);i++){
            temp_str=temp_str+'"' +i+'"' ;         //add the year and a space
        }
        
        var answer='&fq=pub_year:('+temp_str+')';
        
        return answer;
    } else {
       //no years requested.  the filter part should be blank
        return "";
    }

    return temp_str;

};
