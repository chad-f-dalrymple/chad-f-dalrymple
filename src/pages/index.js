import React from 'react'

import Link from '../components/link'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Container from '../components/container'
import Section from '../components/section'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`, `chad`, `dalrymple`]} />

    <Container className="container__section-primary">
      <h1 className="heading__main">
        Welcome to this place
      </h1>
      <p className="body__main">
        It is currently under construction
      </p>
      <Link>Go to page 2</Link>
    </Container>

    <Section>
        <h3 className="container__section-secondary-title">
          Here will be some notes
        </h3>
    </Section>
  </Layout>
)

export default IndexPage
