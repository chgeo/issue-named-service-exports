const cds = require('@sap/cds')
const { Books, submitOrder } = require('#cds-models/CatalogService')

module.exports = class CatalogService extends cds.ApplicationService { init() {

  this.before ('READ', Books, async (req) => {
    console.log('Before READ Books', req.data)
  })
  this.after ('READ', Books, async (books, req) => {
    console.log('After READ Books', books)
  })

  this.on (submitOrder, async (req) => {
    console.log('On submitOrder', req.data)
  })

  return super.init()
}}
