import { FC } from "react"
import { IPost } from "../../utils/type/IPost";
import "./post.css";
import { Link } from "react-router-dom";

type PropsType = {
  post: IPost;
};

const Post: FC<PropsType> = ({ post }) => {
  const { title, body, id } = post;
  return (
    <li className="post">
      <h2 className="post__title">{`${id}) ${title}`}</h2>
      <p className="post__text">{body}</p>
      <div className="post__blockButton">
        <Link to={`/posts/${id}`}><button className="post__button">Просмотр</button></Link>
      </div>
    </li>
  )
}

export default Post;