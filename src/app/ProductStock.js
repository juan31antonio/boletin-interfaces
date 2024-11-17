
export default function ProductStock({inStock}){
   

    return(
        <div>
          {inStock ? (<h3>El producto esta en stock</h3>) : (<h3>El producto no esta en stock</h3>)}
        </div>
    );
}