import {Construct} from 'constructs'
import {Instance} from './.gen/providers/aws/instance'

export class TestEC2Instance extends Construct {
  constructor(scope: Construct, id: string, sgId: string, subnet: string) {
    super(scope, id)
    new Instance(this, 'TestEC2', {
      ami: 'ami-0230bd60aa48260c6',
      instanceType: 't2.micro',
      vpcSecurityGroupIds: [sgId],
      subnetId: subnet,
      tags: {
        Name: 'TestInstance',
        Terraform: 'true',
      },
    })
  }
}
