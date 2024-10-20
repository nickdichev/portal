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
			"id": "fav1e3ny3j05egy",
			"created": "2024-10-20 17:56:59.091Z",
			"updated": "2024-10-20 17:56:59.091Z",
			"name": "user_saved_brands",
			"type": "base",
			"system": false,
			"schema": [
				{
					"system": false,
					"id": "cofwnif9",
					"name": "user",
					"type": "relation",
					"required": true,
					"presentable": false,
					"unique": false,
					"options": {
						"collectionId": "_pb_users_auth_",
						"cascadeDelete": true,
						"minSelect": null,
						"maxSelect": 1,
						"displayFields": null
					}
				},
				{
					"system": false,
					"id": "ccd0wwnx",
					"name": "brand",
					"type": "relation",
					"required": true,
					"presentable": false,
					"unique": false,
					"options": {
						"collectionId": "g5v07s7mguxmk68",
						"cascadeDelete": false,
						"minSelect": null,
						"maxSelect": 1,
						"displayFields": null
					}
				}
			],
			"indexes": [
				"CREATE UNIQUE INDEX ` + "`" + `idx_SJpgSq9` + "`" + ` ON ` + "`" + `user_saved_brands` + "`" + ` (\n  ` + "`" + `user` + "`" + `,\n  ` + "`" + `brand` + "`" + `\n)"
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

		collection, err := dao.FindCollectionByNameOrId("fav1e3ny3j05egy")
		if err != nil {
			return err
		}

		return dao.DeleteCollection(collection)
	})
}
