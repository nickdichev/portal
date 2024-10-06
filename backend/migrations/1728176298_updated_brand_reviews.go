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

		// add
		new_subrating_product_quality := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "z6aq1ymu",
			"name": "subrating_product_quality",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"noDecimal": false
			}
		}`), new_subrating_product_quality); err != nil {
			return err
		}
		collection.Schema.AddField(new_subrating_product_quality)

		// add
		new_subrating_order_fufillment := &schema.SchemaField{}
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
		}`), new_subrating_order_fufillment); err != nil {
			return err
		}
		collection.Schema.AddField(new_subrating_order_fufillment)

		// add
		new_subrating_support := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "kqc4nzvy",
			"name": "subrating_support",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"noDecimal": false
			}
		}`), new_subrating_support); err != nil {
			return err
		}
		collection.Schema.AddField(new_subrating_support)

		// add
		new_subrating_brand_reputation := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "xi1hewub",
			"name": "subrating_brand_reputation",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"noDecimal": false
			}
		}`), new_subrating_brand_reputation); err != nil {
			return err
		}
		collection.Schema.AddField(new_subrating_brand_reputation)

		// add
		new_likes := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "rdvqu3dc",
			"name": "likes",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"noDecimal": false
			}
		}`), new_likes); err != nil {
			return err
		}
		collection.Schema.AddField(new_likes)

		// add
		new_dislikes := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "kr1vq3z8",
			"name": "dislikes",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"noDecimal": false
			}
		}`), new_dislikes); err != nil {
			return err
		}
		collection.Schema.AddField(new_dislikes)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("6aseqnkss24vyg4")
		if err != nil {
			return err
		}

		// remove
		collection.Schema.RemoveField("z6aq1ymu")

		// remove
		collection.Schema.RemoveField("fxhuruax")

		// remove
		collection.Schema.RemoveField("kqc4nzvy")

		// remove
		collection.Schema.RemoveField("xi1hewub")

		// remove
		collection.Schema.RemoveField("rdvqu3dc")

		// remove
		collection.Schema.RemoveField("kr1vq3z8")

		return dao.SaveCollection(collection)
	})
}
