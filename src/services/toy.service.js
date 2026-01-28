import Toy from "../models/Toy";

const repo = AppDataSource.getRepository(Toy);

export class ToyService {
    static async getAllToys() {

    }

    static async getToyById(toyId) {
        return await repo.find({
            where: { id: toyId },
            relations: { category: true }
        })
    }
}