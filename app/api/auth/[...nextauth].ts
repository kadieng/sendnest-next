import type {NextApiRequest, NextApiResponse} from "next"
import NextAuth from "next-auth"

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
    console.log('req', req, 'res', res)
    // Do whatever you want here, before the request is passed down to `NextAuth`
    return await NextAuth(req, res, {})
}