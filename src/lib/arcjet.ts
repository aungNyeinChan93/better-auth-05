
import arcjet, { BotOptions, EmailOptions, shield, SlidingWindowRateLimitOptions } from '@arcjet/next'


export const aj = arcjet({
    key: process.env.ARCJET_KEY! as string,
    rules: [
        shield({
            mode: 'LIVE'
        })
    ],
    characteristics: ['userIdOrIp']
});


export const botSettings = { mode: 'LIVE', deny: ['ACAPBOT'] } satisfies BotOptions;
export const rateLimitSettings = { mode: 'LIVE', interval: '60s', max: 10 } satisfies SlidingWindowRateLimitOptions<[]>
export const emailSettings = { mode: 'LIVE', deny: [], } satisfies EmailOptions //'DISPOSABLE', "NO_GRAVATAR", "NO_MX_RECORDS",

