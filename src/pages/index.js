import React from "react"
import Layout from "../components/layout"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"

const Section = styled("section")`
  max-width: 850px;
  margin: 0 auto 12px auto;
  padding: 12px;
  font-family: "Dancing Script" ;
`

const Home = () => (
  <Layout>
    <div>
      <h1>Home</h1>
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
        aut consequuntur aspernatur corrupti ratione, odit similique tenetur
        accusantium, est nostrum esse minus iure voluptatum nihil cumque
        blanditiis non? Odit.
      </Section>
      <Section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos
        aut consequuntur aspernatur corrupti ratione, odit similique tenetur
        accusantium, est nostrum esse minus iure voluptatum nihil cumque
        blanditiis non? Odit.
      </Section>
    </div>
  </Layout>
)

export default Home
