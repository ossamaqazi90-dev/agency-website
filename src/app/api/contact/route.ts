import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    if (!name || !email || !message || !service) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // TODO: wire up your email provider here.
    // Options:
    //   - Resend: https://resend.com (recommended)
    //   - SendGrid: https://sendgrid.com
    //   - Nodemailer with SMTP
    //   - Formspree (no backend needed)
    //
    // Example with Resend:
    //   import { Resend } from 'resend'
    //   const resend = new Resend(process.env.RESEND_API_KEY)
    //   await resend.emails.send({
    //     from: 'contact@scillasolutions.com',
    //     to: 'hello@scillasolutions.com',
    //     subject: `New enquiry from ${name}`,
    //     html: `<p>${message}</p>`,
    //   })

    console.log('Contact form submission:', { name, email, company, service, message })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
