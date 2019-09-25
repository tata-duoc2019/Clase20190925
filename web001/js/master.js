
var total=0;
var bloque=0;
var rango=0;

function ListaTabla(t, r){
    total = t;
    rango = r;
    var str='';
    for(var i=0;i<t;i++){
        
        str+='<tr>';
        str+='<td>'+eval(i+1)+'</td>';
        str+='<td>Nombre '+eval(i+1)+'</td>';
        str+='<td>Estado_'+eval(i+1)+'</td>';
        str+='</tr>';
    }
    return str;
}