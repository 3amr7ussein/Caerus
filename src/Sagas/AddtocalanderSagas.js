// import * as AddCalendarEvent from "react-native-add-calendar-event"
// import moment from "moment"
// import { call, put } from "redux-saga/effects"
// import AddtocalanderActions from "../Redux/AddtocalanderRedux"

// export function* getAddtocalander(action) {
//   const { data } = action

// const eventConfig = {
//   title: `My ${data.title} class at ${data.owner.name}`,
//   startDate: new Date(moment(data.starAt)).toISOString(),
//   endDate: new Date(
//     moment(data.startAt).add(data.duration, "hours")
//   ).toISOString(),
// }

// AddCalendarEvent.presentEventCreatingDialog(eventConfig)
//   .then(eventInfo => {
//     // // handle success - receives an object with `calendarItemIdentifier` and `eventIdentifier` keys, both of type string.
//     // // These are two different identifiers on iOS.
//     // // On Android, where they are both equal and represent the event id, also strings.
//     // // when { action: 'CANCELED' } is returned, the dialog was dismissed
//     // console.warn(JSON.stringify(eventInfo));
//   })
//   .catch(error => {
//     // // handle error such as when user rejected permissions
//     // console.warn(error);
//   })
// }
