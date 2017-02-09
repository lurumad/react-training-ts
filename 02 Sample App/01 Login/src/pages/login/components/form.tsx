import * as React from 'react';
import {LoginCredential} from '../../../models/loginCredential';
import {InputComponent} from '../../../common/components/input';

interface Props {
  loginCredential: LoginCredential;
  updateLoginInfo: (fieldName: string, value: string) => void;
}

export const FormComponent = (props: Props) => {
  const updateLoginInfo = (event) => {
    const fieldName = event.target.name;
    const value = event.target.value;
    props.updateLoginInfo(fieldName, value);
  };

  return (
    <div className="panel-body">
      <form role="form">
        <InputComponent
          label="Login"
          type="text"
          name="login"
          placeholder="Login"
          value={props.loginCredential.login}
          onChange={updateLoginInfo.bind(this)}
        />
        <InputComponent
          label="Password"
          type="password"
          name="password"
          placeholder="Password"
          value={props.loginCredential.password}
          onChange={updateLoginInfo.bind(this)}
        />
        <button
          type="submit"
          className="btn btn-lg btn-success btn-block"
        >
          Login
        </button>
      </form>
    </div>
  );
};
