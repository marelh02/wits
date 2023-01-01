import { useLoaderData } from "react-router-dom";
import RTD from "../RichText/RTD";
export default function ReadArticle(){

    const article_Data=useLoaderData()

    return(
        <>
        <br/>
        <RTD articleData={article_Data}/>
        </>
    );
}