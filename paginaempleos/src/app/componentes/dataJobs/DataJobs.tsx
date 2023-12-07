const dataEmpleos = [
    {
        id: "1",
        empresa: "Planet Express",
        empleo: "Piloto espacial",
        rubro: "Delivery",
        descripcion: "Buscamos gente que quiera navegar el sistema solar para la entrega de paquetes puerta a puerta.",
        requisitos: "Menor de 30 años, Carnet Profesional D1",
        cargaHoraria: "Part-Time",
        img: "./img/empleos/planetExpress.jpg"
    },
    {
        id: "2",
        empresa: "Roswell Diary",
        empleo: "Escritor",
        rubro: "Periodismo",
        descripcion: "Se busca profesional apasionado con una mente abierta, que pueda escribir literatura abreviada en nuestra próxima columna semanal.",
        requisitos: "Mayor de edad, publicaciones reconocidas",
        cargaHoraria: "Part-Time",
        img: "./img/empleos/escritor.jpg"
    },
    {
        id: "3",
        empresa: "Hospital General",
        empleo: "Cirujano Cerebrovascular",
        rubro: "Salud",
        descripcion: "En busca de profesionales capacitados en atender casos a través de la galaxia.",
        requisitos: "2 años de experiencia",
        cargaHoraria: "Full-Time",
        img: "./img/empleos/cirujano.png"
    },
    {
        id: "4",
        empresa: "Slurm Company",
        empleo: "Repositor",
        rubro: "Comercio",
        descripcion: "Podés ser parte de Slurm, la marca mas famosa de refrescos de la Vía Láctea, necesitamos gente con compromiso y un toque de adictividad.",
        requisitos: "Mayor de edad",
        cargaHoraria: "Full-Time",
        img: "./img/empleos/slurm7.png"
    },
    {
        id: "5",
        empresa: "Museo Intergaláctico",
        empleo: "Desencriptador",
        rubro: "Investigación",
        descripcion: "Buscamos gente que pueda analizar y desencriptar idiomas alienígenas, capaz de escribir un alfabeto.",
        requisitos: "Mayor de 21 años, reconocimiento académico",
        cargaHoraria: "Part-Time",
        img: "./img/empleos/desencriptador.jpg"
    },
    {
        id: "6",
        empresa: "Panucci's Pizza",
        empleo: "Repartidor de Pizza",
        rubro: "Delivery",
        descripcion: "Necesitamos jóvenes responsables que entreguen nuestras pizzas a tiempo.",
        requisitos: "Mayor de edad",
        cargaHoraria: "Part-Time",
        img: "./img/empleos/delivery.png"
    },
    {
        id: "7",
        empresa: "Slurm Company",
        empleo: "Analista en Merchandising",
        rubro: "Comercio",
        descripcion: "Podés ser parte de Slurm, la marca mas famosa de refrescos de la Vía Láctea, necesitamos gente con compromiso y un toque de adictividad.",
        requisitos: "Licenciado en Administración de Empresas",
        cargaHoraria: "Full-Time",
        img: "./img/empleos/slurm7.png"
    },
    {
        id: "8",
        empresa: "Skynet",
        empleo: "Reparación de robots",
        rubro: "Industrial",
        descripcion: "Robot Arms busca operador/a de planta para distintos sectores de nuestra línea de reparación.",
        requisitos: "Mayor de edad, no-humano",
        cargaHoraria: "Full-Time",
        img: "./img/empleos/montaje.png"
    },
    {
        id: "9",
        empresa: "Panucci's Pizza",
        empleo: "Cocinero",
        rubro: "Gastronomía",
        descripcion: "Panucci busca cocinero especialista en pizzas!! Consúltenos para más información.",
        requisitos: "Mayor de edad, 2 años de experiencia",
        cargaHoraria: "Full-Time",
        img: "./img/empleos/delivery.png"
    },
    {
        id: "10",
        empresa: "Rockstar Games",
        empleo: "Testeador de juegos de realidad virtuales",
        rubro: "Tecnología",
        descripcion: "Buscamos testeadores de juegos con capacidad para producir bugs.",
        requisitos: "Mayor de edad",
        cargaHoraria: "Part-Time",
        img: "./img/empleos/fryVR.JPEG"
    },
    {
        id: "11",
        empresa: "30th Century Fox",
        empleo: "Doble de riesgo",
        rubro: "Cinematográfico",
        descripcion: "Se busca doble de riesgo, con experiencia en esquivar disparos láser.",
        requisitos: "Mayor de edad, humano",
        cargaHoraria: "Part-Time",
        img: "./img/empleos/dobleAccion.jpg"
    },
    {
        id: "12",
        empresa: "Teatro marciano",
        empleo: "Actor principal",
        rubro: "Dramaturgia",
        descripcion: "Buscamos actor con experiencia en obras espaciales.",
        requisitos: "Mayor de edad",
        cargaHoraria: "Full-Time",
        img: "./img/empleos/actorTeatro.png"
    },
    {
        id: "13",
        empresa: "Planet Express",
        empleo: "Extractor de miel",
        rubro: "Apicultura",
        descripcion: "Se busca personal para extraer miel de abejas inofensivas :)",
        requisitos: "Mayor de edad",
        cargaHoraria: "Part-Time",
        img: "./img/empleos/miel.png"
    },
    {
        id: "14",
        empresa: "Orbiting Meadows",
        empleo: "Cavador de tumbas",
        rubro: "Funerario",
        descripcion: "Necesitamos palero que no cave demasiado profundo.",
        requisitos: "Mayor de edad, una pala.",
        cargaHoraria: "Full-Time",
        img: "./img/empleos/cementerio.png"
    },
    {
        id: "15",
        empresa: "GalacticCheff",
        empleo: "Concursantes",
        rubro: "Reality show",
        descripcion: "Se busca cocineros que quieran participar del reality show mas famoso de la galaxia.",
        requisitos: "Mayor de edad, saber cocinar.",
        cargaHoraria: "Full-Time",
        img: "./img/empleos/cocinaTorta.png"
    },
    {
        id: "16",
        empresa: "MOM'S Friendly Robot Company",
        empleo: "Señalador de gráficos",
        rubro: "Oficinista",
        descripcion: "Buscamos personal para señalar gráficos, traiga su propio señalador.",
        requisitos: "Mayor de edad, no ser un robot.",
        cargaHoraria: "Part-Time",
        img: "./img/empleos/analistaGrafico.png"
    },
    {
        id: "17",
        empresa: "Particular",
        empleo: "Niñera",
        rubro: "Domestico",
        descripcion: "Busco niñera con mucha energía, capaz de entender el idioma Amphibiosan.",
        requisitos: "Mayor de edad",
        cargaHoraria: "Part-Time",
        img: "./img/empleos/niniera.png"
    }

];

export default dataEmpleos;