function calcularAumento() {
    var salarioActual = parseFloat(document.getElementById('salarioActual').value);
    var porcentajeAumento = parseFloat(document.getElementById('porcentajeAumento').value);
  
    if (!isNaN(salarioActual) && !isNaN(porcentajeAumento)) {
      var aumento = (salarioActual * porcentajeAumento) / 100;
      var salarioConAumento = salarioActual + aumento;
  
      document.getElementById('salarioConAumento').innerHTML = `$${salarioConAumento.toFixed(2)}`;
    } else {
      alert('Por favor, ingrese valores numéricos válidos.');
    }
  }
  