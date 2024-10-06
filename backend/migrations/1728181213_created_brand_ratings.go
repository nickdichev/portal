package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		jsonData := `{
			"id": "120dz7m470fp10o",
			"created": "2024-10-06 02:20:13.409Z",
			"updated": "2024-10-06 02:20:13.409Z",
			"name": "brand_ratings",
			"type": "view",
			"system": false,
			"schema": [
				{
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
				},
				{
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
				},
				{
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
				},
				{
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
				},
				{
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
				},
				{
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
				}
			],
			"indexes": [],
			"listRule": null,
			"viewRule": null,
			"createRule": null,
			"updateRule": null,
			"deleteRule": null,
			"options": {
				"query": "SELECT\n    brands.id,\n    AVG(rating) as avg_rating,\n    AVG(subrating_product_quality) AS avg_product_quality,\n    AVG(subrating_order_fulfillment) AS avg_order_fulfillment,\n    AVG(subrating_support) AS avg_support,\n    AVG(subrating_brand_reputation) AS avg_brand_reputation,\n    count(brand_reviews.id) as review_count\nFROM brands\nLEFT JOIN brand_reviews on brand_reviews.brand = brands.id\nGROUP BY brands.id"
			}
		}`

		collection := &models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collection); err != nil {
			return err
		}

		return daos.New(db).SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("120dz7m470fp10o")
		if err != nil {
			return err
		}

		return dao.DeleteCollection(collection)
	})
}
