import React from 'react';

export default class Projects extends React.Component {
    constructor(props) {
        super(props);
    }
    proj = this.props.projects;
    render() {
        return (
            {proj.map((item, index) => {
                return(
                    <div class="card project-tile"><a href={item.src}>
                    <img src={item.img} alt={item.title} class="tiles-images" />
                <div class="container">
                    <h4><b>{item.title}</b></h4>
                    <p>{item.description}</p>
                </div>
                </a>
                </div>
                )

            })}
            
        )
    }
}