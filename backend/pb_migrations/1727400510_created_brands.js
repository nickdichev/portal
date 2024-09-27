/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "g5v07s7mguxmk68",
    "created": "2024-09-27 01:28:30.733Z",
    "updated": "2024-09-27 01:28:30.733Z",
    "name": "brands",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "sunepqus",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 2048,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "c5tyrhns",
        "name": "company",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 128,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dbhg99be",
        "name": "website",
        "type": "url",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "7udzihbr",
        "name": "headquarters",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": 64,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "cihw7hhm",
        "name": "manufactured_in",
        "type": "select",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "United States",
            "United Kingdom",
            "Mexico"
          ]
        }
      },
      {
        "system": false,
        "id": "sitd8gv5",
        "name": "year_established",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 1900,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "6dqtj0in",
        "name": "price_range_low",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "evkmjxhe",
        "name": "price_range_high",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": 0,
          "max": null,
          "noDecimal": true
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
  const collection = dao.findCollectionByNameOrId("g5v07s7mguxmk68");

  return dao.deleteCollection(collection);
})
