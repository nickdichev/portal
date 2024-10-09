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
		collection.Schema.RemoveField("bb5yw2am")

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("wu1udkzup214x06")
		if err != nil {
			return err
		}

		// add
		del_location := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "bb5yw2am",
			"name": "location",
			"type": "select",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSelect": 1,
				"values": [
					"new_york_city",
					"chicago",
					"los_angeles",
					"miami"
				]
			}
		}`), del_location); err != nil {
			return err
		}
		collection.Schema.AddField(del_location)

		return dao.SaveCollection(collection)
	})
}
