const tbody = document.querySelector(".listar-usuarios");


async function visUsuario(id){
    console.log("Acessou: " + id);
    const dados = await fetch('visualizar.php?id=' + id);
    const resposta = await dados.json();
    //console.log(resposta);

    if(resposta['erro']){
        msgAlerta.innerHTML = resposta['msg'];
    }else{
        const visModal = new bootstrap.Modal(document.getElementById("staticBackdropativar"));
        visModal.show();

        document.getElementById("idUsuario").innerHTML = resposta['dados'].id;
        document.getElementById("nomeUsuario").innerHTML = resposta['dados'].nome;
    }

}