import './scss/index.scss'
import {PollTool} from './PollTool'
import PollNode from './Nodes/PollNode'

import {PollEmbedCommand} from './Commands/PollEmbedCommand'

const PollPackage = {
    name: 'ksf-poll',
    id: 'fi.ksfmedia.poll',
    configure: function (config) {
        config.addContentMenuTopTool('pollembed', PollTool)

        config.addCommand('pollembed', PollEmbedCommand)

        config.addNode(PollNode)

        config.addLabel('ksf-embed-poll', {
            en: 'Embed poll',
            sv: 'Infoga webbfråga'
        })
    }
}

export {PollPackage}
