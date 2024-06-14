
const mongoose = require (`mongoose`);

beforeAll(async () =>
    {
        const url = `mongodb://localhost:27017/testUnit`
        mongoose.connect(url)
        .then(() => console.log(`Mongodb pruebas conectado con exito`))
        .catch(err => console.log(err))
    })


  afterAll(async() => {
    if(mongoose.connection.readyState ===1)
        {
            await mongoose.connection.close()
            console.log(`Conexion a Mongodb cerrado`)
            await mongoose.connection.db.dropDatabase()
        }
  })