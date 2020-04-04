import React from 'react';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Actions } from '../../model';

const mapStateToProps = (entireState: any) => entireState.subState;

const mapDispatchToProps = {
  doSomethingAsync: Actions.subState.doSomethingAsync,
  gotSomething: Actions.subState.gotSomething,
};

const Profile = (props: any) => {
  const { t } = useTranslation('header');

  (window as any).props = props;
  return (
    <>
      {props.counter}
      <h1>{t('title')}</h1>
      <h2>Profile Page</h2>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
