import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'SystemParam', schema: 'Common' })
export class SystemParam {

    @PrimaryGeneratedColumn({ name: 'SeqNo' })
    seqNo: number | null;

    @Column({ name: 'ParamKey' })
    paramKey: string | null;

    @Column({ name: 'Sn' })
    sn: string | null;

    @Column({ name: 'Version' })
    version: number | null;

    @Column({ name: 'CreateUser' })
    createUser: string | null;

    @Column({ name: 'CreateDt' })
    createDt: Date | null;

    @Column({ name: 'UpdateUser' })
    updateUser: string | null;

    @Column({ name: 'UpdateDt' })
    updateDt: Date | null;

    constructor() {
      this.seqNo = null;
      this.paramKey = null;
      this.sn = null;
      this.version = null;
      this.createUser = null;
      this.createDt = null;
      this.updateUser = null;
      this.updateDt = null;
    }
}
