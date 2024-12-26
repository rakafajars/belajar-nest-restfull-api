export class RegisterUserRequest {
  username: string;
  password: string;
  name: string;
}

export class UserResponse {
  username: string;
  name: string;
  // tokennya menjadi tidak wajib, karna ada sebagian response tidak
  // menampilkan token
  token?: string;
}

export class LoginUserRequest {
  username: string;
  password: string;
}

export class UpdateUserRequest {
  name?: string;
  password?: string;
}
