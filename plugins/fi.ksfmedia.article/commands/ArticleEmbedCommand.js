import {WriterCommand} from 'writer'
import openEmbedDialog from '../components/openEmbedDialog'

export default class ArticleEmbedDialog extends WriterCommand {
    execute() {
        openEmbedDialog({})
    }
}
