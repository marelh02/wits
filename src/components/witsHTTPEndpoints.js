// ce fichier contient les endpoints du backend avec lesquelles wits communique
//http://10.72.153.35:8080/descriptionArticle
// http://localhost:4000/interMan/description

// http://localhost:4000/witsTest/getArticle
// http://localhost:4000/witsTest/saveDescription
//http://10.72.153.35:8080/getdes

//http://localhost:4000/interMan/ttts http://10.72.153.35:8080/GetArticle
//  http://localhost:4000/interMan/editorjs http://10.72.103.58:9999/getInteractions/
const host="http://10.72.103.58:9999"

export let witsHTTPEndpoints={
    //on envoi un obj {}
    saveArticleDataEP:host+'/saveArticle',
    // this ep sends the article id in a get request
    fetchArticleDataEP:host+"/getArticle",
    //on envoi un obj
    newArticleDescriptionEP:host+"/saveDescription",   
    //Il ne faut renvoyer la description que lorsque l'article existe ==> tâche du backend
    allArticlesDescriptions:host+"/getArticlesDescriptions",
    //ce EP, retourne les articles propres à l'utilisateur actuel
    MyArticlesDescriptions:host+"/getMyArticlesDescriptions",
    //EP pour supprimer l'article et sa description
    deleteMyArticleEP:host+"/rmArticle",
    allArticlesDescriptionsByTopic:"",
    updateArticleEP:host+"/updateArticle",
    updateArticleDescriptionEP:host+"/updateDescription",
    userRegister:"http://localhost:4000/witsTest/register",
    userLogin:"http://localhost:4000/witsTest/login", 
    getCurrentUserFullName:"http://localhost:4000/witsTest/fullName",

    //EPs pour les interactions
    getArticleInteractions:host+"/getInteractions",
    commentArticle:host+"/commentArticle",
    likeDislike:host+"/likeDislike"
}