let familia=[
    {nombre:"Juan",
    apellido:"Perez",
    edad: 35,
    integrante:"Padre"
    },
    {nombre:"Ana",
    apellido:"Garcia",
    edad: 33,
    integrante:"Madre"
    },
    {nombre:"Pacho",
    apellido:"Perez",
    edad: 10,
    integrante:"Hijo"
    },
    {nombre:"Mariana",
    apellido:"Perez",
    edad: 15,
    integrante:"Hija"
    }
]

for (const miembro of familia) {
    console.log(`Hola, soy ${miembro.nombre} ${miembro.apellido} (${miembro.integrante}) y tengo ${miembro.edad} años`);
}