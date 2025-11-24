window.onload = () => {
    // Crear tarjetas
    crearTarjetas(filosofos)

    // Crear handlers para los botones de control
    let botonCrearTarjeta = document.querySelector('.create-btn');
    botonCrearTarjeta.addEventListener('click', crearNuevaTarjeta);

    // BOTONES ORDEN ALFABETICO
    let botones = document.querySelectorAll('.sort-btn');
    botones[0].addEventListener('click', ordenarNombreAZ);
    botones[1].addEventListener('click', ordenarNombreZA);


    // GUARDAR TARJETAS
    let saveTarjetas = document.querySelector('.save-btn');
    saveTarjetas.addEventListener('click', guardarTarjetas);

    let loadTarjetas = document.querySelector('.load-btn');
    loadTarjetas.addEventListener('click', cargarTarjetas);
}

function crearTarjetas(filosofos) {
    filosofos.forEach((filosofo) => {
        // Creamos tarjeta vacía
        let tarjeta = document.createElement('div');
        tarjeta.classList.add('card');
        // Creamos imagen
        let imagen = document.createElement('img');
        imagen.src = filosofo.imagen;
        imagen.alt = `Foto de ${filosofo.nombre}`;
        imagen.classList.add("photo");
        tarjeta.append(imagen);

        // Creamos caja de informacion
        let info = document.createElement('div');
        info.classList.add('card-info');
        tarjeta.append(info);
        // Creamos título
        let titulo = document.createElement('h3');
        titulo.classList.add('nombre');
        titulo.innerHTML = filosofo.nombre;
        info.append(titulo);
        // Creamos fila de información (info-row)
        let filaInfo = document.createElement('div');
        filaInfo.classList.add('info-row');
        info.append(filaInfo);

        // Añadimos info del país a filaInfo
        let infoPais = document.createElement('div'); // DIV info-pais
        infoPais.classList.add('info-pais');
        filaInfo.append(infoPais)

        let paisOrigenBandera = document.createElement('img') // BANDERA PAIS
        paisOrigenBandera.classList.add('bandera'); // que m'havia oblidat d'afegir la classe a paisOrigenBandera
        paisOrigenBandera.src = filosofo.pais.bandera;
        infoPais.append(paisOrigenBandera)

        let paisOrigenNombre = document.createElement('span'); // NOMBRE PAIS
        paisOrigenNombre.classList.add('pais');
        paisOrigenNombre.innerHTML = filosofo.pais.nombre;
        infoPais.append(paisOrigenNombre)

        // Añadimos info de la corriente a filaInfo
        let infoCorriente = document.createElement('div'); // DIV info-corriente
        infoCorriente.classList.add('info-corriente');
        filaInfo.append(infoCorriente);

        let corrienteTitulo = document.createElement('span'); // Corriente:
        corrienteTitulo.innerHTML = "Corriente: ";
        infoCorriente.append(corrienteTitulo);

        let corrienteNombre = document.createElement('span'); // NOMBRE CORRIENTE
        corrienteNombre.classList.add('corriente');
        corrienteNombre.innerHTML = filosofo.corriente;
        infoCorriente.append(corrienteNombre);

        // Añadimos info del arma a filaInfo
        let infoArma = document.createElement('div'); // DIV info-arma
        infoArma.classList.add('info-arma');
        filaInfo.append(infoArma)

        let armaTitulo = document.createElement('span'); // Arma: 
        armaTitulo.innerHTML = "Arma: "
        infoArma.append(armaTitulo);

        let armaNombre = document.createElement('span'); // NOMBRE ARMA 
        armaNombre.classList.add('arma')
        armaNombre.innerHTML = filosofo.arma;
        infoArma.append(armaNombre);



        // Añadimos caja de habilidades
        let habilidades = document.createElement('div');
        habilidades.classList.add('skills');
        info.append(habilidades);
        // Añadimos una a una las habilidades
        for (let infoHabilidad of filosofo.habilidades) {
            // Añadimos una caja de habilidad
            let singleSkill = document.createElement('div'); // DIV por cada habilidad
            singleSkill.classList.add('skill');
            habilidades.append(singleSkill)

            // Añadimos contenido caja de habilidad
            // 1.Icono de habilidad 
            // let imgSkill = document.createElement('img'); // ICONO DE LA HABILIDAD
            // imgSkill.src= "https://via.placeholder.com/16";
            // singleSkill.append(imgSkill)

            // 2.Etiqueta de habilidad
            let skillName = document.createElement('span') //SPAN infoHabilidad.habilidad (Sabiduría,Oratoria,Lógica,Innovación)
            skillName.classList.add('skill-name')
            skillName.innerHTML = infoHabilidad.habilidad
            singleSkill.append(skillName)

            // 2.Barra de habilidad
            let skillBar = document.createElement('div') // BARRA DEFAULT DE LA HABILIDAD
            skillBar.classList.add('skill-bar')
            singleSkill.append(skillBar)

            let skillLevel = document.createElement('div'); // NIVEL DE HABILIDAD INDICADO SOBRE LA BARRA
            skillLevel.classList.add('level');
            skillLevel.style = `width: ${(infoHabilidad.nivel * 100) / 4}%;`;
            skillBar.append(skillLevel);

        }

        // --->AQUÍ VA EL NOU CODI<---
        let deleteCard = document.createElement('div'); // DIV X para eliminar tarjeta
        deleteCard.innerHTML = "&#x2716";
        deleteCard.classList.add('botonEliminar');
        deleteCard.addEventListener('click', eliminarTarjeta); // 'click'
        tarjeta.append(deleteCard)

        // Añadimos tarjeta creada al contenedor de tarjetas
        let contenedor = document.querySelector('.cards-container');
        contenedor.append(tarjeta);
    })
}

function eliminarTarjeta(event) {
    event.target.parentElement.remove(); // ELIMINAR TARJETA
}

function ordenarNombreAZ() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre1.localeCompare(nombre2);
    });

    // Eliminar totes les targetes de l'array 'tarjeta'
    // Completar codi
    tarjetas.splice();

    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');
    // Completar codi
    tarjetasOrdenadas.forEach(tarjeta => {
       contenedor.appendChild(tarjeta); 
    });
}

function ordenarNombreZA() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    let tarjetasOrdenadas = tarjetas.sort((tarjetaA, tarjetaB) => {
        let nombre1 = tarjetaA.querySelector('h3').innerHTML;
        let nombre2 = tarjetaB.querySelector('h3').innerHTML;
        return nombre2.localeCompare(nombre1);
    });

    // Eliminar totes les targetes de l'array 'tarjeta'
    // Completar codi
    tarjetas.splice();

    // Afegir 'tarjetasOrdenadas' al contenidor de cards
    let contenedor = document.querySelector('.cards-container');
    // Completar codi
    tarjetasOrdenadas.forEach(tarjeta => {
       contenedor.appendChild(tarjeta); 
    });

}

function crearNuevaTarjeta(event) {
    event.preventDefault();
    let nuevoFilosofo = {};
    nuevoFilosofo.nombre = document.querySelector('.create-card-form .nombre').value;
    nuevoFilosofo.imagen = document.querySelector('.create-card-form .foto').value;
    nuevoFilosofo.pais = {};
    nuevoFilosofo.pais.nombre = document.querySelector('.create-card-form .pais').value;

    // Completar la función
    nuevoFilosofo.pais.bandera = document.querySelector('.create-card-form .bandera').value;
    nuevoFilosofo.corriente = document.querySelector('.create-card-form .corriente').value;
    nuevoFilosofo.arma = document.querySelector('.create-card-form .arma').value;

    let skills = document.querySelectorAll('.create-card-form .skills');

    nuevoFilosofo.habilidades = [
        { habilidad: "Sabiduría", nivel: skills[0].value},
        { habilidad: "Oratoria", nivel: skills[1].value},
        { habilidad: "Lógica", nivel: skills[2].value},
        { habilidad: "Innovación", nivel: skills[3].value}
    ];

    crearTarjetas([nuevoFilosofo]);
}

function parsearTarjetas(tarjetas) {
    let filosofosParseados = [];
    for (let tarjeta of tarjetas) {
        let filosofo = {};
        filosofo.nombre = tarjeta.querySelector('.nombre').innerHTML;
        filosofo.imagen = tarjeta.querySelector('.photo').src;

        filosofo.pais = {};
        // Completar funció
        filosofo.pais.bandera = tarjeta.querySelector('.info-pais img').src;
        filosofo.pais.nombre = tarjeta.querySelector('.pais').innerHTML;

        filosofo.corriente= tarjeta.querySelector('.corriente').innerHTML;
        filosofo.arma = tarjeta.querySelector('.arma').innerHTML;

        filosofo.habilidades=[];
        let habilidades = tarjeta.querySelectorAll('.skill');
        for (let habilidad of habilidades) {
            let habilidadParaGuardar = {};
            // Completar funció

            habilidadParaGuardar.habilidad = habilidad.querySelector('.skill-name').innerHTML;

            habilidad.querySelector('.level').style.width;
            habilidadParaGuardar.nivel = parseInt(habilidad.querySelector('.level').style.width)/100*4; // peruqe mostri el nivell

            filosofo.habilidades.push(habilidadParaGuardar);
        }
        filosofosParseados.push(filosofo);
    }
    return filosofosParseados;
}

function guardarTarjetas() {
    let tarjetas = Array.from(document.querySelectorAll('.card'));
    localStorage.setItem('tarjetas', JSON.stringify(parsearTarjetas(tarjetas)));
}


function cargarTarjetas() {
    let contingut = localStorage.getItem('tarjetas');
    document.querySelector('.cards-container').innerHTML='';
    crearTarjetas(JSON.parse(contingut));
}

const filosofos = [
    {
        nombre: "Platón",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Plato_Pio-Clemetino_Inv305.jpg/1200px-Plato_Pio-Clemetino_Inv305.jpg",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Idealismo",
        arma: "Dialéctica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 4
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 4
        }
        ]
    },
    {
        nombre: "Aristóteles",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdXUwy_fFGOJ2vwOMpwtJPyXc9HVb06HSRsbembn7IPKq6D1YitIra2WFM4Gu2rm6yHRs&usqp=CAU",
        pais: {
            nombre: "Grecia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/640px-Flag_of_Greece.svg.png"
        },
        corriente: "Naturalismo",
        arma: "Lógica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 4
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 4
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Descartes",
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg/800px-Frans_Hals_-_Portret_van_Ren%C3%A9_Descartes.jpg",
        pais: {
            nombre: "Francia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1280px-Flag_of_France.svg.png"
        },
        corriente: "Racionalismo",
        arma: "Meditación",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Kant",
        imagen: "https://i.pinimg.com/736x/20/89/7f/20897f915acb5124893a278c395382ed.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Trascendentalismo",
        arma: "Crítica",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Hume",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiFZYg2MiOQSXbkBvFP-T3vW9pnhLW5qDioA&s",
        pais: {
            nombre: "Escocia",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/640px-Flag_of_Scotland.svg.png"
        },
        corriente: "Empirismo",
        arma: "Escepticismo",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 3
        },
        {
            habilidad: "Lógica",
            nivel: 3
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    },
    {
        nombre: "Arendt",
        imagen: "https://efeminista.com/wp-content/uploads/2021/09/Arendt-Hannah-1-e1576158475623.jpg",
        pais: {
            nombre: "Alemania",
            bandera: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
        },
        corriente: "Fenomenología",
        arma: "Parresía",
        habilidades: [{
            habilidad: "Sabiduría",
            nivel: 3
        },
        {
            habilidad: "Oratoria",
            nivel: 2
        },
        {
            habilidad: "Lógica",
            nivel: 2
        },
        {
            habilidad: "Innovación",
            nivel: 3
        }
        ]
    }
]