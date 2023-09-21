import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'PortalOperationLogParam', schema: 'Common' })
export class PortalOperationLogParam {

    @PrimaryGeneratedColumn({ name: 'SeqNo' })
    seqNo: number | null;

    @Column({ name: 'Method' })
    method: string;

    @Column({ name: 'Url' })
    url: string;

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
      this.method = '';
      this.url = '';
      this.createDt = null;
      this.createUser = null;
      this.updateDt = null;
      this.updateUser = null;
    }
}
