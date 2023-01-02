
import { getPost } from "~/models/posts.server";
import styles from "~/styles/blog.css"
import { useLoaderData } from "@remix-run/react";
import { formatearFecha } from "~/utils/helper"

export async function loader({params}) {
    const {postUrl} = params;
    const post = await getPost(postUrl);
    if(post.data.length === 0) {
        throw new Response("", {
            status: 404,
            statusText: "Entrada no encontrada"
        })
    }

    return post;
}

export function meta({data}) {
    if(!data) {
        return {
            title: "CYA Simón - Entrada no encontrada",
            description: "Cristalería, Aluminio, nuestro blog, entrada no encontrada"
        }
    }
    return {
        title: `CYA Simón - ${data?.data[0]?.attributes.titulo}`,
        description: `Cristalería, Aluminio, nuestro blog, entrada ${data?.data[0]?.attributes.titulo}`
    }
}

export function links() {
    return [
        {
            rel: "stylesheet",
            href: styles
        }
    ]
}

function PostUrl() {
    const post = useLoaderData();
    const { titulo, contenido, fecha, categoria, imagen } = post.data[0].attributes;
    const fechaFormat = formatearFecha(fecha);

    return (
        <article className="contenedor post">
            <div className="post-card_image">
                <img src={imagen.data.attributes.url} alt={`imagen ${titulo}`}/>
            </div>

            <div className="contenido">
                <h3>{titulo}</h3>

                <div className="info">
                    <button className="boton">{categoria}</button>
                    <p className="fecha">{fechaFormat}</p>
                </div>

                <p className="texto">{contenido}</p>
            </div>
        </article>
    )
}

export default PostUrl