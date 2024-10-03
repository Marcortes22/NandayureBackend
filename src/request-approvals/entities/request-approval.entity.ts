import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Request } from '../../requests/entities/request.entity';

@Entity()
export class RequestApproval {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  approverId: string;

  @Column()
  requesterId: string;

  @Column()
  processNumber: number;

  @Column()
  RequestId: number;

  @Column({ nullable: true, default: null })
  observation: string;

  @Column({ nullable: true, default: null })
  appoved: boolean;

  @Column({ default: false })
  current: boolean;

  @Column({ nullable: true, default: null })
  ApprovedDate: Date;

  @ManyToOne(() => Request, (request) => request.RequestApprovals)
  @JoinColumn({ name: 'RequestId' })
  Request: Request;
}
