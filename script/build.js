import { router } from '../utils/config.js'
import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

const template = readFileSync('./template.html', 'utf-8')

router.forEach(e => {
  const dir = e.path.split('/').filter(e => e != '')
  console.log(dir);
  const path = join('./dist/', ...dir)
  mkdirSync(path, {
    recursive: true
  })
  writeFileSync(join(path, 'index.html'), template.replaceAll('{{ to }}', e.to))
})