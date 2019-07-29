import { Img } from './img';
import { Tag } from './tag';
import { Reporter } from './reporter';

export class Article {   
    ID:number;    
    Title:string;
    Teaser:string;
    Body:string;
    reporter:Reporter;
    image:Img;
    tags:Tag[];
}

 