import { Component, OnInit, ViewChild } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { FullCalendarComponent } from '@fullcalendar/angular';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { EventInput, Calendar } from '@fullcalendar/core';


// import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  // @ViewChild('calendar') calendarComponent: FullCalendarComponent; // the #calendar in the template

  // calendarVisible = true;
  // calendarWeekends = true;
  calendarPlugins = [dayGridPlugin,timeGrigPlugin,interactionPlugin]; // important!

  calendarEvents: EventInput = [
    { title: 'event asd',
      backgroundColor: 'red',
      start: new Date(),
      end: new Date('2020-03-26'),
      allDay: true
  },
    { title: 'event asd',
      backgroundColor: 'blue',
      start: new Date('2020-03-17'),
      end: new Date('2020-03-20'),
      allDay: true
  },

  ];

  constructor() { }

  ngOnInit() {

  }

  handleDateClick(arg) {
    alert("clicked");
    // console.log(arg.date);
    // this.calendarEvents = this.calendarEvents.concat({
    //   title: 'event',
    //   start: arg.date,
    //   allDay: arg.allDay
    // });

  //   this.calendarEvents = this.calendarEvents.push({
  //      title: 'Test event ',
  //     backgroundColor: 'yellow',
  //     start: new Date('2020-03-17'),
  //     end: new Date('2020-03-20'),
  //     allDay: true
  // }
  //   );
  }



  // CalendarEvents = [
  //   {title: 'car wash', visibleRange: {
  //     start: '2020-03-04',
  //     end: '2020-03-05' }
  //   } ];

}
