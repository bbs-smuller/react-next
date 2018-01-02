import Head from 'next/head'
import React from 'react'
import Layout from '../components/AppLayout'

export default class AboutPage extends React.Component {
	static async getInitialProps({ req }) {
		const userAgent = req ? req.headers['user-agent'] : navigator.userAgent

		return { userAgent }
	}

	render() {
		return (
			<Layout>
				<Head>
					<title>React - NextJS _ About page</title>
					<meta name="viewport" content="initial-scale=1.2, width=device-width" key="meta_viewport"/>
				</Head>
				<p>This is the about page on "{this.props.userAgent}".</p>
			</Layout>
		)
	}
}
