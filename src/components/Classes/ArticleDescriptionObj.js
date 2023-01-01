export default class ArticleDescriptionObj {
    constructor(title,coverImg,creationDate,description,topics,currentUserInfo) {
    
        this.title=title;
        this.coverImg=coverImg;
        this.writerFullName=`${currentUserInfo.name} ${currentUserInfo.familyName}`
        this.writerId=currentUserInfo.userId;
        this.creationDate=creationDate;
        this.description=description;
        this.topics=topics;        
        this.articleID=this.writerId+"_"+creationDate;
    }
  }