import { Field, ObjectType } from "@nestjs/graphql";
import { Answer } from "./answer.model";

@ObjectType()
export class Question {
    @Field()
    _id?: string;

    @Field()
    value: string;

    @Field(() => [Answer], { nullable: true })
    answers?: Answer[];
}