import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Actions } from '../../model';

const mapStateToProps = (entireState: any) => entireState;

const mapDispatchToProps = {
  doSomethingAsync: Actions.subState.doSomethingAsync,
  gotSomething: Actions.subState.gotSomething,
  login: Actions.auth.login,
};

const Profile = (props: any) => {
  const { t } = useTranslation('header');

  (window as any).props = props;
  return (
    <>
      {props.subState.counter}
      <h1>{t('title')}</h1>
      <h2>Profile Page</h2>
      <hr />
      {JSON.stringify(props.auth)}
      <hr />
      <button onClick={() => props.login()}>Login</button>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
