import React, { Component } from 'react';

import { connect } from 'react-redux';

const Video = ({ activeModule, activeLesson }) => (
    <div>
        <strong>{activeModule.title}</strong><br/>
        <span>{activeLesson.title}</span>
    </div>

);


export default connect(state => ({ activeLesson: state.activeLesson, activeModule: state.activeModule }))(Video);
