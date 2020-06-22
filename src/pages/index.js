import React       from 'react'
import { graphql } from 'gatsby'
import Layout      from '../components/layout'
import SEO         from '../components/seo'
import Header      from '../components/Header'
import Hero        from '../components/HeroSection'
import Booknow     from '../components/BooknowSection'
import LatestWork  from '../components/LatestWorkSection'
import Services    from '../components/ServicesSection'
import About       from '../components/AboutSection'
import Pricing     from '../components/PricingSection'
import Contact     from '../components/ContactSection'

const IndexPage = ({ data }) => {
	let images = [
		{
			image: data.img1,
			imageAlt: 'text here',
			title: 'Word of the day',
			description: 'well meaning and kindly',
			secondaryDescription: '"a benevolent smile"',
			textPosition: 'left'
		},
		{
			image: data.img2,
			imageAlt: 'text here',
			title: 'Until one has loved an animal',
			description: 'a part of one\'s soul remains unawakened.',
			secondaryDescription: '"Anatole France"',
			textPosition: 'right'
		},
		{
			image: data.img3,
			imageAlt: 'text here',
			title: 'The only creatures that are evolved enough',
			description: 'to convey pure love are dogs and infants.',
			secondaryDescription: '"Johnny Depp"',
			textPosition: 'left'
		},
		{
			image: data.img4,
			imageAlt: 'text here',
			title: 'There are all sorts of cute puppy dogs',
			description: ' but it doesn\'t stop people from going out and buying Dobermans.',
			secondaryDescription: '"Angus Young\n"',
			textPosition: 'right'
		},
		{
			image: data.img5,
			imageAlt: 'text here',
			title: 'If a man aspires towards a righteous life',
			description: 'his first act of abstinence is from injury to animals.',
			secondaryDescription: '"Leo Tolstoy"',
			textPosition: 'left'
		},
		{
			image: data.img6,
			imageAlt: 'text here',
			title: 'Animals are always loyal and love you',
			description: 'whereas with children you never know where you are.',
			secondaryDescription: '"Christina Foyle"',
			textPosition: 'right'
		}
	]
	return (
	  <Layout>
		  <SEO title="Home"/>
		  <Header/>
		  <Hero data={images}/>
		  <Booknow/>
		  <LatestWork/>
		  <Services/>
		  <About/>
		  <Pricing/>
		  <Contact/>
		  <main style={{ minHeight: '100vh' }}/>
	  </Layout>
	)
}

export default IndexPage

export const indexQuery = graphql`
    query {
        img1: file(relativePath: {eq: "IMG_0095.jpeg"}) {
            childImageSharp {
                fluid(quality:100, srcSetBreakpoints: [600, 960, 1280, 1920], fit: COVER, cropFocus: ENTROPY) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        img2: file(relativePath: { eq: "IMG_0136.jpeg" }) {
            childImageSharp {
                fluid(quality:100, srcSetBreakpoints: [600, 960, 1280, 1920], fit: COVER, cropFocus: ENTROPY) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        img3: file(relativePath: { eq: "IMG_0137.jpeg" }) {
            childImageSharp {
                fluid(quality:100, srcSetBreakpoints: [600, 960, 1280, 1920], fit: COVER, cropFocus: ENTROPY) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        img4: file(relativePath: { eq: "IMG_0138.jpeg" }) {
            childImageSharp {
                fluid(quality:100, srcSetBreakpoints: [600, 960, 1280, 1920], fit: COVER, cropFocus: ENTROPY) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        img5: file(relativePath: { eq: "IMG_0139.jpeg" }) {
            childImageSharp {
                fluid(quality:100, srcSetBreakpoints: [600, 960, 1280, 1920], fit: COVER, cropFocus: ENTROPY) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        img6: file(relativePath: { eq: "IMG_0140.jpeg" }) {
            childImageSharp {
                fluid(quality:100, srcSetBreakpoints: [600, 960, 1280, 1920], fit: COVER, cropFocus: ENTROPY) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`