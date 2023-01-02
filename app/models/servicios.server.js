export async function getServicios() {
    const respuesta = await fetch(`${process.env.API_URL}/simon-servicios?populate=imagen`);
	return await respuesta.json();
}

export async function getServicio(url) {
    const respuesta = await fetch(`${process.env.API_URL}/simon-servicios?filters[url]=${url}&populate=imagen&populate=galeria`);
    return await respuesta.json();
}