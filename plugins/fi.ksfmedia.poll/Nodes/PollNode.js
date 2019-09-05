import {BlockNode} from 'substance'

class PollNode extends BlockNode {

}

PollNode.define({
    type: 'pollembed',
    id: { type: 'string'},
    dataType: 'string',
    format: 'string',
    text: {type: 'string', optional: true}
})

export default PollNode