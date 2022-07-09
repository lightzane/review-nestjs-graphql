import { Injectable, NotFoundException } from '@nestjs/common';
import { ERR_QUESTION_NOT_FOUND } from '../shared/constants/error-messages.constant';
import { ObjectId, uuidv4 } from '../shared/utils/id-generator.util';
import { AddAnswerInput } from './dto/add-answer.input';
import { CreateQuestionArgs } from './dto/create-question.args';
import { FindQuestionArgs } from './dto/find-question.args';
import { Answer } from './models/answer.model';
import { Question } from './models/question.model';

@Injectable()
export class QuestionService {

    private questions: Question[] = [];

    findAllQuestions(): Question[] {
        return this.questions;
    }

    findQuestion(findQuestionArgs: FindQuestionArgs): Question {
        const question = this.questions.find(question => question._id === findQuestionArgs._id);
        if (!question) { throw new NotFoundException(ERR_QUESTION_NOT_FOUND); }
        return question;
    }

    createQuestion(createQuestionArgs: CreateQuestionArgs): Question {
        const question: Question = {
            _id: ObjectId(),
            value: createQuestionArgs.question,
            answers: []
        };
        this.questions.push(question);
        return question;
    }

    addAnswer(addAnswerInput: AddAnswerInput): Question {
        const { _id, answer, score } = addAnswerInput;
        const qIdx = this.questions.findIndex(q => q._id === _id);
        if (qIdx === -1) { throw new NotFoundException(ERR_QUESTION_NOT_FOUND); }
        const question = this.questions[qIdx];
        const newAnswer: Answer = {
            identifier: uuidv4(),
            score,
            value: answer
        };
        question.answers.splice(0, 0, newAnswer);
        return question;
    }

    filterAnswer(question: Question, identifier: string): Answer[] {
        if (!identifier) { return question.answers; }
        return question.answers.filter(answer => answer.identifier === identifier);
    }


}
