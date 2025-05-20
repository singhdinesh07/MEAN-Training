export class Products {
    productld : number; 
    productName : string; 
    imageUrl : string; 
    description: string; 
    price : number; 
    quantity: number; 

constructor (productld:number,productName:string,imageUrl:string,description:string,price:number,quantity:number)
    {
        this.productld=productld ; 
        this.productName=productName; 
        this.imageUrl=imageUrl; 
        this.description=description; 
        this.price=price; 
        this.quantity=quantity ; 
    }
}
