'use client'
import Greeting from "./Greeting";
import App from "./App"
import Counter from "./Counter"
import ProductList from "./ProductList";
import Parent from "./Parent";
import ToggleSwitch from "./ToggleSwitch";
import ToDoList from "./ToDoList";
import Counter2 from "./Counter2"
import LoginControl from "./LoginControl";
import ProductStock from "./ProductStock";
import ContactForm from "./ContactForm";
import ShoppingList from "./ShoppingList";
import DropDown from "./DropDown"
import ImageGallery from "./ImageGallery.";

export default function Home() {
  const productos = 
  [
      {
          nombre: 'Platano',
          precio: 21,
          descripcion: 'Es un platano'
      },
      {
          nombre: 'Naranja',
          precio: 22,
          descripcion: 'Es una naranja'
      },
      {
          nombre: 'Fresa',
          precio: 23,
          descripcion: 'Es una fresa'
      }
  ]

  const imageList = [
    { src: 'https://www.coches.com/fotos_historicas/bmw/Serie-1/100f7455fa7464690d4195bbbe9d7b66.jpg', alt: 'Imagen 1' },
    { src: 'https://www.coches.com/fotos_historicas/hamann/BMW-1-Series-5-door-F20-2011/hamann_bmw-1-series-5-door-f20-2011_r7.jpg', alt: 'Imagen 2' },
    { src: 'https://www.coches.com/fotos_historicas/bmw/M140i-xDrive-Edition-Shadow-5-door-F20-2017/bmw_m140i-xdrive-edition-shadow-5-door-f20-2017_r33.jpg', alt: 'Imagen 3' }
  ];

  const opciones = ['opcion1','opcion2','opcion3']
      

  return (
    <div>
      <Greeting saludo={"Hola que tal"}></Greeting>
      ---------------------------------------------
      <App ></App>
      ---------------------------------------------
      <Counter></Counter>
      ---------------------------------------------
      <ProductList></ProductList>
      ---------------------------------------------
      <Parent></Parent>
      ---------------------------------------------
      <ToggleSwitch></ToggleSwitch>
      ---------------------------------------------
      <ToDoList></ToDoList>
      ---------------------------------------------
      <Counter2></Counter2>
      ---------------------------------------------
      <LoginControl></LoginControl>
      ---------------------------------------------
      <ProductStock inStock={true}></ProductStock>
      ---------------------------------------------
      <ProductStock inStock={false}></ProductStock>
      ---------------------------------------------
      <ContactForm></ContactForm>
      ---------------------------------------------
      <ShoppingList productos={productos}></ShoppingList>
      ---------------------------------------------
      <br></br>
      <DropDown opciones={opciones}></DropDown>
      <br></br>
      ---------------------------------------------
      <ImageGallery imagenes={imageList}></ImageGallery>
    </div>
  );
}