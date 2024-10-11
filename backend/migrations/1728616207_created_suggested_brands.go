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
			"id": "ua8offt4wyi8ubn",
			"created": "2024-10-11 03:10:07.799Z",
			"updated": "2024-10-11 03:10:07.799Z",
			"name": "suggested_brands",
			"type": "view",
			"system": false,
			"schema": [
				{
					"system": false,
					"id": "gbkvtjur",
					"name": "name",
					"type": "text",
					"required": true,
					"presentable": false,
					"unique": false,
					"options": {
						"min": null,
						"max": 128,
						"pattern": ""
					}
				}
			],
			"indexes": [],
			"listRule": null,
			"viewRule": null,
			"createRule": null,
			"updateRule": null,
			"deleteRule": null,
			"options": {
				"query": "SELECT id, name FROM brands ORDER BY created ASC LIMIT 4"
			}
		}`

		collection := &models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collection); err != nil {
			return err
		}

		return daos.New(db).SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("ua8offt4wyi8ubn")
		if err != nil {
			return err
		}

		return dao.DeleteCollection(collection)
	})
}
