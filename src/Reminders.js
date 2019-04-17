import React from "react"
import moment from "moment";

const Reminders = (props) => {
    const {reminders} = props;

    return (
        <div className={"col-sm-4"}>
            <ul className={"list-group"}>
                {
                    reminders.map(remind => {
                        return <li key={remind.id} className={"list-group-item"}>
                            <div className={"list-item"}>
                                <div>{remind.text}</div>
                                <div><em>{new moment(new Date(remind.dueDate)).fromNow()}</em></div>
                            </div>
                            <div
                                onClick={() => props.clicked(remind.id)}
                                className={"list-item delete-button"}>
                                &#x2715;
                            </div>
                        </li>
                    })
                }
            </ul>
            {
                reminders.length === 0 ? null :
                    <button onClick={() => props.clearClicked()} type={"button"} className={"clearAll btn btn-danger"}>
                        Clear All
                    </button>
            }
        </div>
    )
};

export default Reminders;