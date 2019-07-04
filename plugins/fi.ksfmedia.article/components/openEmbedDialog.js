import {api} from 'writer'
import ArticleEmbedTool from './ArticleEmbedTool'

export default (props) => {
    api.ui.showDialog(
        ArticleEmbedTool,
        props,
        {
            title: api.getLabel('Embed Article Liftup'),
            cssClass: 'im-htmlembed-modal ksf-articleembed'
        }
    )
}
