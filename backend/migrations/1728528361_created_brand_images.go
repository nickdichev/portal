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
			"id": "c4rv0ckc0kq8ui6",
			"created": "2024-10-10 02:46:01.938Z",
			"updated": "2024-10-10 02:46:01.938Z",
			"name": "brand_images",
			"type": "base",
			"system": false,
			"schema": [
				{
					"system": false,
					"id": "dzkyzklg",
					"name": "brand",
					"type": "relation",
					"required": true,
					"presentable": false,
					"unique": false,
					"options": {
						"collectionId": "g5v07s7mguxmk68",
						"cascadeDelete": true,
						"minSelect": null,
						"maxSelect": 1,
						"displayFields": null
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

		collection, err := dao.FindCollectionByNameOrId("c4rv0ckc0kq8ui6")
		if err != nil {
			return err
		}

		return dao.DeleteCollection(collection)
	})
}
