const cds = require('@sap/cds')
const { someAction } = require('#cds-models/CallerService')
const CatalogService = require('#cds-models/CatalogService')
const { CatalogService:CatalogServiceNamed} = require('#cds-models/CatalogService')

module.exports = class CallerService extends cds.ApplicationService { init() {

  this.on (someAction, async (req) => {
    const catService = await cds.connect.to(CatalogService)
    await catService.submitOrder()
    //               ^?   no type

    const catServiceNamed = await cds.connect.to(CatalogServiceNamed)
    await catServiceNamed.submitOrder()
    //                    ^?  has type

  })

  return super.init()
}}
