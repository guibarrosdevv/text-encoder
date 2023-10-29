document.addEventListener('DOMContentLoaded', function () {
    const entradaDeTexto = document.getElementById('entrada-de-texto');
    const saidaDeTexto = document.getElementById('saida-de-texto');
    const codificarBtn = document.getElementById('codificar');
    const descodificarBtn = document.getElementById('descodificar');
    const copiarBtn = document.getElementById('copiar');
    const limparCamposBtn = document.getElementById('limpar-campos');

    codificarBtn.addEventListener('click', function () {
        const textoEntrada = entradaDeTexto.value;
        const textoCriptografado = encriptar(textoEntrada);
        saidaDeTexto.value = textoCriptografado;
        entradaDeTexto.value = "";
    });

    descodificarBtn.addEventListener('click', function () {
        const textoSaida = saidaDeTexto.value;
        const textoDescriptografado = desencriptar(textoSaida);
        entradaDeTexto.value = textoDescriptografado;
        saidaDeTexto.value = "";
    });

    copiarBtn.addEventListener('click', function () {
        saidaDeTexto.select();
        document.execCommand('copy');
    });

    limparCamposBtn.addEventListener('click', function () {
        entradaDeTexto.value = '';
        saidaDeTexto.value = '';
    });

    // Função para codificar o texto
    function encriptar(stringEncriptada) {

        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringEncriptada = stringEncriptada.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringEncriptada.includes(matrizCodigo[i][0])) {
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return stringEncriptada;
    }

    // Função para descodificar o texto
    function desencriptar(stringDesencriptada) {

        let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();

        for (let i = 0; i < matrizCodigo.length; i++) {
            if (stringDesencriptada.includes(matrizCodigo[i][1])) {
                stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
            }
        }

        return stringDesencriptada;
    }
});