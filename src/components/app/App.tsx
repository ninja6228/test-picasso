import { Route, Routes } from 'react-router-dom';
import PostsListPage from '../../pages/postsListPage/PostsListPage';
import PostPage from '../../pages/postPage/PostPage'
import { LIMIT_POSTS } from '../../utils/constant';
import "./app.css"

export const App = () => {
  return (
    <main className='page'>
      <Routes>
        <Route path="/" element={<PostsListPage limitPosts={LIMIT_POSTS} />} />
        <Route path="/posts/:id" element={<PostPage />} />
      </Routes>
    </main>
  );
};
export default App;
