import { styled } from '../stitches.config';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { parseISO, format, intervalToDuration } from 'date-fns';
import Base from '../layouts/Base';
import { ButtonPrimary } from '../components/ButtonPrimary';
import Toast from '../components/Toast';
import items from '../data/about';
import copyBioIcon from '../public/static/icons/copy-bio.json';
import dynamic from 'next/dynamic';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export async function getStaticProps() {
  const meta = {
    title: 'About // Utsav Shrestha',
    description:
      "I am a passionate Data Engineer with experience in designing and implementing scalable data solutions across GCP, BigQuery, and various database systems. I have worked on data migrations, ETL pipeline development, and performance optimization, ensuring seamless data integration from Dev to Prod. With a strong foundation in SQL, Python, and Apache Airflow, I specialize in building automated, efficient, and production-ready data workflows. My background in data analytics and business intelligence has given me a holistic view of how data drives decision-making, and I am continuously honing my skills to bridge the gap between technical execution and business impact. With a track record of delivering optimized solutions and driving data-driven insights, I am eager to contribute my expertise and problem-solving mindset to your team.",
    tagline: 'Optimize. Automate. Analyze.',
    image: '/static/images/avatar.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  };

  return { props: meta };
}

function About(props) {
  const { title, description, image } = props;
  const [toastTitle, setToastTitle] = React.useState('');
  const [toastDescription, setToastDescription] = React.useState('');
  const [showToast, setShowToast] = React.useState(false);
  const copyBioRef = React.useRef();
  const downloadRef = React.useRef();

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <Image
            alt="Utsav"
            src="/static/images/avatar.jpg"
            width="336"
            height="366"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
            priority
          />
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            <strong>Hi, I'm Utsav Shrestha, </strong>
            I started my journey in tech with a passion for data and software engineering. Currently, I'm a Data Aanalytics/Engineering intern at LIS Nepal.
          </Paragraph>
          <Paragraph>
            I'm originally from Nepal, currently living in Kathmandu and a soon to be a graduate in Computer Science and Information Technology.
          </Paragraph>
          <Paragraph>
            In my free time, you’ll find me diving into different historical documentaries, exploring new tech stacks or binge watching Fireship's contents.
          </Paragraph>
        </Section>
      </Container>
    );
  };

  const renderBio = () => {
    const btnStyle = { display: 'inline-flex', justifyContent: 'center', alignItems: 'center' };
    const iconStyle = { width: 24, height: 24, marginRight: 8 };

    return (
      <div>
        <p>
          This is my professional bio summarizing my strengths and fields of interests.
        </p>
        <blockquote>
          <p>{description}</p>
        </blockquote>
        <ButtonsContainer>
          <ButtonPrimary
            as="button"
            style={btnStyle}
            onClick={copyBio}
            onMouseEnter={() => copyBioRef.current?.play()}
            onMouseLeave={() => copyBioRef.current?.stop()}
          >
            <Lottie lottieRef={copyBioRef} style={iconStyle} animationData={copyBioIcon} loop={false} autoplay={false} />
            Copy Bio
          </ButtonPrimary>
          <span style={{ margin: '0 20px 0 10px' }}>•</span>
        </ButtonsContainer>
      </div>
    );
  };

  const renderTools = () => {
    const tools = [
      { name: 'SQL', description: 'For querying and managing databases efficiently.', logo: null },
      { name: 'Python', description: 'For data processing, scripting, and automation.', logo: null },
      { name: 'Power BI', description: 'For interactive data visualization and business intelligence.', logo: null },
      { name: 'Docker', description: 'For containerizing applications and ensuring consistency.', logo: null },
      { name: 'Astronomer', description: 'For managing and scaling Apache Airflow workflows.', logo: null },
      { name: 'Apache Airflow', description: 'For orchestrating complex data pipelines.', logo: null },
      { name: 'Google Cloud Platform (GCP)', description: 'For scalable cloud infrastructure.', logo: null },
      { name: 'BigQuery', description: 'For large-scale data analytics and warehousing.', logo: null },
      { name: 'Git', description: 'For version control and collaborative development.', logo: null },
    ];

    return (
      <div>
        <p>
          Here are some of the tools and technologies I use to build efficient and scalable data solutions.
        </p>
        <ToolsList>
          {tools.map((tool, index) => (
            <ToolItem key={index}>
              {tool.logo && (
                <ToolLogo>
                  <Image
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    width={32}
                    height={32}
                    style={{ marginRight: '8px' }}
                  />
                </ToolLogo>
              )}
              <ToolName>{tool.name}</ToolName>
              <ToolDescription>{tool.description}</ToolDescription>
            </ToolItem>
          ))}
        </ToolsList>
      </div>
    );
  };

  const renderAll = () => {
    return items.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }}>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      );
    });
  };

  const getDuration = (startDate, endDate) => {
    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    });

    let durationStr = '';

    if (durationObj.years > 1) {
      durationStr = `${durationObj.years} yrs `;
    } else if (durationObj.years === 1) {
      durationStr = `${durationObj.years} yr `;
    }

    durationStr += `${durationObj.months} mos`;

    return durationStr;
  };

  const downloadHeadshot = () => {
    setToastTitle('Downloading...');
    setToastDescription('You can now hire me :)');
    setShowToast(true);
  };

  const copyBio = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(description);

    setToastTitle('Copied :D');
    setToastDescription('You can now paste it anywhere.');
    setShowToast(true);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content="Utsav Shrestha" property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />  
        <meta content="https://utsavshrestha59.com.np" property="og:url" />
      </Head>

      {renderIntro()}

      <h2>Bio</h2>
      {renderBio()}

      <h2>Tools</h2>
      {renderTools()}

      {/* <h2>Career</h2>
      {renderAll()} */}

      <Toast
        title={toastTitle}
        description={toastDescription}
        isSuccess={true}
        showToast={showToast}
        setShowToast={setShowToast}
      />
    </>
  );
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
});

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
});

const ButtonsContainer = styled('p', {
  display: 'flex',
  alignItems: 'center',
});

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
});

const ToolsList = styled('ul', {
  listStyle: 'none',
  padding: 0,
  marginTop: '16px',
  color: '#ccc',
});

const ToolItem = styled('li', {
  marginBottom: '12px',
  display: 'flex',
  alignItems: 'center',
});

const ToolLogo = styled('span', {
  marginRight: '8px',
});

const ToolName = styled('strong', {
  color: '#fff',
  marginRight: '8px',
});

const ToolDescription = styled('span', {
  color: '#8f9ba8',
});

About.Layout = Base;

export default About;