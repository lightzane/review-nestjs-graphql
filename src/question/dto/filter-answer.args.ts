import { ArgsType, Field } from "@nestjs/graphql";

@ArgsType()
export class FilterAnswerArgs {
    @Field({ nullable: true })
    identifier: string;
}