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
		jsonData := `[
			{
				"id": "_pb_users_auth_",
				"created": "2024-09-27 01:19:51.464Z",
				"updated": "2024-09-27 01:19:51.466Z",
				"name": "users",
				"type": "auth",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "users_name",
						"name": "name",
						"type": "text",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "users_avatar",
						"name": "avatar",
						"type": "file",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"mimeTypes": [
								"image/jpeg",
								"image/png",
								"image/svg+xml",
								"image/gif",
								"image/webp"
							],
							"thumbs": null,
							"maxSelect": 1,
							"maxSize": 5242880,
							"protected": false
						}
					}
				],
				"indexes": [],
				"listRule": "id = @request.auth.id",
				"viewRule": "id = @request.auth.id",
				"createRule": "",
				"updateRule": "id = @request.auth.id",
				"deleteRule": "id = @request.auth.id",
				"options": {
					"allowEmailAuth": true,
					"allowOAuth2Auth": true,
					"allowUsernameAuth": true,
					"exceptEmailDomains": null,
					"manageRule": null,
					"minPasswordLength": 8,
					"onlyEmailDomains": null,
					"onlyVerified": false,
					"requireEmail": false
				}
			},
			{
				"id": "g5v07s7mguxmk68",
				"created": "2024-09-27 01:28:30.733Z",
				"updated": "2024-09-27 01:55:02.375Z",
				"name": "brands",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "sunepqus",
						"name": "description",
						"type": "text",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 2048,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "c5tyrhns",
						"name": "company",
						"type": "text",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 128,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "dbhg99be",
						"name": "website",
						"type": "url",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"exceptDomains": null,
							"onlyDomains": null
						}
					},
					{
						"system": false,
						"id": "7udzihbr",
						"name": "headquarters",
						"type": "text",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 64,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "cihw7hhm",
						"name": "manufactured_in",
						"type": "select",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"values": [
								"United States",
								"United Kingdom",
								"Mexico"
							]
						}
					},
					{
						"system": false,
						"id": "sitd8gv5",
						"name": "year_established",
						"type": "number",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"min": 1900,
							"max": null,
							"noDecimal": true
						}
					},
					{
						"system": false,
						"id": "6dqtj0in",
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
					},
					{
						"system": false,
						"id": "evkmjxhe",
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
					},
					{
						"system": false,
						"id": "ukgwe7qm",
						"name": "field",
						"type": "relation",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "6aseqnkss24vyg4",
							"cascadeDelete": false,
							"minSelect": null,
							"maxSelect": null,
							"displayFields": null
						}
					},
					{
						"system": false,
						"id": "v607l9h8",
						"name": "categories",
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
					}
				],
				"indexes": [],
				"listRule": null,
				"viewRule": null,
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "6aseqnkss24vyg4",
				"created": "2024-09-27 01:33:39.279Z",
				"updated": "2024-09-27 01:33:39.279Z",
				"name": "brand_reviews",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "6vpygypw",
						"name": "headline",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 512,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "fzjmxg4g",
						"name": "pros",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": 128,
							"max": null,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "syzwkfyj",
						"name": "cons",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": 128,
							"max": null,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "figqkzqv",
						"name": "overall",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": 128,
							"max": null,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "hnwtlgk9",
						"name": "rating",
						"type": "number",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"min": 1,
							"max": 5,
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
				"options": {}
			},
			{
				"id": "2z0hcmeyfvizcfu",
				"created": "2024-09-27 01:54:25.842Z",
				"updated": "2024-09-27 03:07:43.353Z",
				"name": "categories",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "rj007tdu",
						"name": "name",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 64,
							"pattern": ""
						}
					},
					{
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
					}
				],
				"indexes": [],
				"listRule": "",
				"viewRule": null,
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			}
		]`

		collections := []*models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collections); err != nil {
			return err
		}

		return daos.New(db).ImportCollections(collections, true, nil)
	}, func(db dbx.Builder) error {
		return nil
	})
}
