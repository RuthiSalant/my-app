const user = 'USER';

export default function userInAction(response) {
    var user = {
        name: response.name,
        password: response.password,
        email: response.email,
        id: response.id,
        phone: response.phone,
        _id: response._id
    }
    return {
        type: 'USER',
        user
    }
}
