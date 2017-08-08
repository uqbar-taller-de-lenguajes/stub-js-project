import { describe, it } from 'mocha'

import { expect } from 'chai'
import parse from '../src/parser'

describe('parser', () => {
  describe('example', () => {
    it('parses when it should', () => {
      expect(parse('aaabbb')).to.deep.equal(['a', ['a', ['a', null, 'b'], 'b'], 'b'])
    })

    it('fails when it should', () => {
      expect(() => parse('abc')).to.throw()
    })

  })

})
