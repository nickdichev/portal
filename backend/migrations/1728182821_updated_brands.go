package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models/schema"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("g5v07s7mguxmk68")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("ukgwe7qm")

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("g5v07s7mguxmk68")
		if err != nil {
			return err
		}

		// add
		del_reviews := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "ukgwe7qm",
			"name": "reviews",
			"type": "relation",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"collectionId": "6aseqnkss24vyg4",
				"cascadeDelete": false,
				"minSelect": null,
				"maxSelect": null,
				"displayFields": null
			}
		}`), del_reviews); err != nil {
			return err
		}
		collection.Schema.AddField(del_reviews)

		return dao.SaveCollection(collection)
	})
}
