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

		// update
		edit_price_point := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "ckfmftmz",
			"name": "price_point",
			"type": "select",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSelect": 1,
				"values": [
					"affordable",
					"mid_range",
					"high_end"
				]
			}
		}`), edit_price_point); err != nil {
			return err
		}
		collection.Schema.AddField(edit_price_point)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("wu1udkzup214x06")
		if err != nil {
			return err
		}

		// update
		edit_price_point := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "ckfmftmz",
			"name": "price_point",
			"type": "select",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSelect": 1,
				"values": [
					"mid_range",
					"high_end"
				]
			}
		}`), edit_price_point); err != nil {
			return err
		}
		collection.Schema.AddField(edit_price_point)

		return dao.SaveCollection(collection)
	})
}
