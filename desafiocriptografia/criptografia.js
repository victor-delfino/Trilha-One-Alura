function processartexto() {
    const texto = document.getElementById('text').value.toLowerCase();
    const opcao = document.getElementById('option').value;
    let result;

    if (opcao === 'criptografar') {
      result = criptografarTexto(texto);
    } else if (opcao === 'descriptografar') {
      result = descriptografarTexto(texto);
    }

    document.getElementById('result').textContent = result;
  }

  function criptografarTexto(texto) {
    const criptografarTexto = texto
      .replace(/e/g, "enter")
      .replace(/i/g, "imes")
      .replace(/a/g, "ai")
      .replace(/o/g, "ober")
      .replace(/u/g, "ufat");

    return criptografarTexto;
  }
  function descriptografarTexto(texto) {
    const descriptografarTexto = texto
      .replace(/enter/g, "e")
      .replace(/imes/g, "i")
      .replace(/ai/g, "a")
      .replace(/ober/g, "o")
      .replace(/ufat/g, "u");
    return descriptografarTexto;
  }