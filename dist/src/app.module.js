"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const todos_module_1 = require("./todos/todos.module");
const products_module_1 = require("./products/products.module");
const auth_module_1 = require("./auth/auth.module");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const typeorm_2 = require("./config/typeorm");
const orders_module_1 = require("./orders/orders.module");
const categories_module_1 = require("./categories/categories.module");
const file_upload_module_1 = require("./file_upload/file_upload.module");
const jwt_1 = require("@nestjs/jwt");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [typeorm_2.default]
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                inject: [config_1.ConfigService],
                useFactory: (configService) => configService.get("typeorm")
            }),
            jwt_1.JwtModule.register({
                global: true,
                signOptions: { expiresIn: "1h" },
                secret: process.env.JWT_SECRET
            }),
            users_module_1.UsersModule, todos_module_1.TodosModule, products_module_1.ProductsModule, auth_module_1.AuthModule, orders_module_1.OrderModule, categories_module_1.CategoriesModule, file_upload_module_1.FileUploadModule
        ],
        controllers: [],
        providers: [],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map