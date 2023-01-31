import { useLoaderData } from "react-router-dom";
import ArticleDescriptionCard from "../ElementalComponents/ArticleDescriptionCard";


export default function Articles(){

    const descriptionsList=useLoaderData()
    
    return (<>
    <h1>Liste des articles</h1>
    {descriptionsList.map((y,i)=>{
        return(<><ArticleDescriptionCard key={i} description={y} /><br /></>);
    })}
    </>);
}