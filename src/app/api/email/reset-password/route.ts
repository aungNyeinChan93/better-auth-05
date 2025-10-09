
import 'dotenv/config'
import { auth } from '@/lib/auth';
import { PasswordResetEmail } from '@/lib/email/templates/password-reset-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { headers } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function GET(request: NextRequest) {
    const session = await auth.api.getSession({ headers: await headers() });

    if (!session) {
        return new NextResponse('you are not authentiacted user', { status: 403 })
    }

    try {
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: session?.user ? session?.user?.email : ['delivered@resend.dev'],
            subject: 'Reset Passwrod',
            react: PasswordResetEmail({ userName: session?.user.name, resetLink: 'profile/reset-password' }),
        });

        if (error) {
            return NextResponse.json({ error: error instanceof Error ? error?.message : 'server err' }, { status: 500 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}