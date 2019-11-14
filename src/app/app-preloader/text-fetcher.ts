export default async function(url:string):Promise<string>{
    return await (await fetch(url)).text();
}