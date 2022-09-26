let paragrafo = document.getElementById('paragrafo');
console.log(paragrafo.innerHTML);

let texto = document.getElementById('texto');
let textoAtualizado = () => {
    console.log(texto.value);
};

let valorButton = () => {
    paragrafo.innerHTML = texto.value;
    texto.value = ''
};