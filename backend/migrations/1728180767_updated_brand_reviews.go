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

		collection, err := dao.FindCollectionByNameOrId("6aseqnkss24vyg4")
		if err != nil {
			return err
		}

		// add
		new_brand := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "taqztncy",
			"name": "brand",
			"type": "relation",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"collectionId": "g5v07s7mguxmk68",
				"cascadeDelete": false,
				"minSelect": null,
				"maxSelect": 1,
				"displayFields": null
			}
		}`), new_brand); err != nil {
			return err
		}
		collection.Schema.AddField(new_brand)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("6aseqnkss24vyg4")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("taqztncy")

		return dao.SaveCollection(collection)
	})
}
