let listaNombresGastos = [];
let listaValoresGastos = [];
let listaDescripcionGastos = [];
let gastoActual = -1;

function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;
    let descripcionGastos = document.getElementById('descripcion').value;
    if (nombreGasto === '' || descripcionGastos === '' ||isNaN(valorGasto)) {
        alert('Por favor, ingrese nombre del gasto, descripción y valor');
        return;
    }

 
     if(valorGasto >= 150){
        confirm("Cuidado! Has ingresado un gasto mayor a USD 150!");

    }

    if (gastoActual === -1) {

        listaNombresGastos.push(nombreGasto);
        listaValoresGastos.push(valorGasto);
        listaDescripcionGastos.push(descripcionGastos);

    } else {

        listaNombresGastos[gastoActual] = nombreGasto;
        listaValoresGastos[gastoActual] = valorGasto;
        listaDescripcionGastos[gastoActual] = descripcionGastos;
        gastoActual = -1; 
        document.getElementById('botonActualizar').style.display = 'none';
        document.getElementById('botonFormulario').style.display = 'block';

    }

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
                        <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                        <button onclick="modificarGasto(${posicion});">Modificar</button>
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
    if(confirm('¿Seguro que quieres eliminar el gasto?')){

    }else{
        return;
    }
    listaNombresGastos.splice(posicion,1);
    listaValoresGastos.splice(posicion,1);
    listaDescripcionGastos.splice(posicion,1);
    actualizarListaGastos();
}

function modificarGasto(posicion) {
    if(confirm('¿Quieres modificar la información?')){

    }else{
        return;
    }   
    
    document.getElementById('nombreGasto').value = listaNombresGastos[posicion];
    document.getElementById('valorGasto').value = listaValoresGastos[posicion];
    document.getElementById('descripcion').value = listaDescripcionGastos[posicion];
    gastoActual = posicion;
    document.getElementById('botonActualizar').style.display = 'block';
    document.getElementById('botonFormulario').style.display = 'none';

}

function actualizarDatos(){
        
    clickBoton();

}