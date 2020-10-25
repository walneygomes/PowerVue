const url = 'https://covid19-brazil-api.now.sh/api/report/v1';

window.onload = function(){
    getEstados();
   
}


function getEstados(){
    let request = new XMLHttpRequest();
    request.open('GET' , url);
    request.responseType= 'json';
    request.send();

    request.onload = function(){
        let responseData = request.response;
        formatEstados(responseData.data);
    }





}

function formatEstados(estados){
    for(let i = 0; i<estados.length; i++){
        
        showEstados(estados[i]);
    }

}

function showEstados(estados){
    $("#estado_tabela").append("<tr>");
    let object_keys = Object.keys(estados);

    for( let key=0; key<object_keys.length; key++){
        let currentKey=object_keys[key];
        if(currentKey=="state"){
           
            $("#estado_tabela").append("<td>" + `${estados.state}` + "</td>")
        }
        else if(currentKey=="cases"){
            $("#estado_tabela").append("<td>" + `${estados.cases}` + "</td>")
        }
        else if(currentKey=="deaths"){
            $("#estado_tabela").append("<td>" + `${estados.deaths}` + "</td>")
        }
    }
    $("#estado_tabela").append("</tr>");


}