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
              <div class="post" v-for="post in posts">
                <tr>
                  <td>{{post.id}}</td>
                  <td>{{post.nome}}</td>
                  <td>{{post.cpg}}</td>
                  <td>{{post.email}}</td>
                  <td>{{post.enderecoid}}</td>
                  <td>{{post.telefone}}</td>
                  <td>{{post.datanascimento}}</td>
                  <td>
                    <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button> 
                    <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
                  </td>
                </tr>
              </div>  
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
import axios from 'axios'
export default {
  name: 'Inicio',
  data(){
    return {
      posts:[]
    }

  },
  mounted(){
    let vue = this;
    axios.get('')
    .then(function (response) {
      vue.posts=response.data;     
    })

  }

}

</script>

<style>

</style>
