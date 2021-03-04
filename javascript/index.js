let res = window.document.getElementById('res');


//Calculadora
function calcular() {
    
    let c1 = window.document.getElementById('c1');
    let c2 = window.document.getElementById('c2');

    if(document.getElementById('c1').value=='' || document.getElementById('c2').value==''){
        alert('Por favor, preencha ou revise todos os campos');
        return false
    }

    let cat_um = Number(c1.value);
    let cat_dois = Number(c2.value);


    let quad_hip = (cat_um * cat_um) + (cat_dois * cat_dois)
    let hip = Math.sqrt(quad_hip).toFixed(2);

    let final = ` O valor da hipotenusa é de ${hip}`
    document.getElementById('res').innerHTML = final;

}


//limpando o formulário
function limpa(){
    if  (document.getElementById('c1').value !="" || document.getElementById('c2').value !="" ){
        document.getElementById('c1').value ="";
        document.getElementById('c2').value ="";

        res.innerHTML = ' ';
    };
}