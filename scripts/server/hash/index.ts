import express, { response } from 'express'
import fsPromise from '../fs-promise';
import path from 'path'

export default async function (ROOT_DIR: string, HOST: string, PORT: number) {
    const CACHED_BODY_404 = await get404Body(ROOT_DIR);

    const app = express();

    app.use('/', express.static(ROOT_DIR));
    app.use(async (request, response) => {
        response.redirect("/#" + request.path);
    })

    app.listen(PORT, HOST, () => {
        console.log(`[Hash Sever] started at ${PORT}`);
    });
}
async function get404Body(ROOT_DIR: string): Promise<Buffer> {
    return await fsPromise.readFile(path.resolve(ROOT_DIR, "404.html"));
}