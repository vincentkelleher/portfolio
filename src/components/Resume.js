import React from 'react';
import anime from 'animejs';
import './Resume.scss';
import Experience from './Experience';
import Onepoint from '../images/onepoint.png';

export default class Resume extends React.Component {
    
    startDateMonthRef = React.createRef();
    startDateYearRef = React.createRef();
    endDateMonthRef = React.createRef();
    endDateYearRef = React.createRef();

    constructor(props) {
        super(props);

        this.state = {
            displayedDates: {
                start: {
                    month: 3,
                    year: 2015
                },
                end: {
                    month: 5,
                    year: 2016
                }
            },
            dates: {
                start: {
                    month: 3,
                    year: 2015
                },
                end: {
                    month: 5,
                    year: 2016
                }
            }
        };
    }

    componentDidUpdate() {
        let startDate = this.state.displayedDates.start;
        let endDate = this.state.displayedDates.end;

        anime.timeline({
            easing: 'easeInOutCirc',
            delay: (el, i) => 300 * i
        }).add({
            targets: startDate,
            month: this.state.dates.start.month,
            year: this.state.dates.start.year,
            round: 1,
            update: () => {
                this.startDateMonthRef.current.innerHTML = (startDate.month < 10 ? "0" : "") + startDate.month;
                this.startDateYearRef.current.innerHTML = startDate.year;
            }
        }).add({
            targets: endDate,
            month: this.state.dates.end.month,
            year: this.state.dates.end.year,
            round: 1,
            update: () => {
                this.endDateMonthRef.current.innerHTML = (endDate.month < 10 ? "0" : "") + endDate.month;
                this.endDateYearRef.current.innerHTML = endDate.year;
            }
        }, 0);
    }

    animate = () => {
        this.setState({
            displayedDates: {
                start: {
                    month: 3,
                    year: 2015
                },
                end: {
                    month: 5,
                    year: 2016
                }
            },
            dates: {
                start: {
                    month: 12,
                    year: 2019
                },
                end: {
                    month: 1,
                    year: 2010
                }
            }
        });
    }

    render() {
        return (
            <div id="resume" className="snap-scroll-section">
                <div id="left-container">
                    <h1 onClick={this.animate} id="start-date">
                        <span ref={this.startDateMonthRef} className="month">{this.state.displayedDates.start.month}</span>
                        <span>/</span>
                        <span ref={this.startDateYearRef} className="year">{this.state.displayedDates.start.year}</span>
                    </h1>
                    <h1 id="end-date">
                        <span ref={this.endDateMonthRef} className="month">{this.state.displayedDates.end.month}</span>
                        <span>/</span>
                        <span ref={this.endDateYearRef} className="year">{this.state.displayedDates.end.year}</span>
                    </h1>
                </div>
                <div id="experience-container" className="snap-y-scroll-container">
                    <Experience>
                        {/* <Experience.Timeline>
                            <Experience.Timeline.Date>05/2019<br/>03/2020</Experience.Timeline.Date>
                        </Experience.Timeline> */}
                        <Experience.Company>
                            <a href="http://groupeonepoint.com/"><img alt="Logo de onepoint" src={Onepoint} /></a>
                        </Experience.Company>
                        <Experience.Project>EneCAD</Experience.Project>
                        <Experience.Position>Référent Technique</Experience.Position>
                        <Experience.Description>
                            Application de gestion des dossiers d'appel de dépannage des clients d'<strong>Enedis</strong>.<br/>
                            Disponibilité 24/7 (astreintes régulières) avec de nombreuse intéractions avec des partenaires.<br/>
                            Accompagnement d'une équipe de 5 développeurs dans un contexte Scrum.<br/>
                            Assainissement technique de l'application puis gestion d'une crise majeure de production.
                        </Experience.Description>
                        <Experience.Stack>
                            <Experience.Technology>Java 8</Experience.Technology>
                            <Experience.Technology>Spring Boot</Experience.Technology>
                            <Experience.Technology>Tomcat 9</Experience.Technology>
                            <Experience.Technology>Angular 5</Experience.Technology>
                            <Experience.Technology>Bootstrap 4</Experience.Technology>
                            <Experience.Technology>Cassandra</Experience.Technology>
                            <Experience.Technology>Jenkins</Experience.Technology>
                            <Experience.Technology>Ansible</Experience.Technology>
                        </Experience.Stack>
                    </Experience>
                    <Experience>
                        {/* <Experience.Timeline>
                            <Experience.Timeline.Date>04/2018 - 05/2019</Experience.Timeline.Date>
                        </Experience.Timeline> */}
                        <Experience.Company>
                            <a href="http://groupeonepoint.com/"><img alt="Logo de onepoint" src={Onepoint} /></a>
                        </Experience.Company>
                        <Experience.Project>Référentiel Client</Experience.Project>
                        <Experience.Position>Leader Technique</Experience.Position>
                        <Experience.Description>
                            Microservice de gestion des clients d'<strong>Enedis</strong>.<br/>
                            Moteur de recherche dont dépendent nombreux partenaires.<br/>
                            Deux équipes projet à Paris et Bordeaux dans un contexte Scrum et Nexus.<br/>
                            Réalisation de la migration vers RedHat OpenShift.
                        </Experience.Description>
                        <Experience.Stack>
                            <Experience.Technology>Java 8</Experience.Technology>
                            <Experience.Technology>Spring Boot</Experience.Technology>
                            <Experience.Technology>Tomcat 8</Experience.Technology>
                            <Experience.Technology>Angular 5</Experience.Technology>
                            <Experience.Technology>Oracle DB</Experience.Technology>
                            <Experience.Technology>OpenShift</Experience.Technology>
                            <Experience.Technology>Jenkins</Experience.Technology>
                            <Experience.Technology>Ansible</Experience.Technology>
                        </Experience.Stack>
                    </Experience>
                </div>
            </div>
        );
    }
}
