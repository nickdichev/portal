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

		collection, err := dao.FindCollectionByNameOrId("6aseqnkss24vyg4")
		if err != nil {
			return err
		}

		// update
		edit_subrating_order_fulfillment := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "fxhuruax",
			"name": "subrating_order_fulfillment",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"noDecimal": false
			}
		}`), edit_subrating_order_fulfillment); err != nil {
			return err
		}
		collection.Schema.AddField(edit_subrating_order_fulfillment)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("6aseqnkss24vyg4")
		if err != nil {
			return err
		}

		// update
		edit_subrating_order_fulfillment := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "fxhuruax",
			"name": "subrating_order_fufillment",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"noDecimal": false
			}
		}`), edit_subrating_order_fulfillment); err != nil {
			return err
		}
		collection.Schema.AddField(edit_subrating_order_fulfillment)

		return dao.SaveCollection(collection)
	})
}
