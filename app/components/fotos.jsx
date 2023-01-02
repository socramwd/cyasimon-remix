

function Fotos({fotos}) {
    const { url } = fotos;

    return (
        <div className="galeria-grid_item">
            <img src={url} alt="imagen carousel" className="galeria-grid_image"/>
        </div>
    )
}

export default Fotos