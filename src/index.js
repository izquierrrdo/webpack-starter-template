import { config } from './modules/config'
import AppService from './modules/app.service'
import './modules/header.component'
import './css/index.css'

console.log('config key', config.key);

const a = 5;
console.log('a', a);

const service = new AppService('Hello world');
service.log();