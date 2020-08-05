import React, { useState } from 'react'
import { makeStyles }      from '@material-ui/core/styles'
import SectionHeader       from '../SectionHeader'
import Container           from '@material-ui/core/Container'
import Grid                from '@material-ui/core/Grid'
import AppBar              from '@material-ui/core/AppBar'
import Tabs                from '@material-ui/core/Tabs'
import Tab                 from '@material-ui/core/Tab'
import Typography          from '@material-ui/core/Typography'
import Box                 from '@material-ui/core/Box'
import PetsIcon            from '@material-ui/icons/Pets'
import BusinessCenterIcon  from '@material-ui/icons/BusinessCenter'
import FaceIcon            from '@material-ui/icons/Face'
import Img                 from 'gatsby-image'

const useStyles = makeStyles((theme) => ({
	container: {
		padding: theme.spacing(10, 2)
	},
	containerInner: {
		padding: theme.spacing(0)
	},
	containerInnerItem: {
		padding: 0
	},
	tabs: {
		display: 'flex',
		flexDirection: 'column'
	},
	tabContainer: {
		padding: theme.spacing(4, 0),
		maxWidth: 1280,
		width: '100%',
		margin: 'auto',
		'& div': {
			paddingLeft: 0,
			paddingRight: 0
		},
		[theme.breakpoints.up(768)]: {
			padding: theme.spacing(8, 1)
		}
	},
	tabHeader: {
		maxWidth: 920,
		width: '100%',
		margin: 'auto',
		borderRadius: '5px'
	},
	media: {
		height: 0,
		paddingTop: '70.25%',
		borderRadius: '5px'
	},
	mediaContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',

		[theme.breakpoints.up(1024)]: {
			justifyContent: 'start'
		}
	}
}))

function TabPanel(props) {
	const { children, value, index, ...other } = props

	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`services-tabpanel-${index}`}
		aria-labelledby={`services-tab-${index}`}
		{...other}
	  >
		  {value === index && (
			<Box p={3}>
				{children}
			</Box>
		  )}
	  </div>
	)
}

function a11yProps(index) {
	return {
		id: `services-tab-${index}`,
		'aria-controls': `services-tabpanel-${index}`,
		'aria-label': `services-tab-${index}`
	}
}

const Services = ({ title, animal, business, human }) => {
	const classes = useStyles()
	const data = {
		title: title,
		subTitle: ``
	}

	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
	  <Container maxWidth={'xl'} className={classes.container}>
		  <SectionHeader data={data}/>
		  <Grid container spacing={4} className={classes.containerInner}>
			  <Grid item xs={12} className={classes.containerInnerItem}>
				  <AppBar position="static" className={classes.tabHeader}>
					  <Tabs value={value} onChange={handleChange} aria-label="services tabs"
					        className={classes.tabs} variant={'fullWidth'}>
						  <Tab label={<PetsIcon/>} {...a11yProps(0)} />
						  <Tab label={<BusinessCenterIcon/>} {...a11yProps(1)} />
						  <Tab label={<FaceIcon/>} {...a11yProps(2)} />
					  </Tabs>
				  </AppBar>
				  <TabPanel value={value} index={0} className={`${classes.tabContainer} tab`} component={'span'}>
					  <Grid container component={'span'} spacing={4}>
						  <Grid item component={'span'} xs={12} md={6} className={classes.mediaContainer}>
							  <Img
								fluid={animal.image.fluid}
								title={animal.image.description}
								alt={`${animal.image.description}`}
								className={`${classes.media}`}
							  />
						  </Grid>
						  <Grid item component={'span'} xs={12} md={6}>
							  <Typography component={'h2'} variant={'h4'} color={'primary'}>
								  {animal.title}
							  </Typography>
							  <br/>
							  <Typography
								component={'span'}
								dangerouslySetInnerHTML={{ __html: animal.description.childMarkdownRemark.html }}
								variant={'body1'}
								color={'primary'}
							  />
						  </Grid>
					  </Grid>
				  </TabPanel>
				  <TabPanel value={value} index={1} className={classes.tabContainer}>
					  <Grid container component={'span'} spacing={4}>
						  <Grid item component={'span'} xs={12} md={6} className={classes.mediaContainer}>
							  <Img
								fluid={business.image.fluid}
								title={business.image.description}
								alt={business.image.description}
								className={classes.media}
							  />
						  </Grid>
						  <Grid item component={'span'} xs={12} md={6}>
							  <Typography component={'h2'} variant={'h4'} color={'primary'}>
								  {business.title}
							  </Typography>
							  <br/>
							  <Typography
								component={'span'}
								dangerouslySetInnerHTML={{ __html: business.description.childMarkdownRemark.html }}
								variant={'body1'}
								color={'primary'}
							  />
						  </Grid>
					  </Grid>
				  </TabPanel>
				  <TabPanel value={value} index={2} className={classes.tabContainer}>
					  <Grid container component={'span'} spacing={4}>
						  <Grid item component={'span'} xs={12} md={6} className={classes.mediaContainer}>
							  <Img
								fluid={human.image.fluid}
								title={human.image.description}
								alt={human.image.description}
								className={classes.media}
							  />
						  </Grid>
						  <Grid item component={'span'} xs={12} md={6}>
							  <Typography component={'h2'} variant={'h4'} color={'primary'}>
								  {human.title}
							  </Typography>
							  <br/>
							  <br/>
							  <Typography component={'span'} variant={'body1'} color={'primary'}>
								  Capturing the eyes and the mimic of a human is like an invitation and sacred
								  permission to look into their soul.
							  </Typography>
							  <br/>
							  {' '}<br/>
							  <Typography component={'span'} variant={'body1'} color={'primary'}>
								  Looking back at some of the photographs I took,
								  I remember the laughter and even bits of the conversation I had with the person.
							  </Typography>
						  </Grid>
					  </Grid>
				  </TabPanel>
			  </Grid>
		  </Grid>
	  </Container>
	)
}

export default Services