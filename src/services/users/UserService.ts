import qs from "query-string";

import auth from "lib/auth";
import client from "lib/client";

class UserService {
  public AccessTokenAPI(code: string | string[]) {
    return auth.post(
      `/oauth/token`,
      qs.stringify({
        client_id: `${process.env.REACT_APP_CLIENT_ID}`,
        client_secret: `${process.env.REACT_APP_ENCRYPT_KEY}`,
        grant_type: `${process.env.REACT_APP_GRANT_TYPE}`,
        code: code,
        redirect_uri: `${process.env.REACT_APP_REDIRECT_URI}`,
      }),
    );
  }

  public RefreshTokenAPI(code: string | string[]) {
    return auth.post(
      `/oauth/token`,
      qs.stringify({
        client_id: `${process.env.REACT_APP_CLIENT_ID}`,
        client_secret: `${process.env.REACT_APP_ENCRYPT_KEY}`,
        grant_type: `${process.env.REACT_APP_REFRESH_GRANT_TYPE}`,
        refresh_token: code,
        scope: "read write",
        // redirect_uri: `${process.env.REACT_APP_REDIRECT_URI}`,
      }),
    );
  }

  public GetUserAPI() {
    return client.get(`/api/users/me`);
  }

  public GetUserListAPI(page?: number, query?: string, duration?: string) {
    return client.get(`/api/admin/users`, {
      params: {
        page,
        query,
        duration,
      },
    });
  }
}

export default new UserService();
