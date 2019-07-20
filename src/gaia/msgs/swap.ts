import { Amino } from "ts-amino";
const { Field, Concrete, DefineStruct } = Amino;
import { Msg } from "../../core/tx";
import { AccAddress } from "../../common/address";
import { Coin } from "../../common/coin";

@Concrete("cosmos-sdk/MsgSwap")
@DefineStruct()
export class MsgSwap extends Msg {
  @Field.Defined(0, {
    jsonName: "sender"
  })
  public sender: AccAddress;

  @Field.Defined(1, {
    jsonName: "asset"
  })
  public asset: Coin;

  @Field.String(2, {
    jsonName: "target_denom"
  })
  public targetDenon: string;

  constructor(sender: AccAddress, asset: Coin, targetDenom: string) {
    super();
    this.sender = sender;
    this.asset = asset;
    this.targetDenon = targetDenom;
  }

  public getSigners(): AccAddress[] {
    return [this.sender];
  }

  // tslint:disable-next-line: no-empty
  public validateBasic(): void {}
}
