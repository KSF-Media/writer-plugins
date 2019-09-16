import {api} from 'writer'
import {Command} from 'substance'

class InsertPollNodeCommand extends Command {
    getCommandState() {
        return {
            disabled: false
        }
    }
    execute(params) {
        console.log("Trying to shove poll id: ", params.id + " into OC")
        const data = {
            type: 'ksf-pollembed',
            id: params.id,
        }
        return api.document.insertBlockNode(data.type, data);
    }
}

export {InsertPollNodeCommand}