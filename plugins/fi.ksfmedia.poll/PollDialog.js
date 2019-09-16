import {Component} from 'substance'
import {api} from 'writer'

export default class PollDialog extends Component {
    render($$) {
        console.log("Props: ", this.props)
        return $$('div')
            .append($$('h1').append(this.getLabel('ksf-embed-poll')))
            .append(this.pollTable($$, this.props.data))
    }
    insertPollNode(id){
        api.editorSession.executeCommand('insertpollnode', {
            id: id
        })
        console.log('Inserting poll id: ', id)
    }
    pollTable($$, data){
        const list = data.map(
            poll => $$('li')
                .append($$('button')
                .on('click', () => {
                    this.insertPollNode(poll.id)
                })
                .append(poll.question))
        )
        return $$('div')
            .append($$('ul').append(list))
    }
    onClose(action) {
        // console.log('PollDialog closed. Action: ', action, "props: ", this.props)
    }
}
