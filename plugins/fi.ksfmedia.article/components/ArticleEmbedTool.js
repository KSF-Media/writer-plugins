import {Tool} from 'substance'
import {api} from 'writer'

export default class ArticleEmbedTool extends Tool {
    insertEmbedArticle() {
      api.editorSession.executeCommand('articleembed', {})
    }
    render($$) {
        return $$('button')
                .attr('title', 'Joopajooo')
                .addClass('se-tool')
                .append($$('i').addClass('fa fa-article'))
                // .on('click', this)
    }
}
