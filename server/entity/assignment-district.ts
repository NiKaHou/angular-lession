import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'AssignmentDistrict', schema: 'Common' })
export class AssignmentDistrict {
  @PrimaryGeneratedColumn({ name: 'AssignmentDistrictId' })
  assignmentDistrictId: string;

  @Column({ name: 'Facility' })
  facility: string | null;

  @Column({ name: "Country" })
  country: string | null;

  @Column({ name: 'DistrictName' })
  districtName: string | null;

  @Column({ name: 'Priority' })
  priority: number | null;

  @Column({ name: 'CreateUser' })
  createUser: string | null;

  @Column({ name: 'CreateDt' })
  createDt: Date | null;

  @Column({ name: 'UpdateUser' })
  updateUser: string | null;

  @Column({ name: 'UpdateDt' })
  updateDt: Date | null;

  constructor() {
    this.assignmentDistrictId = "";
    this.facility = null;
    this.country = null;
    this.districtName = null;
    this.priority = null;
    this.createUser = null;
    this.createDt = null;
    this.updateUser = null;
    this.updateDt = null;
  }
}
