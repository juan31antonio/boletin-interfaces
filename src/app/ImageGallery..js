
function Image({src,alt}){
  return (
    <div>
      <img 
        src={src} 
        alt={alt} 
        width={50}
        height={50}/>
    </div>
  );
}

export default function ImageGallery({imagenes}) {
 
    return (
      <div>
        {imagenes.map(imagen => (
          <Image src={imagen.src} alt={imagen.alt} />
        ))}
      </div>
    );
}