export class Hero {

  // constructor(
  //   public id?: number,
  //   public name?: string,
  //   public power?: string,
  //   public alterEgo?: string,
  //   public email?: string) {

  // }

  constructor(
    public startingAmount: number,
    public time: number,
    public expectedReturn: number,
    public contributionAmount: number,
    public contributionFrequency: string[]
  ) {

  }

}
