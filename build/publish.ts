import { run } from './utils'
import { projectRoot } from './utils/paths'
import { series } from 'gulp'

export const publishComponent = async () => {
  run('release-it', `${projectRoot}/dist`)
}

export default series(async () => publishComponent())
