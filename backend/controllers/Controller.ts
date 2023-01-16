export default class Controller<T>{
    public provider: T;

    constructor(provider: T){
        this.provider = provider;
    }
}