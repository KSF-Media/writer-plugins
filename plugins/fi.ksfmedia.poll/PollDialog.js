import {Component} from 'substance'

export default class PollDialog extends Component {
    render($$) {
        console.log("Props: ", this.props)
        return $$('div')
            .append($$('h1').append(this.getLabel('ksf-embed-poll')))
            .append(this.pollTable($$, this.props.data))
    }
    pollTable($$, data){
        const list = data.map(
            poll => $$('li').append($$('button').append(poll.question))
        )
        return $$('div')
            .append($$('ul').append(list))
    }
    onClose(action) {
        // save or close
    }
}
