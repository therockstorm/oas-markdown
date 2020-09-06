"use strict"

const openapi3 = require("./openapi3.js")

function convert(api, options) {
  options.samplerErrors = new Map()
  if (api.openapi) {
    return openapi3.convert(api, options)
  } else {
    throw new Error("Unrecognized input format")
  }
}

module.exports = {
  convert: convert,
}
