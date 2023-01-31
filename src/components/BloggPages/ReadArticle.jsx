import { useLoaderData } from "react-router-dom";
import RTD from "../RichText/RTD";
import Interactions from "../ElementalComponents/Interactions"
export default function ReadArticle(){

    const article_Data=useLoaderData()
    /*
    article:article,
        interactions:interactions
    */
   console.log(article_Data.interactions);
    return(
        <>
        <br/>
        <RTD articleData={article_Data.article}/>
        <Interactions interactions={article_Data.interactions} identifiant={article_Data.article.identifiant}/>
        </>
    );
}