import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'City', schema: 'Common' })
export class City {
  @PrimaryGeneratedColumn({ name: 'SeqNo' })
  seqNo: number;

  @Column({ name: 'Country' })
  country: string | null;

  @Column({ name: 'Name' })
  name: string | null;

  @Column({ name: 'EnName' })
  enName: string | null;

  @Column({ name: 'CreateDt' })
  createDt: Date | null;

  @Column({ name: 'CreateUser' })
  createUser: string | null;

  @Column({ name: 'UpdateDt' })
  updateDt: Date | null;

  @Column({ name: 'UpdateUser' })
  updateUser: string | null;

  @Column({ name: 'ExpressArea' })
  expressArea: string | null;

  constructor() {
    this.seqNo = -1;
    this.country = null;
    this.name = null;
    this.enName = null;
    this.createDt = null;
    this.createUser = null;
    this.updateDt = null;
    this.updateUser = null;
    this.expressArea = null;
  }
}
