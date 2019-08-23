<template>
  <div id="app">
    <div class="container">
      <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">Cadastro de Usuário</a>
      </div>
      </nav>
  
      <div class="row">
        <div class="col s4">
      <form>
        <div class="campos">
          <label>Nome</label>
          <input type="text" placeholder="Nome completo">

          <label>CPF</label>
          <input type="number" placeholder="Cpf">

          <label>Telefone</label>
          <input type="text" placeholder="Telefone">

          <label>E-mail</label>
          <input type="text" placeholder="E-mail@email.com">

          <label>Data Nascimento</label>
          <input type="Date" placeholder="00/00/0000">

          <label>ID Endereço</label>          
          <input type="number" placeholder="Informa o ID Endereço ou Cadastra"/>
                    
          <label>Senha</label>
          <input type="Password" placeholder="Senha">
          <br>
          <div class="card-action">
            <button class="waves-effect waves-light btn pulse">Gravar<i class="material-icons right">send</i></button>  
          </div>
        </div>
      </form>
        </div>
        <div class="col s8">
      <form>
        <div class="tabela elementExample_first">
          <table>
            <thead>

              <tr>
                <th colspan="1">#ID</th>
                <th colspan="4">NOME</th>
                <th colspan="2">CPF</th>
                <th colspan="0">E-mail</th>
                <th colspan="2">Telefone</th>
                <th colspan="2">Data Nascimento</th>
                <th colspan="1">#ID Endereço</th>
                <th>OPÇÕES</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="usuario of usuariosvet":key="usuario.id">
                <td>{{usuario.id}}</td>
                <td>{{usuario.nome}}</td>
                <td>{{usuario.cpg}}</td>
                <td>{{usuario.email}}</td>
                <td>{{usuario.enderecoid}}</td>
                <td>{{usuario.telefone}}</td>
                <td>{{usuario.datanascimento}}</td>
                <td>
                  <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button> 
                  <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>

                </td>
              </tr>
            </tbody>
          </table>    
        </div>
      </form>
        </div>
      </div>
      <br>
    </div>
           
  </div>
</template>

<script>
import usuario from './services/usuario';
export default {
  data(){
    return{
      usuariosvet:[]    
    }
  },
  mounted(){
    usuario.listar().then(resposta=>{
      console.log('resposta.data')
      this.usuariosvet = resposta.data
    })
  }
}
</script>

<style>

</style>
