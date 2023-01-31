import {witsHTTPEndpoints} from './witsHTTPEndpoints'
import { witsgetUserId } from './witsUserSession';

//fcts liées aux articles

export async function getArticleById({params}){
    try{
        let a= await (await fetch(witsHTTPEndpoints.fetchArticleDataEP+"/"+params.idArticle)).json()
        let b=await (await fetch(witsHTTPEndpoints.getArticleInteractions+"/"+params.idArticle)).json()
        return {article:a,
        interactions:b}
        
}catch{return null}
    
}

export async function getMyArticlesDescriptions(){    
    try{
        return (await fetch(`${witsHTTPEndpoints.MyArticlesDescriptions}/${witsgetUserId()}`)).json()
    }catch{return null}
}

export async function getArticlesByTopic(){
    try{}catch{return null}

}

//fcts liées aux descriptions des articles

export async function getAllDescriptions(){
    try{
        let data=await (await fetch(witsHTTPEndpoints.allArticlesDescriptions)).json()
        console.log(data);
    return data
    }catch{
        return []
    }
}
