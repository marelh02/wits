import { useLoaderData } from "react-router-dom";
import RTEmod from "../RichText/RTEmod";
export default function ModArticle(){

    const article_Data=useLoaderData()

    return(
        <>
        <RTEmod articleData={article_Data}/>
        </>
    );
}