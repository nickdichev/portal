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
			"id": "obes5e87991crh6",
			"created": "2024-10-08 02:03:22.133Z",
			"updated": "2024-10-08 02:03:22.133Z",
			"name": "brand_profiles",
			"type": "base",
			"system": false,
			"schema": [
				{
					"system": false,
					"id": "bkktgb2z",
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
				},
				{
					"system": false,
					"id": "arixiodc",
					"name": "claimed",
					"type": "bool",
					"required": false,
					"presentable": false,
					"unique": false,
					"options": {}
				}
			],
			"indexes": [
				"CREATE UNIQUE INDEX ` + "`" + `idx_xpofzPh` + "`" + ` ON ` + "`" + `brand_profiles` + "`" + ` (` + "`" + `brand` + "`" + `)"
			],
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

		collection, err := dao.FindCollectionByNameOrId("obes5e87991crh6")
		if err != nil {
			return err
		}

		return dao.DeleteCollection(collection)
	})
}
