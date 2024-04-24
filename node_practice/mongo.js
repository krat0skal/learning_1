const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://pandeyh38:${password}@clusnoter0.efznds8.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)
// Schema name
const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

//module
const Note = mongoose.model('Note', noteSchema)

// const note = new Note({
//   content: 'Kanye is Yeezus',
//   important: true,
// })

// note.save().then(result => {
//   console.log('note saved!')
//   mongoose.connection.close()
// })


Note.find({}).then(result => {
    result.forEach(note => {
      console.log(note)
    })
    mongoose.connection.close()
  })