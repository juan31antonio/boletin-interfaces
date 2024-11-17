import UserCard from "./UserCard";


export default function App() {

    const usuarios = 
[
    {
        nombre: 'Pepe',
        edad: 79,
        colorPelo: 'Calvo'
    },
    {
        nombre: 'Roberto',
        edad: 21,
        colorPelo: 'Rubio'
    },
    {
        nombre: 'Luis',
        edad: 37,
        colorPelo: 'Moreno'
    }
]

    return (
      <div>
        <Card 
            titulo={"M3"}
            descripcion={"Coche 1"}
            imageUrl={"https://www.coches.com/fotos_historicas/bmw/Serie-1/100f7455fa7464690d4195bbbe9d7b66.jpg"}>
        </Card>
        <Card 
            titulo={"M4"}
            descripcion={"Coche 1 modelo advance"}
            imageUrl={"https://www.coches.com/fotos_historicas/hamann/BMW-1-Series-5-door-F20-2011/hamann_bmw-1-series-5-door-f20-2011_r7.jpg"}>
        </Card>
        <Card 
            titulo={"M5"}
            descripcion={"(Coche 1 modelo advance) modelo advance"}
            imageUrl={"https://www.coches.com/fotos_historicas/bmw/M140i-xDrive-Edition-Shadow-5-door-F20-2017/bmw_m140i-xdrive-edition-shadow-5-door-f20-2017_r33.jpg"}>
        </Card>
        <UserCard usuarios={usuarios}></UserCard>
      </div>
    );
}

function Card({titulo,descripcion,imageUrl}){
    return(
        <div>
            <titulo>{titulo}</titulo>
            <br></br>
            <descripcion>{descripcion}</descripcion>
            <br></br>
            <img
                src={imageUrl}
                width={50}
                height={50}
            />
        </div>
    );
}

