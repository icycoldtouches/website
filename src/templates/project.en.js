import React           from 'react'
import { graphql }     from 'gatsby'
import Layout          from '../components/layout'
import SEO             from '../components/seo'
import Header          from '../components/Header'
import Footer          from '../components/Footer'
import Contact         from '../components/ContactSection'
import ProjectCard     from '../components/ProjectCard'
import PrevNextProject from '../components/PrevNextProject'

const Project = ({ data, pageContext }) => {
	const { projectCategory, projectClient, projectDate, projectDescription, projectImages, projectLocation, projectTitle } = data.allContentfulProject.edges[0].node
	return (
	  <Layout>
		  <SEO title={projectTitle} lang={'en'} projectDescription={projectDescription.childMarkdownRemark.html}
		       isProject={true}/>
		  <Header lang={'en'}/>
		  <ProjectCard
			projectTitle={projectTitle}
			projectDescription={projectDescription}
			projectImages={projectImages}
			projectCategory={projectCategory}
			projectDate={projectDate}
			projectClient={projectClient}
			projectLocation={projectLocation}
			lang={'en'}
		  />
		  <PrevNextProject prev={pageContext.prev} next={pageContext.next} lang={'en'}/>
		  <Contact title={`Would you like a shoot like this?`} subTitle={`Leave me a message`}/>
		  <Footer lang={'en'}/>
	  </Layout>
	)
}

export default Project

export const ProjectQuery = graphql`
    query($slug: String!) {
        allContentfulProject(filter: {
            fields: {
                slug: {
                    eq: $slug
                }
            }
            node_locale: {
                eq: "en"
            }
        }) {
            edges {
                node {
                    projectClient
                    projectDate(formatString: "MMMM YYYY")
                    projectDescription {
                        childMarkdownRemark {
                            html
                        }
                    }
                    projectImages {
                        fluid(
                            quality:80
                        ) {
                            ...GatsbyContentfulFluid_withWebp
                        }
                        description
                    }
                    projectLocation
                    projectTitle
                    projectCategory {
                        categoryTitle
                    }
                }
                next {
                    projectTitle
                    projectSlug
                    projectImages {
                        fluid {
                            srcWebp
                        }
                    }
                }
                previous {
                    projectTitle
                    projectSlug
                    projectImages {
                        fluid {
                            srcWebp
                        }
                    }
                }
            }
        }
    }
`