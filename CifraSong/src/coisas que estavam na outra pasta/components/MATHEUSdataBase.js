var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "projetoucs2023",
  database: "projeto_ucs_20231"
});

export async function cadastrarUsuario(nome, senha, usuario){
    alert("ENTRADA NO MÉTODO CADASTRAR USER");
    con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql =  "INSERT INTO logins (Email, Senha, Usuario) VALUES (" +"'"+nome+"','"+senha+
    "','"+usuario+"')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        alert("CONTA CRIADA COM SUCESSO!");
    });
    });
}

async function removerUsuario(){
con.connect(function(err) {
    if (err) throw err;
    var sql = "DELETE FROM logins WHERE Email = 'matheusagmatos@bol.com'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("DADOS DELETADOS COM SUCESSO!");
    });
  });
}

cadastrarUsuario('Matheus','2333626','matheusag')
// removerUsuario()
    



