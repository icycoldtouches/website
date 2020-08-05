import React          from 'react'
import Layout         from '../components/layout'
import SEO            from '../components/seo'
import Header         from '../components/Header'
import Footer         from '../components/Footer'
import Contact        from '../components/ContactSection'
import { makeStyles } from '@material-ui/core/styles'
import SectionHeader  from '../components/SectionHeader'
import Container      from '@material-ui/core/Container'
import Grid           from '@material-ui/core/Grid'
import { graphql }    from 'gatsby'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: '#fff',
		padding: theme.spacing(10, 2),
		marginTop: theme.spacing(8)
	},
	containerInner: {
		padding: theme.spacing(4, 0),
		[theme.breakpoints.up(768)]: {
			padding: theme.spacing(4, 1)
		}
	},
	image: {
		borderRadius: '5px'
	},
	content: {
		'& h2': {
			marginTop: theme.spacing(1)
		}
	}
}))

const Project = ({ data }) => {
	const { title, content, isContactPage } = data.allContentfulPage.edges[0].node
	const classes = useStyles()

	const heading = {
		title,
		subTitle: ``
	}
	return (
	  <Layout>
		  <SEO title={title} lang={'de'}/>
		  <Header lang={'de'}/>

		  <Container maxWidth={false} className={classes.container}>
			  <SectionHeader data={heading}/>
			  <Container maxWidth={'md'} className={classes.containerInner}>
				  <Grid container spacing={4}>
					  <Grid item xs={12}>
						  <div
							className={classes.content}
							dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}/>
					  </Grid>
				  </Grid>
			  </Container>
		  </Container>

		  {isContactPage && (<Contact lang={'de'}/>)}
		  <Footer lang={'de'}/>
	  </Layout>
	)
}

export default Project

export const PageQuery = graphql`
    query($slug: String!) {
        allContentfulPage(filter: {node_locale: {eq: "de"}, slug: {eq: $slug}}) {
            edges {
                node {
                    title
                    content {
                        childMarkdownRemark {
                            html
                        }
                    }
                    isContactPage
                }
            }
        }
    }
`