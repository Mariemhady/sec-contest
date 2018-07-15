const sinon = require('sinon')
const chai = require('chai')
var expect = chai.expect;
const fs = require('fs')
const request = require('request')
const random = require('./random')


beforeEach(function () {
  this.sandbox = sinon.sandbox.create()
})

afterEach(function () {
  this.sandbox.restore()
})

describe('randome number', function () {
    it('should exist', function() {
        expect(random).to.exist;
    });

    it('generate random number', function () {

    })
})
