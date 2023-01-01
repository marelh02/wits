// ce fichier contient les endpoints du backend avec lesquelles wits communique
//http://10.72.153.35:8080/descriptionArticle
// http://localhost:4000/interMan/description

// http://localhost:4000/witsTest/getArticle
// http://localhost:4000/witsTest/saveDescription
//http://10.72.153.35:8080/getdes

//http://localhost:4000/interMan/ttts http://10.72.153.35:8080/GetArticle
//  http://localhost:4000/interMan/editorjs

export let witsHTTPSettings={
    //on envoi un obj {}
    saveArticleDataEP:'http://localhost:4000/witsTest/saveArticle',
    // this ep sends the article id in a get request
    fetchArticleDataEP:"http://localhost:4000/witsTest/getArticle",
    //on envoi un obj
    newArticleDescriptionEP:"http://localhost:4000/witsTest/saveDescription",   
    //Il ne faut renvoyer la description que lorsque l'article existe ==> tâche du backend
    allArticlesDescriptions:"http://localhost:4000/witsTest/getArticlesDescriptions",
    //ce EP, retourne les articles propres à l'utilisateur actuel
    MyArticlesDescriptions:"http://localhost:4000/witsTest/getMyArticlesDescriptions",
    //EP pour supprimer l'article et sa description
    deleteMyArticleEP:"http://localhost:4000/witsTest/rmArticle",
    allArticlesDescriptionsByTopic:"",
    updateArticleEP:"http://localhost:4000/witsTest/updateArticle",
    updateArticleDescriptionEP:"http://localhost:4000/witsTest/updateDescription",
}