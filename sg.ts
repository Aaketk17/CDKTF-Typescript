import {Construct} from 'constructs'

import {SecurityGroup} from './.gen/providers/aws/security-group'

export class TestSG extends Construct {
  public readonly sgId: string
  constructor(scope: Construct, id: string, vpcId: string) {
    super(scope, id)

    const sg = new SecurityGroup(this, 'TestSG', {
      description: 'Test SG for Test CDKTF',
      egress: [
        {
          cidrBlocks: ['0.0.0.0/0'],
          description: 'Allow all outbound traffic by default',
          fromPort: 0,
          protocol: '-1',
          toPort: 0,
        },
      ],
      ingress: [
        {
          cidrBlocks: ['0.0.0.0/0'],
          description: 'TLS from VPC',
          fromPort: 22,
          protocol: 'tcp',
          toPort: 22,
        },
      ],
      tags: {
        Name: 'TestSG',
        Terraform: 'true',
      },
      vpcId: vpcId,
    })
    this.sgId = sg.id
  }
}
