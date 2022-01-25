import React from 'react';
// import Tilt from "react-tilt";
import projects from '../src/projectsUX';
import CodeWindow from './CodeWindow.js/CodeWindow';
// import './Cards.css';
// import '../../src/css/entry.css';
const uuidv1 = require('uuid/v1');

const CardsUX = () => {
    return (
        <div className="card-container justify-center">
            {projects.map(project => {
                return (
                    <div className="card br2" key={uuidv1()}>
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={project.link}
                        >
                            {project.image ? (
                                <img
                                    style={{
                                        filter: project.dim
                                            ? 'brightness(.97)'
                                            : 'brightness(1.025)',
                                        // filter: project.dim ? 'filter: hue-rotate(45deg)' : 'filter: hue-rotate(0deg)',
                                        // filter: project.dim ? '-webkit-filter: hue-rotate(45deg)' : '-webkit-filter: hue-rotate(0deg)',

                                        display: 'block',
                                    }}
                                    src={project.image}
                                    alt="alt"
                                    className={
                                        project.gif ? 'gifStyle' : 'image'
                                    }
                                />
                            ) : (
                                <CodeWindow />
                            )}

                            <div className="textContainer pa4b lh-copy3">
                                <p
                                    id="title"
                                    className="f3c mt1 mb0 fw6 lh-title"
                                >
                                    {project.title}
                                </p>
                                <p id="desc" className="f6b  mt3 mb4 space">
                                    {project.desc}
                                </p>

                                {/*<p id="" className="projectRole f6 mt1 mb2 fw6">*/}
                                {/*  My project role :*/}
                                {/*</p>*/}

                                {/*<ul style={{ listStyleType: 'circle' }} className="f6b">*/}
                                {/*  <li className="mt3">*/}
                                {/*    {project.role1 ? project.role1 : project.role}*/}
                                {/*  </li>*/}
                                {/*  {project.role2 ? (*/}
                                {/*    <li className="mt3">{project.role2}</li>*/}
                                {/*  ) : null}*/}
                                {/*  {project.role3 ? (*/}
                                {/*    <li className="mt3">{project.role3}</li>*/}
                                {/*  ) : null}*/}
                                {/*  {project.role4 ? (*/}
                                {/*    <li className="mt3">{project.role4}</li>*/}
                                {/*  ) : null}*/}
                                {/*  {project.role5 ? (*/}
                                {/*    <li className="mt3">{project.role5}</li>*/}
                                {/*  ) : null}*/}

                                {/*  {project.role6 ? (*/}
                                {/*    <li className="mt3">{project.role6}</li>*/}
                                {/*  ) : null}*/}
                                {/*</ul>*/}

                                <p id="" className="f6 mt4 mb0 fw6">
                                    Project stack:
                                </p>

                                <p first="" className="mt0 tag ">
                                    {project.tag1}
                                </p>

                                {project.tag2 ? (
                                    <p className="mt0 tag ">{project.tag2}</p>
                                ) : null}

                                {project.tag3 ? (
                                    <p className="mt0 tag ">{project.tag3}</p>
                                ) : null}

                                {project.tag4 ? (
                                    <p className="mt0 tag ">{project.tag4}</p>
                                ) : null}

                                {project.tag5 ? (
                                    <p className="mt0 tag ">{project.tag5}</p>
                                ) : null}

                                <p id="" className="completed dib f7 ph3 pv2">
                                    Completed: &nbsp;
                                    <span className="fw7">{project.year}</span>
                                </p>
                            </div>
                        </a>
                    </div>
                );
            })}

            <style jsx>{`
                .card-container {
                    display: flex;
                    flex-wrap: wrap;
                }
                .card {
                    width: 430px;
                    transition: all 0.3s ease;
                    margin: 0.5rem;
                    box-shadow: 0px 0px 24px 0px rgba(0,23,41,0.15);

                    background-color: white;
                }
                .card:hover {
                        transform: translateY(-10px);
                    }

                .completed {
                    border: 1px solid;
                    margin-top: 1.8rem;
                    margin-bottom: 0;
                }

                .image {
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .gifStyle {
                    width: 100%;
                    border-top-right-radius: 4px;
                    border-top-left-radius: 4px;
                }
                .tag {
                    // background: blue;
                    // color: white;
                    display: inline-block;
                    padding: 4px 12px;
                    border-radius: 6px;
                    font-size: 10px;
                    margin-top: 10px;
                }

                p.tag:not([first]) {
                    margin-left: 6px;
                }

                p.projectRole {
                    /* line-height: 1.3; */
                }
            `}</style>
        </div>
    );
};

export default CardsUX;
