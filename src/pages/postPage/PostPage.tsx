import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../service/api//apiPost";
import { IPost } from "../../utils/type/IPost";
import Spinner from "../../components/spinner/spinner";
import Title from "../../components/title/Title";
import "./postPage.css"


const PostPage: React.FC = () => {
  const { id } = useParams();
  const { data: post, isLoading } = useGetPostByIdQuery(Number(id));

  if (isLoading) { return <Spinner /> }
  
  const { title, body } = post as IPost;
  return (
    <div className='postPage'>
      <Title text={"Post Details"} />
      <div className='postPage__block'>
        <h2 className={'postPage__title'}>{`${id}) ${title}`}</h2>
        <p className={'postPage__text'}>{body}</p>
        <Link to="/"><button className={'postPage__button'}>Назад</button></Link>
      </div>
    </div>
  );
};

export default PostPage;