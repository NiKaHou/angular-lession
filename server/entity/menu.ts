import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity({ name: 'Menu', schema: 'Auth' })
export class Menu {

    @PrimaryGeneratedColumn({ name: 'SeqNo' })
    seqNo: number | null;

    @Column({ name: 'NodeCode' })
    nodeCode: string | null;

    @Column({ name: 'NodeNameTW' })
    nodeNameTW: string | null;

    @Column({ name: 'NodeNameEN' })
    nodeNameEN: string | null;

    @Column({ name: 'NodeType' })
    nodeType: string | null;

    @Column({ name: 'url' })
    url: string | null;

    @Column({ name: 'ParentNodeSeqNo' })
    parentNodeSeqNo: number | null;

    @Column({ name: 'SortPriority' })
    sortPriority: number | null;

    @Column({ name: 'PermissionCode' })
    permissionCode: string | null;

    @Column({ name: 'Remark' })
    remark: string | null;

    @Column({ name: 'Icon' })
    icon: string | null;

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
      this.nodeCode = null;
      this.nodeNameTW = null;
      this.nodeNameEN = null;
      this.nodeType = null;
      this.url = null;
      this.parentNodeSeqNo = null;
      this.sortPriority = null;
      this.permissionCode = null;
      this.remark = null;
      this.icon = null;
      this.createUser = null;
      this.createDt = null;
      this.updateUser = null;
      this.updateDt = null;
    }
}
