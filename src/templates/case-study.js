import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Careers from "../components/careers";

import "../scss/caseStudy.scss";

const CaseStudy = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <article>
        <section id="row-one">
          <div className="outer-container">
            <div className="col-one">
              <span className="project-name">{frontmatter.posttitle}</span>
              <h1>{frontmatter.title}</h1>
            </div>
            <div className="col-two">
              <p>{frontmatter.description}</p>
            </div>
          </div>
        </section>
        <section id="row-two">
          <div className="col-one">
            <Img fluid={frontmatter.featuredimage.childImageSharp.fluid} alt="" />
          </div>
        </section>
        <section id="row-three">
          <div className="outer-container">
            <div className="col-one">
              <h2>{frontmatter._01section.heading}</h2>
              <p>{frontmatter._01section.description}</p>
            </div>
          </div>
        </section>
        <section id="row-four">
          <div className="col-one">
            <span className="number">01</span>
            <h2>{frontmatter._01section.title}</h2>
          </div>
          <div className="col-two">
            <Img fluid={frontmatter._01sectiontopimage.childImageSharp.fluid} alt="" />
          </div>
          <div className="col-three">
            <Img fluid={frontmatter._01sectionbottomimage.childImageSharp.fluid} alt="" />
          </div>
        </section>
        <section id="row-five">
          <div className="row-one">
            <span className="number">02</span>
            <h2>{frontmatter._02section.title}</h2>
          </div>
          <div className="row-two">
            <div className="image-container">
              <Img fluid={frontmatter._02sectiontopleftimage.childImageSharp.fluid} alt="" />
            </div>
            <div className="image-container">
              <Img fluid={frontmatter._02sectiontoprightimage.childImageSharp.fluid} alt="" />
            </div>
            <div className="image-container">
              <Img fluid={frontmatter._02sectionbottomleftimage.childImageSharp.fluid} alt="" />
            </div>
            <div className="image-container">
              <Img fluid={frontmatter._02sectionbottomrightimage.childImageSharp.fluid} alt="" />
            </div>
          </div>
        </section>
        <section id="row-six">
          <div className="outer-container">
            <div className="col-one">
              <h2>{frontmatter._02section.heading}</h2>
              <p>{frontmatter._02section.description}</p>
            </div>
          </div>
        </section>
        <section id="row-seven">
          <div className="row-one">
            <div className="content">
              <h2>{frontmatter._03section.title}</h2>
              <span className="number">03</span>
            </div>
            <div className="data">
              <div className="item">
                <h3>{frontmatter._03section.heading1}</h3>
                <p>{frontmatter._03section.description1}</p>
              </div>
              <div className="item">
                <h3>{frontmatter._03section.heading2}</h3>
                <p>{frontmatter._03section.description2}</p>
              </div>
              <div className="item">
                <h3>{frontmatter._03section.heading3}</h3>
                <p>{frontmatter._03section.description3}</p>
              </div>
              <div className="item">
                <h3>{frontmatter._03section.heading4}</h3>
                <p>{frontmatter._03section.description4}</p>
              </div>
            </div>
          </div>
          <div className="row-two">
            <div className="image-container">
              <Img fluid={frontmatter._03sectionimage1.childImageSharp.fluid} alt="" />
            </div>
            <div className="image-container">
              <Img fluid={frontmatter._03sectionimage2.childImageSharp.fluid} alt="" />
            </div>
            <div className="image-container">
              <Img fluid={frontmatter._03sectionimage3.childImageSharp.fluid} alt="" />
            </div>
          </div>
        </section>
        <section id="row-eight">
          <div className="row-one">
            <h2>Related Works</h2>
          </div>
          <div className="row-two">
            <div className="col-one">
              <div className="image-container">
                <Img fluid={frontmatter.relatedworkimage1.childImageSharp.fluid} alt="" />
              </div>
              <div className="content">
                <h3>{frontmatter.relatedwork.heading1}</h3>
                <p>{frontmatter.relatedwork.description1}</p>
              </div>
            </div>
            <div className="col-two">
              <div className="image-container">
                <Img fluid={frontmatter.relatedworkimage2.childImageSharp.fluid} alt="" />
              </div>
              <div className="content">
                <h3>{frontmatter.relatedwork.heading2}</h3>
                <p>{frontmatter.relatedwork.description2}</p>
              </div>
            </div>
          </div>
        </section>
        <Careers 
          linktitle1={frontmatter.careers.linktitle1}
          link1={frontmatter.careers.link1}
          description1={frontmatter.careers.description1}
          linktitle2={frontmatter.careers.linktitle2}
          link2={frontmatter.careers.link2}
          description2={frontmatter.careers.description2}
          linktitle3={frontmatter.careers.linktitle3}
          link3={frontmatter.careers.link3}
          description3={frontmatter.careers.description3} />
      </article>
    </Layout>
  );
}

CaseStudy.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  }),
};


export default CaseStudy;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
        templateKey
        title
        posttitle
        date
        featuredpost
        description
        tags
        _02section {
          heading
          description
          title
        }
        _01section {
          heading
          description
          title
        }
        _03section {
          title
          heading1
          description1
          heading2
          description2
          heading3
          description3
          heading4
          description4
        }
        careers {
          description1
          description2
          description3
          link1
          link2
          link3
          linktitle1
          linktitle2
          linktitle3
        }
        relatedwork {
          heading1
          description1
          image1
          heading2
          description2
          image2
        }
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2880) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        _01sectiontopimage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        _01sectionbottomimage {
          childImageSharp {
            fluid(maxWidth: 2880) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        _02sectiontopleftimage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        _02sectiontoprightimage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        _02sectionbottomleftimage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        _02sectionbottomrightimage {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        _03sectionimage1 {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        _03sectionimage2 {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        _03sectionimage3 {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        relatedworkimage1 {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
        relatedworkimage2 {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
		}
	}
`;