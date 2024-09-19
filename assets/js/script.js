let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGastos = document.getElementById('descripcion').value;
    if(valorGasto >= 150){
        alert("Realizaste un gasto elevado revisalo");

    }
    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);
    listaDescripcionGastos.push(descripcionGastos);
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = "";
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento,posicion)=>{
        const valorGasto = Number(listaValoresGastos[posicion]);
        const descripcionGastos = listaDescripcionGastos[posicion];
        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} - ${descripcionGastos}
                        <button id="botonFormulario" onclick="eliminarGasto(${posicion});">Eliminar</button>
                        <button id="botonFormulario" onclick="modificarGasto(${posicion});">Modificar</button>
                    </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);
    });

    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
    document.getElementById('descripcion').value = '';
}

function eliminarGasto(posicion){
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    actualizarListaGastos();
}

function modificarGasto(){
    alert("Quieres modificar los datos?");
}