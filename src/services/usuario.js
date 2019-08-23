import {http} from './config'

export default{
    listar:()=>{
        return http.get('usuario')
    },
    salvar:(usuario)=>{
        return http.post('usuario')
    }
}