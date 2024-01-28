export interface IReview {
    id: number,
    created_at: any,
    updated_at:any,
    review_product_id: number,
    review_user_id: number,
    review_description: string,
    review_rate:number,
    review_title:string
}
