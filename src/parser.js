import { generate } from 'pegjs'
import path from 'path'
import { readFileSync } from 'fs'

const grammar = readFileSync(path.resolve('src/grammar.pegjs'), 'utf8')
const allowedStartRules = grammar.match(/^[\w_]+\s+=/gm).map(ruleName => ruleName.slice(0, -2).trim())
const parser = generate(grammar, { allowedStartRules })

export default parser.parse