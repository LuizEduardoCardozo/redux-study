import React, { Component } from 'react';

import { connect } from 'react-redux';

function toggleLession(module, lesson) {
    return {
        type: 'TOGGLE_LESSION',
        module, lesson,
    }
}

const Sidebar = ({ modules, dispatch }) => (
    
    <aside>
        <h1> Módulos </h1> 
        <div>
            {modules.map(modulo => (
            <div key={modulo.id}> 
                <strong>{modulo.title}</strong>
                    <ul>
                    {modulo.lessons.map(lesson => (
                        <li key={lesson.id} >
                            {lesson.title}<br />
                            <button onClick={() => dispatch( toggleLession( modulo, lesson ) )}>Selecionar Aula!</button>
                        </li>
                    ))}
                    </ul>
            </div>
            ))}

        </div>

    </aside>

);

export default connect(state => ({ modules: state.module }))(Sidebar);
