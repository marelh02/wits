export default class ArticleDescriptionObj {
    constructor(title,coverImg,creationDate,description,topics,currentUserInfo) {
    
        this.title=title;
        this.coverImg=coverImg;
        this.writerFullName=currentUserInfo.fullName
        this.writerId=currentUserInfo.userId;
        this.creationDate=creationDate;
        this.description=description;
        this.topics=topics;        
        this.identifiant=this.writerId+"_"+creationDate;
    }
  }