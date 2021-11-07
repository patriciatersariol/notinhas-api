import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn, UpdateDateColumn} from 'typeorm'
import { Notebook } from './Notebook'

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

    @CreateDateColumn({
        name: 'created_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)'
      })
      createdAt: Date;
    
    @UpdateDateColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP(6)',
        onUpdate: 'CURRENT_TIMESTAMP(6)'
      })
      updatedAt: Date;

    @ManyToOne(() => Notebook, (notebook: Notebook) => notebook.notes, { eager: true })
    notebook: Notebook
}