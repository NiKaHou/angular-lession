import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'PortalOperationLog', schema: 'Common' })
export class PortalOperationLog {

    @PrimaryGeneratedColumn({ name: 'SeqNo' })
    seqNo: number | null;

    @Column({ name: 'UserUUID' })
    userUUID: string | null;

    @Column({ name: 'UserName' })
    userName: string | null;

    @Column({ name: 'MenuCode' })
    menuCode: string | null;

    @Column({ name: 'Operation' })
    operation: string | null;

    @Column({ name: 'OperationDesc' })
    operationDesc: string | null;

    @Column({ name: 'ServiceName' })
    serviceName: string | null;

    @Column({ name: 'ServiceURL' })
    serviceURL: string | null;

    @Column({ name: 'Request' })
    request: string | null;

    @Column({ name: 'Response' })
    response: string | null;

    @Column({ name: 'ErrorCode' })
    errorCode: string | null;

    @Column({ name: 'ErrorDesc' })
    errorDesc: string | null;

    @Column({ name: 'CreateDt' })
    createDt: Date | null;

    @Column({ name: 'CreateUser' })
    createUser: string | null;

    @Column({ name: 'UpdateDt' })
    updateDt: Date | null;

    @Column({ name: 'UpdateUser' })
    updateUser: string | null;

    constructor() {
      this.seqNo = null;
      this.userUUID = null;
      this.userName = null;
      this.menuCode = null;
      this.operation = null;
      this.operationDesc = null;
      this.serviceName = null;
      this.serviceURL = null;
      this.request = null;
      this.response = null;
      this.errorCode = null;
      this.errorDesc = null;
      this.createDt = null;
      this.createUser = null;
      this.updateDt = null;
      this.updateUser = null;
    }
}
