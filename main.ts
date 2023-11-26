import {Construct} from 'constructs'
import {App, TerraformStack} from 'cdktf'
import {AwsProvider} from './.gen/providers/aws/provider'
import {TestVPC} from './vpc'
import {TestSG} from './sg'
import {TestEC2Instance} from './ec2'
import {TestSubnet} from './subnet'

class LearnCDKTFStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    new AwsProvider(this, 'aws', {
      region: 'us-east-1',
      profile: 'athavan-iam',
    })

    const vpc = new TestVPC(this, 'vpc')
    const sg = new TestSG(this, 'sg', vpc.vpcId)
    const subnet = new TestSubnet(this, 'subnet', vpc.vpcId)
    new TestEC2Instance(this, 'ec2', sg.sgId, subnet.subnetId)
  }
}

const app = new App()
new LearnCDKTFStack(app, 'cdktf-ts')
app.synth()
