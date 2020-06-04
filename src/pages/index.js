import React from "react"
import { Link } from "gatsby"

import "minireset.css"

import Layout from "../components/layout"
import Header from "../components/header"
import SEO from "../components/seo"
import Section from "../components/section"
import WorkItem from "../components/workItem"
import LogoImage from "../components/logoImage"

import SpaceCleaner from "../images/spacecleaner.png"
import CmyCatch from "../images/cmycatch.png"

const IndexPage = () => (
  <div style={{ fontFamily: `sans-serif`, color: `#1b1d28` }}>
    <Header siteTitle="StarSource Games" />
    <Layout>
      <SEO title="StarSource Games" />
      <Section id="about">
        <h2
          style={{
            color: `#b6b6ba`,
            fontSize: `24px`,
            fontFamily: `sans-serif`,
            fontWeight: 600,
            letterSpacing: `1px`,
            marginBottom: `8px`,
          }}
        >
          私たちについて
        </h2>
        <p style={{ fontSize: `14px`, lineHeight: 1.8 }}>おんぎゃああああ</p>
      </Section>
      <Section id="works">
        <h2
          style={{
            color: `#b6b6ba`,
            fontSize: `24px`,
            fontFamily: `sans-serif`,
            fontWeight: 600,
            letterSpacing: `1px`,
            marginBottom: `8px`,
          }}
        >
          ゲーム
        </h2>
        <ul>
          <WorkItem
            src={SpaceCleaner}
            category="2019 - Android App"
            title="SPACE CLEANER"
          />
          <WorkItem
            src={CmyCatch}
            category="2019 - Android App"
            title="CMY CATCH"
          />
        </ul>
      </Section>
      <Section>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <LogoImage />
          <p
            style={{
              fontWeight: 600,
              marginBottom: `10px`,
            }}
          >
            StarSource Games
          </p>
          <div>
            <a
              style={{
                color: `#222`,
                margin: `16px`,
                textDecoration: `none`,
              }}
              href="#"
            >
              Twitter
            </a>
            <a
              style={{ color: `#222`, margin: `16px`, textDecoration: `none` }}
              href="#"
            >
              Instagram
            </a>
          </div>
        </div>
      </Section>
    </Layout>
  </div>
)

export default IndexPage
