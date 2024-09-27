/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5v07s7mguxmk68")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "v607l9h8",
    "name": "categories",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2z0hcmeyfvizcfu",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5v07s7mguxmk68")

  // remove
  collection.schema.removeField("v607l9h8")

  return dao.saveCollection(collection)
})
