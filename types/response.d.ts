interface ResponseModel<T>{
    id: number;
    attributes: T
}

export interface Response<T> {
    data: ResponseModel[]
}