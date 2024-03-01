import { spawn } from 'child_process'
import { projectRoot } from './paths'

export const withTaskName = <T extends object>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

export const run = (command: string) => {
  return new Promise((resolve, rejected) => {
    const [cmd, ...args] = command.split(' ')
    // 执行命令
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: 'inherit', // 将子进程输出共享给父进程
      shell: true
    })
    app.on('close', resolve)
  })
}

export const pathRewriter = (format: string) => {
  return (id: string) => {
    id = id.replaceAll('@weifengwa', `weifengwa/${format}`)
    return id
  }
}
