import {api} from 'writer'
import PollDialog from './PollDialog'

export default (props) => {
    fetch(props.endpoint)
        .then(resp => resp.json())
        .then(json => {
            api.ui.showDialog(
                PollDialog,
                {data: json},
                {
                    title: 'Webbfrågor',
                    cssClass: 'im-htmlembed-modal hide-overflow'
                }
            );
        })

}
