import Head from 'next/head'
import Header from './Header'

const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #ddd'
}

const Layout = (props) => (
	<div style={layoutStyle}>
		<Head>
			<title>React NextJS</title>
			<meta name="viewport" content="initial-scale=1.0, width=device-width" key="meta_viewport"/>
		</Head>
		<Header/>
		{props.children}
	</div>
)

export default Layout
