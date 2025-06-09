import dynamic from 'next/dynamic'
import { styled } from '../stitches.config'
import Head from 'next/head'
import ShortcutHome from '../components/ShortcutHome'
import { PostMain, PostContent, PostContainer } from '../components/Post'
import { Wrapper } from '../components/Wrapper'
import { getPersonJsonLd } from '../lib/json-ld'

// Dynamically import any components that may cause SSR issues
const DynamicNavbar = dynamic(() => import('../components/Navbar'), { ssr: false });
const DynamicFooter = dynamic(() => import('../components/Footer'), { ssr: false });

export async function getStaticProps() {
  return {
    props: {
      title: 'Utsav Lal Shrestha',
      description: 'Exploring the vast realm of data and its endless possibilities',
      image: '/static/images/avatar.jpg',
    },
  }
}

export default function Index(props) {
  const { title, description, image } = props;

  return (
    <Wrapper>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />    
        <meta content="Utsav Shrestha" property="og:title" />
        <meta content="https://utsavshrestha59.com.np" property="og:url" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getPersonJsonLd()),
          }}
          key="person-jsonld"
        />
      </Head>

      <DynamicNavbar />
      <Home>
        <PostContent>
          <PostContainer>
            <div>
              <h1>
                {title}
              </h1>
              <p>
                <strong>Software Intern @ {' '}
                  <a href="/" target="_parent">LIS Nepal</a>
                </strong><br />
                {description}
              </p>
              <ShortcutHome />
            </div>
          </PostContainer>
        </PostContent>
      </Home>
      <DynamicFooter />
    </Wrapper>
  )
}

// Ensure Home is defined properly
const Home = styled(PostMain, {
  alignItems: 'center',
  display: 'flex',
  margin: '0 auto',
  '@bp2': { width: 800 },
});
