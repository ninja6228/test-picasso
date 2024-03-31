import { FC, useState } from "react";
import { useGetListPostsQuery } from "../../service/api/apiPost";
import InfiniteScroll from 'react-infinite-scroll-component';
import Post from "../../components/post/Post";
import Title from "../../components/title/Title";
import Spinner from "../../components/spinner/spinner";
import { IPost } from "../../utils/type/IPost"
import "./postsListPage.css"

interface PostsListPageProps {
  limitPosts: number;
}

const PostsListPage: FC<PostsListPageProps> = ({ limitPosts }) => {
  const [offset, setOffset] = useState(10);
  const [state, setstate] = useState(true);
  const { data: posts, isLoading } = useGetListPostsQuery(offset);

  if (limitPosts < offset) {
    setOffset(limitPosts)
    setstate(false)
  }

  if (isLoading) { return <Spinner /> }

  const newPost = () => {
    return limitPosts === offset
      ? setstate(false)
      : setOffset((offset) => offset + 1)
  }

  return (
    <InfiniteScroll
      dataLength={posts?.length || 0}
      next={newPost}
      hasMore={state}
      loader={<Spinner />}
      endMessage={<div className="line"></div>}
    >
      <Title text={"Posts List"} />
      <ul className="postsSection">
        {posts?.map((post: IPost) => <Post post={post} key={post.id} />)}
      </ul>
    </InfiniteScroll>
  )
};

export default PostsListPage;