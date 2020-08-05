import React          from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid           from '@material-ui/core/Grid'
import Container      from '@material-ui/core/Container'
import SectionHeader  from '../SectionHeader'
import Img            from 'gatsby-image'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.white.main,
		padding: theme.spacing(10, 2)
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

const About = ({ about }) => {
	const classes = useStyles()
	const { title, content, image } = about.edges[0].node
	const { fluid, description } = image

	const data = {
		title: title,
		subTitle: ``
	}

	return (
	  <Container maxWidth={false} className={classes.container}>
		  <SectionHeader data={data}/>
		  <Container maxWidth={'lg'} className={classes.containerInner}>
			  <Grid container spacing={4}>
				  <Grid item xs={12} md={6}>
					  <div
						className={classes.content}
						dangerouslySetInnerHTML={{ __html: content.childMarkdownRemark.html }}/>
				  </Grid>
				  <Grid item xs={12} md={6}>
					  <Img fluid={fluid} className={classes.image} alt={description}/>
				  </Grid>
			  </Grid>
		  </Container>
	  </Container>
	)
}

export default About