import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'Country', schema: 'Common' })
export class Country {

  @Column({ name: 'SeqNo' })
  seqNo: number;

  @PrimaryGeneratedColumn({ name: 'CountryCode' })
  countryCode: string;

  @Column({ name: 'CountryName' })
  countryName: string | null;

  @Column({ name: 'CountryEnName' })
  countryEnName: string | null;

  @Column({ name: 'IATAArea' })
  iataArea: string | null;

  @Column({ name: 'CreateDt' })
  createDt: Date | null;

  @Column({ name: 'CreateUser' })
  createUser: string | null;

  @Column({ name: 'UpdateDt' })
  updateDt: Date | null;

  @Column({ name: 'UpdateUser' })
  updateUser: string | null;

  constructor() {
    this.seqNo = -1;
    this.countryCode = "NULL";
    this.countryName = null;
    this.countryEnName = null;
    this.iataArea = null;
    this.createDt = null;
    this.createUser = null;
    this.updateDt = null;
    this.updateUser = null;
  }
}
