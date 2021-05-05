import Layout from "../components/Layout"
import Post from "../components/Post"
import {getAllPostData} from '../lib/posts'
const Blog = ({posts}) => {
  console.log(posts)
  return (

    <Layout title="blog">
      <ul className="m-10">
      {posts && posts.map((post) => (
        <Post key={post.id} post={post}/>
      ))}
      </ul>
    </Layout>
  )
}

export default Blog

export  const getStaticProps = async() => {
  const posts = await getAllPostData()
  return {
    props: {posts}
  }
}
