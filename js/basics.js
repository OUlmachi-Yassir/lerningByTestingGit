// const obj = {
//         name:"yasser",
//         age: 11,
//         gender:"man", 
//         ana:function(){
//             console.log(`my name is ${this.name}`)
//         }};
// obj.ana();

// function Student(name,age,gender){
//     this.name= name;
//     this.age=age;
//     this.gender=gender;
    
// }
// Student.prototype.ana =  function(){
//     console.log(`my name is ${this.name}`)
// }

// Student.prototype.toString =function (){
//     return `${this.name}`
// }

// const student = new Student("yassir",11,"man");
// console.log(obj);
// console.log(Object.getPrototypeOf(student));



// class Student2{
//     constructor (name,age,gender){
//         this.name= name;
//         this.age=age;
//         this.gender=gender;
//     }
//     ana(){
//         console.log(`my name is ${this.name}`)
//     }
// }

// class Vip extends Student2{
//     #vip;
//     constructor (name,age,gender,vip=false){
//         super(name,age,gender);
//     }
//      get vip(){
//         console.log("valeur returne")
//         return this.#vip;
//     }
//     set vip( nVip){
//         console.log("valeur ajoute")
//         this.#vip=nVip;
//     }
// }


// const student2= new Vip("yassir",11,"man",true)
// student2.vip="true"
// console.log(student2.vip);

// // console.log(student.toString())

// class Client{
//     constructor(id,name){
//         this.id=id;
//         this.name=name;
//     }
   
// }

// const client1 = new Client(1, "amine")
// console.log(client1);


// class Product{
//     constructor (codeBarre,nom,prix, dateExp){
//         this.codeBarre=codeBarre,
//         this.nom=nom,
//         this.prix=prix,
//         this.dateExp=dateExp
//     }
// }

// class StockService{
    

//     addProductToStock(product){
//         console.log(`productname:${product.nom}`);
//     }
//     addMultipleProducts(products){
//         for(const item of products){
//             console.log(`productname:${item.nom}`);
//         }

//     }
// }


// class CartService {
//     constructor(client) {
//         this.client = client;
//         this.cartItems = this.cartItems;
//     }

//     addToCart(product, quantity) {
//         this.cartItems.push({ product, quantity });
//         console.log(`Added ${quantity} of ${product.nom} to the cart.`);
//     }

// }


// const stockService = new StockService();

// stockService.addProductToStock({
//     codeBarre: 'RDF08830009',
//     nom: 'Dahmiss',
//     prix: 43.00,
//     dateExp: '19/12/2024'
// }) 
// ;
// stockService.addProductToStock(new Product('RDF08830012', 'Sidi Ali', 6.00, '19/12/2024'))
// stockService.addMultipleProducts([
//     {
//         codeBarre: "RDF08830024",
//         nom: 'Asus',
//         prix: 4500.00,
//     },
//     {
//         codeBarre: "RDF08830024",
//         nom: 'Kaiko',
//         prix: 43.00,
//         dateExp: "19/12/2024"
//     }
// ])





// async function fetchData() {
//     try {
//         const response = await fetch('https://restcountries.com/v3/all');
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('There has been a problem with your fetch operation:', error);
//     }
// }

// fetchData().then((data) => {
//     console.log('Data fetched successfully:', data);
// }).catch((error) => {
//     console.error('There has been a problem with your fetch operation:', error);
// });







// function addProductToStock(product){
//     return new Promise((resolve, reject) => {
//         resolve(product);       
//     });
// }
// async function addProductToStock2(product){
//     return `Added ${product.nom} to the stock.`;       
// }

// addProductToStock({ nom: 'Dahmiss'}).then((product) => {
//     product.length = 12
//     return product;

//     })
//     .then((updatedProduct)=>{
//         console.log(updatedProduct)
//     })
//     .catch((error) => {
//         console.error(error);
//     });

// addProductToStock2({ nom: 'Dahmiss'}).then((result) => {
//         console.log(result);
//     })

// async function init(){
//    const result= await addProductToStock2({ nom: 'Dahmiss'})
//     console.log(result);
// } 

// init();
