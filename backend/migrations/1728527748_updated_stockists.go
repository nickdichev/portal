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

		collection, err := dao.FindCollectionByNameOrId("wu1udkzup214x06")
		if err != nil {
			return err
		}

		if err := json.Unmarshal([]byte(`[
			"CREATE INDEX ` + "`" + `idx_MxqNePw` + "`" + ` ON ` + "`" + `stockists` + "`" + ` (` + "`" + `brands` + "`" + `)",
			"CREATE UNIQUE INDEX ` + "`" + `idx_CbdIkwK` + "`" + ` ON ` + "`" + `stockists` + "`" + ` (` + "`" + `slug` + "`" + `)"
		]`), &collection.Indexes); err != nil {
			return err
		}

		// add
		new_slug := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "mzxyfb5y",
			"name": "slug",
			"type": "text",
			"required": true,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": 32,
				"pattern": ""
			}
		}`), new_slug); err != nil {
			return err
		}
		collection.Schema.AddField(new_slug)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("wu1udkzup214x06")
		if err != nil {
			return err
		}

		if err := json.Unmarshal([]byte(`[
			"CREATE INDEX ` + "`" + `idx_MxqNePw` + "`" + ` ON ` + "`" + `stockists` + "`" + ` (` + "`" + `brands` + "`" + `)"
		]`), &collection.Indexes); err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("mzxyfb5y")

		return dao.SaveCollection(collection)
	})
}
