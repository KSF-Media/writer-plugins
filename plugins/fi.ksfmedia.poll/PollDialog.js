import {Component} from 'substance'

export default class PollDialog extends Component {
    render($$) {
        return $$('div').append('Testing poll dialog')
    }
    onClose(action) {
        // save or close
    }
}
