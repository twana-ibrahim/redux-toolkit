import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts } from "../../features/posts/postsSlice";
import PostAuthor from "../PostAuthor/PostAuthor";
import ReactionButtons from "../ReactionButtons/ReactionButtons";
import TimeAgo from "../TimeAgo/TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>
        {post.content.substring(0, 100)}{" "}
        {post.content.length > 100 ? "..." : ""}
      </p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;