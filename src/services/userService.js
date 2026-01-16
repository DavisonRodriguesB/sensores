const userFile = require('../utils/userFile');

class UserService {

  getAllUsers() {
    return userFile.read();
  }

  createUser(data) {
    const usuarios = userFile.read();

    const emailExiste = usuarios.some(
      user => user.email === data.email
    );

    if (emailExiste) {
      throw new Error('E-mail já cadastrado');
    }

    if (!data.senha || data.senha.length < 6) {
      throw new Error('Senha deve ter no mínimo 6 caracteres');
    }

    const novoUsuario = {
      id: Date.now(),
      ...data
    };

    usuarios.push(novoUsuario);
    userFile.write(usuarios);

    return novoUsuario;
  }
}

module.exports = new UserService();