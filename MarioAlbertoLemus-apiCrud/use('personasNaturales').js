use('personasNaturales')
// db.createCollection('personas')
// db.personas.find({"codigoPais": "JP"})


/* OPERADORES */

// greater than
db.personas.find({
    "edad": {
    "$gt": 55
}})

// greater than or equal
db.personas.find({
    "edad": {
    "$gte": 40
}})

// less than
db.personas.find({
    "edad": {
    "$lt": 30
}})

// less than equal
db.personas.find({
    "edad": {
    "$lte": 28
}})



/* OPERADORES LOGICOS */

db.personas.find({
    "$and": [
        {"genero":"Female"},
        {"codigoPais":"JP"},
        {"edad":{
            "$gte": 48
        }}
    ]
})

db.personas.find({
    "$or": [
        {"codigoPais":"FR"},
        {"codigoPais":"ES"},
    ]
})


/* OTROS */

// limit -> limitar cantidad de elementos
db.personas.find({
    "$or": [
        {"codigoPais":"FR"},
        {"codigoPais":"ES"},
    ]
}).limit(3)


// sort -> 1 ascendente, -1 descendente
db.personas.find().sort({"nombre": 1}).limit(3)

// agregate -> es casi lo mismo que "find"
db.personas.aggregate({
    $match:{"genero": "Male"}
})
// group -> sirve para agrupar propiedades
db.personas.aggregate(
    [
        {
            $match: {"genero":"Male"}
        }, {
            $group: {
                _id:"$codigoPais",
                total: {$sum:1},
                campos: {
                    $push: {
                        nombre: "$nombre",
                        apellido: "$apellido",
                        edad: "$edad",
                    }
                }
            }
        }, {
            $project: {
                _id:1,
                total: 1,
                campos: 1 // 1 para que la propiedad se muestre
            }
        }
    ]
)