import Link from 'next/link'
import Markdown from 'react-markdown'
import fetch from 'isomorphic-unfetch'
import Layout from '../components/AppLayout'

const Index = (props) => (
	<Layout>
		<h1>Batman TV Shows!</h1>
		<ul>
			{props.shows.map(({show}) => (
				<li key={show.id}>
					<Link as={`p/${show.id}`} href={`/post?id=${show.id}`}>
						<a>{show.name}</a>
					</Link>
				</li>
			))}
		</ul>
		<div className="markdown">
			<Markdown source={`
This is our blog post.
Yes. We can have a [link](/link).
And we can have a title as well.

### This is a title

And here's the content.
			`}/>
		</div>
		<style jsx>{`
			h1, a {
				font-family: 'Arial';
			}
			ul {
				padding: 0;
			}
			li {
				list-style: none;
				margin: 5px 0;
			}
			a {
				color: blue;
				text-decoration: none;
			}
			a:hover {
				opacity: 0.6;
			}
		`}</style>
		<style jsx global>{`
			.markdown h3 {
				text-transform: uppercase;
			}
		`}</style>
	</Layout>
)

Index.getInitialProps = async () => {
	const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
	const shows = await res.json()

	console.log(`Show data fetched. Count: ${shows.length}`)

	return {
		shows
	}
}

export default Index
