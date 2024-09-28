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

		// add
		new_name := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "vjdehmu7",
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
		}`), new_name); err != nil {
			return err
		}
		collection.Schema.AddField(new_name)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("g5v07s7mguxmk68")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("vjdehmu7")

		return dao.SaveCollection(collection)
	})
}
