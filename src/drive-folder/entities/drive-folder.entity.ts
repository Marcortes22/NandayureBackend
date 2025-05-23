import { Employee } from 'src/employees/entities/employee.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';

@Entity()
export class DriveFolder {
  @PrimaryColumn()
  id: string;

  @Column()
  FolderId: string;

  @OneToOne(() => Employee, (employee) => employee.User)
  @JoinColumn({ name: 'id' })
  Employee: Employee;

  @DeleteDateColumn()
  deletedAt?: Date;
}
