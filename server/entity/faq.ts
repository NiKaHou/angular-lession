export class Faq {

    seqNo: number | null;

    question: string | null;

    answer: string | null;

    facility: string | string[] | null;

    isActivated: number | null;

    createUser: string | null;

    createDt: Date | null;

    updateUser: string | null;

    updateDt: Date | null;

    constructor() {
      this.seqNo = null;
      this.question = null;
      this.answer = null;
      this.facility = null;
      this.isActivated = null;
      this.createUser = null;
      this.createDt = null;
      this.updateUser = null;
      this.updateDt = null;
    }
}
