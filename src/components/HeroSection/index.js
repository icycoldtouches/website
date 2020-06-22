import React          from 'react'
import Img            from 'gatsby-image'
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
		maxHeight: '60vh',
		minHeight: '60vh',
		position: 'relative',
		[theme.breakpoints.up('md')]: {
			maxHeight: '70vh',
			minHeight: '70vh'
		},
		[theme.breakpoints.up('lg')]: {
			maxHeight: '100vh',
			minHeight: '100vh'
		}
	},
	containerImage: {
		height: '100%',
		maxHeight: '60vh',
		minHeight: '60vh',
		[theme.breakpoints.up('md')]: {
			maxHeight: '70vh',
			minHeight: '70vh'
		},
		[theme.breakpoints.up('lg')]: {
			maxHeight: '100vh',
			minHeight: '100vh'
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

const Hero = ({ data }) => {
	const classes = useStyles()

	const images = data

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
			  {images.map((image, index) => {
				  return (
					<div className={classes.containerInner} key={index}>
						<div className={classes.containerOverlay}/>
						<Img fluid={image.image.childImageSharp.fluid} alt={image.imageAlt}
						     className={classes.containerImage}/>
						<Container maxWidth={'md'} style={{
							position: 'absolute',
							bottom: '50%',
							transform: 'translateY(50%)',
							zIndex: 2
						}}>
							<Card className={classes.card} elevation={0}>
								<CardContent>
									<Typography component={'h2'} variant={'h4'} className={classes.title}
									            color="textSecondary" gutterBottom>
										{image.title}
									</Typography>
									<Typography variant="body2" component="p">
										{image.description}
										<br/>
										{image.secondaryDescription}
									</Typography>
								</CardContent>
								<CardActions>
									<Button variant={'contained'} color={'secondary'} size="small">Learn More</Button>
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