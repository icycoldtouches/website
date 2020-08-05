import React          from 'react'
import Container      from '@material-ui/core/Container'
import SectionHeader  from '../SectionHeader'
import { makeStyles } from '@material-ui/core/styles'
import Grid           from '@material-ui/core/Grid'
import Typography     from '@material-ui/core/Typography'
import { SRLWrapper } from 'simple-react-lightbox'
import Img            from 'gatsby-image'
import List           from '@material-ui/core/List'
import ListItem       from '@material-ui/core/ListItem'
import ListItemIcon   from '@material-ui/core/ListItemIcon'
import ListItemText   from '@material-ui/core/ListItemText'
import PersonIcon     from '@material-ui/icons/Person'
import CategoryIcon   from '@material-ui/icons/Category'
import EventIcon      from '@material-ui/icons/Event'
import PublicIcon     from '@material-ui/icons/Public'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.white.main,
		padding: theme.spacing(10, 2, 0, 2),
		margin: theme.spacing(8, 0, 0, 0)
	},
	containerInner: {
		padding: theme.spacing(4, 0),
		[theme.breakpoints.up(768)]: {
			padding: theme.spacing(4, 1)
		}
	},
	image: {
		borderRadius: '5px',
		maxHeight: '250px',
		margin: theme.spacing(2, 0),
		transition: 'all 300ms ease-in-out',
		'&:hover': {
			cursor: 'pointer',
			filter: 'contrast(80%) brightness(55%) sepia(30%)'
		}
	},
	description: {
		'& div p': {
			marginTop: 10
		}
	}
}))

const options = {
	settings: {
		overlayColor: 'rgba(0, 0, 0, 0.9)',
		autoplaySpeed: 3000,
		transitionSpeed: 900,
		disablePanzoom: true
	},
	buttons: {
		backgroundColor: '#c8ae5e',
		iconColor: 'rgba(255, 255, 255, 1)',
		showDownloadButton: false
	},
	caption: {
		captionColor: '#c8ae5e',
		captionFontFamily: 'Shadows Into Light, sans-serif',
		captionFontWeight: '400',
		captionFontSize: '3.2389rem',
		captionTextTransform: 'uppercase'
	}
}

const ProjectCard = ({
	                     projectTitle,
	                     projectCategory,
	                     projectClient,
	                     projectDate,
	                     projectDescription,
	                     projectImages,
	                     projectLocation,
	                     lang
                     }) => {
	const classes = useStyles()

	const data = {
		title: projectTitle,
		subTitle: ``
	}

	return (
	  <Container maxWidth={false} className={classes.container}>
		  <SectionHeader data={data}/>
		  <Container maxWidth={'lg'} className={classes.containerInner}>
			  <Grid container spacing={4}>
				  <Grid item xs={12} md={6}>
					  <Typography variant={'body1'} color={'textSecondary'} component={'div'}
					              className={classes.description}>
						  <div dangerouslySetInnerHTML={{ __html: projectDescription.childMarkdownRemark.html }}/>
					  </Typography>
					  <List component="nav" className={classes.root} aria-label="contacts">
						  <ListItem>
							  <ListItemIcon>
								  <PersonIcon/>
							  </ListItemIcon>
							  <ListItemText inset primary={lang === 'de' ? `Kunde` : `Client`}
							                secondary={projectClient}/>
						  </ListItem>
						  <ListItem>
							  <ListItemIcon>
								  <CategoryIcon/>
							  </ListItemIcon>
							  <ListItemText inset primary={lang === 'de' ? `Projekt-Kategorie` : `Project Category`}
							                secondary={projectCategory.categoryTitle}/>
						  </ListItem>
						  <ListItem>
							  <ListItemIcon>
								  <EventIcon/>
							  </ListItemIcon>
							  <ListItemText inset primary={lang === 'de' ? `Foto's aufgenommen am` : `Photo's taken on`}
							                secondary={projectDate}/>
						  </ListItem>
						  <ListItem>
							  <ListItemIcon>
								  <PublicIcon/>
							  </ListItemIcon>
							  <ListItemText inset primary={lang === 'de' ? `Standort` : `Location`}
							                secondary={projectLocation}/>
						  </ListItem>
					  </List>
				  </Grid>
				  <Grid item xs={12} md={6}>
					  <SRLWrapper options={options}>
						  {projectImages.map((image, index) => (
							<Img key={index} fluid={image.fluid} alt={image.title} className={classes.image}/>
						  ))}
					  </SRLWrapper>
				  </Grid>
			  </Grid>
		  </Container>
	  </Container>
	)
}

export default ProjectCard