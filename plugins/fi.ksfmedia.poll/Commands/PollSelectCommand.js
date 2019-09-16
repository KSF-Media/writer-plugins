import {WriterCommand} from 'writer'
import OpenEmbedDialog from '../openEmbedDialog'

class PollSelectCommand extends WriterCommand {
    getCommandState() {
        return {
            disabled: false
        }
    }
    execute(params) {
        OpenEmbedDialog({
            endpoint: 'https://hbl.stage.ksf.infomaker.io/ajax.php?route=%2Fget-polls&action=ksf_ajax_api'
        })
    }
}

export {PollSelectCommand}