const astrologicalSigns = {
    Aries: {
        startDate: {
            month: `March`,
            day: 21
        },
        endDate: {
            month: `April`,
            day: 20
        }
    },
    Taurus: {
        startDate: {
            month: `April`,
            day: 21
        },
        endDate: {
            month: `May`,
            day: 21
        }
    },
    Gemini: {
        startDate: {
            month: `May`,
            day: 22
        },
        endDate: {
            month: `June`,
            day: 21
        }
    },
    Cancer: {
        startDate: {
            month: `June`,
            day: 22
        },
        endDate: {
            month: `July`,
            day: 22
        }
    },
    Leo: {
        startDate: {
            month: `July`,
            day: 23
        },
        endDate: {
            month: `August`,
            day: 21
        }
    },
    Virgo: {
        startDate: {
            month: `August`,
            day: 22
        },
        endDate: {
            month: `September`,
            day: 23
        }
    },
    Libra: {
        startDate: {
            month: `September`,
            day: 24
        },
        endDate: {
            month: `October`,
            day: 23
        }
    },
    Scorpio: {
        startDate: {
            month: `October`,
            day: 24
        },
        endDate: {
            month: `November`,
            day: 22
        }
    },
    Sagittarius: {
        startDate: {
            month: `November`,
            day: 23
        },
        endDate: {
            month: `December`,
            day: 22
        }
    },
    Capricorn: {
        startDate: {
            month: `December`,
            day: 23
        },
        endDate: {
            month: `January`,
            day: 20
        }
    },
    Aquarius: {
        startDate: {
            month: `January`,
            day: 21
        },
        endDate: {
            month: `February`,
            day: 19
        }
    },
    Pisces: {
        startDate: {
            month: `February`,
            day: 20
        },
        endDate: {
            month: `March`,
            day: 20
        }
    }
}

const users = [
    {
        name: 'Larry Page',
        dayOfBirth: 26,
        monthOfBirth: 3
    },
    {
        name: 'Bill Gates',
        dayOfBirth: 28,
        monthOfBirth: 10
    },
    {
        name: 'Mark Zuckerberg',
        dayOfBirth: 14,
        monthOfBirth: 5
    }
]

class Time {

    static get Date() {
        return new Date();
    }

    static get Day() {
        return Time.Date.getDate();
    }

    static get Month() {
        return Time.Date.getMonth();
    }

    static get monthNames() {
        return [`January`, `February`, `March`, `April`, `May`, `June`, `July`, `August`, `September`, `October`, `November`, `December`];
    }

    static monthName(manth = Time.Month) {
        return Time.monthNames[manth]
    }
}

class Astrological extends Time {
    static astrologicalSign(day = Astrological.Day, month = Astrological.Month) {
        if (typeof (month) === 'number')
            month = Astrological.monthOfDay(month - 1);
        for (let key in astrologicalSigns) {

            let startMonth = astrologicalSigns[key].startDate.month;
            let endMonth = astrologicalSigns[key].endDate.month;
            let startDay = astrologicalSigns[key].startDate.day
            let endDay = astrologicalSigns[key].endDate.day

            if ((startMonth == month && (day <= 31 && day >= startDay)) || (endMonth == month && (endDay >= day && day >= 1))) {
                return key;
            }
        }

    }

    static monthOfDay(month) {
        let numberOfmonth = Astrological.monthNames[month];
        return numberOfmonth;
    }
}
class Human extends Astrological {
    constructor(user) {
        super()
        for (let key in user) {
            this[key] = user[key];
        }
    }

    astrologicalSign() {
        return `${this.name} is ${Human.astrologicalSign(this.dayOfBirth, this.monthOfBirth)}`
    }
}

let newArr = users
    .map(obj => {
        let newObj = new Human();
        for (let key in obj) {
            newObj[key] = obj[key];
        }
        return newObj;
    })
    .forEach(obj => {
        document.write(`<p>${obj.astrologicalSign()}</p>`);
    })
c
