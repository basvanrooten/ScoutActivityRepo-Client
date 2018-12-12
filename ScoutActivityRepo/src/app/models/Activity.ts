export class Activity {
    constructor(
        public _id: string,
        public name: string,
        public date: string,
        public expressionField: string,
        public author: string,
        public components: string[],
        public createdAt: string = undefined,
        public updatedAt: string = undefined
    ){}
}