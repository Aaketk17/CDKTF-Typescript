import {Construct} from 'constructs'
import {Vpc} from './.gen/providers/aws/vpc'

export class TestVPC extends Construct {
  public readonly vpcId: string
  constructor(scope: Construct, id: string) {
    super(scope, id)

    const vpc = new Vpc(this, 'TestVPC', {
      cidrBlock: '10.0.0.0/16',
      tags: {
        Name: 'TestVPc',
        Terraform: 'true',
      },
    })
    this.vpcId = vpc.id
  }
}
