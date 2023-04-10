/**
 * Para inicializar um projeto node:
 *      - Ao utilizar o comando npm init, serão feitas uma sequência de perguntas em relacao
 *        ao projeto para que ele possa ser inicializado.
 *      - Finalizada a etapa de responder as perguntas, o arquivo package.json será criado com
 *        as informacoes relacionadas. Após isso, é possível instalar pacotes locais ao projeto.
 *       
 *      Algumas observacoes:
 *          - Criar arquivo .gitignore para o diretório node_modules
 *          - É possível ajustar comandos para execucao mais dinamica do projeto.
 * 
 */


const { format } = require('date-fns');
const { v4: uuid } = require('uuid');

const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyyMMddI \t HH:mm:ss')}`;
    const logItem = `${dateTime}\t${uuid()}\t${message}\n`;
    //console.log(logItem);

    try {
        if (!fs.existsSync(path.join(__dirname, '..', 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
        }
        await fsPromises.appendFile(path.join(__dirname, '..', 'logs', logName), logItem);
    }
    catch (err) {
        console.error(err);
    }
}

const logger = (req, res, next) => {
    logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
    console.log(`${req.method} ${req.path}`);
    next();
};

module.exports = {logger, logEvents}; //