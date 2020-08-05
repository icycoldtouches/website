import React          from 'react'
import Img            from 'gatsby-image'
import { Link }       from 'gatsby'
import { makeStyles } from '@material-ui/core/styles'
import Container      from '@material-ui/core/Container'
import Card           from '@material-ui/core/Card'
import CardActions    from '@material-ui/core/CardActions'
import CardContent    from '@material-ui/core/CardContent'
import Button         from '@material-ui/core/Button'
import Slider         from 'react-slick'
import Typography     from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	container: {
		paddingTop: '65px',
		paddingLeft: '0',
		paddingRight: '0',
		overflow: 'hidden'
	},
	containerInner: {
		height: '100%',
		maxHeight: '80vh',
		minHeight: '80vh',
		position: 'relative',
		[theme.breakpoints.up('md')]: {
			maxHeight: '70vh',
			minHeight: '70vh'
		},
		[theme.breakpoints.up('lg')]: {
			maxHeight: '80vh',
			minHeight: '80vh'
		}
	},
	containerImage: {
		height: '100%',
		maxHeight: '80vh',
		minHeight: '80vh',
		[theme.breakpoints.up('md')]: {
			maxHeight: '70vh',
			minHeight: '70vh'
		},
		[theme.breakpoints.up('lg')]: {
			maxHeight: '80vh',
			minHeight: '80vh'
		}
	},
	containerOverlay: {
		width: '100%',
		height: '100%',
		backgroundColor: theme.palette.secondary.transparent,
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		position: 'absolute',
		zIndex: 1
	},
	card: {
		zIndex: 2,
		backgroundColor: 'transparent',
		color: theme.palette.white.main
	},
	title: {
		color: theme.palette.white.main
	}
}))

const Hero = ({ data, lang }) => {
	const classes = useStyles()
	const { slider } = data

	const settings = {
		dots: false,
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		lazyLoad: true,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 8000,
		cssEase: 'ease-in-out',
		pauseOnHover: true,
		accessibility: true,
		centerMode: true,
		centerPadding: '0',
		className: classes.containerInner
	}

	return (
	  <Container maxWidth={false} className={classes.container}>
		  <Slider {...settings}>
			  {slider.edges.map((node, index) => {
				  const { projectTitle, projectDescription, projectImages, projectSlug } = node.node

				  const heroImage = projectImages[0]
				  const { fluid, description } = heroImage

				  return (
					<div className={classes.containerInner} key={index}>
						<div className={classes.containerOverlay}/>
						<Img fluid={fluid} alt={description} className={classes.containerImage}/>
						<Container maxWidth={'md'} style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
							zIndex: 2
						}}>
							<Card className={classes.card} elevation={0}>
								<CardContent>
									<Typography component={'h2'} variant={'h3'} className={classes.title}
									            color="textSecondary" gutterBottom>
										{projectTitle}
									</Typography>
									<Typography variant="body2" component="p">
										<span
										  dangerouslySetInnerHTML={{ __html: projectDescription.childMarkdownRemark.excerpt }}/>
									</Typography>
								</CardContent>
								<CardActions>
									<Button variant={'contained'} component={Link} color={'secondary'} size="small"
									        to={lang === 'de' ? `projekte/${projectSlug}` : `en/projects/${projectSlug}`}
									        aria-label={'learn more about this project.'}>{lang === 'de' ? `Mehr Informationen` : `Learn More`}</Button>
								</CardActions>
							</Card>
						</Container>
					</div>
				  )
			  })}
		  </Slider>
	  </Container>
	)
}

export default Hero