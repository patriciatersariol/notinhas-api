import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Note{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    subtitle: string

    @Column()
    text: string

}