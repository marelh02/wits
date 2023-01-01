import {witsHTTPSettings} from './witsHTTPSettings'
import { currentUserInfo } from './witsAppVariables';

//fcts liées aux articles

export async function getArticleById({params}){
    let data=(await fetch(witsHTTPSettings.fetchArticleDataEP+"/"+params.idArticle)).json()
return data;
}

export async function getMyArticlesDescriptions({}){    
return (await fetch(`${witsHTTPSettings.MyArticlesDescriptions}/${currentUserInfo.userId}`)).json()
}

export async function getArticlesByTopic(){

}

//fcts liées aux descriptions des articles

export async function getAllDescriptions(){
    let data=await (await fetch(witsHTTPSettings.allArticlesDescriptions)).json()
    return data
}
