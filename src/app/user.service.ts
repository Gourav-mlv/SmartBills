
import { User } from './user';

export class UserService {
    users: User[] = [{
        name: 'Sunil Sahu',
        empId: 1,
        date: '01/06/2020',
        amount: 12354,
        status: -1
    },
    {
        name: 'Sunil Sahu',
        empId: 1,
        date: '04/11/2020',
        amount: 2134,
        status: -0
    },

    {
        name: 'Sunil Sahu',
        empId: 1,
        date: '19/06/2020',
        amount: 1124,
        status: 1
    },

    {
        name: 'Nitish songara',
        empId: 2,
        date: '5/2/2020',
        amount: 9845498,
        status: 0
    },

    {
        name: 'Nitish songara',
        empId: 2,
        date: '01/06/2020',
        amount: 45455,
        status: 1
    },

    {
        name: 'Nitish songara',
        empId: 2,
        date: '01/06/2020',
        amount: 54561,
        status: 0
    },
    {
        name: 'Gourav Malviya',
        empId: 3,
        date: '01/06/2020',
        amount: 11124,
        status: -1
    },
    {
        name: 'Gourav Malviya',
        empId: 3,
        date: '01/06/2020',
        amount: 14514,
        status: 0
    },
    {
        name: 'Gourav Malviya',
        empId: 3,
        date: '01/06/2020',
        amount: 155554,
        status: 1
    },
    {
        name: 'Anaya Joshi',
        empId: 4,
        date: '01/06/2020',
        amount: 45154,
        status: 0
    },
    {
        name: 'Anaya Joshi',
        empId: 4,
        date: '01/06/2020',
        amount: 4555,
        status: 1
    },
    {
        name: 'Anaya Joshi',
        empId: 4,
        date: '01/06/2020',
        amount: 4454,
        status: -1
    }
    ]

    getUserData(id: number) {
        const result = this.users.filter(res => res.empId == id).map(ele => ele);
        console.log(result);
        return result;
    }
}