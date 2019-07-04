import {Component, FontAwesomeIcon, TextpropertyComponent} from 'substance'
import {api} from 'writer'
import OpenEmbedDialog from './openEmbedDialog'

import '../sass/index.sass'

export default class ArticleEmbedComponent extends Component {
    render($$) {
        console.log('ArticleEmbedComponent');
        const el = $$('div').addClass('im-blocknode ksf-articleembed')
        el.appendChild(this.renderHeader($$))
        el.appendChild(this.renderContent($$))

        return el;
    }

    renderHeader($$) {
        return $$('div')
            .append([
                $$(FontAwesomeIcon, {icon: 'fa-newspaper'}),
                $$('strong').append('Infoga artikelpuff').attr('contenteditable', false),
                $$('span').addClass('edit-button')
                    .append(
                        $$(FontAwesomeIcon, {icon: 'fa-pencil-square-o'})
                    )
                    .on('click', this.editArticleEmbed).attr('title', 'Redigera')
            ])
            .addClass('header')
            .attr('contenteditable', false)
    }

    renderContent($$) {
        return $$('div')
    }
}
