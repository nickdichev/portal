/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5v07s7mguxmk68")

  // remove
  collection.schema.removeField("cdvrkela")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("g5v07s7mguxmk68")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cdvrkela",
    "name": "categories",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 2,
      "values": [
        "Women",
        "Men",
        "Jeans",
        "Swimwear",
        "Denim",
        "Dresses",
        "Special Occasion"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
