import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Answer {
    @Field()
    identifier: string;

    @Field()
    value: string;

    @Field(() => Int)
    score: number;
}