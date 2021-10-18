import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import studentRoutes from './routes/student.js'
import dotenv from 'dotenv'

const app = express()

dotenv.config({ path:'./config.env' })

app.use(express.json({ limit: '20mb', extended: true }))
app.use(express.urlencoded({ limit: '20mb', extended: true }))

app.use(cors())
app.use('/students', studentRoutes)

const CONNECTION_URL =process.env.MONGO_URI

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Coneection is established and running on port: ${PORT}`)
    )
  )
  .catch(err => console.log(err.message))

mongoose.set('useFindAndModify', false)
