import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { AddAnswerInput } from './dto/add-answer.input';
import { CreateQuestionArgs } from './dto/create-question.args';
import { FilterAnswerArgs } from './dto/filter-answer.args';
import { FindQuestionArgs } from './dto/find-question.args';
import { Answer } from './models/answer.model';
import { Question } from './models/question.model';
import { QuestionService } from './question.service';

@Resolver(() => Question)
export class QuestionResolver {

    constructor(private readonly questionService: QuestionService) { }

    @Query(() => [Question])
    findAllQuestion(): Question[] {
        return this.questionService.findAllQuestions();
    }

    @Query(() => Question)
    findQuestion(@Args() findQuestionArgs: FindQuestionArgs): Question {
        return this.questionService.findQuestion(findQuestionArgs);
    }

    @Mutation(() => Question)
    createQuestion(@Args() createQuestionArgs: CreateQuestionArgs): Question {
        return this.questionService.createQuestion(createQuestionArgs);
    }

    @Mutation(() => Question)
    addAnswer(@Args('addAnswerInput') addAnswerInput: AddAnswerInput): Question {
        return this.questionService.addAnswer(addAnswerInput);
    }

    @ResolveField(() => [Answer], { name: 'answers' })
    filterAnswers(@Parent() question: Question, @Args() filterAnswerArgs: FilterAnswerArgs): Answer[] {
        return this.questionService.filterAnswer(question, filterAnswerArgs.identifier);
    }

}
