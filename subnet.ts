import {Construct} from 'constructs'
import {Subnet} from './.gen/providers/aws/subnet'

export class TestSubnet extends Construct {
  public readonly subnetId: string
  constructor(scope: Construct, id: string, vpcId: string) {
    super(scope, id)

    const subnet = new Subnet(this, 'TestSubnet', {
      cidrBlock: '10.0.1.0/24',
      tags: {
        Name: 'Main',
      },
      vpcId: vpcId,
    })
    this.subnetId = subnet.id
  }
}
