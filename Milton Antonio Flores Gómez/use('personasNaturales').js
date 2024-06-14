use('personasNaturales')
// db.createCollection('personas')
//Buscar todos los registros
//db.personas.find()

//Buscar por dato
db.personas.find({"codigoPais": "BR"})

//Operadores
//Mayor que
use('personasNaturales')
db.personas.find({
    "edad": {
        "$gt":35
    }
})

//Menor que
use('personasNaturales')
db.personas.find({
    "edad": {
        "$lte":35
    }
})

//Operadores logicos
//and or
use('personasNaturales')
db.personas.find({
    "$and": [
        {"genero": "Female"},
        {"codigoPais": "JP"}
    ]
})

use('personasNaturales')
db.personas.find({
    "$and": [
        {"genero": "Female"},
        {"codigoPais": "JP"},
        {"edad": {
            "$gte": 48
        }}
    ]
})

use('personasNaturales')
db.personas.find({
    "$or": [
        {"codigoPais": "ES"},
        {"codigoPais": "CN"}
    ]
}).limit(3)

//Orden ascendente 1, descendente -1
use('personasNaturales')
db.personas.find().sort({"nombre": 1})
