import useRestorable from "./useRestorable";
export default function useTitle(title:string){
    useRestorable(()=>{
        let lastTitle = document.title;
        document.title = title;
        return ()=>{
            document.title = lastTitle;
        }
    });
}