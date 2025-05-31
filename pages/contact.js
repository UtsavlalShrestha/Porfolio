  import React from 'react'
  import Head from 'next/head'
  import Base from '../layouts/Base'
  import Toast from '../components/Toast'
  import { Box } from '../components/Box'
  import { styled } from '../stitches.config'

  export async function getStaticProps() {
    const meta = {
      title: 'Contact // Utsav Shrestha',
      tagline: 'Reach Out Anytime',
      image: '/static/images/avatar.jpg',
      primaryColor: 'cyan',
      secondaryColor: 'green',
    }

    return { props: meta }
  }

  function Contact(props) {
    const { title, image } = props
    const description = `I enjoy connecting with software engineers, tech founders, students, and geeks. Drop a message at my LinkedIn or mail me!`
    const [isEmailSent, setIsEmailSent] = React.useState(undefined)
    const [showToast, setShowToast] = React.useState(false)

    const onSendEmail = async (e) => {
      e.preventDefault()

      try {
        const isProd = process.env.NODE_ENV === 'production'
        const base = isProd ? 'https://utsavshrestha59.com.np' : 'http://localhost:3000'

        await fetch(`${base}/api/email`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
          }),
        })

        setIsEmailSent(true)
        setShowToast(true)
      } catch (e) {
        console.error(e)
        setIsEmailSent(false)
        setShowToast(true)
      }
    }

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={title} property="og:title" />
          <meta content="Utsav Shrestha" property="og:title" />
          <meta content={description} name="description" />
          <meta content={description} property="og:description" />
          <meta content="https://utsavshrestha59.com.np/contact" property="og:url" />
        </Head>

        <Box>
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </Box>

        <Box>
          <a href="https://www.linkedin.com/in/utsavlalshrestha/" target="_blank" rel="noopener noreferrer">
            <Button variant="linkedin">Connect on LinkedIn</Button>
          </a>
        </Box>

        <Box css={{ paddingTop: '20px' }}>
          <FormTitle>Send me an email</FormTitle>
          <Form onSubmit={onSendEmail}>
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Cena" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="john@cena.com" required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Can you see me?" rows="4" required />
            </FormGroup>
            <FormGroup>
              <Button type="submit" variant="send">Send</Button>
            </FormGroup>
          </Form>

          <Toast
            title={isEmailSent ? 'Email sent :D' : 'Error :('}
            description={isEmailSent ? 'Thanks for taking the time to write it.' : 'Something wrong happened. Try again later.'}
            isSuccess={isEmailSent}
            showToast={showToast}
            setShowToast={setShowToast}
          />
        </Box>
      </>
    )
  }

  const FormTitle = styled('h2', {
    fontSize: '24px',
    fontWeight: '400',
    color: '$primary',
    marginBottom: '20px',
    letterSpacing: '0.5px',
  })

  const Form = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '450px',
  })

  const FormGroup = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '20px',
  })

  const Label = styled('label', {
    color: '$secondary',
    fontSize: '14px',
    fontWeight: '400',
    marginBottom: '8px',
    textTransform: 'none',
    letterSpacing: '0.2px',
  })

  const Input = styled('input', {
    color: '$primary',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid $secondary',
    borderRadius: '0',
    padding: '10px 0',
    fontSize: '16px',
    transition: 'border-color 0.3s ease-in-out',
    '&:focus': {
      outline: 'none',
      borderColor: '$cyan',
    },
    '&::placeholder': {
      color: '$secondary',
      opacity: '0.7',
    },
  })

  const Textarea = styled('textarea', {
    color: '$primary',
    background: 'transparent',
    border: 'none',
    borderBottom: '1px solid $secondary',
    borderRadius: '0',
    padding: '10px 0',
    fontSize: '16px',
    resize: 'vertical',
    transition: 'border-color 0.3s ease-in-out',
    '&:focus': {
      outline: 'none',
      borderColor: '$cyan',
    },
    '&::placeholder': {
      color: '$secondary',
      opacity: '0.7',
    },
  })

  const Button = styled('button', {
    padding: '10px 20px',
    borderRadius: '$borderRadius',
    cursor: 'pointer',
    transition: 'all 0.3s ease-in-out',
    fontWeight: '500',

    // Default button style (unused unless explicitly called)
    color: '#fff',
    background: '#000',
    border: '1px solid #fff',

    // Variants
    variants: {
      variant: {
        linkedin: {
          background: 'transparent',
          border: 'none',
          color: '$cyan',
          padding: '8px 0',
          position: 'relative',
          textDecoration: 'none',
          fontSize: '18px',
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '0',
            height: '1px',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            backgroundColor: '$cyan',
            transition: 'width 0.3s ease-in-out',
          },
          '&:hover': {
            background: 'transparent',
            color: '$cyan',
            '&:after': {
              width: '60%',
            },
          },
          '&:focus': {
            outline: 'none',
            background: 'transparent',
            '&:after': {
              width: '60%',
            },
          },
        },
        send: {
          background: 'transparent',
          border: 'none',
          color: '$cyan',
          padding: '10px 0',
          fontSize: '16px',
          position: 'relative',
          textAlign: 'left',
          display: 'inline-block', // Contain the button to its content
          width: 'fit-content', // Match the text width
          '&:after': {
            content: '""',
            position: 'absolute',
            width: '0',
            height: '1px',
            bottom: '0',
            left: '0',
            backgroundColor: '$cyan',
            transition: 'width 0.2s ease-in-out', // Faster animation
          },
          '&:hover': {
            background: 'transparent',
            color: '$cyan',
            '&:after': {
              width: '100px', // Fixed width instead of 100%
            },
          },
          '&:focus': {
            outline: 'none',
            background: 'transparent',
            '&:after': {
              width: '100px', // Fixed width instead of 100%
            },
          },
        },
      },
    },
  })

  Contact.Layout = Base

  export default Contact