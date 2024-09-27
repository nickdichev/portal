/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2z0hcmeyfvizcfu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ng7rao0d",
    "name": "parent_category",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2z0hcmeyfvizcfu",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2z0hcmeyfvizcfu")

  // remove
  collection.schema.removeField("ng7rao0d")

  return dao.saveCollection(collection)
})
