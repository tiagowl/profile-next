import supabase from "../database/supabase";
import { Subcomment } from "../models/subcomments";

export default class SubCommentProvider{

    public async getSubcomments(idComment: number): Promise<Subcomment[]>{
        let { data, error } = await supabase.from('subcomments').select('*').eq("comment_id", idComment);
        return data as Subcomment[];
    }

}