export const inputsA = [
    {
        id: 1,
        name: "name",
        type: "text",
        placeholder: "Ingrese su nombre y apellido",
        label: "Nombre y Apellido",
        errorMsg: "Ingrese su nombre y apellido",
        required: true
    },
    {
        id: 2,
        name: "legajo",
        type: "text",
        placeholder: "Ingrese su N° de legajo",
        label: "N° de Legajo",
        errorMsg: "Ingrese su n° de legajo",
        required: true
    }
];

export const inputsB = [
    {
        id: 1,
        name: "quantity",
        type: "text",
        placeholder: "Peso en Kg",
        label: "Peso",
        errorMsg: "Ingrese el peso del residuo",
        required: true
    },
    {
        id: 2,
        name: "sector",
        type: "text",
        placeholder: "Sector",
        label: "Sector de Generación",
    }
];

export const options = [
    {
        label: "Especial",
        value: "Especial"
    },
    {
        label: "Industrial",
        value: "Industrial"
    },
    {
        label: "Reciclable",
        value: "Reciclable"
    },
    {
        label: "Recuperable",
        value: "Recuperable"
    }
]

export const info = [
    {
        name: "juan",
        legajo: 1,
        type: "reciclable",
        quantity: 1,
        sector: "pgm",
        createdAt: new Date("2022-08-25T23:09:19.308+00:00")
    },
    {
        name: "pedro",
        legajo: 2,
        type: "especial",
        quantity: 2,
        sector: "prod",
        createdAt: new Date("2022-09-1T23:09:19.308+00:00")
    },
    {
        name: "seba",
        legajo: 3,
        type: "recu",
        quantity: 3,
        sector: "qc",
        createdAt: new Date("2022-08-15T23:09:19.308+00:00")
    },
    {
        name: "pepe",
        legajo: 4,
        type: "indus",
        quantity: 4,
        sector: "admin",
        createdAt: new Date("2022-08-05T23:09:19.308+00:00")
    }
]