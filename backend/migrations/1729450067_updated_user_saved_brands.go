package migrations

import (
	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/tools/types"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("fav1e3ny3j05egy")
		if err != nil {
			return err
		}

		collection.CreateRule = types.Pointer("@request.auth.id = user")

		return dao.SaveCollection(collection)
	}, func(db dbx.Builder) error {
		dao := daos.New(db);

		collection, err := dao.FindCollectionByNameOrId("fav1e3ny3j05egy")
		if err != nil {
			return err
		}

		collection.CreateRule = nil

		return dao.SaveCollection(collection)
	})
}
