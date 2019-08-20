import {Component} from 'substance'
import {api} from 'writer'
import PollDialog from './PollDialog'

export default class PollComponent extends Component {
    render($$) {
        const el = $$('div')
        const dialogButton = $$('button')
            .append('Open Poll Dialog')
            .on('click', () => {
                api.ui.showDialog(PollDialog, {}, {})
            })
        el.append(dialogButton)

        return el    
    }
}
