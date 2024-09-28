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

		if err := json.Unmarshal([]byte(`[
			"CREATE UNIQUE INDEX ` + "`" + `idx_fT5UuqU` + "`" + ` ON ` + "`" + `brands` + "`" + ` (` + "`" + `slug` + "`" + `)"
		]`), &collection.Indexes); err != nil {
			return err
		}

		// add
		new_slug := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "eoldl3nr",
			"name": "slug",
			"type": "text",
			"required": true,
			"presentable": false,
			"unique": false,
			"options": {
				"min": 1,
				"max": 16,
				"pattern": ""
			}
		}`), new_slug); err != nil {
			return err
		}
		collection.Schema.AddField(new_slug)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("g5v07s7mguxmk68")
		if err != nil {
			return err
		}

		if err := json.Unmarshal([]byte(`[]`), &collection.Indexes); err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("eoldl3nr")

		return dao.SaveCollection(collection)
	})
}
