let transformModules = require('./modules-transform')
let addSinceTags = require('./add-since-tags')
let addInheritedItems = require('./add-inherited-items')
let normalizeIDs = require('./normalize-ids')
let fixRsvp = require('./fix-rsvp')

module.exports = function transformYuiObject (docs, projName) {
  return fixRsvp(docs).then(d => {
    console.log('Preparing Modules')
    return transformModules(docs)
  }).then(d => {
    console.log('Adding since tags')
    return addSinceTags(d)
  }).then(d => {
    console.log('Adding inherited items')
    return addInheritedItems(d)
  }).then(d => {
    console.log('Normalizing dependencies')
    return normalizeIDs(d, projName)
  })
}
