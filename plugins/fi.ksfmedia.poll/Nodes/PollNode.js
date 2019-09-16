import {BlockNode} from 'substance'

class PollNode extends BlockNode {}

PollNode.type = 'ksf-pollembed'
PollNode.define({
    'pollId': {type: 'number'},
    'pollBody': {type: 'string', optional: true}
})

export default PollNode