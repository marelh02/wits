export default class GInteruactions{
    constructor(identifiant){
        this.identifiant=identifiant;
        this.likesDislikes=[]
        this.comments=[]
    }

    comment(c){ this.comments.push(c) }
    
    interacte(i){
        let k=this.likesDislikes.findIndex(x=>x.id==i.id)
        if(k<0){
            this.likesDislikes.push(i)
        }else{
            this.likesDislikes[k]=i
        }
    }
}