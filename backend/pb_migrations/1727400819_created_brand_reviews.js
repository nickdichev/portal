/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "6aseqnkss24vyg4",
    "created": "2024-09-27 01:33:39.279Z",
    "updated": "2024-09-27 01:33:39.279Z",
    "name": "brand_reviews",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6vpygypw",
        "name": "headline",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 512,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fzjmxg4g",
        "name": "pros",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 128,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "syzwkfyj",
        "name": "cons",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 128,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "figqkzqv",
        "name": "overall",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 128,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "hnwtlgk9",
        "name": "rating",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1,
          "max": 5,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("6aseqnkss24vyg4");

  return dao.deleteCollection(collection);
})
