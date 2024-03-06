function verificar (){
    let data = new Date ();
    let ano = data.getFullYear();
    let idad = document.getElementById("idade");
    let conversaodeidade = Number(idad.value);
    let idadegeral = ano - conversaodeidade;
    if(conversaodeidade == 0 && idadegeral < 0){
        window.alert("Erro")
    }
}