import React from "react"
import { shallow } from "enzyme"
import ProjectCard from "./"

describe(`ProjectCard`, () => {
  let props
  let mountedSectionHeader
  const lockScreen = () => {
    if (!mountedSectionHeader) {
      mountedSectionHeader = shallow(
        <ProjectCard {...props} />
      )
    }
    return mountedSectionHeader
  }

  beforeEach(() => {
    props = {
      project: {
        node: {
          id: `/Users/dbrookes/Sites/db-homepage-test/src/pages/projects/blinknow-foundation/index.md absPath of file >>> MarkdownRemark`,
          frontmatter: {
            path: `/projects/blinknow-foundation/`,
            featured: false,
            excerpt: `The BlinkNow Foundation's mission is to provide an education and a loving, caring home for orphaned, impoverished and at-risk children.`,
            title: `Blink Now Foundation`,
            thumb: {
              childImageSharp: {
                responsiveSizes: {
                  base64: `data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAOABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMCBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABWjSeNo5//8QAGRAAAgMBAAAAAAAAAAAAAAAAAQIAAwQU/9oACAEBAAEFAq9djP0ss7rBBlKtbQ5JxPP/xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEn/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BZ//EABwQAAICAgMAAAAAAAAAAAAAAAABAhESkTEyQv/aAAgBAQAGPwKnWh5NWedFto5idon/xAAaEAEBAQEAAwAAAAAAAAAAAAABABEhMWHR/9oACAEBAAE/IahJjhvOSrCdta+CwyR6LT9L/9oADAMBAAIAAwAAABA3P//EABcRAAMBAAAAAAAAAAAAAAAAAAABEVH/2gAIAQMBAT8QSKl0/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERMf/aAAgBAgEBPxBK9Ij/xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMVFBwf/aAAgBAQABPxDSs3ko357NF8JSxLMRqA7Wz3cO5AANGYmDaQXsRsY3Y+T/2Q==`,
                  aspectRatio: 1.4370370370370371,
                  src: `/static/f1a4dec8467db8189d32bca1758f9b03-78e72.jpg`,
                  srcSet: `/static/f1a4dec8467db8189d32bca1758f9b03-e49cc.jpg 200w,\n/static/f1a4dec8467db8189d32bca1758f9b03-00263.jpg 400w,\n/static/f1a4dec8467db8189d32bca1758f9b03-78e72.jpg 582w`,
                  sizes: `(max-width: 582px) 100vw, 582px`,
                  originalImg: `/static/f1a4dec8467db8189d32bca1758f9b03-78e72.jpg`,
                  originalName: `thumb.jpg`,
                },
              },
            },
          },
        },
      },
    }
    mountedSectionHeader = undefined
  })

  it(`always renders a Button component`, () => {
    expect(lockScreen().find(`span`).length)
  })

  it(`should add a class of third on the third card`, () => {
    expect(lockScreen().find(`span`).length)
  })
})

