const file_system = require('fs')
const archiver = require('archiver')

const createDeployDirectory = () => {
    if (!file_system.existsSync(deploy_dir)){
        file_system.mkdirSync(deploy_dir)
    }
}

const createDeployZipFile = (version, source_dir, archive_file, deploy_dir) => {
    const output = file_system.createWriteStream(deploy_dir + '/' + archive_file)
    const archive = archiver('zip', { zlib: { level: 9 } } )

    output.on('close', () => {
        console.log(archive.pointer() + ' total bytes')
        console.log(`deploy archive created: ${deploy_dir}/${archive_file}`)
    })

    archive.on('warning', function(err) {
        if (err.code === 'ENOENT') {
            console.log('Error creating archive, error:' + err.message)
        } else {
            throw err
        }
    })

    archive.on('error', function(err) {
        throw err
    })

    archive.pipe(output)
    archive.directory(source_dir + '/', false)
    archive.finalize()
}

const deploy_dir = './deploy'

const args = process.argv.slice(2)

const version = args[0]
const source_dir = args[1]
const archive_pattern = args[2]

const archive_file = archive_pattern.replace('[VERSION]', version)

createDeployDirectory()
createDeployZipFile(version, source_dir, archive_file, deploy_dir)
