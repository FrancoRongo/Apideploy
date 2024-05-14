import { Product } from "./products.entity";
import { ProductDto } from "./products.dto";
import { ProductsRepository } from "./products.repository";
import { CategoriesRepository } from "src/categories/categories.repository";
export declare class ProductsService {
    private readonly productsRepository;
    private readonly categoryRepositoriy;
    constructor(productsRepository: ProductsRepository, categoryRepositoriy: CategoriesRepository);
    getProducts(): Promise<Product[]>;
    getStockOfProduct(name: string): Promise<string>;
    addHardProduct(): Promise<string>;
    getProductById(id: string): Promise<Product>;
    createProduct(productDto: ProductDto): Promise<Product>;
    updateProduct(id: string, productDto: Partial<Product>): Promise<Product>;
    deleteProduct(id: string): Promise<void>;
}
