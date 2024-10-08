package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		jsonData := `{
			"id": "wu1udkzup214x06",
			"created": "2024-10-07 03:54:46.553Z",
			"updated": "2024-10-07 03:54:46.553Z",
			"name": "stockists",
			"type": "base",
			"system": false,
			"schema": [
				{
					"system": false,
					"id": "3rlubjmg",
					"name": "name",
					"type": "text",
					"required": false,
					"presentable": false,
					"unique": false,
					"options": {
						"min": null,
						"max": null,
						"pattern": ""
					}
				},
				{
					"system": false,
					"id": "t2zqdpsr",
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
					"id": "o0rbr6io",
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
				},
				{
					"system": false,
					"id": "xfufaosx",
					"name": "category",
					"type": "select",
					"required": false,
					"presentable": false,
					"unique": false,
					"options": {
						"maxSelect": 2,
						"values": [
							"luxury",
							"multi_brand",
							"boutique"
						]
					}
				},
				{
					"system": false,
					"id": "eiykh287",
					"name": "type",
					"type": "select",
					"required": false,
					"presentable": false,
					"unique": false,
					"options": {
						"maxSelect": 1,
						"values": [
							"physical",
							"ecommerce"
						]
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
		}`

		collection := &models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collection); err != nil {
			return err
		}

		return daos.New(db).SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("wu1udkzup214x06")
		if err != nil {
			return err
		}

		return dao.DeleteCollection(collection)
	})
}
