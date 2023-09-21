import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'UserPreference', schema: 'Common' })
export class UserPreference {

    @PrimaryGeneratedColumn({ name: 'SeqNo' })
    seqNo: number | null;

    @Column({ name: 'UserUUID' })
    userUUID: string | null;

    @Column({ name: 'Value' })
    value: string | null;

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
      this.userUUID = null;
      this.value = null;
      this.createUser = null;
      this.createDt = null;
      this.updateUser = null;
      this.updateDt = null;
    }
}
