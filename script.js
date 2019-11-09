//api key: KVtPDlU5TfAMaVQLWvsYQQo6sta3L8Dz
// api secret: zwIH5Nd32sRsGhns
// example call: https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=yourkey
//<script type="text/javascript">
var my_key= "KVtPDlU5TfAMaVQLWvsYQQo6sta3L8Dz";
var question= "Iraq"
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + question + "&api-key="+ my_key;

function get_a_result(){

    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);

    });

}

get_a_result();

//</script>
