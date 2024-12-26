const Producto = function(nombre, precio, stock){
    this.nombre = nombre,
    this.precio = precio,
    this.stock = stock
}

let producto1= new Producto("pan lactal", 750, 120)
let producto2 = new Producto("pan lactal negro", 750, 85)
let producto3 = new Producto("pan hamburguesa", 650, 580)
let producto4 = new Producto("pan de viena", 650, 920)
let producto5 = new Producto("pan pebete", 750, 60)
let producto6 = new Producto("pan doble salvado", 750, 80)
let producto7 = new Producto("pan chips", 1750, 30)


let lista = [producto1, producto2, producto3, producto4, producto4, producto5, producto6, producto7]


function agregarProducto(){

    let nombre = prompt("ingresa el nombre del producto")
    let precio = parseInt(prompt("ingresa el precio del producto"))
    let stock = parseInt(prompt("ingrese el stock del producto"))

    if(isNaN(precio) || isNaN(stock) || nombre==""){
        alert("por favor ingrese valores validos")
            return   
    }
    let producto = new Producto(nombre, precio, stock)

    lista.push(producto)

    console.table(lista)
}

agregarProducto()

function filtrarProducto(){
    let palabraClave = prompt("ingresa el producto que buscas")

    let resultado = lista.filter( filtrado => filtrado.nombre == palabraClave)

    if(resultado.length > 0){

        console.table(resultado)
    }else{
            alert("no se encontro el producto buscado")
        }
}
filtrarProducto()

let busqueda = lista.find(buscar => buscar.precio == 650)

console.table(busqueda)



