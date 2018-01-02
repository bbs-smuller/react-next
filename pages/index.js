import Link from 'next/link'
import Layout from '../components/AppLayout'

const PostLink = (props) => (
	<li>
		<Link href={`/post?title=${props.title}`}>
			<a>{props.title}</a>
		</Link>
	</li>
)

const Index = () => (
	<Layout>
		<h1>My blog</h1>
		<ul>
			<PostLink title="Hello Next.js"/>
			<PostLink title="Learn Next.js is awesome"/>
			<PostLink title="Deploy app with Zeit"/>
		</ul>
	</Layout>
)

export default Index
