import {SamplePluginComponent} from './SamplePluginComponent'

const SamplePackage = {
    name: 'sample-plugin',
    id: 'fi.ksfmedia.sample-plugin',
    index: 5000,
    version: '{{version}}',
    configure: function (config, pluginConfig) {
        config.addToSidebar('main', pluginConfig, SamplePluginComponent)
    }
}

export {SamplePackage}
