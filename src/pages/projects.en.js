import React       from 'react'
import Layout      from '../components/layout'
import SEO         from '../components/seo'
import Header      from '../components/Header'
import Footer      from '../components/Footer'
import { graphql } from 'gatsby'
import LatestWork  from '../components/LatestWorkSection'
import Contact     from '../components/ContactSection'

const ProjectsPage = ({ data }) => {
	const {
		projectsTitle, projectSubTitle, projectContactTitle,
		projectContactSubTitle
	} = data.titles.edges[0].node
	return (
	  <Layout>
		  <SEO title={projectsTitle} lang={'en'}/>
		  <Header lang={'en'}/>
		  <LatestWork
			projects={data.projects}
			page={'single'}
			title={projectsTitle}
			subTitle={projectSubTitle}
			lang={'en'}
		  />
		  <Contact title={projectContactTitle} subTitle={projectContactSubTitle} lang={'en'}/>
		  <Footer lang={'en'}/>
	  </Layout>
	)
}

export default ProjectsPage

export const indexQuery = graphql`
    query {
        projects: allContentfulProject(filter: {node_locale: {eq: "en"}}, sort: {fields: projectDate, order: DESC}) {
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
        titles: allContentfulTitles(filter: {node_locale: {eq: "en"}}) {
            edges {
                node {
                    projectsTitle
                    projectSubTitle
                    projectContactTitle
                    projectContactSubTitle
                }
            }
        }
    }`
