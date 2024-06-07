import Express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = Express()

app.use(Express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000,()=>{
    console.log('Running in port 3000')
})