import React from 'react';
import { connect } from 'react-redux';
import { Actions } from '../../model';

const mapStateToProps = (entireState: any) => entireState.subState;

const mapDispatchToProps = {
  doSomething: Actions.subState.doSomething,
};

const Profile = (props: any) => {
  return (
    <>
      <h2>Profile Page</h2>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
