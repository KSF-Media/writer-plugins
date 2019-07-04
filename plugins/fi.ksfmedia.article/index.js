import ArticleEmbedPackage from './ArticleEmbedPackage'
import {registerPlugin} from 'writer'

export default () => {
    if (registerPlugin) {
        registerPlugin(ArticleEmbedPackage)
    } else {
        console.log('Register method unavailable')
    }
}
