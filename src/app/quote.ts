export class Quote {
    public showDescription:boolean;
    constructor(public quoteName:string, public authorName:string,public upvote:number,public downvote:number,public voteSender:string,public completeDate:Date){
    this.showDescription=false
}
}
