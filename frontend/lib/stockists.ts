import { Stockist } from "@/models/Stockist";
import { PocketBaseInstance } from "./pocketbase";

export async function getStockists(pb: PocketBaseInstance, brandId?: string): Promise<Stockist[]> {
    const filter = brandId ? `brands ~ "${brandId}"` : '';
    const records = await pb.collection('stockists').getList(1, 50, {
        sort: 'name',
        filter: filter,
    });

    return records.items as unknown as Stockist[];
}

export async function getFeaturedStockists(pb: PocketBaseInstance): Promise<Stockist[]> {
    try {
        const records = await pb.collection('stockists').getList(1, 10, {
            sort: 'name',
        });

        return records.items as unknown as Stockist[];
    } catch (error) {
        throw new Error("Failed to fetch featured stockists");
    }
}
