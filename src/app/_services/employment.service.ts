import { Injectable } from '@angular/core';
import {Employment} from '../_models/employment';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploymentService {

  constructor() { }
  getEmploymentDetail() : Employment[]{
    return [
      {
        company: 'Asigra Ltd.',
        imgUrl: environment.helpUrl+'/images/asigra.PNG',
        period: 'Web Developer, September 2017 – November 2019',
        location: 'Toronto / Ontario',
        detail: {
          title: 'Data backup web development for desktop and mobile',
          responsibilitie: [
            'Up-to-date with professional knowledge on Angular, Angular Material, Typescript, JavaScript, HTML, CSS. Lodash, RXjs, Java',
            'GET, PUT, POST and DELETE data through communication with Restful API',
            'Working in a agile environment and worked with direct manager on planning & programming issues',
            'Debugged and troubleshoot issues from development',
            'Modified screen layout based on design and create required function/verification',
            'Create E2E testing for project and task'
          ],
          additional: {
            title: '',
            Responsibilitie: []
          },
          others: {
            title: '',
            otherInformation: []
          }
        }
      },
      {
        company: 'Formative Innovations Inc.',
        imgUrl: environment.helpUrl+'/images/formative.PNG',
        period: 'Web Developer, July 2017 – August 2017',
        location: 'Toronto / Ontario',
        detail: {
          title: 'Web development for desktop and mobile',
          responsibilitie: [
            'Used professional knowledge on JavaScript, jQuery, HTML, CSS',
            'Creative , Debugged and troubleshoot issues from internal development',
            'Worked with direct manager on planning & programming issues',
            'screen layout and create required function/verification'
          ],
          additional: {
            title: '',
            Responsibilitie: []
          },
          others: {
            title: 'Nearly 100% self work projects and works/support on all modern device',
            otherInformation: [
              'https://fansunited.org/ - HTML CSS, SASS, JavaScript, jQuery (build on ASP.NET environment)',
              'http://ernie.com/ - HTML CSS, SASS, JavaScript, jQuery.'
            ]
          }
        }
      },
      {
        company: 'Postmedia Network Inc.',
        imgUrl: environment.helpUrl+'/images/postmedia.PNG',
        period: 'Web Developer, December 2012 – July 2017',
        location: 'Toronto / Ontario',
        detail: {
          title: 'Web development for desktop and mobile',
          responsibilitie: [
            'Working with JavaScript, jQuery, HTML, CSS, SASS , WordPress',
            'Creative and technically savvy with strong analytical and problem solving skills',
            'Debugged and troubleshoot issues from internal development team and clients',
            'Worked with teammates and team lead on planning & programming issues',
            'Maintain excellent working relationships with team members and cross functional teams',
            'Demonstrated ability to write clean, organized, well-documented code and attention to detail',
            'Experienced with best practices in usability and Information Architecture',
            'Modified screen layout and create required function/verification'
          ],
          additional: {
            title: 'Additional Responsibilities',
            Responsibilitie: [
              'Developed database system based on clients requirements and specifications',
              'Maintained and improved existing system by fine tuning, optimization and rewriting the application modules'
            ]
          },
          others: {
            title: 'Sample of Projects',
            otherInformation: [
              'http://driving.ca (Responsive website support desktop and mobile device - Wordpress,Javascript, JQuery, JSON, PHP, HTML, CSS)',
              'http://www.windsorstar.com/index.html (Responsive website support desktop and mobile device - Javascript, JQuery, HTML, CSS,XML,XSLT, JSON)',
              'http://www.edmontonjournal.com/index.html (Javascript, JQuery, HTML, CSS,XML,XSLT)',
              'http://www.calgaryherald.com/index.html (Javascript, JQuery, HTML, CSS,XML,XSLT, JSON)',
              'http://o.canada.com/ (Javascript, JQuery, HTML, CSS,XML,XSLT, JSON)'
            ]
          }
        }
      },
      {
        company: 'Mundomedia Ltd.',
        imgUrl: environment.helpUrl+'/images/mundomedia.png',
        period: 'Web Developer, February 2011 - December 2012',
        location: 'Markham / Ontario',
        detail: {
          title: 'Web Site and Web based applications (UI) development',
          responsibilitie: [
            'Front and back end development with JavaScript, jQuery, PHP, HTML, CSS',
            'Planned, created, launched, and managed high-profile client’s web sites with strong emphasis on user-centered design, usability standards, and performed all levels of testing, which includes unit, integration, system and user acceptance testing',
            'Debugged and troubleshoot issues from internal development team and clients',
            'Worked with teammates and team lead on planning & programming issues',
            'Worked and assisted testing team to create test-planning and system level verification',
            'Created/Modified table, fields and index base on requirement',
            'Modified screen layout and create required function/verification',
            'Converted special character for special website'
          ],
          additional: {
            title: 'Implementation of new website to link with database',
            Responsibilitie: []
          },
          others: {
            title: 'Sample of Projects',
            otherInformation: [
              'http://www.mundomedia.com (Javascript, JQuery, PHP, CodeIgniter, HTML, CSS, GIT, SVN. Involved in both front end and back end)',
              'http://www.livingdeal.com (Javascript, JQuery, PHP, Symfony, HTML, CSS, GIT, XML, XHTML, SVN. Involved in front end)'
            ]
          }
        }
      },
      {
        company: 'Quasimodo Ltd.',
        imgUrl: environment.helpUrl+'/images/quasimodo.png',
        period: 'System Developer/Programmer, February 1999 - June 2010',
        location: 'Markham / Ontario',
        detail: {
          title: 'Character base interface and GUI base development for an ERP Software',
          responsibilitie: [
            'Technologies: Javascript, JQuery, PHP, HTML, CSS, ColdFusion, Progress (OpenEdge), SQL',
            'Expanded the current ERP Software by adding GUI  interface to key modules such as account payable, inventory, order entries, etc. ',
            'Designed and Developed menu system which allows easy access and input from users',
            'Interfaced to obtain and update user information through database system',
            'Incorporated client feedback to customize the final product',
            'Worked and assisted testing team to create test-planning and system level verification',
            'Debugged and troubleshoot issues from internal development team and clients',
            'Performed all levels of testing, which includes unit, integration, system and user acceptance testing Implementation of new programs into the existing ERP software',
            'Worked with teammates and manager on planning & programming issues',
            'Created new table, fields and index',
            'Designed screen layout and required function/verification',
            'Created new programs from scratch',
            'Debugged and troubleshoot with internal development team and clients',
            'Worked with teammates and manager on planning & programming issues',
            'Designed screen layout and required function/verification',
            'Created new programs from scratch ',
            'Debugged and troubleshoot with internal development team and clients'
          ],
          additional: {
            title: 'Additional Responsibilities',
            Responsibilitie: [
              'Developed database system based on clients requirements and specifications',
              'Assisted clients for Software integration (Add/remove tables, fields, create index, compile system)',
              'Maintained and improved existing system  by fine tuning, optimizing and rewriting application modules',
              'Supported end-users for their day-to-day usage of the application'
            ]
          },
          others: {
            title: '',
            otherInformation: []
          }
        }
      },
      {
        company: 'Costi Immigrant Services',
        imgUrl: environment.helpUrl+'/images/costi.jpg',
        period: 'Computer Technician/Programmer, January 1998 - February 1999',
        location: 'Toronto / Ontario',
        detail: {
          title: '',
          responsibilitie: [
            'Developed and maintained the corporate website with up-to-date information using HTML/JavaScript',
            'Provided network support for the central system',
          ],
          additional: {
            title: '',
            Responsibilitie: []
          },
          others: {
            title: '',
            otherInformation: []
          }
        }
      }      
    ];
  }
  getDemoJson() {

  }
}
