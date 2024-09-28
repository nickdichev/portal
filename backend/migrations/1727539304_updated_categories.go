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

		collection, err := dao.FindCollectionByNameOrId("2z0hcmeyfvizcfu")
		if err != nil {
			return err
		}

		// update
		edit_parent_category := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "ng7rao0d",
			"name": "parent_category",
			"type": "relation",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"collectionId": "2z0hcmeyfvizcfu",
				"cascadeDelete": false,
				"minSelect": null,
				"maxSelect": null,
				"displayFields": null
			}
		}`), edit_parent_category); err != nil {
			return err
		}
		collection.Schema.AddField(edit_parent_category)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("2z0hcmeyfvizcfu")
		if err != nil {
			return err
		}

		// update
		edit_parent_category := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "ng7rao0d",
			"name": "parent_category",
			"type": "relation",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"collectionId": "2z0hcmeyfvizcfu",
				"cascadeDelete": false,
				"minSelect": null,
				"maxSelect": 1,
				"displayFields": null
			}
		}`), edit_parent_category); err != nil {
			return err
		}
		collection.Schema.AddField(edit_parent_category)

		return dao.SaveCollection(collection)
	})
}
