import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Field } from "type-graphql";

@Entity()
export class Cricketers {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Field()
    @Column()
    name: string;
    @Field()
    @Column()
    number: number;
    @Field()
    @Column({ nullable: true })
    batingPosititon?: string;
    @Field()
    @Column({ nullable: true })
    bowlingType?: string;
    @Field()
    @Column()
    country: string;
    @Field()
    @Column()
    age: number
}