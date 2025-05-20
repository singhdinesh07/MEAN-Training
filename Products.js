"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Products = /** @class */ (function () {
    function Products(productld, productName, imageUrl, description, price, quantity) {
        this.productld = productld;
        this.productName = productName;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.quantity = quantity;
    }
    return Products;
}());
exports.default = Products;
