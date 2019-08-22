<template>
  <div id="app">

    <nav>
      <div class="nav-wrapper blue darken-1">
        <a href="#" class="brand-logo center">System user</a>
      </div>
    </nav>

    <div class="container">
      <div class="campos">
        <form>

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

            <div id="area-form">
              <label>ID Endereço</label>
              <input type="number" placeholder="Informa o ID Endereço ou Cadastra"/>
              <button class="waves-effect waves-light btn">Salvar<i class="material-icons left">cloud</i></button>
            </div>
            
            <label>Senha</label>
            <input type="Password" placeholder="Senha">
          
        </form>
        <br>
        <div class="card-action">
          <button class="waves-effect waves-light btn pulse">Salvar<i class="material-icons left">cloud</i></button>  
        </div>
      </div>
     
      <br>
      <div class="grid">
        <table>

          <thead>

            <tr>
              <th>#ID</th>
              <th>NOME</th>
              <th>CPF</th>
              <th>E-mail</th>
              <th>Telefone</th>
              <th>Data Nascimento</th>
              <th>#ID Endereço</th>
              <th>OPÇÕES</th>
            </tr>

          </thead>

          <tbody>

            <tr>

              <td>Arduino</td>
              <td>100</td>
              <td>50.00</td>
              <td>50.00</td>
              <td>50.00</td>
              <td>50.00</td>
              <td>50.00</td>
              
              <td>
                <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button> 
                <button class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
              </td>

            </tr>

          </tbody>
        
        </table>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .container{
    position: relative;	
    width: 100%;
    float:left;
  }
  .campos{
    position: relative;
    width: 50%;
    margin-left: 2%;
    margin-right: 30%;
    margin-top: 1%;
  };
  .grid{
    position: relative;
    width: 50%;
    margin-left: 50%;
    margin-right: 50%;
    margin-top: 5%;
  }
</style>
