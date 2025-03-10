import { format, intervalToDuration, parseISO } from 'date-fns'
import { AnimateSharedLayout } from 'framer-motion'
import Head from 'next/head'
import React from 'react'
import { Box } from '../components/Box'
import items from '../data/work'
import Base from '../layouts/Base'
import stripHtml from '../lib/strip-html'

export async function getStaticProps() {
  const meta = {
    title: 'Work // Utsav Shrestha',
    tagline: 'Data-Driven. Future-Focused.',
    image: '/static/images/avatar.jpg',
    primaryColor: 'purple',
    secondaryColor: 'cyan',
  }

  return { props: meta }
}

function Work(props) {
//   const renderFeatured = () => {
//     const featured = [
//       { jobTitle: 'Data Engineer Intern', company: 'Glassdoor' },
//       { jobTitle: 'Data Engineer', company: 'Accenture Strategy & Consulting' },
//       {
//         jobTitle: 'Data Engineer Intern',
//         company: 'Accenture Strategy & Consulting',
//       },
//     ]

//     return items
//       .filter(work =>
//         featured.some(
//           f => f.jobTitle === work.jobTitle && f.company === work.company
//         )
//       )
//       .map((work, index) => {
//         return <FeaturedWork key={index} work={work} />
//       })
//   }

  const renderAll = () => {
    return items.map((work, index) => {
      return <WorkItem key={index} work={work} />
    })
  }



  const getTotalWork = () => {
    return items.length
  }

  const { title, image } = props
  const description = `My journey with Data Engineering began in 2024, and I instantly fell in love with it. Since then, I've dedicated myself to working with data at every opportunity, accumulating 4 stints of hands-on experience. `

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content="Utsav Shrestha" property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://utsavshrestha59.com.np/work" property="og:url" />
      </Head>

      <AnimateSharedLayout>
        <p dangerouslySetInnerHTML={{ __html: description }} />


        <h2>All Work</h2>
        {renderAll()}

        {/* <h2>Awards</h2>
        {renderAwards()} */}
      </AnimateSharedLayout>
    </>
  )
}

function WorkItem(props) {
  const { work } = props

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    let durationStr = ''

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `
    }

    durationStr += `${durationObj.months} mos`

    return durationStr
  }

  return (
    <div>
      <h3>{work.jobTitle}</h3>
      <p style={{ margin: 0 }}>
        <a href={work.companyUrl} target="_blank">
          {work.company}
        </a>
        <span> • {work.location}</span>
      </p>
      <p style={{ margin: 0 }}>
        <span>{format(parseISO(work.startDate), 'LLL yyyy')}</span>
        <span> – </span>
        <span>
          {work.endDate
            ? format(parseISO(work.endDate), 'LLL yyyy')
            : 'Present'}
        </span>
        <span> • </span>
        <span>{getDuration(work.startDate, work.endDate)}</span>
      </p>
      <ul>
        {work.description &&
          work.description.map((desc, index) => <li key={index}>{desc}</li>)}
      </ul>
    </div>
  )
}

// function AwardItem(props) {
//   const { item } = props

//   return (
//     <div>
//       <h3>
//         <a href={item.url} target="_blank">
//           {item.title}
//         </a>
//       </h3>
//       <ul>
//         <li>
//           When: {format(parseISO(item.date), 'LLLL, d')}
//         </li>
//         <li>
//           By: {item.by}
//         </li>
//         <li>
//           Summary: {item.summary}
//         </li>
//       </ul>
//     </div>
//   )
// }

Work.Layout = Base

export default Work