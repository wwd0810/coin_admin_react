import { observable, flow, computed, action } from "mobx";

import BaseStore from "stores/BaseStore";
import RootStore from "stores";
import client from "lib/client";

import { User, Account } from "./types";
import UserService from "services/users/UserService";

class UserStore extends BaseStore {
  root: RootStore;

  constructor(root: RootStore) {
    super();
    this.root = root;
  }

  @observable
  private _isLoggedIn = false;

  @observable
  private _userToken?: string;

  @observable
  private _refreshToken?: string;

  @observable
  private _user?: { user: User; account: Account[] };

  @observable
  private _userList: User[] = [];

  @observable
  private _page?: Paging;

  @computed
  get IsLoggedIn() {
    return this._isLoggedIn;
  }

  @computed
  get UserToken() {
    return this._userToken;
  }

  @computed
  get RefreshToken() {
    return this._refreshToken;
  }

  @computed
  get User() {
    return this._user;
  }

  @computed
  get UserList() {
    return this._userList;
  }

  @computed
  get Page() {
    return this._page;
  }

  @action
  public logout() {
    this._isLoggedIn = false;
    this._user = undefined;
    this._userToken = undefined;

    delete client.defaults.headers.common["Authorization"];
  }

  GetUserToken = flow(function* (this: UserStore, code: string | string[]) {
    this._init("GET_USER_TOKEN");
    try {
      const {
        data: res,
      }: {
        data: {
          access_token: string;
          token_type: string;
          refresh_token: string;
          expires_in: number;
          scope: string;
          jti: string;
        };
      } = yield UserService.AccessTokenAPI(code);

      const { access_token, refresh_token } = res;

      client.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

      this._userToken = access_token;
      this._isLoggedIn = true;
      this._refreshToken = refresh_token;

      this._success["GET_USER_TOKEN"] = true;
    } catch (e) {
      this._failure["GET_USER_TOKEN"] = [true, e];
    } finally {
      this._pending["GET_USER_TOKEN"] = false;
    }
  });

  GetUserRefreshToken = flow(function* (this: UserStore, code: string | string[]) {
    this._init("GET_USER_REFRESH_TOKEN");
    try {
      const {
        data: res,
      }: {
        data: {
          access_token: string;
          token_type: string;
          refresh_token: string;
          expires_in: number;
          scope: string;
          jti: string;
        };
      } = yield UserService.RefreshTokenAPI(code);

      const { access_token, refresh_token } = res;

      client.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;

      this._userToken = access_token;
      this._isLoggedIn = true;
      this._refreshToken = refresh_token;

      this._success["GET_USER_REFRESH_TOKEN"] = true;
    } catch (e) {
      this._failure["GET_USER_REFRESH_TOKEN"] = [true, e];
    } finally {
      this._pending["GET_USER_REFRESH_TOKEN"] = false;
    }
  });

  GetUser = flow(function* (this: UserStore) {
    this._init("GET_USER");
    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ user: User; account: Account[] }>;
      } = yield UserService.GetUserAPI();

      const { user, account } = res.data;

      this._user = { user, account };
      this._isLoggedIn = true;
      this._success["GET_USER"] = true;
    } catch (e) {
      this._failure["GET_USER"] = [true, e];
    } finally {
      this._pending["GET_USER"] = false;
    }
  });

  GetUserList = flow(function* (this: UserStore, page?: number, query?: string, duration?: string) {
    this._init("GET_USER_LIST");

    try {
      const {
        data: res,
      }: {
        data: ApiResult<{ content: User[]; paging: Paging }>;
      } = yield UserService.GetUserListAPI(page, query, duration);

      const { content, paging } = res.data;

      this._userList = content;
      this._page = paging;

      this._success["GET_USER_LIST"] = true;
    } catch (e) {
      this._failure["GET_USER_LIST"] = [true, e];
    } finally {
      this._pending["GET_USER_LIST"] = false;
    }
  });
}

export default UserStore;
