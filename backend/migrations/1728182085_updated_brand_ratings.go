package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models/schema"
	"github.com/pocketbase/pocketbase/tools/types"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("120dz7m470fp10o")
		if err != nil {
			return err
		}

		collection.ListRule = types.Pointer("")

		collection.ViewRule = types.Pointer("")

		// remove
		collection.Schema.RemoveField("nvsubwv1")

		// remove
		collection.Schema.RemoveField("xzehzlzd")

		// remove
		collection.Schema.RemoveField("qtwwwr7c")

		// remove
		collection.Schema.RemoveField("zpyrmi61")

		// remove
		collection.Schema.RemoveField("hpbg7rrb")

		// remove
		collection.Schema.RemoveField("wqqg50xo")

		// add
		new_avg_rating := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "gvuh288y",
			"name": "avg_rating",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), new_avg_rating); err != nil {
			return err
		}
		collection.Schema.AddField(new_avg_rating)

		// add
		new_avg_product_quality := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "tzgf7x9y",
			"name": "avg_product_quality",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), new_avg_product_quality); err != nil {
			return err
		}
		collection.Schema.AddField(new_avg_product_quality)

		// add
		new_avg_order_fulfillment := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "tzszjgy9",
			"name": "avg_order_fulfillment",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), new_avg_order_fulfillment); err != nil {
			return err
		}
		collection.Schema.AddField(new_avg_order_fulfillment)

		// add
		new_avg_support := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "a9r8zmgk",
			"name": "avg_support",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), new_avg_support); err != nil {
			return err
		}
		collection.Schema.AddField(new_avg_support)

		// add
		new_avg_brand_reputation := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "9yl81rcp",
			"name": "avg_brand_reputation",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), new_avg_brand_reputation); err != nil {
			return err
		}
		collection.Schema.AddField(new_avg_brand_reputation)

		// add
		new_review_count := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "mnvk6o9u",
			"name": "review_count",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"noDecimal": false
			}
		}`), new_review_count); err != nil {
			return err
		}
		collection.Schema.AddField(new_review_count)

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("120dz7m470fp10o")
		if err != nil {
			return err
		}

		collection.ListRule = nil

		collection.ViewRule = nil

		// add
		del_avg_rating := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "nvsubwv1",
			"name": "avg_rating",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), del_avg_rating); err != nil {
			return err
		}
		collection.Schema.AddField(del_avg_rating)

		// add
		del_avg_product_quality := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "xzehzlzd",
			"name": "avg_product_quality",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), del_avg_product_quality); err != nil {
			return err
		}
		collection.Schema.AddField(del_avg_product_quality)

		// add
		del_avg_order_fulfillment := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "qtwwwr7c",
			"name": "avg_order_fulfillment",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), del_avg_order_fulfillment); err != nil {
			return err
		}
		collection.Schema.AddField(del_avg_order_fulfillment)

		// add
		del_avg_support := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "zpyrmi61",
			"name": "avg_support",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), del_avg_support); err != nil {
			return err
		}
		collection.Schema.AddField(del_avg_support)

		// add
		del_avg_brand_reputation := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "hpbg7rrb",
			"name": "avg_brand_reputation",
			"type": "json",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"maxSize": 1
			}
		}`), del_avg_brand_reputation); err != nil {
			return err
		}
		collection.Schema.AddField(del_avg_brand_reputation)

		// add
		del_review_count := &schema.SchemaField{}
		if err := json.Unmarshal([]byte(`{
			"system": false,
			"id": "wqqg50xo",
			"name": "review_count",
			"type": "number",
			"required": false,
			"presentable": false,
			"unique": false,
			"options": {
				"min": null,
				"max": null,
				"noDecimal": false
			}
		}`), del_review_count); err != nil {
			return err
		}
		collection.Schema.AddField(del_review_count)

		// remove
		collection.Schema.RemoveField("gvuh288y")

		// remove
		collection.Schema.RemoveField("tzgf7x9y")

		// remove
		collection.Schema.RemoveField("tzszjgy9")

		// remove
		collection.Schema.RemoveField("a9r8zmgk")

		// remove
		collection.Schema.RemoveField("9yl81rcp")

		// remove
		collection.Schema.RemoveField("mnvk6o9u")

		return dao.SaveCollection(collection)
	})
}
