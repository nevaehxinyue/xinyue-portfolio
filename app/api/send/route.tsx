import ContactFormEmail from "@/emails/ContactFormEmail";
import { sendEmailSchema } from "@/lib/validationSchema";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST (request: NextRequest) {
    const data = await request.json();
    const validation = sendEmailSchema.safeParse(data);
    if(!validation.success) return NextResponse.json(validation.error.format(), {status: 400});

    try {
        await resend.emails.send({
            from:"Contact Form <onboarding@resend.dev>",
            to: "yuexin_99@163.com",
            subject: "Message from contact form",
            reply_to: data.email as string,
            react: <ContactFormEmail message={data.message} senderEmail={data.email}/>
        })
        return NextResponse.json({success: true}, {status: 201})
    }catch(error){
        return NextResponse.json({error: "Failed to send email."}, {status: 400})
    }

}