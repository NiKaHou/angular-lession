import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'ErrorCode', schema: 'Common' })
export class ErrorCode {

  @PrimaryGeneratedColumn({ name: 'SeqNo' })
  seqNo: number | null;

  @Column({ name: 'Category' })
  category: string | null;

  @Column({ name: 'ErrorCode' })
  errorCode: string | null;

  @Column({ name: 'ErrorMsg' })
  errorMsg: string | null;

  @Column({ name: 'Lang' })
  lang: string | null;

  constructor() {
    this.seqNo = null;
    this.category = null;
    this.errorCode = null;
    this.errorMsg = null;
    this.lang = null;
  }
}
