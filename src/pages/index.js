import React from "react"
// import { Link } from "gatsby"

import "./reset.css"

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
            color: `#70707a`,
            fontSize: `24px`,
            fontFamily: `sans-serif`,
            fontWeight: 600,
            letterSpacing: `1px`,
            marginBottom: `8px`,
          }}
        >
          私たちについて
        </h2>
        <p style={{ fontSize: `14px`, lineHeight: 1.8 }}>
          ゲーム制作をしている学生サークルです。
          <br />
          「星のように輝く作品を生み出す源でありたい」という思いから、StarSource
          Gamesと名付けました。
        </p>
      </Section>
      <Section id="works">
        <h2
          style={{
            color: `#70707a`,
            fontSize: `24px`,
            fontFamily: `sans-serif`,
            fontWeight: 600,
            letterSpacing: `1px`,
            marginBottom: `8px`,
          }}
        >
          ゲーム
        </h2>
        <ul style={{ margin: 0, padding: 0 }}>
          <WorkItem
            src={SpaceCleaner}
            category="2019 - Android App"
            title="SPACE CLEANER"
            description="ブラックホールで隕石を吸い込み惑星を守るゲーム"
            link="https://play.google.com/store/apps/details?id=com.StarSource.SPACECLEANER"
          />
          <WorkItem
            src={CmyCatch}
            category="2019 - Android App"
            title="CMY CATCH"
            description="パドルの色を上から落ちてくるブロックの色と揃えてキャッチしていくゲーム"
            link="https://play.google.com/store/apps/details?id=com.StarSource.CMYCatch"
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
              fontFamily: `Source Sans Pro`,
              fontWeight: 600,
              marginBottom: `10px`,
            }}
          >
            StarSource Games
          </p>
          <div>
            <a
              style={{
                fontFamily: `Source Sans Pro`,
                color: `#222`,
                fontSize: `18px`,
                margin: `16px`,
                textDecoration: `none`,
              }}
              href="https://twitter.com/starsourcegames"
            >
              Twitter
            </a>
            <a
              style={{
                fontFamily: `Source Sans Pro`,
                color: `#222`,
                fontSize: `18px`,
                margin: `16px`,
                textDecoration: `none`,
              }}
              href="https://www.instagram.com/starsourcegames/"
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
