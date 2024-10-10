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

		if err := json.Unmarshal([]byte(`[
			"CREATE UNIQUE INDEX ` + "`" + `idx_PGasKjd` + "`" + ` ON ` + "`" + `brand_images` + "`" + ` (` + "`" + `brand` + "`" + `)"
		]`), &collection.Indexes); err != nil {
			return err
		}

		// add
		new_hero_image := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "xuf4isi3",
			"name": "hero_image",
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
		}`), new_hero_image); err != nil {
			return err
		}
		collection.Schema.AddField(new_hero_image)

		// add
		new_product_gallery := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "bqsrt9u9",
			"name": "product_gallery",
			"type": "file",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"mimeTypes": [],
				"thumbs": [],
				"maxSelect": 99,
				"maxSize": 5242880,
				"protected": false
			}
		}`), new_product_gallery); err != nil {
			return err
		}
		collection.Schema.AddField(new_product_gallery)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("c4rv0ckc0kq8ui6")
		if err != nil {
			return err
		}

		if err := json.Unmarshal([]byte(`[]`), &collection.Indexes); err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("xuf4isi3")

		// remove
		collection.Schema.RemoveField("bqsrt9u9")

		return dao.SaveCollection(collection)
	})
}
