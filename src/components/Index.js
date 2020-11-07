import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import topPhoto from "../../content/assets/topPhoto.jpg"

const Index = () => {
  const data = useStaticQuery(graphql`
    query {
      img1: file(relativePath: { eq: "topPhoto.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
      img2: file(relativePath: { eq: "g6kbiopic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 500, maxHeight: 500, quality: 100) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <WarpperIndex>
      <BigBanner>
        <BigBannerContent>
          <h1>Accompagnement spirituel</h1>
        </BigBannerContent>
      </BigBanner>
      <SectionIntro>
        <FlexImg>
          <Img
            fluid={data.img2.childImageSharp.fluid}
            objectFit="cover"
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </FlexImg>
        <FlexDiv>
          Je vous aide à dépasser toutes les difficultés que vous pouvez
          rencontrer (affectives, émotionnelles, familiales....) dans votre vie
          avec une approche unique et innovante.
        </FlexDiv>
      </SectionIntro>
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
    </WarpperIndex>
  )
}

export default Index

const WarpperIndex = styled.div`
  margin: 0 auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const BigBanner = styled.div`
  margin: 0 auto 12px;
  background-image: url(${topPhoto});
  background-repeat: no-repeat;
  background-size: cover;
  height: 45vh;
  min-height: 350px;
  width: 100%;
  background-position: 10% 150%;
  background-attachment: fixed;
  background-color: #1d3557;

  @media screen and (max-width: 768px) {
    // background-attachment: scroll;
    background-position: 30% 55%;
  } 
   @media screen and (max-width: 576px) {
    background-position: bottom 50px right -70px;
  }
`

const BigBannerContent = styled.div`
  display: block;
  max-width: 50%;
  margin: 45px auto;
  // padding: 50px auto 10px;
  font-size: 3em;
  font-color: white;
  text-align: center;

  // @media screen and (max-width: 768px) { }

  @media screen and (max-width: 576px) { 
    width: 90%;
    max-width: 100%;
    margin: 20px auto;
    overflow: visible;
    display: block;
    text-align: center;
    overflow-wrap: break-word;
    border: 1px solid lightblue;
  }
  
  & h1 {
    color: white;
    letter-spacing: 3px;
    font-size: 1.5em;
    font-family: "Roboto";
    font-weight: 900;
    
    @media screen and (max-width: 768px) {
      font-size: 1em;  
      padding: 20px 5px 10px;
      font-weight: 400;

    }
      @media screen and (max-width: 576px) {
      font-size: 0.5em;  
      padding: 20px 5px 10px;
      font-weight: 400;

    }
  }
`

const SectionIntro = styled("section")`
  margin: -60px auto 12px;
  padding: 12px;
  max-width: 850px;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  justify-content: center;
  align-items: center;
  background-color: #cfd7c7;
  font-family: "Caveat";

  @media screen and (max-width: 576px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    // flex-wrap: wrap;
    padding: 1.5rem;
    text-align: left;
  }
`
const FlexImg = styled.div`
  padding: 5px;
  width: 200px;
  height: 200px;
  align-self: flex-start;
  flex-grow: 1;
  object-fit: cover;
  vertical-align: bottom;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 250px;
    align-self: center;
  }
  @media screen and (max-width: 576px) {
    max-width: 300px;
    max-height: 300px;
    align-self: center;
  }
`
const FlexDiv = styled.p`
  flex-basis: 75%;
  font-family: "Caveat";
  font-size: 2em;
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.6;

  @media screen and (max-width: 768px) {
    font-size: 1em;  
    font-weight: 400;

  }

  @media screen and (max-width: 576px) {
    font-size: 2em;
    color: #f8f8ff; 
  }
`

const Section = styled("section")`
  max-width: 850px;
  margin: 0 auto 12px auto;
  padding: 12px;
  font-family: "Sergio";
  font-size: 2em;
  //
`
