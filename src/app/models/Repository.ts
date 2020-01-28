export class Repository{
    id:number;
    name:string;
    description:string;
    nb_stars:number;
    nb_issues:number;
    pushed_at:Date;
    avatar_url:string;
    createdAt:Date;
    ownerName:string;
    timeInterval:number;

    constructor(id, name, description, nb_starts, nb_issues, pushed_at, avatar_url,createdAt,ownerName) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.nb_stars = nb_starts;
        this.nb_issues = nb_issues;
        this.pushed_at = pushed_at;
        this.avatar_url = avatar_url;
        this.createdAt=new Date(createdAt);
        this.ownerName=ownerName;
    }

    getDays(){
        const d=new Date();
        const diff= d.getTime() - this.createdAt.getTime();
        return Math.round(diff/(3600*1000*24));
    }
}