
import { useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/posts.server"
import Post from "../components/post";
import styles from "~/styles/blog.css";

export async function loader() {
    const posts = await getPosts();
    return posts.data;
}

export function meta() {
    return {
        title: "CYA Simón - Blog",
        description: "Cristalería, Aluminio, nuestro blog"
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

function Blog() {
    const posts = useLoaderData();

    return (
        <>
            <div className="cabecera">
                <h1>Blog</h1>
            </div>
            
            <main className="contenedor">
                <div class="blog">
                    {posts.map(post => (
                        <Post
                            key={post.id}
                            post={post.attributes}
                        />
                    ))}
                </div>
            </main>
        </>

    )
}

export default Blog