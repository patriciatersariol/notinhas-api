import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Notebook {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}