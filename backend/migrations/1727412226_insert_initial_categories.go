package migrations

import (
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
	"github.com/pocketbase/pocketbase/models/schema"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db)

		// Create the "categories" collection if it doesn't exist
		collection, err := dao.FindCollectionByNameOrId("categories")
		if err != nil {
			collection = &models.Collection{
				Name:   "categories",
				Type:   models.CollectionTypeBase,
				Schema: schema.NewSchema(), // Use NewSchema() instead of []string{}
			}
			if err := dao.SaveCollection(collection); err != nil {
				return err
			}
		}

		// Insert top-level categories and store their IDs
		topLevelCategories := []string{"Men", "Women", "Children"}
		categoryIDs := make(map[string]string)

		for _, name := range topLevelCategories {
			record := models.NewRecord(collection)
			record.Set("name", name)
			if err := dao.SaveRecord(record); err != nil {
				return err
			}
			categoryIDs[name] = record.Id
		}

		// Insert subcategories
		subcategories := map[string][]string{
			"Men":      {"Suits", "Jeans", "T-Shirts", "Activewear", "Dress Shirts", "Bags & Backpacks", "Sneakers", "Outerwear"},
			"Women":    {"Dresses", "Jeans", "T-Shirts & Tank Tops", "Activewear", "Shirts & Blouses", "Bags & Backpacks", "Sneakers", "Intimates & Shapewear"},
			"Children": {"Dresses", "Jeans", "T-Shirts & Tank Tops", "Activewear", "Shirts & Blouses", "Bags & Backpacks", "Sneakers", "Pajamas"},
		}

		for parentName, subCategories := range subcategories {
			parentID := categoryIDs[parentName]
			for _, subName := range subCategories {
				record := models.NewRecord(collection)
				record.Set("name", subName)
				record.Set("parent_category", parentID)
				if err := dao.SaveRecord(record); err != nil {
					return err
				}
			}
		}

		return nil
	}, func(db dbx.Builder) error {
		// Revert logic (optional)
		dao := daos.New(db)

		collection, err := dao.FindCollectionByNameOrId("categories")
		if err != nil {
			return nil // If the collection doesn't exist, nothing to revert
		}

		// Delete all records in the categories collection
		records, err := dao.FindRecordsByExpr(collection.Id)
		if err != nil {
			return err
		}
		for _, record := range records {
			if err := dao.DeleteRecord(record); err != nil {
				return err
			}
		}

		return nil
	})
}
