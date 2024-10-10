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

		collection, err := dao.FindCollectionByNameOrId("c4rv0ckc0kq8ui6")
		if err != nil {
			return err
		}

		// add
		new_logo := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "qfbfhhvz",
			"name": "logo",
			"type": "file",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"mimeTypes": [],
				"thumbs": [],
				"maxSelect": 1,
				"maxSize": 5242880,
				"protected": false
			}
		}`), new_logo); err != nil {
			return err
		}
		collection.Schema.AddField(new_logo)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("c4rv0ckc0kq8ui6")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("qfbfhhvz")

		return dao.SaveCollection(collection)
	})
}
