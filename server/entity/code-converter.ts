import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'CodeConverter', schema: 'Common' })
export class CodeConverter {

    @PrimaryGeneratedColumn({ name: 'SeqNo' })
    seqNo: number | null;

    @Column({ name: 'MainCategory' })
    mainCategory: string | null;

    @Column({ name: 'SubCategory' })
    subCategory: string | null;

    @Column({ name: 'CodeKey' })
    codeKey: string | null;

    @Column({ name: 'CodeDesc' })
    codeDesc: string | null;

    @Column({ name: 'Lang' })
    lang: string | null;

    @Column({ name: 'Remark' })
    remark: string | null;

    @Column({ name: 'Ordinal' })
    ordinal: number | null;

    @Column({ name: 'IsActivated' })
    isActivated: number | null;

    constructor() {
      this.seqNo = null;
      this.mainCategory = null;
      this.subCategory = null;
      this.codeKey = null;
      this.codeDesc = null;
      this.lang = null;
      this.remark = null;
      this.ordinal = null;
      this.isActivated = null;
    }
}
