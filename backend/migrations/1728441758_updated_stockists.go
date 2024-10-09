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

		// remove
		collection.Schema.RemoveField("t2zqdpsr")

		// remove
		collection.Schema.RemoveField("o0rbr6io")

		// add
		new_price_point := &schema.SchemaField{}
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
		}`), new_price_point); err != nil {
			return err
		}
		collection.Schema.AddField(new_price_point)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("wu1udkzup214x06")
		if err != nil {
			return err
		}

		// add
		del_price_range_low := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "t2zqdpsr",
			"name": "price_range_low",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": 0,
				"max": null,
				"noDecimal": true
			}
		}`), del_price_range_low); err != nil {
			return err
		}
		collection.Schema.AddField(del_price_range_low)

		// add
		del_price_range_high := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "o0rbr6io",
			"name": "price_range_high",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": 0,
				"max": null,
				"noDecimal": true
			}
		}`), del_price_range_high); err != nil {
			return err
		}
		collection.Schema.AddField(del_price_range_high)

		// remove
		collection.Schema.RemoveField("ckfmftmz")

		return dao.SaveCollection(collection)
	})
}
