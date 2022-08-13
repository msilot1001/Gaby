import typegoose from '@typegoose/typegoose';

const { prop, getModelForClass } = typegoose;

export class UserClass {
  @prop({ required: true })
  public id!: string;

  @prop({ required: true, default: 0 })
  public money!: number;

  @prop({ required: false })
  public Class?: string;

  @prop({ required: true, default: 1 })
  public level!: number;

  @prop({ required: true, default: 0})
  public exp!: number;

  // json
  @prop({ required: true, default: 
`
[{"itemname":"Sword","count":0},{"itemname":"StarSword","count":0},{"itemname":"Shield","count":0 },{"itemname":"Pickaxe","count":0},{"itemname":"Potion","count":0}]
`
  })
  public inventory!: string;
}

export const UserModel = getModelForClass(UserClass);