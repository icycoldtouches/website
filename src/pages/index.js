import React       from 'react'
import { graphql } from 'gatsby'
import Layout      from '../components/layout'
import SEO         from '../components/seo'
import Header      from '../components/Header'
import Hero        from '../components/HeroSection'
import LatestWork  from '../components/LatestWorkSection'
import Services    from '../components/ServicesSection'
import About       from '../components/AboutSection'
import Pricing     from '../components/PricingSection'
import Contact     from '../components/ContactSection'
import Footer      from '../components/Footer'

const IndexPage = ({ data }) => {
	const {
		homeContactTitle,
		homePricingSubTitle,
		homePricingTitle,
		homeRecentworkSubTitle,
		homeRecentworkTitle,
		homeServicesTitle
	} = data.titles.edges[0].node

	console.log(data)
	const seoImage = data.slider.edges[0].node.projectImages[0].fluid.src

	return (
	  <Layout>
		  <SEO
			title="Home"
			lang={'de'}
			img={seoImage}
		  />
		  <Header lang={'de'}/>
		  <Hero
			data={data}
			lang={'de'}
		  />
		  <About
			about={data.about}
		  />
		  <Services
			title={homeServicesTitle}
			animal={data.animal.edges[0].node}
			business={data.business.edges[0].node}
			human={data.human.edges[0].node}
		  />
		  <LatestWork
			projects={data.projects}
			page={'home'}
			title={homeRecentworkTitle}
			subTitle={homeRecentworkSubTitle}
			lang={'de'}
		  />
		  <Pricing
			title={homePricingTitle}
			subTitle={homePricingSubTitle}
			prices={data.prices}
			lang={'de'}
		  />
		  <Contact
			title={homeContactTitle}
			lang={'de'}
		  />
		  <Footer lang={'de'}/>
	  </Layout>
	)
}

export default IndexPage

export const indexQuery = graphql`
    query {
        slider: allContentfulProject(filter: {projectShowInSlider: {eq: true}, node_locale: {eq: "de"}}) {
            edges {
                node {
                    projectSlug
                    projectTitle
                    projectShowInSlider
                    projectDescription {
                        childMarkdownRemark {
                            excerpt
                        }
                    }
                    projectImages {
                        fluid(
                            quality:90
                        ) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                }
            }
        }
        projects: allContentfulProject(limit: 9 sort: {fields: projectDate, order: DESC} filter: {node_locale: {
            eq: "de"
        }}) {
            edges {
                node {
                    projectSlug
                    projectTitle
                    projectImages {
                        fluid(
                            quality:80
                        ) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                    }
                    projectCategory {
                        categoryTitle
                    }
                }
            }
        }
        about: allContentfulAbout(filter: {node_locale: {eq: "de"}}) {
            edges {
                node {
                    title
                    content {
                        childMarkdownRemark {
                            html
                        }
                    }
                    image {
                        fluid(
                            quality:80
                        ) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                }
            }
        }
        animal: allContentfulServiceAnimalPhotography(filter: {node_locale: {eq: "de"}}) {
            edges {
                node {
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                    image {
                        fluid(
                            quality:80
                        ) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    title
                }
            }
        }
        business: allContentfulServiceBusinessPhotography(filter: {node_locale: {eq: "de"}}) {
            edges {
                node {
                    title
                    image {
                        fluid(
                            quality:80
                        ) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
        human: allContentfulServiceHumanPhotography(filter: {node_locale: {eq: "de"}}) {
            edges {
                node {
                    title
                    image {
                        fluid(
                            quality:80
                        ) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    description {
                        childMarkdownRemark {
                            html
                        }
                    }
                }
            }
        }
        prices: allContentfulPrice(filter: {node_locale: {eq: "de"}}, sort: {fields: sessionPrice}) {
            edges {
                node {
                    title
                    includesService
                    included
                    serviceIncluded {
                        title
                    }
                    sessionPrice
                    popular
                }
            }
        }
        titles: allContentfulTitles(filter: {node_locale: {eq: "de"}}) {
            edges {
                node {
                    homeContactTitle
                    homePricingSubTitle
                    homePricingTitle
                    homeRecentworkSubTitle
                    homeRecentworkTitle
                    homeServicesTitle
                    projectContactSubTitle
                    projectContactTitle
                    projectSubTitle
                    projectsTitle
                }
            }
        }
    }
`