
let resultado = document.querySelector('[data-resultado]');
let texto = document.querySelector('[data-input_texto]');
let btnCript = document.querySelector('[data-btn_cript]');
let btnDescript = document.querySelector('[data-btn_descript]');
let btnCopiar = document.querySelector('[data-btn_copiar ]');


btnCript.addEventListener("click",() => {

resultado.value = encrypt(texto.value);

});


btnDescript.addEventListener("click",() => {

resultado.value = descrypt(resultado.value);

});

btnCopiar.addEventListener("click",() => {

navigator.clipboard.writeText(resultado.value);

});



function encrypt(txt){
	let lista = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

	txt = txt.trim().toLowerCase();

	for(let i=0; i < lista.length; i++){  
        
        if(txt.includes(lista[i][0])){
        	txt = txt.replaceAll(lista[i][0], lista[i][1]);
        }

    }

    return txt;
}


function descrypt(txt){
	let lista = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];

	txt = txt.trim().toLowerCase();

	for(let i=0; i < lista.length; i++){  
        
        if(txt.includes(lista[i][0])){
        	txt = txt.replaceAll(lista[i][1], lista[i][0]);
        }

    }

    return txt;
}