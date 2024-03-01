import path from 'path'
import fs from 'fs/promises'
import glob from 'fast-glob'
import { ModuleKind, Project, ScriptTarget, SourceFile } from 'ts-morph'

import { outDir, projectRoot, weifengRoot } from './utils/paths'
import { parallel, series } from 'gulp'
import { run, withTaskName } from './utils'
import { buildConfig } from './utils/config'

export const genEntryTypes = async () => {
  console.log('---------------genEntryTypes------------------------')

  const files = await glob('*.ts', {
    cwd: weifengRoot,
    absolute: true,
    onlyFiles: true
  })

  const project = new Project({
    compilerOptions: {
      declaration: true,
      module: ModuleKind.ESNext,
      allowJs: true,
      emitDeclarationOnly: true,
      noEmitOnError: false,
      outDir: path.resolve(outDir, 'entry/types'),
      target: ScriptTarget.ESNext,
      rootDir: weifengRoot,
      strict: false
    },
    skipFileDependencyResolution: true,
    tsConfigFilePath: path.resolve(projectRoot, 'tsconfig.json'),
    skipAddingFilesFromTsConfig: true
  })

  const sourceFiles: SourceFile[] = []

  files.map(f => {
    const sourceFile = project.addSourceFileAtPath(f)
    sourceFiles.push(sourceFile)
  })

  await project.emit({
    emitOnlyDtsFiles: true
  })

  const tasks = sourceFiles.map(async sourceFile => {
    const emitOutput = sourceFile.getEmitOutput()
    for (const outputFile of emitOutput.getOutputFiles()) {
      const filepath = outputFile.getFilePath()
      await fs.mkdir(path.dirname(filepath), { recursive: true })
      await fs.writeFile(
        filepath,
        outputFile.getText().replaceAll('@weifengwa', '.'),
        'utf8'
      )
    }
  })
  await Promise.all(tasks)
}

const copyEntryTypes = () => {
  const src = path.resolve(outDir, 'entry/types')
  const copy = (module: any) =>
    parallel(
      withTaskName(`copyEntryTypes:${module}`, async () => {
        const p = path.resolve(outDir, (buildConfig as any)[module].output.path)
        return run(`cp -r ${src}/* ${p}/`)
      })
    )
  return parallel(copy('esm'), copy('cjs'))
}

export const genTypes = series(genEntryTypes, copyEntryTypes())
