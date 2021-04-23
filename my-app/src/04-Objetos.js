console.log('+-----------------------OBJETOS------------------------+');

const persona={
    nombre: "Jose Andres",
    apellidoPaterno: "Neiva",
    apellidoMaterno: "Marquez",
    fechaNacimiento: "13-03-2000",
    direccio: {
        viaPrincipal: "Calle",
        numeroVia: "43",
        nombreVia: "San Pedro",
        Placa: "70a-66",
        barrio: "Villa Magma",
        locacion: "Sur Oriente",
        comuna: "16"
    }

};

console.table(persona);

const computadora={
    Procesador: {
        nombre: "intel core i7 10700",
        cantidadNucleos: "4 nucleos",
        generacion: "10°",
        frecuenciaMax: "4.2 GHz",
        tipoMemoria: "DDR4",
    },
    ram: {
        nombre: "Corsai Vengance",
        cantidad: "2",
        capacidad: "64",
        tecnologia: "DDR4 DRAM",
        velocidad: "3000 MHz",
    },
    placaMadre: "Asus Rog Strix",
    discoDuro: "2 TB",

} 

// console.table(computadora);

let otrapersona01= {...persona}

otrapersona01.nombre = "Gisella";
otrapersona01.apellidoPaterno = "Neiva";
otrapersona01.apellidoMaterno = "Marquez";
otrapersona01.fechaNacimiento = "31-12-1995";

console.log("+......................................................+");
console.table(persona);
console.table(otrapersona01);

console.log("+...........................OBJETO DINAMICO..................................+")

const personaDinamica={
    nombre: "Jose Andres",
    apellidoPaterno: "Neiva",
    apellidoMaterno: "Marquez",
    fechaNacimiento: "13-03-2000",
    direccio: {
        viaPrincipal: "Calle",
        numeroVia: "43",
        nombreVia: "San Pedro",
        Placa: "70a-66",
        barrio: "Villa Magma",
        locacion: "Sur Oriente",
        comuna: "16"
    },
    fxNombreCompleto(){
        console.log(`Mi nombre completo es: ${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`)
    },

    fxTabularAtributos(){
        console.table(this);
    }

};

let obj = Object.create(personaDinamica);

obj.nombre = "Elma";
obj.apellidoPaterno = "Marquez";
obj.apellidoMaterno = "Lizarazo";
obj.fxNombreCompleto();
obj.fxTabularAtributos();

console.table(obj);

console.log("+...........................FIN PROGRAMA..................................+")