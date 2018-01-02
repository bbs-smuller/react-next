import fetch from 'isomorphic-unfetch'
import Layout from '../components/AppLayout'

const ImageMedium = (image) => {
	if (image) {
		return <img src={image.medium}/>
	}
}

const Post = (props) => (
	<Layout>
		<h1>{props.show.name}</h1>
		<p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
		{ImageMedium(props.show.image)}
	</Layout>
)

Post.getInitialProps = async (context) => {
	const { id } = context.query

	const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
	const show = await res.json()

	console.log(`Fetched show: ${show.name}`)
	console.log(show)

	return {
		show
	}
}

export default Post
