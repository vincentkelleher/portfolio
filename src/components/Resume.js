import React from 'react';
import anime from 'animejs';
import './Resume.scss';
import Experience from './Experience';
import Experiences from '../data/Experiences.data';

export default class Resume extends React.Component {
    
    startDateMonthRef = React.createRef();
    startDateYearRef = React.createRef();
    endDateMonthRef = React.createRef();
    endDateYearRef = React.createRef();

    experienceContainerRef = React.createRef();
    experienceIndex = 0;
    experienceRefs = [];

    constructor(props) {
        super(props);

        this.state = {
            displayedExperience: this.experienceRefs[0],
            displayedDates: Experiences[0].dates,
            dates: Experiences[0].dates
        };

        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        this.experienceContainerRef.current.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        this.experienceContainerRef.current.addEventListener("scroll", this.handleScroll);
    }

    handleScroll() {
        let displayedElement = Array.from(this.experienceContainerRef.current.children)
            .filter(c => c.getBoundingClientRect().top > 0)
            .sort((c1, c2) => c1.getBoundingClientRect().top - c2.getBoundingClientRect().top)[0];

        if (displayedElement) {
            let displayedExperience = this.experienceRefs[displayedElement.id];
            if (displayedExperience !== this.state.displayedExperience) {
                this.setState({
                    displayedExperience: displayedExperience,
                    displayedDates: Object.assign({}, this.state.dates),
                    dates: Object.assign({}, displayedExperience.props.dates)
                });
            }
        }
    }

    componentDidUpdate() {
        let startDate = Object.assign({}, this.state.displayedDates.start);
        let endDate = Object.assign({}, this.state.displayedDates.end);

        anime.timeline({
            easing: 'easeInOutCirc',
            duration: 1000
        }).add({
            targets: startDate,
            month: this.state.dates.start.month,
            year: this.state.dates.start.year,
            round: 1,
            update: () => {
                this.startDateMonthRef.current.innerHTML = this.addZero(startDate.month);
                this.startDateYearRef.current.innerHTML = startDate.year;
            }
        }).add({
            targets: endDate,
            month: this.state.dates.end.month,
            year: this.state.dates.end.year,
            round: 1,
            update: () => {
                this.endDateMonthRef.current.innerHTML = this.addZero(endDate.month);
                this.endDateYearRef.current.innerHTML = endDate.year;
            }
        }, 0);
    }

    addZero(value) {
        return (value < 10 ? "0" : "") + value;
    }

    render() {
        return (
            <div id="resume" className="snap-scroll-section">
                <div id="left-container">
                    <h1 id="start-date">
                        <span ref={this.startDateMonthRef} className="month">{this.addZero(this.state.displayedDates.start.month)}</span>
                        <span>/</span>
                        <span ref={this.startDateYearRef} className="year">{this.state.displayedDates.start.year}</span>
                    </h1>
                    <h1 id="end-date">
                        <span ref={this.endDateMonthRef} className="month">{this.addZero(this.state.displayedDates.end.month)}</span>
                        <span>/</span>
                        <span ref={this.endDateYearRef} className="year">{this.state.displayedDates.end.year}</span>
                    </h1>
                </div>
                <div ref={this.experienceContainerRef} id="experience-container" className="snap-y-scroll-container">
                    {
                        Experiences.map((experience, index) => {
                            return (
                                <Experience key={index} id={"experience-" + index} ref={r => this.experienceRefs["experience-" + index] = r} dates={experience.dates}>
                                    <Experience.Company>{experience.company}</Experience.Company>
                                    <Experience.Project>{experience.project}</Experience.Project>
                                    <Experience.Position>{experience.position}</Experience.Position>
                                    <Experience.Description>{experience.description}</Experience.Description>
                                    <Experience.Stack>
                                        { experience.stack.map((stack, stackIndex) => <Experience.Technology key={stackIndex}>{stack}</Experience.Technology>) }
                                    </Experience.Stack>
                                </Experience>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}
