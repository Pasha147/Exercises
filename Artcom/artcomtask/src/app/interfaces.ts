export class Item {
  constructor(
    public ProductId: number,
    public ColorIdx: number,
    public ProductCode: string,
    public ProductDescription: string,
    public Price: number,
    public VoDatum: number | string,
    public IsHeavy: any,
    public RestrictedLands: any,
    public IsFsk: boolean,
    public IsOrdergruppeC: boolean
  ) {}
}
