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

		collection, err := dao.FindCollectionByNameOrId("ua8offt4wyi8ubn")
		if err != nil {
			return err
		}

		options := map[string]any{}
		if err := json.Unmarshal([]byte(`{
			"query": "SELECT id, name, slug FROM brands ORDER BY created ASC LIMIT 4"
		}`), &options); err != nil {
			return err
		}
		collection.SetOptions(options)

		// remove
		collection.Schema.RemoveField("gbkvtjur")

		// add
		new_name := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "nmiax6xv",
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

		// add
		new_slug := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "oqge9mhr",
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

		collection, err := dao.FindCollectionByNameOrId("ua8offt4wyi8ubn")
		if err != nil {
			return err
		}

		options := map[string]any{}
		if err := json.Unmarshal([]byte(`{
			"query": "SELECT id, name FROM brands ORDER BY created ASC LIMIT 4"
		}`), &options); err != nil {
			return err
		}
		collection.SetOptions(options)

		// add
		del_name := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
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
		}`), del_name); err != nil {
			return err
		}
		collection.Schema.AddField(del_name)

		// remove
		collection.Schema.RemoveField("nmiax6xv")

		// remove
		collection.Schema.RemoveField("oqge9mhr")

		return dao.SaveCollection(collection)
	})
}
