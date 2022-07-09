import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class AddAnswerInput {
    /** Question._id */
    @Field()
    _id: string;

    @Field()
    answer: string;

    @Field(() => Int)
    score: number;
}