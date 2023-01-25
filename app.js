import express from 'express'
import { systemConfig, router } from './utils/config.js'

const app = express()

router.forEach(e => {
  console.log(`${e.path} => ${e.to}`);
  app.get(e.path, (req, res) => {
    res.redirect(e.to)
  })
})

app.use('/', (req, res) => {
  res.redirect('/')
})

app.listen(systemConfig.port)