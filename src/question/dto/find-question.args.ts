import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class FindQuestionArgs {
    @Field()
    _id: string;
}