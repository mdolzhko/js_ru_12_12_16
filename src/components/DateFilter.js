import React, { Component, PropTypes } from 'react'
import moment from 'moment';
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'

export default class DateFilter extends Component {

    state = {
        startDate: null,
        endDate:null
    }

    handleChangeStart = day => {
        this.setState({ startDate: day })
        this.props.startDateFilter(day)
    }
    handleChangeEnd = day => {
        this.setState({ endDate: day })
        this.props.endDateFilter(day)
    }
    handleResetClick = e => {
        e.preventDefault();
        this.setState({
            startDate: null,
            endDate:null
        });
        this.props.startDateFilter(null)
        this.props.endDateFilter(null)
    }
    render() {
        const { startDate, endDate } = this.state;

        return (

            <div>
                { !startDate && !endDate &&
                    <p>Please select the <strong>first day</strong>.</p>
                }
                { startDate && !endDate &&
                    <p>Please select the <strong>last day</strong>.</p>
                }
                { startDate && endDate &&
                <p>
                    You chose from { moment(startDate).format('L') } to { moment(endDate).format('L') }.
                    { ' ' }
                    <a href="." onClick={ this.handleResetClick }>Reset</a>
                </p>
                }

                <DatePicker
                    selected={this.state.startDate}
                    selectsStart  startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={ this.handleChangeStart } />
                <DatePicker
                    selected={this.state.endDate}
                    selectsEnd  startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    onChange={this.handleChangeEnd} />


            </div>
        )
    }
}

DateFilter.PropTypes = { }

DateFilter.defaultProps = { }
