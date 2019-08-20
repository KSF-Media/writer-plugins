import PollComponent from './PollComponent'

export default {
    name: 'poll',
    id: 'fi.ksfmedia.poll',
    configure: function (config, pluginConfig) {
        config.addToSidebar('main', pluginConfig, PollComponent)
    }
}
