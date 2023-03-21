interface likeResponse{
    id: number;
    attributes:{
        avatar_url: string;
        name: string;
        createdAt: Date;
    }
}

export interface Like{
    data: likeResponse[]
}