import * as React from "react";
import { HeadFC, PageProps, graphql, useStaticQuery } from "gatsby";


const IndexPage: React.FC<PageProps> = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }

      allDataYaml {
        edges {
          node {
            personal {
              address
              telephone
            }
            education {
              title
              institution
            }
            experiences {
              company
            }
            languages {
              name
              level
            }
          }
        }
      }
    }
  `);
  const cvSpec = data.allDataYaml.edges[0].node;
  return (
    <main>
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.author}</p>
      <p>
        <b>Address:</b> {cvSpec.personal.address}
      </p>
      <p>
        <b>Telephone:</b> {cvSpec.personal.telephone}
      </p>
      <p>
        <b>Experiences:</b>
      </p>
      {cvSpec.experiences.map((exp) => {
        return <li>{exp.company}</li>;
      })}
      <p>
        <b>Languages:</b>
      </p>
      {cvSpec.languages.map((lng) => {
        return <li>{lng.name}</li>;
      })}
      <p><b>Education:</b></p>
      {cvSpec.education.map((edc) => {
        return <li>{edc.title} - {edc.institution}</li>;
      })}
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
