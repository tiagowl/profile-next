export default interface Comment{
    id: number;
    attributes:{
        content: string;
        user: string;
        user_avatar: string;
        likes: number;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
    }
}