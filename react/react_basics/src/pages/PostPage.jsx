import {
    Outlet,
    useParams,
    Link,
    useNavigate,
    useSearchParams,
} from "react-router-dom";
import { useData } from "../hooks/useData";

export default function PostsPage() {
    return (
        <div className="Posts">
            <h1>Posts</h1>
            <Outlet />
        </div>
    );
}

export function PostList() {
    // adding in code for query Parameters
    const [searchParams, setSearchParams] = useSearchParams(); // import this hook
    const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
    const postData = useData(
        `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
    );
    const handleChangeLimit = (e) => {
        setSearchParams({ limit: e.target.value });
    };

    const postList = postData?.map((post) => (
        <li key={post.id}>
            <Link to={"/posts/" + post.id}>
                Post #{post.id}: {post.title}
            </Link>
        </li>
    ));

    //update return to render limit change 10 option
    return (
        <>
            <ul>
                {postList}
                {/* <Link to="/posts?limit=10">Load 10 Posts</Link> */}

                {/* html element for drop downs */}
                <select onChange={handleChangeLimit} value={limit}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </ul>
        </>
    );
}

export function Post() {
    const { id } = useParams(); //custom react-router hook to access dynamic id param
    const post = useData(`https://jsonplaceholder.typicode.com/posts/${id}`); //variable URL:id

    //Next button Extension
    const navigate = useNavigate();
    const allPosts = useData("https://jsonplaceholder.typicode.com/posts/");
    //setting new variable with INTENT to collect CURRENT ":id" value

    //function to Navigate to the next post
    const goToNextPost = () => {
        const currentIndex = allPosts.findIndex((p) => p.id === post.id); //collect allPosts variable and set as Integer (via findIndex method)
        const nextPost = allPosts[currentIndex + 1]; //new variable that increments on the value of allPosts Integer
        if (nextPost) {
            //if next post exists navigate to nextPost
            navigate(`/posts/${nextPost.id}`);
        }
    };
    const goToLastPost = () => {
        const currentIndex = allPosts.findIndex((p) => p.id === post.id); //collect allPosts variable and set as Integer (via findIndex method)
        const lastPost = allPosts[currentIndex - 1]; //new variable that increments on the value of allPosts Integer
        if (lastPost) {
            //if last post exists navigate to lastPost
            navigate(`/posts/${lastPost.id}`);
        }
    };

    return (
        <div className="Post">
            {post ? (
                <>
                    <h3>
                        Post #{post.id} : {post.title}
                    </h3>
                    <p>{post.body}</p>
                </>
            ) : (
                "Loading ..."
            )}
            <button onClick={goToNextPost}>Next Please</button>
            <button onClick={goToLastPost}>Oops go back</button>
            {/* this is the button */}
        </div>
    );
}
