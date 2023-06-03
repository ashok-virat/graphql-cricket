import { ObjectType, InputType, Field, Int } from "@nestjs/graphql";

@ObjectType()

export class CreatePlayerResponse {
    @Field()
    id: string;
    @Field()
    name: string;
    @Field(type => Int)
    number: number;
    @Field({ nullable: true })
    batingPosititon?: string;
    @Field({ nullable: true })
    bowlingType?: string;
    @Field()
    country: string;
    @Field(type => Int)
    age: number
}

@InputType()
export class CreatePlayerInput {
    @Field()
    name: string;
    @Field(type => Int)
    number: number;
    @Field({ nullable: true })
    batingPosititon?: string;
    @Field({ nullable: true })
    bowlingType?: string;
    @Field()
    country: string;
    @Field(type => Int)
    age: number
}

@InputType()
export class EditPlayerInput {
    @Field()
    id: string
    @Field({ nullable: true })
    name?: string;
    @Field({ nullable: true })
    number?: number;
    @Field({ nullable: true })
    batingPosititon?: string;
    @Field({ nullable: true })
    bowlingType?: string;
    @Field({ nullable: true })
    country?: string;
    @Field({ nullable: true })
    age?: number
}