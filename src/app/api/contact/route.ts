import {NextRequest, NextResponse} from "next/server";
import {sendWorkInquiryMail} from "@/utils/mail/mail.util";

async function getRequestBody(request: NextRequest) {
    const requestClone = request.clone();
    const body: any = await requestClone.json();

    return body;
}

export async function POST(
    req: NextRequest,
    res: NextResponse,
) {
    // get the request body
    const formData = await getRequestBody(req);

    // send email
    const emailResponse = await sendWorkInquiryMail(formData)

    return Response.json({ message: emailResponse })
}