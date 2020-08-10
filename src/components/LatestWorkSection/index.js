import React, { useEffect, useState } from 'react'
import Isotope                        from 'isotope-layout'
import { makeStyles }                 from '@material-ui/core/styles'
import Container                      from '@material-ui/core/Container'
import FormControl                    from '@material-ui/core/FormControl'
import SectionHeader                  from '../SectionHeader'
import Button                         from '@material-ui/core/Button'
import VisibilityIcon                 from '@material-ui/icons/Visibility'
import { Link }                       from 'gatsby'
import Typography                     from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: theme.palette.white.main,
		padding: theme.spacing(10, 2)
	},
	containerInner: {
		padding: theme.spacing(0)
	},
	filters: {
		display: 'flex',
		flexDirection: 'row',
		width: '100%',
		justifyContent: 'space-evenly',
		margin: `32px auto`,
		[theme.breakpoints.up(768)]: {
			justifyContent: 'center'
		}
	},
	filterItem: {
		margin: theme.spacing(0),
		[theme.breakpoints.up(768)]: {
			margin: theme.spacing(0, 1)
		}
	},
	isoM: {
		padding: theme.spacing(4, 0),
		'& .isoItem': {
			width: '100%',
			display: 'block',
			height: 400,
			backgroundSize: 'cover',
			backgroundPosition: 'center',
			backgroundRepeat: 'no-repeat',
			margin: theme.spacing(1, 0),
			borderRadius: '4px',
			position: 'relative',
			[theme.breakpoints.up('md')]: {
				margin: theme.spacing(1),
				width: 'calc(50% - 16px)'
			},
			[theme.breakpoints.up('lg')]: {
				width: 'calc(33% - 16px)'
			}
		}
	},
	link: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%, -50%)',
		zIndex: 2,
		color: 'transparent',
		transition: 'all 300ms ease-in-out',
		'& svg': {
			fontSize: '4rem',
			padding: theme.spacing(1)
		}
	},
	title: {
		position: 'absolute',
		left: '50%',
		top: '35%',
		transform: 'translate(-50%, -50%)',
		width: '100%',
		textAlign: 'center',
		zIndex: 2,
		color: 'transparent',
		transition: 'all 300ms ease-in-out'
	},
	itemOverlay: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'transparent',
		transition: 'all 300ms ease-in-out',
		borderRadius: '4px',
		'&:hover': {
			backgroundColor: theme.palette.secondary.transparent,
			'& a': {
				color: theme.palette.white.main
			},
			'& h2': {
				color: theme.palette.white.main
			}
		}
	}
}))

const LatestWork = ({ projects, page, title, subTitle, lang }) => {
	const classes = useStyles()
	const Filters = [
		{ label: 'all', value: '*' }
	]

	const data = {
		title: title,
		subTitle: subTitle
	}

	const Projects = []
	const Categories = []

	const projectLink = (page, lang, slug) => {
		if (page === 'home' && lang === 'de') return `projekte/${slug}`
		else if (page === 'home' && lang === 'en') return `/en/project/${slug}`
		else if (page === 'single' && lang === 'de') return `${slug}`
		else return `${slug}`
	}

	projects.edges.map(node => {
		const { projectSlug, projectTitle, projectImages, projectCategory } = node.node
		Categories.push(projectCategory.categoryTitle.toLowerCase())
		Projects.push(
		  {
			  className: 'isoItem',
			  filter: ['all', `${projectCategory.categoryTitle.toLowerCase()}`],
			  src: `${projectImages[0].fluid.src}`,
			  title: `${projectTitle}`,
			  link: projectLink(page, lang, projectSlug)
		  }
		)
		return projects
	})

	const filteredCategories = Array.from(new Set(Categories))

	filteredCategories.map(node => {
		Filters.push({ label: node.toUpperCase(), value: node.toLowerCase() })
		return filteredCategories
	})

	const [isotope, setIsotope] = useState(null)
	const [filterKey, setFilterKey] = useState('*')
	const [activeFilter, setActiveFilter] = useState('*')

	useEffect(() => {
		setIsotope(
		  new Isotope('.isotope__container', {
			  itemSelector: '.isotope__container--item',
			  layoutMode: 'fitRows'
		  })
		)
	}, [])

	useEffect(
	  () => {
		  if (isotope) {
			  if (filterKey === '*') {
				  isotope.arrange({ filter: `*` })
				  setActiveFilter('*')
			  } else {
				  isotope.arrange({ filter: `.${filterKey}` })
				  setActiveFilter(filterKey)
			  }
		  }
	  },
	  [isotope, filterKey]
	)

	return (
	  <Container maxWidth={false} className={classes.container} style={{ marginTop: page === 'single' ? '4rem' : '' }}>
		  <SectionHeader data={data}/>
		  <Container maxWidth={'lg'} className={`isotope ${classes.containerInner}`}>
			  <FormControl className={`isotope__filter ${classes.filters}`}>
				  {Filters.map(f => (
					<Button variant={'contained'}
					        color={activeFilter === f.value ? 'primary' : 'secondary'}
					        value={f.label}
					        key={`${f.label}_key`} onClick={() => setFilterKey(f.value)}
					        onKeyDown={() => setFilterKey(f.value)}
					        className={classes.filterItem}>{f.label}</Button>
				  ))}
			  </FormControl>
			  <Container maxWidth={false} className={`${classes.isoM} isotope__container`}>
				  {Projects.map((project, index) => {
					  return (
						<div key={index}
						     className={`isotope__container--item ${project.filter[1]} ${project.filter[0]} ${project.className}`}
						     style={{ backgroundImage: `url('${project.src}')` }}>
							<div className={classes.itemOverlay}>
								<Typography variant={'h5'} color={'textPrimary'}
								            component={'h2'} className={classes.title}>{project.title}</Typography>
								<Link to={project.link} className={classes.link} title={`${project.title} photoshoot`}>
									<VisibilityIcon/>
								</Link>
							</div>

						</div>
					  )
				  })}
			  </Container>
		  </Container>
	  </Container>
	)
}

export default LatestWork