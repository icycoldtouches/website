import React, { useState, useEffect } from 'react'
import Isotope                        from 'isotope-layout'
import { makeStyles }                 from '@material-ui/core/styles'
import Container                      from '@material-ui/core/Container'
import FormControl                    from '@material-ui/core/FormControl'
import SectionHeader                  from '../SectionHeader'
import Button                         from '@material-ui/core/Button'

const imageOne = require('../../images/01_Nina & Sini/Medium/_DSC4612-Edit-2.jpeg')
const imageTwo = require('../../images/02_Melanie & Lotte/Medium/_DSC4397.jpeg')
const imageThree = require('../../images/03_Justine & Dragon/Medium/_DSC6133.jpeg')
const imageFour = require('../../images/_DSC1391.jpeg')
const imageFive = require('../../images/IMG_0139.jpeg')
const imageSix = require('../../images/04_Corinna & Döbi/Medium/_DSC8160.jpeg')
const imageSeven = require('../../images/05_Selina & Luc/Medium/_DSC9335-Edit.jpeg')
const imageEight = require('../../images/_DSC1467.jpeg')
const imageNine = require('../../images/_DSC3349.jpeg')

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
	itemOverlay: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		backgroundColor: 'transparent',
		transition: 'all 300ms ease-in-out',
		'&:hover': {
			backgroundColor: theme.palette.secondary.transparent
		}
	}
}))

const LatestWork = () => {
	const classes = useStyles()
	const Filters = [
		{ label: 'all', value: '*' },
		{ label: 'dogs', value: 'dogs' },
		{ label: 'horses', value: 'horses' },
		{ label: 'nature', value: 'nature' }
	]
	const data = {
		title: 'My Recent Work',
		subTitle: 'The bond you share with your horse or dog is like none other, and it’s a feeling you will always want to remember.'
	}

	const Projects = [
		{
			className: 'isoItem',
			'filter': ['all', 'horses'],
			src: imageOne
		},
		{
			className: 'isoItem',
			'filter': ['all', 'horses'],
			src: imageTwo
		},
		{
			className: 'isoItem',
			'filter': ['all', 'horses'],
			src: imageThree
		},
		{
			className: 'isoItem',
			'filter': ['all', 'nature'],
			src: imageFour
		},
		{
			className: 'isoItem',
			'filter': ['all', 'horses'],
			src: imageFive
		},
		{
			className: 'isoItem',
			'filter': ['all', 'horses'],
			src: imageSix
		},
		{
			className: 'isoItem',
			'filter': ['all', 'horses'],
			src: imageSeven
		},
		{
			className: 'isoItem',
			'filter': ['all', 'nature'],
			src: imageEight
		},
		{
			className: 'isoItem',
			'filter': ['all', 'dogs'],
			src: imageNine
		}
	]

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
	  <Container maxWidth={false} className={classes.container}>
		  <SectionHeader data={data}/>
		  <Container maxWidth={'lg'} className={`isotope ${classes.containerInner}`}>
			  <FormControl className={`isotope__filter ${classes.filters}`}>
				  {Filters.map(f => (
					<Button variant={activeFilter === f.value ? 'contained' : 'outlined'} color={'primary'}
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
							<div className={classes.itemOverlay}/>
						</div>
					  )
				  })}
			  </Container>
		  </Container>
	  </Container>
	)
}

export default LatestWork