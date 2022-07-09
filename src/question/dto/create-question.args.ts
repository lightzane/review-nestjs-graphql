import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class CreateQuestionArgs {
    @Field()
    question: string;
}