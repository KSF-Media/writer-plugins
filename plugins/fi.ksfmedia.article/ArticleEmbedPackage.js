// import ArtticleComponent from './components/ArticleEmbedComponent'
import ArticleEmbedTool from './components/ArticleEmbedTool'
import ArticleEmbedCommand from './commands/ArticleEmbedCommand'
import ArticleEmbedComponent from './components/ArticleEmbedComponent'

const articlePackage = {
    name: 'article',
    id: 'fi.ksf.article',
    version: '{{version}}',
    config: (config, pluginConfig) => {
        config.addContentMenuTopTool(articlePackage.name, ArticleEmbedTool)
        config.addCommand(articlePackage.name, ArticleEmbedCommand)
        config.addComponent(articlePackage.name, ArticleEmbedComponent)

        // i18n
        config.addLabel('Embed Article liftup', {
            sv: 'Infoga artikelpuff'
        })
    }
}
