export default class UserDTO {
    constructor(user) {
        this.first_name = user.nombre
        this.last_name = user.apellido
        this.email = user.email
        this.age= user.age
        this.rol= user.rol
    }
}