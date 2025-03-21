

import { Resend } from 'resend';
import { EmailTemplate } from '../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'contact@techtimize.co',
      to: 'contact@techtimize.co',
      subject: 'Lets Connect',
      react: EmailTemplate({ firstName: 'John' }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}