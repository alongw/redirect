import { readFileSync } from 'fs'

const text = readFileSync('config.txt', 'utf-8')

const config = text.replace(/\r|\n/g, '\r').split('\r').filter(e => e != '').map(e => e.split(' '))

const systemConfig = {
  port: 3000
}

const router = []

config.map(e => {
  if (e[0] == 'port') {
    return systemConfig.port = e[1]
  }

  router.push({
    path: e[0],
    to: e[1]
  })
})

console.log(config);

export { systemConfig, router }