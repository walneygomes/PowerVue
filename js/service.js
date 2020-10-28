$(document).ready(function(){
        
    $("#estadoContente").hide();

    const urlGithub = 'https://covid19-brazil-api.now.sh/api/report/v1';


getEstados();



function getEstados(est){
    let request = new XMLHttpRequest();
    request.open('GET' , urlGithub);
    request.responseType= 'json';
    request.send();

    request.onload = function(){
        let responseData = request.response;
        if(est){
            formatEstado(responseData.data)
        }
        else{
            formatEstados(responseData.data)

        }

    }





}




function formatEstado(est){
    if(est.state==null){
        $("#estadoContente").append("estado não encontrado")
    }
    else {
        $("#estadoContente").append('state: ${est.state} <br>' )
    }

    $("#estadoContente").append("<a href='#' target='blank> voltar</a>")

}

function formatEstados(estados){
    console.log(estados)
    for(let i = 0; i<estados.length; i++){
        
        let objEstados = {
            cases:  estados[i].cases,
            deaths: estados[i].deaths,
            state: estados[i].state

        }
        showEstados(objEstados);
    }

}





function showEstados(estados){
    console.log(estados)
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

    $("#botaopesquisa").click(function(){
            $("#homeContent").hide();
            $("#estadoContente").show();

            let estadosName= $("input").val();
            getEstados(estadosName)
        }


    )



})